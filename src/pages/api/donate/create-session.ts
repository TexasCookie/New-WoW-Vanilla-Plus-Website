import type { APIRoute } from 'astro';
import { createCheckoutUrl, donationPackages } from '../../../lib/server/donate';

const jsonHeaders = { 'Content-Type': 'application/json; charset=utf-8' };

export const POST: APIRoute = async ({ request }) => {
  const body = (await request.json().catch(() => null)) as { packageId?: string } | null;

  if (!body?.packageId) {
    return new Response(JSON.stringify({ error: 'packageId is required.' }), {
      status: 400,
      headers: jsonHeaders,
    });
  }

  const validPackage = donationPackages.some((item) => item.id === body.packageId);

  if (!validPackage) {
    return new Response(JSON.stringify({ error: 'Unknown donation package.' }), {
      status: 400,
      headers: jsonHeaders,
    });
  }

  const checkoutUrl = await createCheckoutUrl(body.packageId, request.url);

  return new Response(JSON.stringify({ checkoutUrl }), {
    headers: jsonHeaders,
  });
};
