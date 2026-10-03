<script setup lang="ts">
// Horizontal process timeline. Each step reveals on click in the web version.
defineProps<{ steps: { title: string; text: string }[] }>()
</script>

<template>
  <div class="tl">
    <div class="line" />
    <div v-for="(s, i) in steps" :key="i" v-click class="step">
      <div class="node"><slot :name="`icon-${i}`" /></div>
      <div class="stem" />
      <h3>{{ s.title }}</h3>
      <p>{{ s.text }}</p>
    </div>
  </div>
</template>

<style scoped>
.tl { position: relative; display: grid; grid-auto-flow: column; grid-auto-columns: 1fr; gap: 1.2em; margin-top: 2.2em; }
.line { position: absolute; left: 0; right: 0; top: 24px; height: 2px; background: #dedad2; }
.step { position: relative; text-align: center; display: flex; flex-direction: column; align-items: center; transition: all .5s cubic-bezier(.2,.7,.2,1); }
.node { width: 50px; height: 50px; border-radius: 6px; background: var(--c-card); display: grid; place-items: center; color: var(--c-brand); font-size: 1.6em; position: relative; z-index: 1; }
.stem { width: 2px; height: 30px; background: #dedad2; margin-bottom: 1.1em; }
h3 { font-size: 1.05em; line-height: 1.3; margin-bottom: .6em; min-height: 2.6em; }
p { font-size: .82em; line-height: 1.6; }
.step.slidev-vclick-hidden { opacity: 0 !important; transform: translateY(14px); }
</style>
