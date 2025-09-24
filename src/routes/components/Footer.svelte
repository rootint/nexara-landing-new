<section class="footer">
	<div class="financial">
		<p style="margin-bottom: 8px;">2025, Team Ailoy</p>
		<p class="muted">ИНН -</p>
	</div>
	<!-- <div class="badges">
		<a href="https://productradar.ru/product/nexara?utm_source=badge" target="_blank" rel="noopener noreferrer"
			><img
				src="https://productradar.ru/badge?period=month&amp;rank=1&amp;theme=black"
				alt="Награда Продукт месяца #1| Product Radar"
				width="252"
				height="68"
				style="margin: 0px; width: 252px; height: 68px; vertical-align: bottom; border: 1px solid transparent;"
			/></a
		>
	</div> -->
	<div class="legal">
		<a href="#">Public agreement</a>
		<a href="#">Privacy Policy</a>
	</div>
</section>

<style>
	.muted {
		color: #777;
	}
	.legal {
		display: flex;
		flex-direction: column;
		gap: 32px;
		align-items: end;
	}
	.footer {
		padding: 16px;
		display: flex;
		justify-content: space-between;
		width: 100%;
		max-width: var(--desktop-width);
		/* background-color: black; */
		/* max-width: var(--desktop-width); */
	}
	a {
		text-decoration: none;
		text-align: end;
	}

	@media (max-width: 900px) {
		.footer {
			flex-direction: column;
			gap: 32px;
		}

		.legal {
			align-items: start;
		}
	}
</style>
