<script setup lang="ts">
// Horizontal process timeline: a line through round brand nodes (icon in the slot, step number in a badge),
// title and text centred under each node.
defineProps<{ steps: { title: string; text: string }[] }>()
</script>

<template>
  <div class="tl">
    <div class="track" />
    <div v-for="(s, i) in steps" :key="i" class="step">
      <div class="node"><slot :name="`icon-${i}`" /><span class="num">{{ i + 1 }}</span></div>
      <h3>{{ s.title }}</h3>
      <p>{{ s.text }}</p>
    </div>
  </div>
</template>

<style scoped>
.tl { position: relative; display: grid; grid-auto-flow: column; grid-auto-columns: 1fr; gap: 22px; }
.track { position: absolute; left: 0; right: 0; top: 31px; height: 2px; background: var(--c-line); }
.step { position: relative; text-align: center; display: flex; flex-direction: column; align-items: center; }
.node {
  position: relative; z-index: 1; width: 64px; height: 64px; border-radius: 50%;
  background: var(--c-brand); color: #fff; font-size: 28px; display: grid; place-items: center;
  box-shadow: 0 0 0 7px var(--c-bg);
}
.node :deep([stroke-width]) { stroke-width: 1.5; }
/* number badge in the card colour, so the slide has no extra accent colour */
.num {
  position: absolute; top: -4px; right: -6px; width: 24px; height: 24px; border-radius: 50%; box-sizing: border-box;
  background: var(--c-card); color: var(--c-brand); border: 2px solid var(--c-bg);
  font: 500 12px/20px var(--f-display); text-align: center;
}
/* titles take three lines' height (the longest wrap to three), so the texts below start on one line */
h3 { font-size: 18.7px; line-height: 23.8px; min-height: 71.4px; margin: 18px 0 10px; display: flex; align-items: center; justify-content: center; }
p { font-size: 14.9px; line-height: 24.2px; }
</style>
