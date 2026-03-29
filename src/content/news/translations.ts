// src/content/translations.ts
// Русский: Главный файл всех переводов сайта
// English: Main translation file for the entire website

export const translations = {
  ru: {
    hero: {
      title: "VANILLA PLUS",
      subtitle: "Классика 1.12.1, которая развивается",
      download: "Скачать клиент",
      discord: "Присоединяйся в Discord"
    },
    status: {
      title: "Статус серверов",
      version: "Версия"
    },
    features: {
      title: "Что делает Vanilla Plus живым"
    },
    news: {
      title: "Последние новости",
      readMore: "Читать →"
    },
    roadmap: {
      title: "Что дальше"
    },
    cta: {
      title: "Готов начать приключение?",
      text: "Скачай клиент Vanilla Plus прямо сейчас и присоединяйся к живому серверу",
      button: "СКАЧАТЬ КЛИЕНТ (1.12.1 + Plus)"
    }
  },
  en: {
    hero: {
      title: "VANILLA PLUS",
      subtitle: "Classic 1.12.1 that keeps evolving",
      download: "Download Client",
      discord: "Join Discord"
    },
    status: {
      title: "Server Status",
      version: "Version"
    },
    features: {
      title: "What makes Vanilla Plus alive"
    },
    news: {
      title: "Latest News",
      readMore: "Read →"
    },
    roadmap: {
      title: "Roadmap"
    },
    cta: {
      title: "Ready for adventure?",
      text: "Download the Vanilla Plus client right now and join the living server",
      button: "DOWNLOAD CLIENT (1.12.1 + Plus)"
    }
  }
} as const;

export type Lang = keyof typeof translations;