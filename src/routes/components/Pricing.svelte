<script>
	import { Check, ArrowUpRight } from 'lucide-svelte';
	import * as m from '$paraglide/messages.js';
	import { page } from '$app/stores';

	/**
	 * Creates the dashboard URL with current query parameters and btn_source tracking
	 */
	$: dashboardUrl = (() => {
		const baseUrl = 'https://ailoy.nexara.ru/';
		const searchParams = new URLSearchParams($page.url.searchParams);
		searchParams.set('btn_source', 'pricing');
		return `${baseUrl}?${searchParams.toString()}`;
	})();
</script>

<section class="pricing" id="pricing">
	<h2>
		{m.pricing_title()}
	</h2>
	<h3>{m.pricing_subtitle()}</h3>
	<div class="cards">
		<div class="card">
			<!-- <div class="price">{m.pricing_flexible_price()}</div> -->
			<h3 class="card-title">{m.pricing_flexible_title()}</h3>
			<div class="option-wrapper">
				<div class="option-container">
					<Check color="#fff" size="20" />
					<p class="option-text">{m.pricing_flexible_point1()}</p>
				</div>
				<div class="option-container">
					<Check color="#fff" size="20" style="min-width: 20px;" />
					<p class="option-text">{m.pricing_flexible_point2()}</p>
				</div>
				<div class="option-container">
					<Check color="#fff" size="20" style="min-width: 20px;" />
					<p class="option-text">{m.pricing_flexible_point3()}</p>
				</div>
				<div class="option-container">
					<Check color="#fff" size="20" style="min-width: 20px;" />
					<p class="option-text">{m.pricing_flexible_point4()}</p>
				</div>
				<div class="option-container">
					<Check color="#fff" size="20" style="min-width: 20px;" />
					<p class="option-text">{m.pricing_flexible_point5()}</p>
				</div>
			</div>
			<a class="try-button" href={dashboardUrl}
				><div class="button-row">
					<p class="btn-text">{m.pricing_flexible_button()}</p>
					<!-- <ArrowUpRight color="#111" size="20"></ArrowUpRight> -->
				</div></a
			>
		</div>
		<div class="card">
			<h3 class="card-title">{m.pricing_enterprise_title()}</h3>
			<div class="option-wrapper">
				<div class="option-container">
					<Check color="#76C76B" size="20" style="min-width: 20px;" />
					<p class="option-text">{m.pricing_enterprise_point1()}</p>
				</div>
				<div class="option-container">
					<Check color="#76C76B" size="20" style="min-width: 20px;" />
					<p class="option-text">{m.pricing_enterprise_point2()}</p>
				</div>
				<div class="option-container">
					<Check color="#76C76B" size="20" style="min-width: 20px;" />
					<p class="option-text">{m.pricing_enterprise_point3()}</p>
				</div>
				<div class="option-container">
					<Check color="#76C76B" size="20" style="min-width: 20px;" />
					<p class="option-text">{m.pricing_enterprise_point4()}</p>
				</div>
				<div class="option-container">
					<Check color="#76C76B" size="20" style="min-width: 20px;" />
					<p class="option-text">{m.pricing_enterprise_point5()}</p>
				</div>
				<!-- <div class="option-container">
					<Check color="#76C76B" size="20" style="min-width: 20px;" />
					<p class="option-text">{m.pricing_enterprise_point6()}</p>
				</div> -->
				<!-- <div class="option-container">
					<Check color="#76C76B" size="20" style="min-width: 20px;" />
					<p class="option-text">Модели на Ваш выбор</p>
				</div> -->
			</div>
			<div style="flex: 1;"></div>
			<a
				class="light try-button"
				href="https://t.me/RND_RandoM"
				target="_blank"
				rel="noopener noreferrer"
				><div class="button-row">
					<p class="btn-text light no-border">{m.pricing_enterprise_button()}</p>
					<!-- <ArrowUpRight color="#fff" size="20"></ArrowUpRight> -->
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
		background-color: var(--text) !important;
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
		background-color: var(--primary);
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
		color: var(--text);
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
		background-color: var(--card-bg);
		border: 1px solid var(--border);
		backdrop-filter: blur(24px);
		max-width: 400px;
		transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg)
			skew(0deg, 0deg);
		transform-style: preserve-3d;
	}
	.pricing {
		display: flex;
		flex-direction: column;
		margin-top: 156px;
	}

	@media (max-width: 768px) {
		.pricing {
			display: flex;
			margin-top: 72px;
		}
	}
</style>
