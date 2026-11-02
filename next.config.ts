import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  /**
   * Мобильное приложение и карточки в App Store / Google Play ссылаются на
   * https://ilmhub.kz/terms.html и https://ilmhub.kz/privacy.html (mobile/lib/core/legal/subscription_store_urls.dart),
   * а также на старые адреса статического сайта website/. Эти URL должны продолжать работать.
   * Редиректы требуют Next.js-сервера (next start / Vercel); при `output: "export"` они не работают.
   */
  async redirects() {
    return [
      { source: "/privacy.html", destination: "/privacy", statusCode: 301 },
      { source: "/terms.html", destination: "/terms", statusCode: 301 },
      { source: "/delete-account.html", destination: "/delete-account", statusCode: 301 },
      { source: "/index.html", destination: "/", statusCode: 301 },
    ];
  },
};

export default nextConfig;
