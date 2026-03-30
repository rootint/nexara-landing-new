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
	<title>Nexara — API для транскрибации речи</title>
	<meta name="description" content={m.meta_nexara()} />
	<meta
		name="keywords"
		content="Транскрибация речи, API для транскрибации, российский API, транскрибация, перевод речи в текст, видео в текст"
	/>
	<link rel="canonical" href="https://www.nexara.ru/" />

	<meta property="og:title" content="Nexara — API для транскрибации речи" />
	<meta property="og:description" content="Высокопроизводительный движок для speech-to-text. Лучшая диаризация спикеров в России, API, on-premise, в 10 раз быстрее open-source решений." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.nexara.ru/" />
	<meta property="og:locale" content="ru_RU" />
	<meta property="og:site_name" content="Nexara" />
	<meta property="og:image" content="https://www.nexara.ru/og_image.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="Nexara — Самая быстрая транскрибация в России" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Nexara — API для транскрибации речи" />
	<meta name="twitter:description" content="Высокопроизводительный движок для speech-to-text. Лучшая диаризация спикеров в России, API, on-premise, в 10 раз быстрее open-source решений." />
	<meta name="twitter:image" content="https://www.nexara.ru/og_image.png" />

	{@html `<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "Organization",
		"name": "Nexara",
		"url": "https://www.nexara.ru",
		"logo": "https://www.nexara.ru/logo512.png",
		"description": "Быстрый и надежный API для транскрибации речи",
		"sameAs": []
	}
	</script>`}

	{@html `<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "Service",
		"name": "Nexara API",
		"description": "API для транскрибации речи с высокой скоростью и точностью. Поддержка 57 языков, диаризация, российские сервера.",
		"provider": {
			"@type": "Organization",
			"name": "Nexara"
		},
		"serviceType": "Speech-to-Text API",
		"areaServed": "RU",
		"image": "https://www.nexara.ru/og_image.png"
	}
	</script>`}
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
{#if getLocale() === 'ru'}
	<ReadAboutUs></ReadAboutUs>
{/if}
<!-- <Testimonial
	text={m.testimonial_vasil()}
	subtitle="{m.testimonial_vasil_name()}, WhyNote"
	image={vasil}
></Testimonial> -->
<Cta></Cta>
<!-- <Footer></Footer> -->
