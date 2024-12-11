<script>
	import icon from '$lib/assets/icon.png';
</script>

<header>
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
			<div class="show-on-mobile">
				<a href="https://docs.nexara.ru/docs/quick-start"><p>Документация</p></a>
			</div>
		</div>
	</nav>
</header>

<style>
	.show-on-mobile {
		display: none;
	}
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
		margin: 0 0;
		margin-top: 32px;
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
		.show-on-mobile {
			display: flex;
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
</style>
