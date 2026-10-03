<script setup lang="ts">
// Horizontal process timeline. The line draws in, then the steps rise one after another.
defineProps<{ steps: { title: string; text: string }[] }>()
</script>

<template>
  <div class="tl">
    <div class="line" v-motion :initial="{ scaleX: 0 }" :enter="{ scaleX: 1, transition: { delay: 150, duration: 900 } }" />
    <div v-for="(s, i) in steps" :key="i" class="step" v-motion :initial="{ opacity: 0, y: 20 }"
         :enter="{ opacity: 1, y: 0, transition: { delay: 300 + i * 160, duration: 600 } }">
      <div class="node"><slot :name="`icon-${i}`" /><span class="num">{{ i + 1 }}</span></div>
      <h3>{{ s.title }}</h3>
      <p>{{ s.text }}</p>
    </div>
  </div>
</template>

<style scoped>
.tl { position: relative; display: grid; grid-auto-flow: column; grid-auto-columns: 1fr; gap: 1.4em; }
.line { position: absolute; left: 0; right: 0; top: 31px; height: 2px; background: var(--c-line); transform-origin: left; }
.step { position: relative; text-align: center; display: flex; flex-direction: column; align-items: center; }
.node {
  position: relative; z-index: 1; width: 64px; height: 64px; border-radius: 50%;
  background: var(--c-brand); color: #fff; font-size: 1.75em; display: grid; place-items: center;
  box-shadow: 0 0 0 7px var(--c-bg);
}
.num {
  position: absolute; top: -4px; right: -6px; width: 24px; height: 24px; border-radius: 50%;
  background: var(--c-tint); color: #fff; border: 2px solid var(--c-bg);
  font: 700 12px/20px var(--f-body); text-align: center;
}
h3 { font-size: 1.05em; line-height: 1.3; margin: 1.3em 0 .55em; min-height: 2.6em; display: flex; align-items: center; justify-content: center; }
p { font-size: .84em; line-height: 1.55; }
</style>
