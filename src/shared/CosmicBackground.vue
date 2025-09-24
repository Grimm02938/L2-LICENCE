<template>
	<div class="cosmic" aria-hidden="true">
		<div class="nebula n1"></div>
		<div class="nebula n2"></div>
		<div class="stars"></div>
	</div>
</template>

<style scoped>
.cosmic { position: fixed; inset: 0; z-index: -1; pointer-events: none; }
.nebula { position:absolute; filter: blur(80px); opacity:.12; mix-blend-mode: screen; }
.n1 { width: 60vw; height: 60vw; background: radial-gradient(circle, rgba(59,130,246,.4), transparent 60%); top:-10%; left:-10%; animation: float1 18s ease-in-out infinite alternate; }
.n2 { width: 50vw; height: 50vw; background: radial-gradient(circle, rgba(99,102,241,.35), transparent 60%); bottom:-15%; right:-10%; animation: float2 22s ease-in-out infinite alternate; }
.stars { position:absolute; inset:0; background-image: radial-gradient(2px 2px at 20% 30%, rgba(255,255,255,.2), transparent), radial-gradient(1px 1px at 70% 60%, rgba(255,255,255,.15), transparent), radial-gradient(1.5px 1.5px at 40% 80%, rgba(255,255,255,.12), transparent); background-repeat:no-repeat; animation: twinkle 6s linear infinite; opacity:.35 }

@keyframes float1 { from { transform: translateY(0) } to { transform: translateY(20px) } }
@keyframes float2 { from { transform: translateX(0) } to { transform: translateX(-25px) } }
@keyframes twinkle { 0%,100% { opacity:.35 } 50% { opacity:.25 } }

@media (max-width: 768px) {
	.nebula { opacity:.08; filter: blur(70px); }
	.n1 { width: 80vw; height: 80vw; }
	.n2 { width: 70vw; height: 70vw; }
	.stars { opacity:.25 }
}
</style>
