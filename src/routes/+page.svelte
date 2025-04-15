<script>
	import Hero from './components/Hero.svelte';
	import Solutions from './components/Solutions.svelte';
	import Features from './components/Features.svelte';
	import Reviews from './components/Reviews.svelte';
	import Pricing from './components/Pricing.svelte';
	import Cta from './components/CTA.svelte';
	import Footer from './components/Footer.svelte';
	import Testimonial from './components/Testimonial.svelte';

	import sergey from '$lib/assets/sergey.jpeg';
	import egor from '$lib/assets/egor.jpeg';
	import vasil from '$lib/assets/vasil.jpg';
	import ReadAboutUs from './components/ReadAboutUs.svelte';
</script>

<svelte:head>
	<title>Nexara</title>
	<meta
		name="description"
		content="Nexara - быстрый и доступный API для транскрибации речи. Поддержка большинства аудио и видео форматов, простая интеграция, высокая точность, низкая цена."
	/>
	<meta
		name="keywords"
		content="Транскрибация речи, API для транскрибации, российский API, транскрибация, перевод речи в текст, видео в текст"
	/>
	<meta property="og:title" content="Nexara" />
	<meta
		property="og:description"
		content="Быстрый, доступный API для транскрибации речи с высокой точностью. Поддержка файлов размером до 1 ГБ."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.nexara.ru/" />
	<meta property="og:locale" content="ru_RU" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&family=Golos+Text:wght@400..900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<Hero></Hero>
<Testimonial
	text="Спасибо Nexara за их решение для транскрибации речи! Благодаря их настройке и оптимизации наши затраты сократились в 6 раза, а скорость распознавания речи возросла в 8 раз. Всё сделали оперативно и качественно, при этом продолжают поддерживать нас на всех этапах. Очень довольны результатом и сотрудничеством."
	subtitle="Сергей Пахандрин, Summarizer"
	image={sergey}
></Testimonial>
<Solutions></Solutions>
<!-- <HowItWorks></HowItWorks> -->
<Features></Features>
<Reviews></Reviews>
<!-- <Testimonial
	text="У меня собственный сервис для транскрибации аудио и видео — Transcribator. Изначально я использовал Whisper от OpenAI, но сейчас перешел на решение от Nexara. Стоимость снизилась в 3 раза, скорость увеличилась в 2 раза без дополнительных оптимизаций с моей стороны, качество осталось высоким, и это на этапе начального развития Nexara. С интересом жду дальнейшего развития проекта."
	subtitle="@egorfing, Transcribator"
	image={egor}
></Testimonial> -->
<Pricing></Pricing>
<ReadAboutUs></ReadAboutUs>
<!-- <Testimonial
	text="Переход на Nexara с OpenAI позволил нам сменой ссылки API сократить расходы на транскрибацию в 5 раз. Буквально на следующий день мы получили результат без усилий. Сервис работает значительно быстрее, чем OpenAI Whisper, не проигрывает в качестве, не требует использования VPN и перевода денег на зарубежную карту. Рекомендую."
	subtitle="Василь Закиев, WhyNote"
	image={vasil}
></Testimonial> -->
<Cta></Cta>
<!-- <Footer></Footer> -->
