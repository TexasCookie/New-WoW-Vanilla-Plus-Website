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

export const navigation = [
  { href: '/', label: 'Home' },
  { href: '/download', label: 'Download' },
  { href: '/features', label: 'Features' },
  { href: '/news', label: 'News' },
  { href: '/donate', label: 'Donate' },
  { href: '/discord', label: 'Discord' },
  { href: '/account/login', label: 'Login' },
];

export const externalLinks = [
  { href: siteConfig.wikiUrl, label: 'Wiki' },
  { href: siteConfig.talentCalculatorUrl, label: 'Talent Calculator' },
  { href: siteConfig.bugTrackerUrl, label: 'Bug Tracker' },
  { href: siteConfig.supportUrl, label: 'Support Project' },
];
