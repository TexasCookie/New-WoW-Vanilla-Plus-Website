import type { APIRoute } from 'astro';
import { emailCookieName, sessionCookieName } from '../../../lib/server/auth';

export const POST: APIRoute = async ({ cookies, redirect }) => {
  cookies.delete(sessionCookieName, { path: '/' });
  cookies.delete(emailCookieName, { path: '/' });
  return redirect('/account/login');
};
