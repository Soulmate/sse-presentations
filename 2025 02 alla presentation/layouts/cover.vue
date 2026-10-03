<script setup lang="ts">
// Full-bleed tinted photo with the SSE logo (or any slot content) centred on top.
defineProps<{ image: string; logo?: string }>()
</script>

<template>
  <div class="slidev-layout cover photo kenburns">
    <img :src="image" alt="" />
    <div class="content">
      <img v-if="logo" class="logo" :src="logo" alt="SSE" />
      <slot />
    </div>
  </div>
</template>

<style scoped>
.content { position: absolute; inset: 0; z-index: 2; display: grid; place-items: center; }
.logo {
  width: 54%; height: auto;
  filter: drop-shadow(0 6px 40px rgba(0,0,0,.25));
  animation: rise 1.4s cubic-bezier(.2,.7,.2,1) .2s both;
}
@keyframes rise { from { opacity: 0; transform: scale(1.15); filter: blur(8px); } }
</style>
