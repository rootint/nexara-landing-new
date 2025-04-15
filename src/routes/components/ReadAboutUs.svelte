<script>
	import tenchat from '$lib/assets/tenchat.svg';
	import habr from '$lib/assets/habr.svg';
</script>

<section class="read-about-us" id="read-about-us">
	<h2>О нас пишут</h2>
	<div class="links">
		<a
			href="https://tenchat.ru/media/3082640-privet-nexara--tochniy-transkribator-rechi-i-layfkhaki-s-vyborom-api"
			><img src={tenchat} /></a
		>
		<a href="https://habr.com/ru/articles/886924/"><img src={habr} width="128" /></a>
	</div>
</section>

<style>
	.links {
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		margin-top: 64px;
	}
	.read-about-us {
		width: 100%;
		margin-top: 96px;
	}
</style>
