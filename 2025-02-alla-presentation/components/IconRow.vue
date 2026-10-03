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
.row { display: grid; grid-template-columns: 2.4em 1fr; gap: .9em; align-items: start; }
.ic { color: var(--c-brand); font-size: 1.85em; line-height: 1; display: grid; place-items: center; }
h3 { font-size: 1em; margin: .2em 0 .3em; }
p { font-size: .82em; }
p.solo { font-size: .98em; padding-top: .3em; }
</style>
