<template>
	<span class="logo" aria-label="L2-Licence">
		<svg viewBox="0 0 48 48" class="svg" role="img">
			<defs>
				<linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
					<stop offset="0%" stop-color="#60a5fa" />
					<stop offset="100%" stop-color="#6366f1" />
				</linearGradient>
			</defs>
			<circle cx="24" cy="24" r="14" fill="none" stroke="url(#g1)" stroke-width="2.5" />
			<ellipse cx="24" cy="24" rx="20" ry="8" fill="none" stroke="rgba(96,165,250,.6)" stroke-width="1.5" transform="rotate(-20 24 24)" />
			<circle cx="36" cy="18" r="3" fill="#60a5fa" />
		</svg>
	</span>
  
</template>

<style scoped>
.logo { display:inline-flex; align-items:center; justify-content:center }
.svg { width: 36px; height: 36px; display:block }
</style>
