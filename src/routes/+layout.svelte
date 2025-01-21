<script>
	import './styles.css';
	import './fonts.css';
	import Header from './components/Header.svelte';
	import Footer from './components/Footer.svelte';
	import Parallax from './components/Parallax.svelte';
	import ScrollableHeader from './components/ScrollableHeader.svelte';
</script>

<Parallax></Parallax>

<div class="app">
	<ScrollableHeader></ScrollableHeader>
	<Header></Header>
	<main>
		<slot />
	</main>
</div>
<footer>
	<Footer />
</footer>

<style>
	footer {
		position: relative;
		z-index: 100;
		padding: 32px;
		box-sizing: border-box;
		background-color: rgba(255, 255, 255, 0.015);
		backdrop-filter: blur(24px);
		transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg)
			skew(0deg, 0deg);
		transform-style: preserve-3d;
        display: flex;
        justify-content: center;
	}
	/* .background {
		position: absolute;
		margin: 0 auto 0;
		width: 100%;
		height: 100vh;
		overflow: hidden;
	}
	#rect1 {
		position: absolute;
		left: 0px;
	}
	#rect2 {
		position: absolute;
		right: 0px;
	}
	#rect3 {
		position: absolute;
		right: 0px;
		bottom: 0px;
	} */
</style>
