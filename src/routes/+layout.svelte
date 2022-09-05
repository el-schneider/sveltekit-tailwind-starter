<script context="module" lang="ts">
	import '../app.css'
	import MainNav from '@components/MainNav.svelte'
</script>

<script>
	/** @type {import('./$types').PageData} */ export let data
</script>

<MainNav />

<main>
	<slot />
</main>
