import { getItem } from '$lib';
import { TUMBLR_API_KEY } from '$env/static/private';
import type { ServerLoadEvent } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load(event: ServerLoadEvent) {
	// const id = event.params?.rest?.split('/')[0] || ''
	const { id } = event.params || 'no book selected';
	// const id = params.id
	return {
		item: await getItem(id, TUMBLR_API_KEY)
	};
}
