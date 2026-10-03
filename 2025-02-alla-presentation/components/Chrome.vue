<script setup lang="ts">
import { brand } from '../brand'
// Page badge (top-right) and contact footer, shared by all content layouts.
defineProps<{ dark?: boolean; noFooter?: boolean; noBadge?: boolean }>()
</script>

<template>
  <div v-if="!noBadge" class="badge" :class="{ dark }">{{ $page - 1 }}</div>
  <div v-if="!noFooter" class="footer" :class="{ dark }">
    <div class="bar selectable">
      <a :href="`mailto:${brand.email}`"><tabler-mail />{{ brand.email }}</a>
      <a :href="brand.url" target="_blank"><tabler-world />{{ brand.site }}</a>
    </div>
  </div>
</template>

<style scoped>
.badge {
  position: absolute; top: 12px; right: 14px; z-index: 20;
  min-width: 30px; height: 30px; padding: 0 6px; box-sizing: border-box;
  display: grid; place-items: center; border-radius: 7px;
  background: var(--c-card); color: var(--c-brand);
  font: 700 15px/1 var(--f-body);
}
.badge.dark { background: rgba(255,255,255,.75); color: var(--c-tint-deep); }
.footer {
  position: absolute; bottom: 12px; left: 0; right: 0; z-index: 20; padding: 0 43px; /* same as .pad (2.7em of 16px) */
  color: var(--c-muted); font-size: .74em; letter-spacing: .01em;
}
.bar { display: flex; justify-content: space-between; border-top: 1px solid var(--c-line); padding-top: 7px; }
.bar a { display: inline-flex; align-items: center; gap: .4em; color: inherit; text-decoration: none; }
.bar a:hover { text-decoration: underline; text-underline-offset: 3px; }
.bar svg { font-size: 1.15em; color: var(--c-tint); }
.footer.dark { color: rgba(255,255,255,.75); }
.footer.dark .bar { border-color: rgba(255,255,255,.3); }
.footer.dark svg { color: rgba(255,255,255,.75); }
</style>
