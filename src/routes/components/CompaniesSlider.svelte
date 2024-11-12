<script>
	import apexLogo from '$lib/assets/logos/apex_logo.svg';
	import boLogo from '$lib/assets/logos/bo_logo.svg';
	import csLogo from '$lib/assets/logos/cs_logo.svg';
	import learniLogo from '$lib/assets/logos/learni_logo.svg';
	import mfLogo from '$lib/assets/logos/mf_logo.svg';
	import mqLogo from '$lib/assets/logos/mq_logo.svg';
	import nlLogo from '$lib/assets/logos/nl_logo.svg';
	import qsLogo from '$lib/assets/logos/qs_logo.svg';
	import wsLogo from '$lib/assets/logos/ws_logo.svg';
</script>

<div class="companies-container fade-in-longer">
	<div class="slide-track">
		<div class="slide">
			<img src={apexLogo} alt="Apex Logo" />
		</div>
		<div class="slide">
			<img src={boLogo} alt="BlueOcean Logo" />
		</div>
		<div class="slide">
			<img src={csLogo} alt="CodeStream Logo" />
		</div>
		<div class="slide">
			<img src={learniLogo} alt="Learni Logo" />
		</div>
		<div class="slide">
			<img src={mfLogo} alt="MindFind Logo" />
		</div>
		<div class="slide">
			<img src={mqLogo} alt="MediQuip Logo" />
		</div>
		<div class="slide">
			<img src={nlLogo} alt="NeuraLearn Logo" />
		</div>
		<div class="slide">
			<img src={qsLogo} alt="QuantumScape Logo" />
		</div>
		<div class="slide">
			<img src={wsLogo} alt="woodstocks Logo" />
		</div>

		<div class="slide">
			<img src={apexLogo} alt="Apex Logo" />
		</div>
		<div class="slide">
			<img src={boLogo} alt="BlueOcean Logo" />
		</div>
		<div class="slide">
			<img src={csLogo} alt="CodeStream Logo" />
		</div>
		<div class="slide">
			<img src={learniLogo} alt="Learni Logo" />
		</div>
		<div class="slide">
			<img src={mfLogo} alt="MindFind Logo" />
		</div>
		<div class="slide">
			<img src={mqLogo} alt="MediQuip Logo" />
		</div>
		<div class="slide">
			<img src={nlLogo} alt="NeuraLearn Logo" />
		</div>
		<div class="slide">
			<img src={qsLogo} alt="QuantumScape Logo" />
		</div>
		<div class="slide">
			<img src={wsLogo} alt="woodstocks Logo" />
		</div>
	</div>
</div>

<style>
	.slide {
		width: 160px;
		flex-shrink: 0;
		height: 64px;
		display: flex;
		align-items: center;
		justify-content: center;
		transform: translateX(0);
	}

	.slide img {
		max-height: 20px;
		object-fit: contain;
	}

	@keyframes scroll-slide {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-1440px);
		}
	}
	.slide-track {
		display: flex;
		width: 100%;
		animation: scroll-slide 30s linear infinite;
	}
	.companies-container {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 64px;
		overflow: hidden;
	}
	.companies-container::before,
	.companies-container::after {
		content: '';
		position: absolute;
		top: 0;
		bottom: 0;
		width: 64px;
		pointer-events: none;
		z-index: 2;
	}

	.companies-container::before {
		left: 0;
		background: linear-gradient(to right, #fff 0%, transparent 100%);
	}

	.companies-container::after {
		right: 0;
		background: linear-gradient(to left, #fff 0%, transparent 100%);
	}
	.fade-in-longer {
		opacity: 0;
		animation: fadeInAnimation 1s forwards;
	}

	@keyframes fadeInAnimation {
		to {
			opacity: 1;
		}
	}
</style>
