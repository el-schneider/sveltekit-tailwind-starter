import { derived, type Readable } from 'svelte/store'
import { page } from '$app/stores'

export const slug: Readable<string> = derived(page, ($page) => $page.params.section)
