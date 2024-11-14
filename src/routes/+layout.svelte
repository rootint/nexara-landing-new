<script>
	import './styles.css';
	import './fonts.css';
	import Header from './components/Header.svelte';
	import Parallax from './components/Parallax.svelte';
	import ScrollableHeader from './components/ScrollableHeader.svelte';
</script>

<!-- <Parallax></Parallax> -->


<div class="app">
    <ScrollableHeader></ScrollableHeader>
	<Header></Header>
	<main>
		<slot />
	</main>
	<!-- <Footer /> -->
</div>

<style>
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
