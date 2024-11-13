<script>
	import { GraduationCap, Headset, Video } from 'lucide-svelte';
</script>

<section class="usage" id="for-who">
	<h2>Применение</h2>
	<h3>Узнайте, почему вам стоит попробовать наш API сегодня</h3>
	<div class="cards">
		<div class="card">
			<Headset size="32"></Headset>
			<h3 class="card-title">Анализ звонков и встреч</h3>
			<p class="card-desc">
				Автоматически расшифровывайте и анализируйте деловые звонки и встречи, чтобы выявлять
				ключевые моменты, задачи и улучшать качество обслуживания клиентов.
			</p>
		</div>
		<div class="card">
			<Video size="32"></Video>
			<h3 class="card-title">Расшифровка видео</h3>
			<p class="card-desc">
				Интегрируйте наш API, чтобы ваши платформы могли быстро преобразовывать аудиодорожки из
				видео и подкастов в текст.
			</p>
		</div>
		<div class="card">
			<GraduationCap size="32"></GraduationCap>
			<h3 class="card-title">Транскрипция лекций и учебных материалов</h3>
			<p class="card-desc">
				Добавьте поддержку автоматической расшифровки лекций и вебинаров в ваши образовательные
				платформы для создания текстовых материалов.
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
