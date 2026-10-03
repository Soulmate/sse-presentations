<script setup lang="ts">
defineProps<{ image: string }>()
</script>

<template>
  <div class="slidev-layout cover photo kenburns">
    <img :src="image" alt="" />
    <div class="content"><slot /></div>
  </div>
</template>

<style scoped>
.content { position: absolute; inset: 0; z-index: 2; display: grid; place-items: center; }
.content :deep(h1) {
  color: #fff; font-size: 7.5em; letter-spacing: .38em; margin-right: -.38em;
  text-shadow: 0 6px 40px rgba(0,0,0,.25);
  animation: rise 1.4s cubic-bezier(.2,.7,.2,1) .2s both;
}
@keyframes rise { from { opacity: 0; letter-spacing: .9em; filter: blur(8px); } }
</style>
