<script>
	import icon from '$lib/assets/icon.png';
	import { getLocale } from '$paraglide/runtime';
	import { setLocale } from '$paraglide/runtime';

	let dropdownOpen = false;

	const supportedLanguages = [
		{ code: 'ru', name: 'Русский' },
		{ code: 'en', name: 'English' },
		{ code: 'id', name: 'Bahasa Indonesia' }
	];

	function getCurrentLanguageName() {
		const currentLocale = getLocale();
		const lang = supportedLanguages.find(l => l.code === currentLocale);
		return lang ? lang.name : currentLocale.toUpperCase();
	}

	function toggleDropdown() {
		dropdownOpen = !dropdownOpen;
	}

	function selectLanguage(locale) {
		setLocale(locale);
		dropdownOpen = false;
	}
</script>

<header>
	<nav>
		<a class="go-home" href="/">
			<div class="top-row">
				<img src={icon} width="21" alt="logo" />
				<div style="width: 12px" />
				<p class="logo">Nexara</p>
			</div>
		</a>
		<div class="top-row">
			<div class="hide-on-mobile">
				<!-- <a href="/#pricing"><p>Тарифы</p></a> -->
                <a href="/#pricing"><p>Pricing</p></a>
				<div style="width: 4rem" />
				<!-- <a href="https://docs.nexara.ru/docs/quick-start"><p>Документация</p></a> -->
                <a href="https://docs.nexara.ru/docs/quick-start"><p>Docs</p></a>
				<div style="width: 4rem" />
				<!-- <a href="https://t.me/nexara_news"><p>Блог</p></a> -->
                <a href="https://t.me/nexara_news"><p>Blog</p></a>
				<div style="width: 4rem" />
				<div class="language-selector">
					<button class="lang-toggle-btn" on:click={toggleDropdown}>
						{getCurrentLanguageName()}
					</button>
					{#if dropdownOpen}
						<div class="lang-dropdown">
							{#each supportedLanguages as lang (lang.code)}
								<button class="lang-option" on:click={() => selectLanguage(lang.code)}>
									{lang.name}
								</button>
							{/each}
						</div>
					{/if}
				</div>
				<div style="width: 4rem" />
				<a href="https://app.nexara.ru">
					<button class="cta-btn">
						<div class="row">
							<!-- <p class="button-text">Войти</p> -->
                            <p class="button-text">Log In</p>
						</div>
					</button>
				</a>
			</div>
			<div class="show-on-mobile">
				<!-- <a href="https://docs.nexara.ru/docs/quick-start"><p>Документация</p></a> -->
				<a href="https://t.me/nexara_news"><p>Блог</p></a>
			</div>
		</div>
	</nav>
</header>

<style>
	.cta-btn {
		background-color: #fff;
		padding: 8px 20px;
		border-radius: 12px;
		border: none;
		cursor: pointer;
	}
	.cta-btn:hover {
		animation: gradient-shift 2s linear infinite;
	}
	.button-text {
		color: #111;
	}
	.language-selector {
		position: relative;
		display: inline-block;
	}
	.lang-toggle-btn {
		background: none;
		border: 1px solid #fff;
		color: #fff;
		padding: 8px 16px;
		border-radius: 8px;
		cursor: pointer;
		font-weight: 400;
		font-size: 1rem;
		min-width: 80px;
		text-align: center;
	}
	.lang-toggle-btn:hover {
		background-color: rgba(255, 255, 255, 0.1);
	}
	.lang-dropdown {
		position: absolute;
		top: 100%;
		left: 0;
		background-color: #2a2a2a;
		border: 1px solid #444;
		border-radius: 8px;
		padding: 5px 0;
		min-width: 150px;
		z-index: 101;
		margin-top: 4px;
		display: flex;
		flex-direction: column;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
	}
	.lang-option {
		background: none;
		border: none;
		color: #fff;
		padding: 8px 16px;
		text-align: left;
		cursor: pointer;
		font-size: 0.95rem;
		width: 100%;
	}
	.lang-option:hover {
		background-color: rgba(255, 255, 255, 0.1);
	}
	.go-home {
		text-decoration: none;
	}
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
