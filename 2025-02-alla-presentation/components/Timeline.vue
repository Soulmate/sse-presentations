<script setup lang="ts">
// Horizontal process timeline: a grey line through square icon tiles, with a short drop line to each step's text.
// Geometry follows the pptx. `i` staggers the entrance.
defineProps<{ steps: { title: string; text: string }[] }>()
</script>

<template>
  <div class="tl">
    <div class="track" />
    <div v-for="(s, i) in steps" :key="i" class="step">
      <div class="node a-pop" :style="{ '--d': `${250 + i * 140}ms` }"><slot :name="`icon-${i}`" /></div>
      <div class="drop" />
      <!-- words never break inside (e.g. at the hyphen of "Pick-Up") -->
      <h3 class="a-rise" :style="{ '--d': `${330 + i * 140}ms` }"><template v-for="(w, j) in s.title.split(' ')" :key="j">{{ j ? ' ' : '' }}<span class="w">{{ w }}</span></template></h3>
      <p class="a-rise" :style="{ '--d': `${400 + i * 140}ms` }">{{ s.text }}</p>
    </div>
  </div>
</template>

<style scoped>
.tl { position: relative; display: grid; grid-auto-flow: column; grid-auto-columns: 177.75px; }
.track { position: absolute; left: 7.6px; right: 7.6px; top: 22.9px; height: 2.1px; background: var(--c-line); }
.step { position: relative; text-align: center; display: flex; flex-direction: column; align-items: center; }
.node {
  position: relative; z-index: 1; width: 47.9px; height: 45.9px; border-radius: 3px;
  background: var(--c-card); color: #325f7b; font-size: 29px; display: grid; place-items: center;
}
.node :deep([stroke-width="2"]), .node :deep([stroke-width="1.5"]) { stroke-width: 1.33; }
.drop { width: 2.1px; height: 30.2px; background: var(--c-line); }
h3 { font-size: 18.7px; line-height: 23.8px; max-width: 122px; margin: 14.5px 0 12.7px; }
.w { white-space: nowrap; }
p { font-size: 14.9px; line-height: 24.7px; max-width: 133px; }
.step:last-child p { max-width: 115px; } /* the last text box is narrower in the pptx */
:lang(es) .step:last-child p { max-width: 133px; } /* but not in the Spanish one */
</style>
