<script setup lang="ts">
defineProps<{ noBadge?: boolean; noFooter?: boolean }>()
</script>

<template>
  <div class="slidev-layout">
    <div class="pad"><slot /></div>
    <Chrome :no-badge="noBadge" :no-footer="noFooter" />
  </div>
</template>
