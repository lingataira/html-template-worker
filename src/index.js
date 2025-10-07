/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */
import template from "../template";

addEventListener("fetch", event => {
  event.respondWith(handleRequest(event));
});

async function handleRequest(event) {
  const request = event.request;
  const url = new URL(request.url);

  if (url.pathname.startsWith("/assets/")) {
    return event?.env?.ASSETS.fetch(request);
  }

  return new Response(template(), {
    headers: { "content-type": "text/html" },
  });
}


// export default {
// 	async fetch(request, env, ctx) {
// 		return new Response('Hello Aira!');
// 	},
// };
