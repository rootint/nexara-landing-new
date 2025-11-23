<script>
	import { AudioLines, Braces, Code, Computer, FileMusic, Smartphone } from 'lucide-svelte';
	import * as m from '$paraglide/messages.js';
</script>

<section class="howitworks" id="how-works">
	<h2>{m.how_it_works_title()}</h2>
	<h3>{m.how_it_works_subtitle()}</h3>
	<div class="cards">
		<div class="card">
			<Computer size="32"></Computer>
			<h3 class="card-title">{m.how_it_works_step1_title()}</h3>
			<p class="card-desc">
				{m.how_it_works_step1_subtitle()}
			</p>
			<p class="bg-number">1</p>
		</div>
		<div class="card">
			<Smartphone size="32"></Smartphone>
			<h3 class="card-title">{m.how_it_works_step2_title()}</h3>
			<p class="card-desc">{m.how_it_works_step2_subtitle()}</p>
			<p class="bg-number">2</p>
		</div>
		<div class="card">
			<AudioLines size="32"></AudioLines>
			<h3 class="card-title">{m.how_it_works_step3_title()}</h3>
			<p class="card-desc">
				{m.how_it_works_step3_subtitle()}
			</p>
			<p class="bg-number">3</p>
		</div>
	</div>
</section>

<style>
	.bg-number {
		position: absolute;
		font-size: 40px;
		font-weight: 450;
		color: rgba(255, 255, 255, 0.11);
		right: 32px;
		top: 20px;
	}
	.cards {
		display: flex;
		flex-wrap: wrap;
		gap: 32px;
		margin-top: 48px;
	}
	.card-title {
		margin-top: 32px;
		margin-bottom: 20px;
		font-size: 24px;
		text-align: start;
		color: #fff;
		font-weight: 480;
	}
	.card-desc {
		line-height: 140%;
		font-size: 16px;
		margin: 0;
		text-align: start;
		padding: 0;
		color: var(--text-3);
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
	.howitworks {
		display: flex;
		flex-direction: column;
		margin-top: 72px;
		/* margin-bottom: 164px; */
	}
</style>
