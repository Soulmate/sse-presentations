<script setup lang="ts">
// Card with an icon (slot), a title and a dotted list. html = items may contain <strong>.
// big = icon in a bubble above the title. `i` staggers the entrance.
defineProps<{ title: string; items: string[]; html?: boolean; big?: boolean; i?: number }>()
</script>

<template>
  <div class="card" :class="{ big }" v-motion :initial="{ opacity: 0, y: 16 }"
       :enter="{ opacity: 1, y: 0, transition: { delay: 200 + (i ?? 0) * 110, duration: 550 } }">
    <div v-if="big" class="bubble"><slot /></div>
    <h3><slot v-if="!big" />{{ title }}</h3>
    <ul>
      <template v-for="x in items" :key="x">
        <li v-if="html" v-html="x" />
        <li v-else>{{ x }}</li>
      </template>
    </ul>
  </div>
</template>

<style scoped>
.big { padding: 1.4em 1.4em 1.3em; }
.big .bubble { font-size: 1.5em; background: var(--c-bg); margin-bottom: .55em; }
.big h3 { font-size: 1.1em; margin-bottom: .6em; }
.big li { margin: .55em 0; }
</style>
