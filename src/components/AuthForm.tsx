import { type FormEvent, useState } from 'react';

type Mode = 'login' | 'register' | 'recovery';

type Props = {
  mode: Mode;
};

const modeConfig = {
  login: {
    title: 'Sign in to your account',
    endpoint: '/api/auth/login',
    submitLabel: 'Login',
  },
  register: {
    title: 'Create your account',
    endpoint: '/api/auth/register',
    submitLabel: 'Create account',
  },
  recovery: {
    title: 'Recover your password',
    endpoint: '/api/auth/recovery',
    submitLabel: 'Send recovery email',
  },
} satisfies Record<Mode, { title: string; endpoint: string; submitLabel: string }>;

export default function AuthForm({ mode }: Props) {
  const config = modeConfig[mode];
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage('');
    setError('');

    try {
      const response = await fetch(config.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = (await response.json()) as { message?: string; error?: string };

      if (!response.ok) {
        throw new Error(data.error ?? 'Request failed');
      }

      setMessage(data.message ?? 'Done.');

      if (mode !== 'recovery') {
        window.location.href = '/account/dashboard';
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="auth-card">
      <h2>{config.title}</h2>
      <p className="auth-note">Demo mode is enabled by default so you can test the flow locally before wiring a database.</p>
      <form className="auth-form" onSubmit={handleSubmit}>
        <label>
          <span>Email</span>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="hero@vanillaplus.org"
            required
          />
        </label>

        {mode !== 'recovery' && (
          <label>
            <span>Password</span>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="••••••••"
              minLength={4}
              required
            />
          </label>
        )}

        <button className="button button-primary auth-submit" type="submit" disabled={loading}>
          {loading ? 'Working…' : config.submitLabel}
        </button>
      </form>

      {message && <p className="form-success">{message}</p>}
      {error && <p className="form-error">{error}</p>}

      <div className="auth-links">
        {mode !== 'login' && <a href="/account/login">Already have an account?</a>}
        {mode !== 'register' && <a href="/account/register">Need a new account?</a>}
        {mode !== 'recovery' && <a href="/account/recovery">Forgot your password?</a>}
      </div>
    </div>
  );
}
