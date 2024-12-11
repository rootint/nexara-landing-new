<script>
	import Hero from './components/Hero.svelte';
	import HowItWorks from './components/HowItWorks.svelte';
	import Features from './components/Features.svelte';
	import Usage from './components/Usage.svelte';
	import Pricing from './components/Pricing.svelte';
	import Cta from './components/CTA.svelte';
	import Footer from './components/Footer.svelte';
	import Testimonial from './components/Testimonial.svelte';

	import sergey from '$lib/assets/sergey.jpeg';
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
<Testimonial
	text="Спасибо Nexara за их решение для транскрибации речи! Благодаря их настройке и оптимизации наши затраты сократились в 3 раза, а скорость распознавания речи возросла в несколько раз. Всё сделали оперативно и качественно, при этом продолжают поддерживать нас на всех этапах. Очень довольны результатом и сотрудничеством."
	subtitle="Сергей Пахандрин, 42apps"
	image={sergey}
></Testimonial>
<HowItWorks></HowItWorks>
<Features></Features>
<Usage></Usage>
<Pricing></Pricing>
<Cta></Cta>
<Footer></Footer>
