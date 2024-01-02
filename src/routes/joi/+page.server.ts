import { getItem } from '$lib';
import { TUMBLR_API_KEY } from '$env/static/private';
import type { ServerLoadEvent } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load(event: ServerLoadEvent) {
	// const id = event.params?.rest?.split('/')[0] || ''
	// const id = params.i d
	const id = '2KXJ8Z44DMZ5';
	return {
		item: await getItem(id, TUMBLR_API_KEY)
	};
}
