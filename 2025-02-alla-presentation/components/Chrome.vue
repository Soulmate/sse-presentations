<script setup lang="ts">
import { brand } from '../brand'
// Page badge (top-right) and contact footer, shared by all content layouts.
defineProps<{ dark?: boolean; noFooter?: boolean; noBadge?: boolean }>()
</script>

<template>
  <div v-if="!noBadge" class="badge" :class="{ dark }">{{ $page - 1 }}</div>
  <div v-if="!noFooter" class="footer" :class="{ dark }">
    <span class="selectable">{{ brand.email }}&ensp;—&ensp;{{ brand.site }}</span>
  </div>
</template>

<style scoped>
.badge {
  /* grey tab running off the right edge, as in the pptx */
  position: absolute; top: 8px; right: 0; z-index: 20;
  min-width: 28px; height: 29.5px; padding: 0 2px; box-sizing: border-box;
  display: grid; place-items: center; border-radius: 6px 0 0 6px;
  background: #d0cece; color: var(--c-bg);
  font: 500 23.8px/1 var(--f-display); /* MuseoModerno Medium 28pt, as in the pptx */
}
.footer {
  position: absolute; bottom: 4.5px; left: 0; right: 0; z-index: 20; text-align: center;
  color: #bfbfbf; font-size: 14.2px; letter-spacing: .01em;
}
</style>
