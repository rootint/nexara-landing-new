<script>
	import { GraduationCap, Headset, Video } from 'lucide-svelte';
	import egor from '$lib/assets/egor.jpeg';
	import vasil from '$lib/assets/vasil.jpg';
	import ruslan from '$lib/assets/ruslan.jpg';
	import * as m from '$paraglide/messages.js';
</script>

<section class="usage" id="for-who">
	<h2>{m.reviews_title()}</h2>
	<h3>{m.reviews_subtitle()}</h3>
	<div class="cards">
		<div class="card">
			<!-- <Headset size="32"></Headset> -->
			<img src={ruslan} width="108" />
			<h3 class="card-title">@rousgg, Glabix</h3>
			<p class="card-desc">
				{m.reviews_ruslan_text()}
			</p>
		</div>
		<div class="card">
			<!-- <Video size="32"></Video> -->
			<img src={vasil} width="108" />
			<h3 class="card-title">
				{m.reviews_vasil_name()}
			</h3>
			<p class="card-desc">
				{m.reviews_vasil_text()}
			</p>
		</div>
		<div class="card">
			<!-- <Headset size="32"></Headset> -->
			<img src={egor} width="108" />
			<h3 class="card-title">@egorfing, Transcribator</h3>
			<p class="card-desc">
				{m.reviews_egor_text()}
			</p>
		</div>
	</div>
</section>

<style>
	img {
		min-width: 108px;
		border-radius: 12px;
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

	@media (max-width: 768px) {
		.usage {
			display: flex;
			margin-top: 72px;
		}
	}
</style>
