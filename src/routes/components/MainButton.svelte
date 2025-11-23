<script>
	import * as m from '$paraglide/messages.js';
	import { getLocale } from '$paraglide/runtime';
	import { page } from '$app/stores';

	/**
	 * Creates the dashboard URL with current query parameters and btn_source tracking
	 */
	$: dashboardUrl = (() => {
		const baseUrl = getLocale() === 'ru' ? 'https://app.nexara.ru' : 'https://app.nexara.ru/en';
		const searchParams = new URLSearchParams($page.url.searchParams);
		searchParams.set('btn_source', 'hero');
		return `${baseUrl}?${searchParams.toString()}`;
	})();
</script>

<div class="button-row">
	<a href={dashboardUrl}>
		<button class="cta-btn">
			<div class="row">
				<p>{m.hero_try_button()}</p>
			</div>
		</button>
	</a>
	<a href="https://t.me/RND_RandoM" target="_blank" rel="noopener noreferrer">
		<button class="contact-btn">
			<div class="row">
				<p class="contact">{m.hero_contact_us()}</p>
			</div>
		</button>
	</a>
	<!-- <p class="subtitle">0,36 ₽/мин или дешевле</p> -->
</div>

<style>
	.button-row {
		display: flex;
		gap: 32px;
		align-items: center;
	}
	.contact {
		color: #fff;
	}
	.contact-btn {
		background-color: rgba(255, 255, 255, 0);
		padding: 16px 36px;
		border-radius: 12px;
		border: rgba(255, 255, 255, 0.15) 1px solid;
		cursor: pointer;
		/* min-width: 274px; */
	}
	.cta-btn {
		background-color: #fff;
		padding: 16px 36px;
		border-radius: 12px;
		border: none;
		cursor: pointer;
		/* min-width: 274px; */
	}
	.cta-btn:hover {
		animation: gradient-shift 2s linear infinite;
	}
	.row {
		display: flex;
	}
	.icon {
		margin-top: 2px;
	}
	p {
		color: #111;
		font-weight: 450;
		font-size: 20px;
		background-color: none;
	}

	@keyframes gradient-shift {
		0% {
			background-position: 0% center;
		}
		100% {
			background-position: -200% center;
		}
	}

	@media (max-width: 1200px) {
		.cta-btn,
		.contact-btn {
			padding: 20px 28px;
			min-width: unset;
		}
	}

	@media (max-width: 800px) {
		.button-row {
			display: flex;
			flex-direction: column;
			width: 100%;
			gap: 24px;
		}
		.cta-btn {
			width: 100%;
		}
		.contact-btn {
			width: 100%;
		}
		.cta-btn,
		.contact-btn {
			padding: 16px 24px;
			/* min-width: 211px; */
		}
		p {
			/* margin-right: 6px; */
			color: #111;
			font-size: 16px;
			background-color: none;
		}
		.row {
			align-items: center;
		}
	}
</style>
