import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  const redirects: Record<string, string> = {
    '/forum': '/community',
  };

  const redirect = redirects[context.url.pathname];
  if (redirect) return context.redirect(redirect, 301);

  const response = await next();
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  return response;
});
