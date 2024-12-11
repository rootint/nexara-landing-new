<script>
	import icon from '$lib/assets/icon.png';
	import { onMount } from 'svelte';
	let showHeader = false;
	let scrollPosition = 0;

	// Function to handle scroll events
	const handleScroll = () => {
		scrollPosition = window.scrollY;
		showHeader = scrollPosition > 200;
	};

	// Add scroll event listener when the component mounts
	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<div class="header-container">
	<div class="header {showHeader ? 'visible' : ''}">
		<nav>
			<div class="top-row">
				<img src={icon} width="21" alt="logo" />
				<div style="width: 12px" />
				<p class="logo">Nexara</p>
			</div>
			<div class="top-row">
				<div class="hide-on-mobile">
					<a href="#pricing"><p>Тарифы</p></a>
					<div style="width: 4rem" />
					<a href="https://docs.nexara.ru/docs/quick-start"><p>Документация</p></a>
					<!-- <a href="#how-works"><p>Как работает</p></a>
					<div style="width: 4rem" />
					<a href="#features"><p>Преимущества</p></a>
					<div style="width: 4rem" />
					<a href="#for-who"><p>Для кого</p></a>
					<div style="width: 4rem" />
					<a href="#pricing"><p>Тарифы</p></a> -->
				</div>
			</div>
		</nav>
	</div>
</div>

<style>
	.logo {
		font-weight: 400;
	}
	a {
		text-decoration: none;
		font-weight: 300;
	}
	.hide-on-mobile {
		display: flex;
		align-items: center;
	}
	@media (max-width: 768px) {
		.hide-on-mobile {
			display: none;
		}
	}
	nav {
		color: #fff;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 100%;
		margin: 0 0;
		font-weight: 300;
		position: absolute;
		left: 24px;
		top: 0;
		right: 24px;
		animation: simpleFadeIn 0.7s ease;
		z-index: 100;
	}

	@media (max-width: 768px) {
		nav {
			color: #fff;
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin: 0 0;
			padding-top: 16px;
		}
	}

	.top-row {
		display: flex;
		align-items: center;
	}

	p {
		font-weight: 400;
		font-size: 1rem;
	}
	.header-container {
		position: fixed;
		top: 0;
		left: 8px;
		right: 8px;
		z-index: 999;
		display: flex;
		justify-content: center;
		pointer-events: none; /* Ensures header doesn't block other interactions */
	}

	.header {
		margin-top: 16px;
		background-color: rgba(48, 48, 48, 0.5);
		backdrop-filter: blur(24px);
		border: 1px solid rgba(255, 255, 255, 0.11);
		border-radius: 12px;
		color: #fff;
		height: 60px;
		width: 100%;
		max-width: 1200px; /* Matches your .app container */
		display: flex;
		align-items: center;
		justify-content: center;
		transition:
			transform 0.3s ease,
			opacity 0.3s ease;
		transform: translateY(-100%);
		opacity: 0;
		pointer-events: auto; /* Allow interactions within header */
		transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg)
			skew(0deg, 0deg);
	}

	.header.visible {
		transform: translateY(0);
		opacity: 1;
	}

	@media (max-width: 800px) {
		.header {
			visibility: hidden;
		}
	}
</style>
