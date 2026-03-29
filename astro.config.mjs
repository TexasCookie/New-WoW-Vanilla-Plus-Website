import { defineConfig, envField } from 'astro/config';
import node from '@astrojs/node';
import react from '@astrojs/react';

const publicSiteUrl = 'https://vanillaplus.gg';   // ← поменяй на свой реальный домен

export default defineConfig({
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'en'],
    routing: {
      prefixDefaultLocale: true     // ← русский будет /ru/, английский /en/
    }
  },

  site: publicSiteUrl,
  output: 'server',
  adapter: node({ mode: 'standalone' }),

  integrations: [react()],

  env: {
    schema: {
      PUBLIC_SITE_URL: envField.string({ context: 'client', access: 'public', default: publicSiteUrl }),
      PUBLIC_DISCORD_URL: envField.string({ context: 'client', access: 'public', default: 'https://discord.gg/your-server' }),
      PUBLIC_DOWNLOAD_URL: envField.string({ context: 'client', access: 'public', default: 'https://vanillaplus.org/' }),
      PUBLIC_WIKI_URL: envField.string({ context: 'client', access: 'public', default: 'https://vanilla-plus.wiki/' }),
      PUBLIC_SUPPORT_URL: envField.string({ context: 'client', access: 'public', default: 'https://vanillaplus.org/support-project' }),
      PUBLIC_TALENT_CALCULATOR_URL: envField.string({ context: 'client', access: 'public', default: 'https://hawaiisa.github.io/' }),
      PUBLIC_BUG_TRACKER_URL: envField.string({ context: 'client', access: 'public', default: 'https://github.com/' }),
      PUBLIC_DONATE_URL: envField.string({ context: 'client', access: 'public', default: '' }),
      DEMO_ALLOW_ANY_LOGIN: envField.boolean({ context: 'server', access: 'public', default: true })
    }
  },

  vite: {
    server: {
      host: true
    }
  }
});