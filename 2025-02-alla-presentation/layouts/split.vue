<script setup lang="ts">
// Photo + content side by side. side = where the photo goes; photoWidth = its share of the slide (default half);
// logo = optional logo centred on the photo; photoPos = object-position of the photo;
// the `photo` slot (::photo:: in markdown) puts white content over the photo.
withDefaults(defineProps<{ image: string; side?: 'left' | 'right'; photoWidth?: string; photoPos?: string; logo?: string; noBadge?: boolean; noFooter?: boolean }>(), { side: 'left', photoWidth: '50%', photoPos: '50% 50%' })
</script>

<template>
  <div class="slidev-layout split" :class="side" :style="{ '--photo': photoWidth }">
    <div class="photo kenburns">
      <img :src="image" alt="" :style="{ objectPosition: photoPos }" />
      <img v-if="logo" class="logo" :src="logo" alt="SSE" />
      <div v-if="$slots.photo" class="over"><slot name="photo" /></div>
    </div>
    <div class="pad body"><slot /></div>
    <Chrome :no-badge="noBadge" :no-footer="noFooter" />
  </div>
</template>

<style scoped>
.split.left { display: grid; grid-template-columns: var(--photo) minmax(0, 1fr); }
.split.right { display: grid; grid-template-columns: minmax(0, 1fr) var(--photo); }
.split.right .photo { order: 2; }
/* overlay strength per side, as in the pptx */
.split.left .photo { --tint-alpha: .6; }
.split.right .photo { --tint-alpha: .7; }
.over { position: absolute; inset: 0; z-index: 2; color: #fff; }
.over :deep(h1), .over :deep(h2), .over :deep(h3) { color: #fff; }
.body { display: flex; flex-direction: column; justify-content: center; gap: 1.4em; }
.photo > img.logo {
  inset: 0; margin: auto; z-index: 2; width: 62%; height: auto; object-fit: contain;
  filter: drop-shadow(0 6px 40px rgba(0,0,0,.25));
  animation: rise 1.4s cubic-bezier(.2,.7,.2,1) .2s both;
}
@keyframes rise { from { opacity: 0; transform: scale(1.15); filter: blur(8px); } }
</style>
<style scoped>
.split.left :deep(.footer) { left: var(--photo); }
.split.right :deep(.footer) { right: var(--photo); }
</style>
