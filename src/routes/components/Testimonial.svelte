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
		/* background-color: rgba(255, 255, 255, 0.015); */
        background-color: var(--card-bg);
		backdrop-filter: blur(24px);
		transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg)
			skew(0deg, 0deg);
		transform-style: preserve-3d;
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
        .testimonial {
            margin-top: 64px;
            margin-bottom: 64px;
        }
	}
</style>
