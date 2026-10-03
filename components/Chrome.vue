<script setup lang="ts">
import { brand } from '../brand'
// Page badge (top-right) and contact footer, shared by all content layouts.
defineProps<{ dark?: boolean; noFooter?: boolean; noBadge?: boolean }>()
</script>

<template>
  <div v-if="!noBadge" class="badge" :class="{ dark }">{{ $page - 1 }}</div>
  <div v-if="!noFooter" class="footer" :class="{ dark }">
    {{ brand.email }} — {{ brand.site }}
  </div>
</template>

<style scoped>
.badge {
  position: absolute; top: 12px; right: 14px; z-index: 20;
  min-width: 30px; height: 30px; padding: 0 6px; box-sizing: border-box;
  display: grid; place-items: center; border-radius: 7px;
  background: #d9d6cf; color: #fff;
  font: 700 18px/1 var(--f-display);
}
.badge.dark { background: rgba(255,255,255,.75); color: var(--c-tint-deep); }
.footer {
  position: absolute; bottom: 14px; left: 0; right: 0; z-index: 20; text-align: center;
  color: var(--c-muted); font-size: .78em; letter-spacing: .01em;
}
.footer.dark { color: rgba(255,255,255,.65); }
</style>
