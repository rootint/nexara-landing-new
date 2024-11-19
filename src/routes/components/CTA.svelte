<script>
	import MainButton from './MainButton.svelte';
	import { ArrowUpRight } from 'lucide-svelte';
</script>

<section class="cta">
	<div class="text-container">
		<h2>Давайте работать вместе!</h2>
		<p>Напишите нам и мы обсудим возможности интеграции.</p>
	</div>
	<a
		href="https://t.me/RND_RandoM"
	>
		<button class="cta-btn">
			<div class="row">
				<p class="button-text">Связаться с нами</p>
				<div class="icon">
					<ArrowUpRight color="#fff"></ArrowUpRight>
				</div>
			</div>
		</button>
	</a>
</section>

<style>
	.cta-btn {
		background-color: #111;
		padding: 24px 48px;
		border-radius: 12px;
		border: none;
		cursor: pointer;
		min-width: 274px;
	}
	.cta-btn:hover {
		animation: gradient-shift 2s linear infinite;
	}
	.row {
		display: flex;
		align-items: center;
	}
	.icon {
		margin-top: 2px;
	}
	.button-text {
		margin-right: 12px;
		color: #fff;
		font-weight: 450;
		font-size: 20px;
		background-color: none;
		margin-bottom: 0px;
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
		.cta-btn {
			padding: 20px 28px;
			min-width: unset;
		}
	}

	@media (max-width: 800px) {
		.cta-btn {
			padding: 16px 24px;
			min-width: 211px;
		}
		p {
			margin-right: 6px;
			color: #111;
			font-size: 16px;
			background-color: none;
		}
		.row {
			align-items: center;
		}
	}
	.cta {
		display: flex;
		justify-content: space-between;
		background-color: #fff;
		border-radius: 12px;
		padding: 48px;
		margin-top: 172px;
		margin-bottom: 172px;
	}

	h2 {
		color: var(--bg);
	}

	p {
		color: var(--bg);
		font-size: 20px;
		font-weight: 400;
	}
	.text-container {
		display: flex;
		flex-direction: column;
		align-items: start;
	}

	@media (max-width: 1200px) {
		.cta {
			margin-top: 96px;
			margin-bottom: 96px;
		}
	}

	@media (max-width: 1000px) {
		.cta {
			flex-direction: column;
			align-items: center;
			justify-content: center;
			margin-top: 72px;
			margin-bottom: 72px;
		}
		h2 {
			text-align: center;
		}

		p {
			text-align: center;
			font-size: 16px;
			margin-bottom: 24px;
		}

		.text-container {
			display: flex;
			flex-direction: column;
			align-items: center;
		}
	}
</style>
