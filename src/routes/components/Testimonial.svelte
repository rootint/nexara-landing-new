<script>
	export let text;
	export let subtitle;
	export let image;
</script>

<section class="testimonial">
	<div class="card">
		<div class="content">
			<img src={image} width="108" />
			<div class="text-column">
				<p class="text">{text}</p>
				<p class="subtitle">{subtitle}</p>
			</div>
		</div>
	</div>
</section>

<style>
	img {
		min-width: 108px;
		border-radius: 12px;
	}
	.text {
		line-height: 135%;
		margin-bottom: 16px;
	}
	.subtitle {
		color: var(--text-2);
	}
	.text-column {
		display: flex;
		flex-direction: column;
		margin-left: 32px;
	}
	.testimonial {
		display: flex;
		flex-direction: column;
		align-items: center;
        margin-top: 96px;
		margin-bottom: 96px;
	}
	.content {
		display: flex;
		flex-direction: row;
		align-items: start;
	}
	.card {
		max-width: 900px;
		position: relative;
		border-radius: 12px;
		padding: 32px;
		display: flex;
		flex-direction: column;
		align-items: start;
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

	@media (max-width: 800px) {
		.content {
            flex-direction: column;
            align-items: center;
        }
        .text-column {
            margin-left: 0;
            margin-top: 24px;
            text-align: center;
        }
	}
</style>
