<script>
	import { onMount } from 'svelte';
	import * as m from '$paraglide/messages.js';
	import MainButton from './MainButton.svelte';

	let showBanner = false;

	onMount(() => {
		if (localStorage.getItem('hideCookieBanner') !== 'true') {
			showBanner = true;
		}
	});

	function acceptCookies() {
		localStorage.setItem('hideCookieBanner', 'true');
		showBanner = false;
	}
</script>

{#if showBanner}
	<div class="cookie-banner">
		<p>{m.cookie_banner_text()}</p>
		<div class="button-wrapper">
            <button on:click={acceptCookies}>{m.cookie_banner_button()}</button>
			<!-- <MainButton on:click={acceptCookies} isWhite={true}>{m.cookie_banner_button()}</MainButton> -->
		</div>
	</div>
{/if}

<style>
    button {
        background: #ffffff;    
        color: #000000;
        border-radius: 12px;
        padding: 12px 24px;
        font-size: 16px;
        cursor: pointer;
        border: none;
    }
	.cookie-banner {
		position: fixed;
		bottom: 32px;
		right: 32px;
		background: rgba(255, 255, 255, 0.015);
		backdrop-filter: blur(16px);
		padding: 24px;
		border-radius: 12px;
		display: flex;
		align-items: center;
		gap: 32px;
		z-index: 1000;
		max-width: 500px;
	}

	.cookie-banner p {
		margin: 0;
		font-size: 16px;
		color: #ffffff;
		line-height: 1.5;
	}

	.button-wrapper {
		flex-shrink: 0;
	}

	@media (max-width: 768px) {
		.cookie-banner {
			bottom: 0;
			left: 0;
			right: 0;
			width: 100%;
			border-radius: 0;
			flex-direction: column;
			gap: 16px;
			padding: 24px 16px;
			align-items: stretch;
			text-align: center;
		}
		.button-wrapper :global(button) {
			width: 100%;
		}
	}
</style> 