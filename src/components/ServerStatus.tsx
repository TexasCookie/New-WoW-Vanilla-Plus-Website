import { useEffect, useState } from 'react';

type Realm = {
  name: string;
  region: string;
  state: 'Online' | 'Maintenance';
  players: number;
  latency: string;
  patch: string;
};

export default function ServerStatus() {
  const [realms, setRealms] = useState<Realm[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const response = await fetch('/api/status');
        if (!response.ok) {
          throw new Error('Unable to load realm status');
        }
        const data = (await response.json()) as { realms: Realm[] };
        if (!cancelled) {
          setRealms(data.realms);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Unknown error');
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    void load();

    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) {
    return <div className="status-shell">Loading realm status…</div>;
  }

  if (error) {
    return <div className="status-shell">{error}</div>;
  }

  return (
    <div className="status-grid">
      {realms.map((realm) => (
        <article className="status-card" key={realm.name}>
          <div className="status-row">
            <span className={`status-pill ${realm.state === 'Online' ? 'online' : 'maintenance'}`}>{realm.state}</span>
            <span>{realm.region}</span>
          </div>
          <h3>{realm.name}</h3>
          <p>{realm.patch}</p>
          <dl>
            <div>
              <dt>Players</dt>
              <dd>{realm.players}</dd>
            </div>
            <div>
              <dt>Latency</dt>
              <dd>{realm.latency}</dd>
            </div>
          </dl>
        </article>
      ))}
    </div>
  );
}
