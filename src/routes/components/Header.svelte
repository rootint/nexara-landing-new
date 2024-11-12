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
				<a href="#how-works"><p>Как работает</p></a>
				<div style="width: 4rem" />
				<a href="#features"><p>Преимущества</p></a>
				<div style="width: 4rem" />
				<a href="#for-who"><p>Для кого</p></a>
				<div style="width: 4rem" />
				<a href="#pricing"><p>Тарифы</p></a>
			</div>
		</div>
	</nav>
</header>

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
		margin: 0 0;
		margin-top: 32px;
		font-weight: 300;
		position: absolute;
		left: 16px;
		top: 0;
		right: 16px;
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
</style>
