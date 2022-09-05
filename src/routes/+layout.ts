import { error } from '@sveltejs/kit'

export interface Photo {
	albumId: number
	id: number
	title: string
	url: string
	thumbnailUrl: string
}

export interface Project {
	id: number
	title: string
	sectionId: number
	image: string
}

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	console.log('params:', params)

	const response = await fetch('https://jsonplaceholder.typicode.com/photos')

	const photos: Photo[] = await response.json()

	if (photos.length) {
		return {
			title: 'Home Page',
			photos
		}
	}

	throw error(404, 'Not found')
}
