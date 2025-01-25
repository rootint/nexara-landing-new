<script>
	import { Check, ArrowUpRight } from 'lucide-svelte';
</script>

<section class="pricing" id="pricing">
	<h2>Тарифы</h2>
	<h3>Выберите план, подходящий Вам</h3>
	<div class="cards">
		<div class="card">
			<div class="price">0.36₽/мин</div>
			<h3 class="card-title">Гибкий</h3>
			<div class="option-wrapper">
				<div class="option-container">
					<Check color="#fff" size="20" />
					<p class="option-text">Платите за то, что используете</p>
				</div>
				<div class="option-container">
					<Check color="#fff" size="20" />
					<p class="option-text">Автоматическое масштабирование</p>
				</div>
				<div class="option-container">
					<Check color="#fff" size="20" />
					<p class="option-text">Поддержка 57 языков</p>
				</div>
				<div class="option-container">
					<Check color="#fff" size="20" />
					<p class="option-text">Автоматическое определение языка</p>
				</div>
				<div class="option-container">
					<Check color="#fff" size="20" />
					<p class="option-text">Поддержка различных аудио и видеоформатов</p>
				</div>
			</div>
			<a class="try-button" href="https://app.nexara.ru/"
				><div class="button-row">
					<p class="btn-text">Начать сейчас</p>
					<ArrowUpRight color="#111" size="20"></ArrowUpRight>
				</div></a
			>
		</div>
		<div class="card">
			<h3 class="card-title">Кастомный</h3>
			<div class="option-wrapper">
				<div class="option-container">
					<Check color="#fff" size="20" />
					<p class="option-text">То же самое, что и в Гибком тарифе</p>
				</div>
				<div class="option-container">
					<Check color="#fff" size="20" />
					<p class="option-text">Гибкое ценообразование при масштабировании</p>
				</div>
				<div class="option-container">
					<Check color="#fff" size="20" />
					<p class="option-text">Приоритетная поддержка</p>
				</div>
				<div class="option-container">
					<Check color="#fff" size="20" />
					<p class="option-text">Выделенные вычислительные ресурсы</p>
				</div>
				<div class="option-container">
					<Check color="#fff" size="20" />
					<p class="option-text">Модели на Ваш выбор</p>
				</div>
			</div>
			<a class="light try-button" href="https://t.me/RND_RandoM"
				><div class="button-row">
					<p class="btn-text light no-border">Связаться с нами</p>
					<ArrowUpRight color="#fff" size="20"></ArrowUpRight>
				</div></a
			>
		</div>
	</div>
</section>

<style>
    .no-border {
        border: none !important;
    }
    .light {
        color: #fff !important;
        background-color: #181818 !important;
        border: rgba(255, 255, 255, 0.12) 1px solid;
    }
	.button-row {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 8px;
	}
	.try-button {
		text-decoration: none;
		background-color: #fff;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 12px;
		padding: 16px;
		margin-top: 20px;
	}
	.btn-text {
		color: #111;
		font-weight: 500;
	}
	p {
		line-height: 140%;
	}
	.option-wrapper {
		display: flex;
		flex-direction: column;
		align-items: start;
		gap: 16px;
	}
	.price {
		position: absolute;
		top: 32px;
		right: 32px;
		/* background-color: #fff; */
		color: #fff;
        border: rgba(255, 255, 255, 0.07) 1px solid;
		padding: 6px 8px;
		font-size: 16px;
		border-radius: 8px;
		font-weight: 450;
	}
	.option-container {
		display: flex;
		align-items: start;
	}

	.option-text {
		margin-left: 8px;
	}
	.cards {
		display: flex;
		flex-wrap: wrap;
		gap: 32px;
		margin-top: 48px;
		justify-content: center;
	}
	.card-title {
		margin-bottom: 20px;
		font-size: 24px;
		text-align: start;
		color: #fff;
		font-weight: 480;
	}
	.card {
		position: relative;
		border-radius: 12px;
		padding: 32px;
		display: flex;
		flex-direction: column;
		align-items: start;
		box-sizing: border-box;
		flex: 1 0 300px;
		background-color: rgba(255, 255, 255, 0.015);
		backdrop-filter: blur(24px);
		max-width: 400px;
		transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg)
			skew(0deg, 0deg);
		transform-style: preserve-3d;
	}
	.card::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		padding: 1px; /* Thickness of the border */
		border-radius: 12px;
		background: linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.14));
		-webkit-mask:
			linear-gradient(#fff 0 0) content-box,
			linear-gradient(#fff 0 0);
		mask:
			linear-gradient(#fff 0 0) content-box,
			linear-gradient(#fff 0 0);
		-webkit-mask-composite: xor;
		mask-composite: exclude;
		pointer-events: none; /* Prevents interaction with the pseudo-element */
	}
	.pricing {
		display: flex;
		flex-direction: column;
		margin-top: 156px;
	}
</style>
