import { useMemo, useState } from 'react';

type DonatePackage = {
  id: string;
  name: string;
  amount: number;
  perks: string[];
};

type Props = {
  packages: DonatePackage[];
};

export default function DonatePackages({ packages }: Props) {
  const [selected, setSelected] = useState(packages[1]?.id ?? packages[0]?.id ?? '');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const active = useMemo(() => packages.find((item) => item.id === selected), [packages, selected]);

  async function startCheckout() {
    if (!selected) return;
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/donate/create-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ packageId: selected }),
      });

      const data = (await response.json()) as { checkoutUrl?: string; error?: string };

      if (!response.ok || !data.checkoutUrl) {
        throw new Error(data.error ?? 'Unable to create a checkout session');
      }

      window.location.href = data.checkoutUrl;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="donate-shell">
      <div className="pricing-grid">
        {packages.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`pricing-card ${item.id === selected ? 'active' : ''}`}
            onClick={() => setSelected(item.id)}
          >
            <span className="pricing-badge">${item.amount}</span>
            <h3>{item.name}</h3>
            <p>{item.perks[0]}</p>
          </button>
        ))}
      </div>

      {active && (
        <div className="checkout-card">
          <p className="eyebrow">Selected package</p>
          <h3>{active.name}</h3>
          <p className="checkout-price">${active.amount}</p>
          <ul>
            {active.perks.map((perk) => (
              <li key={perk}>{perk}</li>
            ))}
          </ul>
          <button className="button button-primary" onClick={startCheckout} disabled={loading}>
            {loading ? 'Opening checkout…' : `Support with $${active.amount}`}
          </button>
          {error && <p className="form-error">{error}</p>}
        </div>
      )}
    </div>
  );
}
