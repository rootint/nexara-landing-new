<script>
	import Hero from './components/Hero.svelte';
	import HowItWorks from './components/HowItWorks.svelte';
	import Features from './components/Features.svelte';
	import Usage from './components/Usage.svelte';
	import Pricing from './components/Pricing.svelte';
</script>

<svelte:head>
	<title>Nexara</title>
	<meta name="description" content="Nexara" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&family=Golos+Text:wght@400..900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<Hero></Hero>
<HowItWorks></HowItWorks>
<Features></Features>
<Usage></Usage>
<Pricing></Pricing>
<!-- <Features></Features>
<Pricing></Pricing>
<Cta></Cta> -->
