<script>
	import {
		AudioLines,
		CircleDollarSign,
		Cloud,
		Code,
		Navigation,
		Server,
		ShieldCheck,
		Subtitles,
		Timer
	} from 'lucide-svelte';
	import russia from '$lib/assets/russia.svg';
</script>

<section class="features" id="features">
	<h2>Ключевые преимущества</h2>
	<h3>Узнайте, почему Вам стоит попробовать наше решение сегодня</h3>
	<div class="bento-grid">
		<div class="card speed">
			<p class="top-desc">X - минут транскрибации в минуту</p>
			<div class="bars-container">
				<div class="speed-bar">
					<div class="narrow-bar-container">
						<div class="narrow-bar nexara" style="width: 100%" />
						<p class="narrow-bar-text nexara-text">Nexara</p>
					</div>
					<p class="x-text nexara-text">240x</p>
				</div>
				<div class="speed-bar">
					<div class="narrow-bar-container">
						<div class="narrow-bar" style="width: 150px" />
						<p class="narrow-bar-text">OpenAI API</p>
					</div>
					<p class="x-text">35x</p>
				</div>
				<div class="speed-bar">
					<div class="narrow-bar-container">
						<div class="narrow-bar" style="width: 135px" />
						<p class="narrow-bar-text">Yandex SpeechKit</p>
					</div>
					<p class="x-text">30x</p>
				</div>
				<div class="speed-bar">
					<div class="narrow-bar-container">
						<div class="narrow-bar" style="width: 50px" />
						<p class="narrow-bar-text">Sber SaluteSpeech</p>
					</div>
					<p class="x-text">13x</p>
				</div>
			</div>
			<h3 class="card-title">Высокая скорость</h3>
			<p class="card-desc">Транскрибируйте час видео всего за 15 секунд.</p>
		</div>
		<div class="card accuracy">
			<p class="top-desc">Слова с ошибкой, %</p>
			<div class="bars-container">
				<div class="result-row">
					<div class="bar-nexara" style="width: 160px;">Nexara</div>
					<p class="bar-text-nexara">27%</p>
				</div>
				<div class="result-row">
					<div class="bar" style="width: 200px;">Whisper Large-v3</div>
					<p class="bar-text">31%</p>
				</div>
				<div class="result-row">
					<div class="bar" style="width: 220px;">OpenAI API</div>
					<p class="bar-text">35%</p>
				</div>
				<div class="result-row">
					<div class="bar" style="width: 260px;">Yandex SpeechKit</div>
					<p class="bar-text">43%</p>
				</div>
			</div>
			<h3 class="card-title">Точность</h3>
			<p class="card-desc">Качество транскрибации как у лучших моделей в мире.</p>
		</div>
		<div class="card price">
			<CircleDollarSign></CircleDollarSign>
			<h3 class="card-title">Низкая цена</h3>
			<p class="card-desc">До 6 раз дешевле Yandex SpeechKit.</p>
		</div>
		<div class="card integration">
			<Code></Code>
			<h3 class="card-title">Простая интеграция</h3>
			<p class="card-desc">Разработчики скажут вам спасибо.</p>
		</div>
		<div class="card russia">
			<img src={russia} class="russia-img" alt="Map of Russia" />
			<Navigation></Navigation>
			<h3 class="card-title">Российский сервис</h3>
			<p class="card-desc">
				Разработан и размещен в России, не подвержен санкциям. ФЗ-152 для On-Premise решений.
			</p>
		</div>
		<div class="card flexibility">
			<div class="feature-container">
				<div class="feature">
					<ShieldCheck></ShieldCheck>
				</div>
				<div class="feature">
					<Server></Server>
				</div>
				<div class="feature">
					<Cloud></Cloud>
				</div>
			</div>
			<h3 class="card-title">Гибкая настройка</h3>
			<p class="card-desc">Выбирайте On-Premise, выделенные серверы или защищенное Cloud API.</p>
		</div>
		<div class="card functions">
			<div class="feature-container">
				<div class="feature">
					<AudioLines></AudioLines>
				</div>
				<div class="feature">
					<Subtitles></Subtitles>
				</div>
				<div class="feature">
					<Timer></Timer>
				</div>
			</div>
			<h3 class="card-title">Богатый функционал</h3>
			<p class="card-desc">Разделение на говорящих, умные субтитры и временные метки.</p>
		</div>
	</div>
</section>

<style>
	.russia-img {
		width: 100%;
	}
	.feature {
		height: 56px;
		width: 56px;
		display: flex;
		align-items: center;
		justify-content: center;
		/* padding: 16px; */
		background-color: #222;
		border-radius: 12px;
		border: rgba(255, 255, 255, 0.05) solid 1px;
	}
	.feature-container {
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 100%;
	}
	.nexara {
		background-color: #fff !important;
	}
	.nexara-text {
		color: #fff !important;
		background-color: transparent !important;
		font-weight: 450;
	}
	.narrow-bar-container {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		justify-content: start;
		/* align-items: start; */
	}
	.narrow-bar {
		background-color: #444;
		border-radius: 12px;
		margin-bottom: 8px;
		height: 10px;
		border: none;
	}
	.narrow-bar-text {
		color: #aaa;
	}
	.x-text {
		display: flex;
		flex-shrink: 0;
		font-size: 32px;
		font-weight: 400;
		margin: 0;
		padding: 0;
		line-height: 80%;
		color: #aaa;
	}
	.speed-bar {
		display: flex;
		width: 100%;
		gap: 24px;
		justify-content: start;
	}
	.speed {
		grid-column: span 7;
		grid-row: span 2;
	}
	.accuracy {
		grid-column: span 5;
		grid-row: span 2;
	}
	.price,
	.integration {
		grid-column: span 4;
		grid-row: span 1;
	}
	.flexibility,
	.functions {
		grid-column: span 4;
		grid-row: span 2;
	}
	.russia {
		grid-column: span 4;
		grid-row: span 3;
	}
	.bars-container {
		display: flex;
		flex-direction: column;
		gap: 24px;
		margin-top: 20px;
		width: 100%;
	}
	.bar {
		border-radius: 12px;
		padding: 8px 16px;
		color: #fff;
		background-color: #282828;
	}
	.bar-nexara {
		border-radius: 12px;
		padding: 8px 16px;
		background-color: #fff;
		color: #111;
		font-weight: 450;
	}
	.bar-text {
		color: #999;
		font-size: 16px;
	}
	.bar-text-nexara {
		color: #fff;
		font-size: 16px;
	}
	.result-row {
		display: flex;
		align-items: center;
		gap: 16px;
	}
	.top-desc {
		font-size: 12px;
		margin: 0;
		padding: 0;
		color: #777;
	}
	.card-title {
		margin-top: 32px;
		margin-bottom: 20px;
		font-size: 24px;
		text-align: start;
		color: #fff;
		font-weight: 480;
	}
	.card-desc {
		line-height: 145%;
		font-size: 16px;
		margin: 0;
		text-align: start;
		padding: 0;
		z-index: 100;
		color: var(--text-3);
	}
	.bento-grid {
		display: grid;
		gap: 32px;
		grid-template-columns: repeat(12, 1fr);
		grid-template-rows: auto;
		margin-bottom: 64px;
		margin-top: 64px;
	}
	.card {
		position: relative;
		border-radius: 12px;
		padding: 32px;
		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: end;
		box-sizing: border-box;
		background-color: rgba(255, 255, 255, 0.015);
		backdrop-filter: blur(24px);
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

	.features {
		display: flex;
		flex-direction: column;
		margin-top: 128px;
	}

	@media (max-width: 1200px) {
		.bento-grid {
			display: grid;
			gap: 24px;
			grid-template-columns: repeat(12, 1fr);
			grid-template-rows: auto;
			margin-bottom: 96px;
			margin-top: 48px;
		}
		.speed {
			grid-column: span 7;
			grid-row: span 2;
		}
		.accuracy {
			grid-column: span 5;
			grid-row: span 2;
		}
		.price,
		.integration {
			grid-column: span 4;
			grid-row: span 1;
		}
		.flexibility,
		.functions {
			grid-column: span 4;
			grid-row: span 2;
		}
		.russia {
			grid-column: span 4;
			grid-row: span 3;
		}
	}

	@media (max-width: 968px) {
		.bento-grid {
			display: grid;
			gap: 16px;
			grid-template-columns: repeat(12, 1fr);
			grid-template-rows: auto;
			margin-bottom: 96px;
			margin-top: 48px;
		}
		.speed {
			grid-column: span 12;
			grid-row: span 2;
		}
		.accuracy {
			grid-column: span 8;
			grid-row: span 2;
		}
		.price,
		.integration {
			grid-column: span 4;
			grid-row: span 1;
		}
		.flexibility,
		.functions {
			grid-column: span 6;
			grid-row: span 2;
		}
		.russia {
			grid-column: span 12;
			grid-row: span 3;
		}
	}

	@media (max-width: 768px) {
		.bento-grid {
			display: flex;
			flex-direction: column;
			gap: 16px;
			grid-template-columns: repeat(12, 1fr);
			grid-template-rows: auto;
			margin-bottom: 96px;
			margin-top: 48px;
		}
		.speed {
			grid-column: span 12;
			grid-row: span 2;
		}
		.accuracy {
			grid-column: span 8;
			grid-row: span 2;
		}
		.price,
		.integration {
			grid-column: span 4;
			grid-row: span 1;
		}
		.flexibility,
		.functions {
			grid-column: span 6;
			grid-row: span 2;
		}
		.russia {
			grid-column: span 12;
			grid-row: span 3;
		}

		.narrow-bar.nexara {
			max-width: 100% !important;
		}

		.narrow-bar {
			max-width: 100px;
		}
	}
</style>
