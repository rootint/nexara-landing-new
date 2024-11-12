<script>
	import russia from '$lib/assets/russia.svg';
	import { Navigation } from 'lucide-svelte';
</script>

<section class="usage" id="for-who">
	<h2>Применение</h2>
	<h3>Узнайте, почему вам стоит попробовать наш API сегодня</h3>
	<div class="cards">
		<div class="card">
			<h3 class="card-title">Анализ звонков и разговоров</h3>
			<p class="card-desc">
				Используйте наш OpenAI-совместимый API — просто замените одну строку кода.
			</p>
		</div>
		<div class="card">
			<h3 class="card-title">Отправьте аудиофайлы</h3>
			<p class="card-desc">Загружайте файлы в любом формате для мгновенной расшифровки.</p>
		</div>
		<div class="card">
			<h3 class="card-title">Получите транскрипцию</h3>
			<p class="card-desc">
				В считанные секунды вы получите готовый текст, готовый к дальнейшему использованию.
			</p>
		</div>
	</div>
</section>

<style>
	.cards {
		display: flex;
		flex-wrap: wrap;
		gap: 32px;
		margin-top: 40px;
	}
	.card-title {
		margin-top: 32px;
		margin-bottom: 20px;
		font-size: 24px;
		text-align: start;
		font-weight: 450;
	}
	.card-desc {
		line-height: 140%;
		font-size: 16px;
		margin: 0;
		text-align: start;
		padding: 0;
	}
	.card {
		position: relative;
		border: 1px solid rgba(255, 255, 255, 0.11);
		border-radius: 12px;
		padding: 32px;
		display: flex;
		flex-direction: column;
		align-items: start;
		box-sizing: border-box;
		flex: 1 0 300px;
		background-color: var(--bg-2);
	}
	.usage {
		display: flex;
		flex-direction: column;
		margin-top: 72px;
	}
</style>
