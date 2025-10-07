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

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/debug-assets") {
      try {
        const response = await env.ASSETS.fetch("/chiro_boost_colour_576x1024_2x.webp");
        return new Response(
          response.status === 200 ? "✅ Asset found!" : "❌ Asset not found",
          { headers: { "content-type": "text/plain" } }
        );
      } catch (err) {
        return new Response("❌ Error accessing ASSETS: " + err.message, {
          headers: { "content-type": "text/plain" },
        });
      }
    }

    if (url.pathname.startsWith("/assets/")) {
      return env.ASSETS.fetch(url.pathname);
    }

    return new Response(template(), {
      headers: { "content-type": "text/html" },
    });
  },
};


// export default {
// 	async fetch(request, env, ctx) {
// 		return new Response('Hello Aira!');
// 	},
// };
