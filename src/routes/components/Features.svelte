<script>
	import russia from '$lib/assets/russia.svg';
	import { Navigation } from 'lucide-svelte';
</script>

<section class="features" id="features">
	<h2>Преимущества</h2>
	<h3>Узнайте, почему вам стоит попробовать наш API сегодня</h3>
	<div class="cards">
		<div class="card-col">
			<div class="card">
				<p class="top-desc">транскрипция 30 минут аудио</p>
				<div class="bars-container">
					<div class="result-row">
						<div class="bar-nexara">Nexara</div>
						<p class="bar-text-nexara">18 секунд</p>
					</div>
					<div class="result-row">
						<div class="bar" style="width: 350px;">Yandex SpeechKit</div>
						<p class="bar-text">1 минута</p>
					</div>
					<div class="result-row">
						<div class="bar" style="width: 400px;">OpenAI</div>
						<p class="bar-text">1.5 минуты</p>
					</div>
				</div>
				<h3 class="card-title">Высокая скорость</h3>
				<p class="card-desc">До 5 раз быстрее OpenAI, и до 4 раз быстрее Yandex SpeechKit.</p>
			</div>
			<div style="height: 32px;"></div>
			<div class="card">
				<div class="code-container">
					<div class="line-numbers">1<br />2<br />3<br />4<br />5<br />6<br /></div>
					<div class="code">
						import openai<br /><br />client = OpenAI(<br />&nbsp;&nbsp;&nbsp;&nbsp;<span
							style="font-weight: 550; font-family: 'Fira Code', monospace;"
							>base_url="https://api.nexara.ru/api/v1",</span
						>
						<br />&nbsp;&nbsp;&nbsp;&nbsp;api_key="ВАШ_КЛЮЧ", <br />)
					</div>
				</div>
				<h3 class="card-title">Легкая интеграция</h3>
				<p class="card-desc">Забудьте о сложностях перехода. Одна строка кода – и вы с нами.</p>
			</div>
		</div>
		<div class="card-col">
			<div class="card">
				<p class="top-desc">WER (%)</p>
				<div class="bars-container-small">
					<div class="result-row">
						<div class="bar-nexara small" style="width: 220px;">Nexara</div>
						<p class="bar-text-nexara">11%</p>
					</div>
					<div class="result-row">
						<div class="bar small" style="width: 220px;">Whisper v3</div>
						<p class="bar-text">11%</p>
					</div>
					<div class="result-row">
						<div class="bar small" style="width: 220px;">OpenAI</div>
						<p class="bar-text">11%</p>
					</div>
					<div class="result-row">
						<div class="bar small" style="width: 250px;">Distil Whisper</div>
						<p class="bar-text">13%</p>
					</div>
					<div class="result-row">
						<div class="bar small" style="width: 300px;">Whisper (S)</div>
						<p class="bar-text">17%</p>
					</div>
				</div>
				<h3 class="card-title">Точность</h3>
				<p class="card-desc">Точность транскрипции как у лучших моделей в мире.</p>
			</div>
			<div style="height: 32px;"></div>
			<div class="card">
				<img src={russia} class="russia-img" height="230" />
				<Navigation size="32" style="z-index: 100;"></Navigation>
				<h3 class="card-title">Российский сервис</h3>
				<p class="card-desc">Разработан и размещен в России, не подвержен санкциям.</p>
			</div>
		</div>
	</div>
</section>

<style>
	.card {
		position: relative;
		border-radius: 12px;
		padding: 32px;
		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: end;
		box-sizing: border-box;
		flex: 1 0 300px;
		background-color: rgba(255, 255, 255, 0.015);
		backdrop-filter: blur(32px);
		min-height: 296px;
		transition: background-color 0.2s ease;
		min-width: 567px;
		max-width: 968px;
	}
	.card:hover {
		background-color: rgba(255, 255, 255, 0.025);
	}
	.russia-img {
		position: absolute;
		right: 32px;
	}
	.code-container {
		width: 100%;
		padding: 16px;
		border-radius: 12px;
		background-color: #202020;
		display: flex;
	}
	.line-numbers {
		margin-right: 16px;
		font-family: 'Fira Code', monospace;
		color: #777;
		min-width: 8px;
	}
	.code {
		font-family: 'Fira Code', monospace;
		color: #fdfdfd;
	}
	.card-col {
		box-sizing: border-box;
		flex: 1 0;
	}
	.small {
		padding: 4px 16px !important;
	}
	.bars-container {
		display: flex;
		flex-direction: column;
		gap: 20px;
		margin-top: 16px;
	}
	.bars-container-small {
		display: flex;
		flex-direction: column;
		gap: 16px;
		margin-top: 16px;
	}
	.bar {
		border-radius: 12px;
		padding: 8px 16px;
		color: #fff;
		background-color: #222;
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
	.cards {
		display: flex;
		flex-wrap: wrap;
		gap: 32px;
		margin-top: 48px;
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
		margin-top: 156px;
	}

	@media (max-width: 1224px) {
		.cards {
			flex-direction: column;
			align-items: center;
		}
	}
	@media (max-width: 800px) {
		.features {
			width: 100%;
		}
		.cards {
			width: 100%;
			min-width: unset;
		}
		.card-col {
			width: 100%;
		}
		.card {
			width: 100%;
			max-width: unset;
			min-width: unset;
		}
		.bar {
			max-width: 200px;
		}
		.bar-nexara {
			max-width: 200px;
		}

		.bars-container-small > .result-row > .bar-nexara {
			max-width: 150px;
		}
		.bars-container-small > .result-row > .bar {
			max-width: 150px;
		}
        .bars-container-small > .result-row:last-child > .bar {
			max-width: 200px;
		}
        .bars-container-small > .result-row:nth-last-child(2) > .bar {
			max-width: 170px;
		}
	}
</style>
