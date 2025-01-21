<script>
	import { ArrowUpRight } from 'lucide-svelte';
</script>

<div class="button-col">
	<a
		href="https://t.me/RND_RandoM"
	>
		<button class="cta-btn">
			<div class="row">
				<p>Связаться с нами</p>
				<div class="icon">
					<ArrowUpRight color="#111"></ArrowUpRight>
				</div>
			</div>
		</button>
	</a>
	<p class="subtitle">0.36₽/мин</p>
</div>

<style>
    .button-col {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
	.subtitle {
		color: #aaa;
		margin-right: 0;
		font-weight: 300;
		font-size: 16px;
		text-align: center;
		margin-top: 12px;
	}
	.cta-btn {
		background-color: #fff;
		padding: 22px 42px;
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
	}
	.icon {
		margin-top: 2px;
	}
	p {
		margin-right: 12px;
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
</style>
