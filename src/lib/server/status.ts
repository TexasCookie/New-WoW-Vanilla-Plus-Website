export type RealmStatus = {
  name: string;
  region: string;
  state: 'Online' | 'Maintenance';
  players: number;
  latency: string;
  patch: string;
};

export async function getRealmStatus(): Promise<RealmStatus[]> {
  return [
    {
      name: 'VanillaPlus PvP',
      region: 'EU',
      state: 'Online',
      players: 412,
      latency: '24 ms',
      patch: '1.12.1+',
    },
    {
      name: 'PTR Realm',
      region: 'Global',
      state: 'Maintenance',
      players: 0,
      latency: '—',
      patch: 'Next patch preview',
    },
  ];
}
