<script setup lang="ts">
// Horizontal process timeline. A progress line runs left to right; each step pops in as the line reaches it.
const props = defineProps<{ steps: { title: string; text: string }[] }>()
const START = 250 // ms before the line starts
const RUN = 1700 // ms for the line to cross the whole timeline
// when the line passes the centre of step i
const at = (i: number) => START + RUN * (i + 0.5) / props.steps.length
</script>

<template>
  <div class="tl" :style="{ '--start': `${START}ms`, '--run': `${RUN}ms` }">
    <div class="track"><div class="fill" /></div>
    <div v-for="(s, i) in steps" :key="i" class="step">
      <div class="node a-pop" :style="{ '--d': `${at(i) - 120}ms` }">
        <slot :name="`icon-${i}`" /><span class="num">{{ i + 1 }}</span>
      </div>
      <h3 class="a-rise" :style="{ '--d': `${at(i) + 80}ms` }">{{ s.title }}</h3>
      <p class="a-rise" :style="{ '--d': `${at(i) + 180}ms` }">{{ s.text }}</p>
    </div>
  </div>
</template>

<style scoped>
.tl { position: relative; display: grid; grid-auto-flow: column; grid-auto-columns: 1fr; gap: 1.4em; }
.track { position: absolute; left: 0; right: 0; top: 31px; height: 2px; background: var(--c-line); }
.fill {
  height: 100%; background: var(--c-tint); transform-origin: left;
  animation: draw var(--run) linear var(--start) both;
}
@keyframes draw { from { transform: scaleX(0); } }
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
