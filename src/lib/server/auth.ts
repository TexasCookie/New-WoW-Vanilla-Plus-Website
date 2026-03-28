import { DEMO_ALLOW_ANY_LOGIN } from 'astro:env/server';

export type DemoUser = {
  email: string;
  password: string;
  createdAt: string;
};

const users = new Map<string, DemoUser>();

export const sessionCookieName = 'vp_session';
export const emailCookieName = 'vp_user_email';

function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

function createSessionToken() {
  return crypto.randomUUID();
}

export async function registerUser(email: string, password: string) {
  const normalizedEmail = normalizeEmail(email);

  if (users.has(normalizedEmail)) {
    throw new Error('This email is already registered in demo mode.');
  }

  const user: DemoUser = {
    email: normalizedEmail,
    password,
    createdAt: new Date().toISOString(),
  };

  users.set(normalizedEmail, user);

  return {
    user,
    token: createSessionToken(),
  };
}

export async function loginUser(email: string, password: string) {
  const normalizedEmail = normalizeEmail(email);
  const existing = users.get(normalizedEmail);

  if (!existing && DEMO_ALLOW_ANY_LOGIN) {
    users.set(normalizedEmail, {
      email: normalizedEmail,
      password,
      createdAt: new Date().toISOString(),
    });
  }

  const user = users.get(normalizedEmail);

  if (!user) {
    throw new Error('No demo user found. Create an account first or keep DEMO_ALLOW_ANY_LOGIN enabled.');
  }

  if (user.password !== password) {
    throw new Error('Incorrect password for the demo account.');
  }

  return {
    user,
    token: createSessionToken(),
  };
}

export async function requestPasswordReset(email: string) {
  return {
    ok: true,
    email: normalizeEmail(email),
    message: 'Demo recovery request accepted. Connect this flow to your mail provider and auth service later.',
  };
}
