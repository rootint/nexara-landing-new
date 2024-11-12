<script>
	import MainButton from './MainButton.svelte';
</script>

<section class="hero">
	<div class="animate-text">
		<h1 class="title">Быстрый и доступный API для расшифровки аудио</h1>
		<p class="subtitle">
			Мгновенная расшифровка встреч, звонков и видео-контента на российском рынке.
		</p>
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
		max-width: 900px;
        margin-top: 72px;
		margin-bottom: 40px;
		color: var(--text);
	}

	.animate-text {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		animation: slideUp 0.7s ease;
	}

	.animate {
		animation: fadeIn 0.7s ease;
	}

	.subtitle {
		font-size: 24px;
		max-width: 560px;
		text-align: center;
		margin-bottom: 56px;
		line-height: 150%;
		color: var(--text-2);
	}

	@media (max-height: 720px) {
		.hero {
			height: 720px;
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
