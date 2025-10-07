/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */
import template from '../template';
import anotherTemplate from '../anotherTemplate';

export default {
	async fetch(request, env) {
		const url = new URL(request.url);

		if (url.pathname.startsWith('/assets/')) {
			const assetPath = url.pathname.replace(/^\/assets/, '');
			const assetUrl = new URL(assetPath, request.url);
			const assetRequest = new Request(assetUrl, request);

			return env.ASSETS.fetch(assetRequest);
		}

		if (url.pathname === '/another') {
			return new Response(anotherTemplate(), {
				headers: { 'content-type': 'text/html' },
			});
		}

		return new Response(template(), {
			headers: { 'content-type': 'text/html' },
		});
	},
};

// export default {
// 	async fetch(request, env, ctx) {
// 		return new Response('Hello Aira!');
// 	},
// };
