<script setup lang="ts">
// Full-bleed tinted photo with white content on top.
defineProps<{ image: string }>()
</script>

<template>
  <div class="slidev-layout photo">
    <img :src="image" alt="" />
    <div class="pad over"><slot /></div>
    <Chrome dark />
  </div>
</template>

<style scoped>
.over { position: relative; z-index: 2; color: #fff; }
.over :deep(h1), .over :deep(h2), .over :deep(h3) { color: #fff; }
</style>
