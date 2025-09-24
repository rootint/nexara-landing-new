<script>
	import * as m from '$paraglide/messages.js';
	import { getLocale } from '$paraglide/runtime';
	import { setLocale } from '$paraglide/runtime';

	import Hero from './components/Hero.svelte';
	import HowItWorks from './components/HowItWorks.svelte';
	import Features from './components/Features.svelte';
	import Usage from './components/Usage.svelte';
	import Pricing from './components/Pricing.svelte';
	import Cta from './components/CTA.svelte';
	import Testimonial from './components/Testimonial.svelte';

	import sergey from '$lib/assets/sergey.jpeg';
	import egor from '$lib/assets/egor.jpeg';
	import vasil from '$lib/assets/vasil.jpg';
	import Reviews from './components/Reviews.svelte';
	import ReadAboutUs from './components/ReadAboutUs.svelte';
</script>

<svelte:head>
	<title>Ailoy</title>
	<meta name="description" content={m.meta_nexara()} />
	<meta name="keywords" content="Помощник для поиска нужных сплавов" />
	<meta property="og:title" content="Ailoy" />
	<meta property="og:description" content="Помощник для поиска нужных сплавов" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.ailoy.nexara.ru/" />
	<meta property="og:locale" content="ru_RU" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Onest:wght@100..900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<Hero></Hero>
<Testimonial
	text={m.testimonial_sergey()}
	subtitle="{m.testimonial_sergey_name()}, Summarizer"
	image={sergey}
></Testimonial>
<HowItWorks></HowItWorks>
<Features></Features>
<!-- <Usage></Usage> -->
<Reviews></Reviews>
<!-- <Testimonial
	text={m.testimonial_egor()}
	subtitle="{m.testimonial_egor_name()}, Transcribator"
	image={egor}
></Testimonial> -->

<Pricing></Pricing>
<!-- {#if getLocale() === 'ru'}
	<ReadAboutUs></ReadAboutUs>
{/if} -->
<!-- <Testimonial
	text={m.testimonial_vasil()}
	subtitle="{m.testimonial_vasil_name()}, WhyNote"
	image={vasil}
></Testimonial> -->
<Cta></Cta>
<!-- <Footer></Footer> -->
