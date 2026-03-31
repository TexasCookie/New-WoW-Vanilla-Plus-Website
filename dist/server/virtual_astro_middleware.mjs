import { a7 as defineMiddleware, ag as sequence } from './chunks/sequence_COu6gE9e.mjs';
import 'piccolore';
import 'clsx';

const onRequest$1 = defineMiddleware(async (context, next) => {
  const redirects = {
    "/forum": "/community"
  };
  const redirect = redirects[context.url.pathname];
  if (redirect) return context.redirect(redirect, 301);
  const response = await next();
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  return response;
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
