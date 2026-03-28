import type { APIRoute } from 'astro';
import { requestPasswordReset } from '../../../lib/server/auth';

const jsonHeaders = { 'Content-Type': 'application/json; charset=utf-8' };

export const POST: APIRoute = async ({ request }) => {
  const body = (await request.json().catch(() => null)) as { email?: string } | null;

  if (!body?.email) {
    return new Response(JSON.stringify({ error: 'Email is required.' }), {
      status: 400,
      headers: jsonHeaders,
    });
  }

  const result = await requestPasswordReset(body.email);

  return new Response(JSON.stringify({ message: result.message }), {
    headers: jsonHeaders,
  });
};
