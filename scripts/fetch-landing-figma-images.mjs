#!/usr/bin/env node
/**
 * Скачивает PNG из Figma (Images API) в public/images/landing/
 *
 *   # токен: переменная окружения или строка FIGMA_TOKEN= в landing/.env
 *   export FIGMA_TOKEN="figd_..."
 *   optional: export FIGMA_FILE_KEY="..."   # ключ из URL figma.com/design/KEY/...
 *   optional: export FIGMA_FILE_VERSION="..." # id версии из истории файла (ветки)
 *   npm run figma:images
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** Подхватываем landing/.env без зависимости dotenv (не перезаписываем уже заданные переменные). */
function loadLocalEnv() {
  const envPath = path.join(__dirname, "../.env");
  if (!fs.existsSync(envPath)) return;
  const text = fs.readFileSync(envPath, "utf8");
  for (const line of text.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq <= 0) continue;
    const key = trimmed.slice(0, eq).trim();
    let val = trimmed.slice(eq + 1).trim();
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1);
    }
    if (process.env[key] === undefined || process.env[key] === "") {
      process.env[key] = val;
    }
  }
}

loadLocalEnv();

const OUT = path.join(__dirname, "../public/images/landing");
const FILE_KEY = process.env.FIGMA_FILE_KEY || "iNRKfcXCDGBEolDEQNsLLP";
const TOKEN = process.env.FIGMA_TOKEN;
const SCALE = Number(process.env.FIGMA_EXPORT_SCALE || 2);
const FILE_VERSION = process.env.FIGMA_FILE_VERSION || "";

/** Figma node id → имя файла в public */
const EXPORTS = [
  { id: "220:3609", file: "hero-devices.png" },
  { id: "220:3692", file: "how-01.png" },
  { id: "220:3693", file: "how-02.png" },
  { id: "220:3694", file: "how-03.png" },
  { id: "220:3695", file: "how-04.png" },
  { id: "220:3696", file: "how-05.png" },
  { id: "220:3697", file: "how-06.png" },
  { id: "220:3789", file: "onboarding-phone.png" },
  { id: "220:3825", file: "cta-phone-left.png" },
  { id: "220:3826", file: "cta-phone-center.png" },
  { id: "220:3827", file: "cta-phone-right.png" },
];

function toApiId(nodeId) {
  return nodeId.replace(/:/g, "-");
}

function figmaHeaders() {
  return { "X-Figma-Token": TOKEN };
}

const IDS_BATCH = Math.max(1, Number(process.env.FIGMA_IDS_BATCH || 4));

function buildImagesUrlForIds(nodeIds) {
  const params = new URLSearchParams();
  params.set("ids", nodeIds.join(","));
  params.set("format", "png");
  params.set("scale", String(SCALE));
  if (FILE_VERSION) params.set("version", FILE_VERSION);
  return `https://api.figma.com/v1/images/${FILE_KEY}?${params.toString()}`;
}

async function fetchAllImageUrls() {
  const merged = {};
  for (let i = 0; i < EXPORTS.length; i += IDS_BATCH) {
    const slice = EXPORTS.slice(i, i + IDS_BATCH);
    const ids = slice.map((e) => e.id);
    const metaUrl = buildImagesUrlForIds(ids);
    const metaRes = await fetch(metaUrl, { headers: figmaHeaders() });
    const meta = await metaRes.json();
    if (!metaRes.ok) {
      throw new Error(`Images API HTTP ${metaRes.status}: ${JSON.stringify(meta).slice(0, 500)}`);
    }
    if (meta.err) {
      throw new Error(String(meta.err));
    }
    Object.assign(merged, meta.images || {});
  }
  return merged;
}

async function download(url, dest) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`GET ${url} → ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(dest, buf);
}

async function diagnoseFirstNode() {
  const probeId = EXPORTS[0].id;
  const params = new URLSearchParams({ ids: probeId });
  if (FILE_VERSION) params.set("version", FILE_VERSION);
  const url = `https://api.figma.com/v1/files/${FILE_KEY}/nodes?${params.toString()}`;
  const res = await fetch(url, { headers: figmaHeaders() });
  const data = await res.json();
  console.error("\n--- Диагностика (GET /v1/files/.../nodes) ---");
  console.error("HTTP", res.status);
  if (!res.ok) {
    console.error(JSON.stringify(data, null, 2).slice(0, 2500));
    return;
  }
  if (data.err) {
    console.error("err:", data.err);
    return;
  }
  const keys = Object.keys(data.nodes || {});
  if (keys.length === 0) {
    console.error(
      `Нода ${probeId} не найдена в файле ${FILE_KEY}. Частые причины:\n` +
        "  • FIGMA_FILE_KEY не тот файл (возьмите из URL: figma.com/design/ЭТОТ_КЛЮЧ/…).\n" +
        "  • Макет лендинга в другом файле, чем основной ILM Hub в репо.\n" +
        "  • Нужна конкретная версия: export FIGMA_FILE_VERSION=<id из истории версий>.\n" +
        "Обновите id узлов через TalkToFigma (get_document_info / scan) под ваш файл."
    );
  } else {
    console.error(`Нода ${keys[0]} в файле есть, но Images API не отдал URL — проверьте права токена и тип слоя (должен быть видимый контент).`);
  }
}

async function main() {
  if (!TOKEN) {
    console.error(
      "Нужен FIGMA_TOKEN: export FIGMA_TOKEN=… или добавьте FIGMA_TOKEN= в landing/.env"
    );
    process.exit(1);
  }
  fs.mkdirSync(OUT, { recursive: true });

  let images;
  try {
    images = await fetchAllImageUrls();
  } catch (e) {
    console.error("Ошибка Images API:", e.message || e);
    process.exit(1);
  }
  let okCount = 0;

  for (const { id, file } of EXPORTS) {
    const raw = Object.prototype.hasOwnProperty.call(images, id)
      ? images[id]
      : images[toApiId(id)];

    if (raw === undefined) {
      console.warn("Нет записи в images для", id, file);
      continue;
    }
    if (raw === null || raw === "") {
      console.warn("Figma вернула null/пустой URL для", id, file, "(нода не в файле или не рендерится)");
      continue;
    }

    const dest = path.join(OUT, file);
    await download(raw, dest);
    console.log("OK", file);
    okCount += 1;
  }

  if (process.env.FIGMA_DEBUG) {
    console.error("images map:", JSON.stringify(images, null, 2).slice(0, 3000));
  }

  if (okCount === 0) {
    await diagnoseFirstNode();
    process.exit(1);
  }

  console.log("Готово:", OUT);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
