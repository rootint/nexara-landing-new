<script>
	import {
		AudioLines,
		CircleDollarSign,
		Cloud,
		Code,
		Globe,
		Navigation,
		Image,
		Server,
		ShieldCheck,
		Subtitles,
		Timer,
		UserCheck,
		Database,
		TextSearch
	} from 'lucide-svelte';
	import russia from '$lib/assets/russia.svg';
	import world from '$lib/assets/world.svg';
	import * as m from '$paraglide/messages.js';
	import { getLocale } from '$paraglide/runtime';
</script>

<section class="features" id="features">
	<h2>{m.advantages_title()}</h2>
	<h3>{m.advantages_subtitle()}</h3>
	<div class="bento-grid">
		<div class="card price">
			<Image></Image>
			<h3 class="card-title">{m.advantages_price_title()}</h3>
			<p class="card-desc">{m.advantages_price_subtitle()}</p>
		</div>
		<div class="card integration">
			<UserCheck></UserCheck>
			<h3 class="card-title">{m.advantages_easyintegration_title()}</h3>
			<p class="card-desc">{m.advantages_easyintegration_subtitle()}</p>
		</div>
		<div class="card russia">
			<img src={russia} class="russia-img" alt="Map of Russia" />
			<Globe></Globe>
			<h3 class="card-title">{m.advantages_russianservice_title()}</h3>
			<p class="card-desc">
				{m.advantages_russianservice_subtitle()}
			</p>
		</div>
		<div class="card flexibility">
			<div class="feature-container">
				<div class="feature">
					<ShieldCheck></ShieldCheck>
				</div>
				<div class="feature">
					<Server></Server>
				</div>
				<div class="feature">
					<Cloud></Cloud>
				</div>
			</div>
			<h3 class="card-title">{m.advantages_flexible_title()}</h3>
			<p class="card-desc">{m.advantages_flexible_subtitle()}</p>
		</div>
		<div class="card functions">
			<div class="feature-container">
				<div class="feature">
					<Database></Database>
				</div>
				<div class="feature">
					<Subtitles></Subtitles>
				</div>
				<div class="feature">
					<TextSearch></TextSearch>
				</div>
			</div>
			<h3 class="card-title">{m.advantages_functionality_title()}</h3>
			<p class="card-desc">{m.advantages_functionality_subtitle()}</p>
		</div>
	</div>
</section>

<style>
	.russia-img {
		width: 100%;
	}
	.feature {
		height: 56px;
		width: 56px;
		display: flex;
		align-items: center;
		justify-content: center;
		/* padding: 16px; */
		/* background-color: #222; */
		background-color: var(--card-bg);
		border-radius: 12px;
		border: rgba(255, 255, 255, 0.05) solid 1px;
	}
	.feature-container {
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 100%;
	}
	.nexara {
		background-color: #fff !important;
	}
	.nexara-text {
		color: #fff !important;
		background-color: transparent !important;
		font-weight: 450;
	}
	.narrow-bar-container {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		justify-content: start;
		/* align-items: start; */
	}
	.narrow-bar {
		background-color: #444;
		border-radius: 12px;
		margin-bottom: 8px;
		height: 10px;
		border: none;
	}
	.narrow-bar-text {
		color: #aaa;
	}
	.x-text {
		display: flex;
		flex-shrink: 0;
		font-size: 32px;
		font-weight: 400;
		margin: 0;
		padding: 0;
		line-height: 80%;
		color: #777;
	}
	.speed-bar {
		display: flex;
		width: 100%;
		gap: 24px;
		justify-content: start;
	}
	.speed {
		grid-column: span 7;
		grid-row: span 2;
	}
	.accuracy {
		grid-column: span 5;
		grid-row: span 2;
	}
	.price,
	.integration {
		grid-column: span 4;
		grid-row: span 1;
	}
	.flexibility,
	.functions {
		grid-column: span 4;
		grid-row: span 2;
	}
	.russia {
		grid-column: span 4;
		grid-row: span 3;
	}
	.bars-container {
		display: flex;
		flex-direction: column;
		gap: 24px;
		margin-top: 20px;
		width: 100%;
	}
	.bar {
		border-radius: 12px;
		padding: 8px 16px;
		color: #fff;
		background-color: #282828;
	}
	.bar-nexara {
		border-radius: 12px;
		padding: 8px 16px;
		background-color: #fff;
		color: #111;
		font-weight: 450;
	}
	.bar-text {
		color: #999;
		font-size: 16px;
	}
	.bar-text-nexara {
		color: #fff;
		font-size: 16px;
	}
	.result-row {
		display: flex;
		align-items: center;
		gap: 16px;
	}
	.top-desc {
		font-size: 12px;
		margin: 0;
		padding: 0;
		color: #777;
	}
	.card-title {
		margin-top: 32px;
		margin-bottom: 20px;
		font-size: 24px;
		text-align: start;
		color: var(--text);
		font-weight: 480;
	}
	.card-desc {
		line-height: 145%;
		font-size: 16px;
		margin: 0;
		text-align: start;
		padding: 0;
		z-index: 100;
		color: var(--text-2);
	}
	.bento-grid {
		display: grid;
		gap: 32px;
		grid-template-columns: repeat(12, 1fr);
		grid-template-rows: auto;
		margin-bottom: 64px;
		margin-top: 64px;
	}
	.card {
		position: relative;
		border-radius: 12px;
		padding: 32px;
		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: end;
		box-sizing: border-box;
		background-color: var(--card-bg);
		border: 1px solid var(--border);
		backdrop-filter: blur(24px);
		transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg)
			skew(0deg, 0deg);
		transform-style: preserve-3d;
	}

	.features {
		display: flex;
		flex-direction: column;
		margin-top: 128px;
	}

	@media (max-width: 1200px) {
		.bento-grid {
			display: grid;
			gap: 24px;
			grid-template-columns: repeat(12, 1fr);
			grid-template-rows: auto;
			margin-bottom: 96px;
			margin-top: 48px;
		}
		.speed {
			grid-column: span 7;
			grid-row: span 2;
		}
		.accuracy {
			grid-column: span 5;
			grid-row: span 2;
		}
		.price,
		.integration {
			grid-column: span 4;
			grid-row: span 1;
		}
		.flexibility,
		.functions {
			grid-column: span 4;
			grid-row: span 2;
		}
		.russia {
			grid-column: span 4;
			grid-row: span 3;
		}
	}

	@media (max-width: 968px) {
		.bento-grid {
			display: grid;
			gap: 16px;
			grid-template-columns: repeat(12, 1fr);
			grid-template-rows: auto;
			margin-bottom: 96px;
			margin-top: 48px;
		}
		.speed {
			grid-column: span 12;
			grid-row: span 2;
		}
		.accuracy {
			grid-column: span 8;
			grid-row: span 2;
		}
		.price,
		.integration {
			grid-column: span 4;
			grid-row: span 1;
		}
		.flexibility,
		.functions {
			grid-column: span 6;
			grid-row: span 2;
		}
		.russia {
			grid-column: span 12;
			grid-row: span 3;
		}
	}

	@media (max-width: 768px) {
		.bento-grid {
			display: flex;
			flex-direction: column;
			gap: 16px;
			grid-template-columns: repeat(12, 1fr);
			grid-template-rows: auto;
			margin-bottom: 96px;
			margin-top: 48px;
		}
		.speed {
			grid-column: span 12;
			grid-row: span 2;
		}
		.accuracy {
			grid-column: span 8;
			grid-row: span 2;
		}
		.price,
		.integration {
			grid-column: span 4;
			grid-row: span 1;
		}
		.flexibility,
		.functions {
			grid-column: span 6;
			grid-row: span 2;
		}
		.russia {
			grid-column: span 12;
			grid-row: span 3;
		}

		.narrow-bar.nexara {
			max-width: 100% !important;
		}

		.narrow-bar {
			max-width: 100px;
		}

		.features {
			display: flex;
			flex-direction: column;
			margin-top: 72px;
		}
	}
</style>
