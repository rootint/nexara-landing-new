<script>
	import { Check } from 'lucide-svelte';
</script>

<section class="pricing" id="pricing">
	<h2>Тарифы</h2>
	<h3>Выберите план, подходящий Вашему бизнесу.</h3>
	<div class="cards">
		<div class="card">
			<h3 class="card-title">Гибкий</h3>
			<div class="option-container">
				<Check color="#fff" size="20" />
				<p class="option-text">Платите за то, что используете</p>
			</div>
			<div class="option-container">
				<Check color="#fff" size="20" />
				<p class="option-text">Платите за то, что используете</p>
			</div>
			<div class="option-container">
				<Check color="#fff" size="20" />
				<p class="option-text">Платите за то, что используете</p>
			</div>
		</div>
		<div class="card">
			<h3 class="card-title">Кастомный</h3>
			<div class="option-container">
				<Check color="#fff" size="20" />
				<p class="option-text">Платите за то, что используете</p>
			</div>
			<div class="option-container">
				<Check color="#fff" size="20" />
				<p class="option-text">Платите за то, что используете</p>
			</div>
			<div class="option-container">
				<Check color="#fff" size="20" />
				<p class="option-text">Платите за то, что используете</p>
			</div>
		</div>
	</div>
</section>

<style>
	.option-container {
		display: flex;
		margin-bottom: 16px;
		align-items: start;
	}

	.option-text {
		margin-left: 8px;
	}
	.cards {
		display: flex;
		flex-wrap: wrap;
		gap: 32px;
		margin-top: 40px;
		justify-content: center;
	}
	.card-title {
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
		max-width: 400px;
	}
	.pricing {
		display: flex;
		flex-direction: column;
		margin-top: 72px;
	}
</style>
