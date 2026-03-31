export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const mainNavItems: NavItem[] = [
  {
    label: 'Features',
    href: '/features',
    children: [
      { label: 'Class Changes', href: '/features/class-changes' },
      { label: 'Getting Started', href: '/features/getting-started' },
    ],
  },
  {
    label: 'Community',
    href: '#',
    children: [
      { label: 'Wiki', href: 'https://vanilla-plus.wiki' },
      { label: 'Discord', href: '#' },
      { label: 'Bug Tracker', href: 'https://github.com/VanillaPlusTeam/bug-tracker' },
    ],
  },
  {
    label: 'Media',
    href: '#',
    children: [
      { label: 'Trailers', href: '#' },
      { label: 'Artworks', href: '#' },
    ],
  },
  { label: 'Rules', href: '/rules' },
  { label: 'Rewards', href: '/rewards' },
  { label: 'Wiki', href: 'https://vanilla-plus.wiki' },
];
