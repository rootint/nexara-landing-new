<script>
	import { GraduationCap, Headset, Video } from 'lucide-svelte';
	import * as m from '$paraglide/messages.js';
</script>

<section class="usage" id="for-who">
	<h2>{m.usage_title()}</h2>
	<h3>{m.usage_subtitle()}</h3>
	<div class="cards">
		<div class="card">
			<Headset size="32"></Headset>
			<h3 class="card-title">{m.usage_step1_title()}</h3>
			<p class="card-desc">
				{m.usage_step1_subtitle()}
			</p>
		</div>
		<div class="card">
			<Video size="32"></Video>
			<h3 class="card-title">{m.usage_step2_title()}</h3>
			<p class="card-desc">
				{m.usage_step2_subtitle()}
			</p>
		</div>
		<div class="card">
			<GraduationCap size="32"></GraduationCap>
			<h3 class="card-title">{m.usage_step3_title()}</h3>
			<p class="card-desc">
				{m.usage_step3_subtitle()}
			</p>
		</div>
	</div>
</section>

<style>
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
		line-height: 145%;
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
	.usage {
		display: flex;
		flex-direction: column;
		margin-top: 156px;
	}
</style>
