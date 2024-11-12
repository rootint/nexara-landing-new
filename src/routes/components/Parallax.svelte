<script>
	import green from '$lib/assets/green.svg';
	import orange from '$lib/assets/orange.svg';
	import red from '$lib/assets/red.svg';
	import purple from '$lib/assets/purple.svg';
	import { onMount } from 'svelte';

	let scrollPosition = 0;

	onMount(() => {
		const handleScroll = () => {
			scrollPosition = window.scrollY;
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	function handleScroll() {
		if (!ticking) {
			requestAnimationFrame(() => {
				scrollY = window.scrollY;
				ticking = false;
			});

			ticking = true;
		}
	}
</script>

<div class="parallax-container">
	<img src={green} width="794" style="right: -600px; bottom: -300px;" />
	<img src={red} width="547" style="top: -400px; left: 20%;" />
	<img src={orange} width="685" style="bottom: 0px; left: -500px" />
	<img src={purple} width="794" style="right: -350px; top: 10px" />
</div>

<style>
	.parallax-container {
		position: static;
		animation: fadeInParallax 0.7s ease;
	}
	img {
		transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg)
			skew(0deg, 0deg);
		transform-style: preserve-3d;
		position: absolute;
	}

	@keyframes fadeInParallax {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
