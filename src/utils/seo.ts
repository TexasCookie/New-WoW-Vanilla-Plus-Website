export function generateMeta(options: { title: string; description?: string; image?: string; url?: URL }) {
  const desc = options.description || 'Vanilla+ PvP Server — Classic WoW with new challenges, rebalanced classes, and fresh content.';
  const img = options.image || '/images/og-default.png';
  return {
    title: options.title,
    description: desc,
    'og:title': options.title,
    'og:description': desc,
    'og:image': img,
    'og:url': options.url?.href || '',
    'og:type': 'website',
    'twitter:card': 'summary_large_image',
    'twitter:title': options.title,
    'twitter:description': desc,
  };
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}
