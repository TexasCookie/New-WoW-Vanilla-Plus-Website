import {
  PUBLIC_BUG_TRACKER_URL,
  PUBLIC_DISCORD_URL,
  PUBLIC_DONATE_URL,
  PUBLIC_DOWNLOAD_URL,
  PUBLIC_SITE_URL,
  PUBLIC_SUPPORT_URL,
  PUBLIC_TALENT_CALCULATOR_URL,
  PUBLIC_WIKI_URL,
} from 'astro:env/client';

export const siteConfig = {
  name: 'VanillaPlus Reborn',
  shortName: 'VanillaPlus',
  description:
    'Astro 6 portal starter for VanillaPlus with React islands, SSR-ready account flows, donation scaffolding, and community pages.',
  siteUrl: PUBLIC_SITE_URL,
  discordUrl: PUBLIC_DISCORD_URL,
  downloadUrl: PUBLIC_DOWNLOAD_URL,
  wikiUrl: PUBLIC_WIKI_URL,
  supportUrl: PUBLIC_SUPPORT_URL,
  talentCalculatorUrl: PUBLIC_TALENT_CALCULATOR_URL,
  bugTrackerUrl: PUBLIC_BUG_TRACKER_URL,
  donateUrl: PUBLIC_DONATE_URL,
};

// Мультиязычная навигация с выпадающими меню
export const navigation = {
  ru: [
    { href: '/', label: 'Главная' },

    {
      label: 'Игра',
      children: [
        { href: '/features', label: 'Особенности' },
        { href: '/download', label: 'Скачать' },
        { href: '/talents', label: 'Калькулятор талантов' },
      ],
    },

    {
      label: 'Сообщество',
      children: [
        { href: '/news', label: 'Новости' },
        { href: siteConfig.wikiUrl, label: 'Wiki' },
        { href: siteConfig.bugTrackerUrl, label: 'Баг-трекер' },
        { href: siteConfig.talentCalculatorUrl, label: 'Таланты' },
      ],
    },

    {
      label: 'Сервер',
      children: [
        { href: '/status', label: 'Статус сервера' },
        { href: '/rules', label: 'Правила' },
      ],
    },

    { href: '/donate', label: 'Донат' },
    { href: siteConfig.discordUrl, label: 'Discord', external: true },
  ],

  en: [
    { href: '/', label: 'Home' },

    {
      label: 'Game',
      children: [
        { href: '/features', label: 'Features' },
        { href: '/download', label: 'Download' },
        { href: '/talents', label: 'Talent Calculator' },
      ],
    },

    {
      label: 'Community',
      children: [
        { href: '/news', label: 'News' },
        { href: siteConfig.wikiUrl, label: 'Wiki' },
        { href: siteConfig.bugTrackerUrl, label: 'Bug Tracker' },
        { href: siteConfig.talentCalculatorUrl, label: 'Talents' },
      ],
    },

    {
      label: 'Server',
      children: [
        { href: '/status', label: 'Server Status' },
        { href: '/rules', label: 'Rules' },
      ],
    },

    { href: '/donate', label: 'Donate' },
    { href: siteConfig.discordUrl, label: 'Discord', external: true },
  ],
};

// Внешние ссылки (одинаковые для ru и en)
export const externalLinks = [
  { label: 'GitHub', href: 'https://github.com/TexasCookie/New-WoW-Vanilla-Plus-Website' },
  { label: 'Discord', href: siteConfig.discordUrl },
  { label: 'Wiki', href: siteConfig.wikiUrl },
];