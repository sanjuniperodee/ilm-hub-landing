# PNG лендинга (Figma)

Файлы подставляются из макета **ILM Hub – для клиента** (`FIGMA_FILE_KEY` по умолчанию `iNRKfcXCDGBEolDEQNsLLP`).

## Скачать одной командой

```bash
export FIGMA_TOKEN="figd_..."   # или положите FIGMA_TOKEN= в landing/.env (файл в .gitignore)
# при другом файле макета:
# export FIGMA_FILE_KEY="ключ_из_URL_figma.com/design/KEY/..."
npm run figma:images            # из каталога landing/
```

Если все строки «Нет URL» — скрипт завершится с кодом 1 и выведет диагностику по первой ноде: чаще всего неверный `FIGMA_FILE_KEY` или id из другого файла. `FIGMA_DEBUG=1` — полный дамп `images`.

Скрипт: `scripts/fetch-landing-figma-images.mjs` (узлы согласованы с TalkToFigma: hero `220:3609`, how `220:3692`…`3697`, onboarding `220:3789`, CTA `220:3825`…`3827`).

После загрузки страница покажет реальные PNG; если файла нет — остаётся CSS-плейсхолдер (`onError`).
