import type { APIRoute } from 'astro';
import { emailCookieName, loginUser, sessionCookieName } from '../../../lib/server/auth';

const jsonHeaders = { 'Content-Type': 'application/json; charset=utf-8' };

export const POST: APIRoute = async ({ request, cookies }) => {
  const body = (await request.json().catch(() => null)) as { email?: string; password?: string } | null;

  if (!body?.email || !body?.password) {
    return new Response(JSON.stringify({ error: 'Email and password are required.' }), {
      status: 400,
      headers: jsonHeaders,
    });
  }

  try {
    const session = await loginUser(body.email, body.password);

    cookies.set(sessionCookieName, session.token, {
      httpOnly: true,
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
      secure: false,
    });

    cookies.set(emailCookieName, session.user.email, {
      httpOnly: true,
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
      secure: false,
    });

    return new Response(JSON.stringify({ message: 'Login successful.' }), {
      headers: jsonHeaders,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : 'Login failed.' }), {
      status: 400,
      headers: jsonHeaders,
    });
  }
};
