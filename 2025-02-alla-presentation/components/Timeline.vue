<script setup lang="ts">
// Horizontal process timeline. The line draws in, then the steps rise one after another.
defineProps<{ steps: { title: string; text: string }[] }>()
</script>

<template>
  <div class="tl">
    <div class="line" v-motion :initial="{ scaleX: 0 }" :enter="{ scaleX: 1, transition: { delay: 150, duration: 900 } }" />
    <div v-for="(s, i) in steps" :key="i" class="step" v-motion :initial="{ opacity: 0, y: 20 }"
         :enter="{ opacity: 1, y: 0, transition: { delay: 300 + i * 160, duration: 600 } }">
      <div class="node"><slot :name="`icon-${i}`" /></div>
      <div class="stem" />
      <h3>{{ s.title }}</h3>
      <p>{{ s.text }}</p>
    </div>
  </div>
</template>

<style scoped>
.tl { position: relative; display: grid; grid-auto-flow: column; grid-auto-columns: 1fr; gap: 1.2em; margin-top: 2.2em; }
.line { position: absolute; left: 0; right: 0; top: 24px; height: 2px; background: var(--c-line); transform-origin: left; }
.step { position: relative; text-align: center; display: flex; flex-direction: column; align-items: center; }
.node { width: 50px; height: 50px; border-radius: 6px; background: var(--c-card); display: grid; place-items: center; color: var(--c-brand); font-size: 1.6em; position: relative; z-index: 1; }
.stem { width: 2px; height: 30px; background: var(--c-line); margin-bottom: 1.1em; }
h3 { font-size: 1.05em; line-height: 1.3; margin-bottom: .6em; min-height: 2.6em; }
p { font-size: .82em; line-height: 1.6; }
</style>
