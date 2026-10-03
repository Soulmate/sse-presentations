<script setup lang="ts">
// Half photo, half content. side = where the photo goes; logo = optional logo centred on the photo.
withDefaults(defineProps<{ image: string; side?: 'left' | 'right'; logo?: string; noBadge?: boolean; noFooter?: boolean }>(), { side: 'left' })
</script>

<template>
  <div class="slidev-layout split" :class="side">
    <div class="photo kenburns">
      <img :src="image" alt="" />
      <img v-if="logo" class="logo" :src="logo" alt="SSE" />
    </div>
    <div class="pad body"><slot /></div>
    <Chrome :no-badge="noBadge" :no-footer="noFooter" />
  </div>
</template>

<style scoped>
.split { display: grid; grid-template-columns: 1fr 1fr; }
.split.right .photo { order: 2; }
/* overlay strength per side, as in the pptx */
.split.left .photo { --tint-alpha: .6; }
.split.right .photo { --tint-alpha: .7; }
.body { display: flex; flex-direction: column; justify-content: center; gap: 1.4em; }
.photo > img.logo {
  inset: 0; margin: auto; z-index: 2; width: 62%; height: auto; object-fit: contain;
  filter: drop-shadow(0 6px 40px rgba(0,0,0,.25));
  animation: rise 1.4s cubic-bezier(.2,.7,.2,1) .2s both;
}
@keyframes rise { from { opacity: 0; transform: scale(1.15); filter: blur(8px); } }
</style>
<style scoped>
.split.left :deep(.footer) { left: 50%; }
.split.right :deep(.footer) { right: 50%; }
</style>
