import type { APIRoute } from 'astro';
import { getRealmStatus } from '../../lib/server/status';

export const GET: APIRoute = async () => {
  const realms = await getRealmStatus();

  return new Response(JSON.stringify({ realms }), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
