<script>
	import { ArrowUpRight } from 'lucide-svelte';
</script>

<a
	href="https://docs.google.com/forms/d/e/1FAIpQLSd6SasqzSD3w_gI49MOV6lrMKel3Sbxhhoee8hopLFDQJJhUg/viewform"
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
<p class="subtitle">0.6₽/мин или на Ваших серверах</p>

<style>
	.subtitle {
		color: #ddd;
        margin-right: 0;
        font-weight: 300;
        font-size: 16px;
        text-align: center;
        margin-top: 12px;
	}
	.cta-btn {
		background-color: #fff;
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
