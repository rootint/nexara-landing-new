<script>
	import * as m from '$paraglide/messages.js';

	import MainButton from './MainButton.svelte';

	import { onMount } from 'svelte';
	import { tick } from 'svelte';

	let scrambledWord = '%#@!%^#$@*($@';
	// let targetWord = 'расшифровки';
	let targetWord = 'транскрибации';
	let animationStartTime;
	let animationDuration = 1000; // in milliseconds

	async function animateWord() {
		scrambleWord(); // Start with gibberish
		animationStartTime = performance.now();
		await tick(); // Ensure scrambledWord is updated in the DOM
		requestAnimationFrame(step);
	}

	function step(timestamp) {
		const progress = Math.min((timestamp - animationStartTime) / animationDuration, 1);

		let currentWord = '';
		for (let i = 0; i < targetWord.length; i++) {
			if (progress * targetWord.length >= i) {
				currentWord += targetWord[i];
			} else {
				currentWord += getRandomChar();
			}
		}

		scrambledWord = currentWord;

		if (progress < 1) {
			requestAnimationFrame(step);
		}
	}

	function scrambleWord() {
		let currentWord = '';
		for (let i = 0; i < targetWord.length; i++) {
			currentWord += getRandomChar();
		}
		scrambledWord = currentWord;
	}

	function getRandomChar() {
		// const characters = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
		const characters = '!@#$%^&*():"><?/}{1234567890';
		return characters.charAt(Math.floor(Math.random() * characters.length));
	}

	onMount(() => {
		animateWord();
	});
</script>

<section class="hero">
	<!-- <a href="https://productradar.ru/product/nexara?utm_source=badge" target="_blank"
		><img
			src="https://productradar.ru/badge?period=month&amp;rank=1&amp;theme=black"
			alt="Награда Продукт месяца #1| Product Radar"
			width="252"
			height="68"
			style="margin: 0px; width: 252px; height: 68px; vertical-align: bottom; border: 1px solid transparent;"
		/></a
	> -->
	<div class="minutes-badge">
		<p class="minutes-badge-text">{m.hero_minutes()}</p>
	</div>
	<div class="animate-text">
		<h1 class="title">
			{m.hero_title()}
		</h1>
		<h2 class="subtitle">{m.hero_subtitle()}</h2>
	</div>
	<div class="animate">
		<MainButton></MainButton>
	</div>
</section>

<style>
	.minutes-badge {
		padding: 8px 16px;
		border-radius: 12px;
		background-color: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.2);
	}
	.minutes-badge-text {
		color: #ddd;
		font-size: 16px;
		text-align: center;
	}
	.badges {
		display: flex;
		gap: 24px;
	}
	.hero {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: 0 auto;
		/* height: 100vh; */
		min-height: 800px;
		padding-top: 128px;
		position: relative;
		/* min-height: -webkit-fill-available; */
	}
	.title {
		text-align: center;
		max-width: 860px;
		margin-top: 32px;
		margin-bottom: 36px;
		color: var(--text);
	}

	.animate-text {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		animation: simpleFadeIn 0.7s ease;
	}

	.animate {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		animation: fadeIn 1s ease;
	}

	.subtitle {
		font-size: 24px;
		max-width: 620px;
		text-align: center;
		font-weight: 400;
		margin-bottom: 52px;
		line-height: 150%;
		color: var(--text-2);
	}

	@media (max-width: 800px) {
		.title {
			font-size: 36px;
			/* margin-top: 0px; */
		}
		.subtitle {
			font-size: 16px;
			width: 100%;
			max-width: unset;
		}
	}

	@media (max-width: 900px) {
		.hero {
			height: 800px;
			padding-top: 0px;
		}
		.subtitle {
			font-size: 20px;
			max-width: 560px;
			text-align: center;
			margin-bottom: 48px;
		}
	}
</style>
