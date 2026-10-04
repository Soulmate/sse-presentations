<script setup lang="ts">
// One line of an icon list: icon slot + title + optional text. `i` staggers the entrance.
defineProps<{ title?: string; text?: string; i?: number }>()
</script>

<template>
  <div class="row a-left" :style="{ '--d': `${250 + (i ?? 0) * 110}ms` }">
    <div class="ic"><slot /></div>
    <div>
      <h3 v-if="title">{{ title }}</h3>
      <p v-if="text" :class="{ solo: !title }">{{ text }}</p>
    </div>
  </div>
</template>

<style scoped>
.row { display: grid; grid-template-columns: var(--ic-col, 2.4em) 1fr; gap: var(--ic-gap, .9em); align-items: start; }
.ic { color: var(--c-brand); font-size: var(--ic-size, 1.85em); line-height: 1; display: grid; place-items: center; }
h3 { font-size: var(--row-title, 1em); margin: .2em 0 var(--row-title-gap, .3em); }
p { font-size: var(--row-text, .82em); }
p.solo { font-size: var(--row-text, .98em); padding-top: var(--row-solo-pad, .3em); }
</style>
