<template>
	<div class="cosmic" aria-hidden="true">
		<div class="nebula n1"></div>
		<div class="nebula n2"></div>
		<div class="stars"></div>
	</div>
</template>

<style scoped>
.cosmic { position: fixed; inset: 0; z-index: -1; pointer-events: none; }
.nebula { position:absolute; filter: blur(90px); opacity:.16; mix-blend-mode: screen; }
.n1 { width: 62vw; height: 62vw; background: radial-gradient(circle, rgba(70, 118, 255, .34), transparent 62%); top:-12%; left:-14%; animation: float1 18s ease-in-out infinite alternate; }
.n2 { width: 52vw; height: 52vw; background: radial-gradient(circle, rgba(36, 88, 200, .24), transparent 60%); bottom:-18%; right:-14%; animation: float2 22s ease-in-out infinite alternate; }
.stars { position:absolute; inset:0; background-image: radial-gradient(2px 2px at 20% 30%, rgba(255,255,255,.2), transparent), radial-gradient(1px 1px at 70% 60%, rgba(166, 178, 214,.15), transparent), radial-gradient(1.5px 1.5px at 40% 80%, rgba(255,255,255,.12), transparent); background-repeat:no-repeat; animation: twinkle 6s linear infinite; opacity:.32 }

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
