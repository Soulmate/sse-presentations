<script setup lang="ts">
// Half photo, half content. side = where the photo goes.
withDefaults(defineProps<{ image: string; side?: 'left' | 'right' }>(), { side: 'left' })
</script>

<template>
  <div class="slidev-layout split" :class="side">
    <div class="photo kenburns"><img :src="image" alt="" /></div>
    <div class="pad body"><slot /></div>
    <Chrome />
  </div>
</template>

<style scoped>
.split { display: grid; grid-template-columns: 1fr 1fr; }
.split.right .photo { order: 2; }
/* overlay strength per side, as in the pptx */
.split.left .photo { --tint-alpha: .6; }
.split.right .photo { --tint-alpha: .7; }
.body { display: flex; flex-direction: column; justify-content: center; gap: 1.4em; }
</style>
<style scoped>
.split.left :deep(.footer) { left: 50%; }
.split.right :deep(.footer) { right: 50%; }
</style>
