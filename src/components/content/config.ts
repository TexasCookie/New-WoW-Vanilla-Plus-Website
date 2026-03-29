// src/content/config.ts
export const siteConfig = {
  title: "WoW Vanilla Plus",
  tagline: "Классика 1.12.1 + немного кастомного контента",
  description: "Vanilla Plus — это живой ванильный сервер с лёгкими улучшениями, которые делают игру интереснее.",

  hero: {
    title: "VANILLA PLUS",
    subtitle: "Настоящая классика, которая развивается",
    backgroundImage: "/images/hero-bg.jpg", // потом заменишь на свою картинку
    buttons: [
      { text: "Скачать клиент", link: "/download", variant: "primary" },
      { text: "Присоединяйся в Discord", link: "https://discord.gg/твой_дискорд", variant: "secondary" }
    ]
  },

  serverStatus: {
    realms: [
      { name: "Nordanaar", online: 124, max: 500, type: "PvE" },
      { name: "Tel'Abim", online: 87, max: 500, type: "PvE" }
    ],
    version: "1.12.1 + Vanilla Plus"
  },

  features: [
    {
      icon: "🧝",
      title: "Новые расы",
      desc: "High Elf и Goblin уже доступны для создания персонажа",
      color: "#00ff9d"
    },
    {
      icon: "🌍",
      title: "Новые зоны",
      desc: "Tel'Abim и другие кастомные локации",
      color: "#ffaa00"
    },
    {
      icon: "⚔️",
      title: "Баланс и QoL",
      desc: "Мелкие правки, которые делают игру комфортнее",
      color: "#00aaff"
    },
    {
      icon: "📜",
      title: "Постоянные обновления",
      desc: "Проект живой — новые фичи выходят регулярно",
      color: "#ff00aa"
    }
  ],

  roadmap: [
    { title: "Q2 2026", text: "Новые профессии и предметы" },
    { title: "Q3 2026", text: "Armory + Talent Calculator" },
    { title: "Q4 2026", text: "Новые рейды и события" }
  ]
};

// Экспорт для удобства
export type SiteConfig = typeof siteConfig;