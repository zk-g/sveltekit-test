/** @type {import('@sveltejs/kit').Config} */
const adapter = require('@sveltejs/adapter-static');

module.exports = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: null
		})
	}
};
