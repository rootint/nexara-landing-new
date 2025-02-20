<script>
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
	<div class="animate-text">
		<!-- <h1 class="title">
			Быстрый и доступный API для <span
				style="font-family: 'Fira Code', monospace; font-weight: 450;">{scrambledWord}</span
			> речи
		</h1> -->
        <h1 class="title">
			Быстрый и доступный API для транскрибации речи
		</h1>
		<p class="subtitle">Российский сервис транскрибации аудио и видео. Быстрая интеграция</p>
	</div>
	<div class="animate">
		<MainButton></MainButton>
	</div>
</section>

<style>
	.hero {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: 0 auto;
		height: 100vh;
		position: relative;
		min-height: -webkit-fill-available;
	}
	.title {
		text-align: center;
		max-width: 860px;
		margin-top: 72px;
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
		animation: fadeIn 1s ease;
	}

	.subtitle {
		font-size: 24px;
		max-width: 560px;
		text-align: center;
		font-weight: 400;
		margin-bottom: 52px;
		line-height: 150%;
		color: var(--text-2);
	}

	@media (max-width: 800px) {
		.title {
			font-size: 36px;
			margin-top: 0px;
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
		}
		.subtitle {
			font-size: 20px;
			max-width: 560px;
			text-align: center;
			margin-bottom: 48px;
		}
	}
</style>
