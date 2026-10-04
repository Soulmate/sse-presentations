<script setup lang="ts">
// One line of text whose font size is chosen so it spans exactly the width of its container.
// Slidev scales the slide with a transform, which offsetWidth ignores, so the measurement is in slide pixels.
import { onBeforeUnmount, onMounted, ref } from 'vue'

withDefaults(defineProps<{ tag?: string }>(), { tag: 'div' })
const el = ref<HTMLElement>()
const inner = ref<HTMLElement>()

function fit() {
  if (!el.value || !inner.value) return
  el.value.style.fontSize = '100px'
  const w = inner.value.offsetWidth
  if (w) el.value.style.fontSize = `${100 * el.value.clientWidth / w}px`
}

let ro: ResizeObserver | undefined
onMounted(() => {
  fit()
  document.fonts?.ready.then(fit)
  ro = new ResizeObserver(fit)
  ro.observe(el.value!)
})
onBeforeUnmount(() => ro?.disconnect())
</script>

<template>
  <component :is="tag" ref="el" class="fit-text"><span ref="inner"><slot /></span></component>
</template>

<style scoped>
.fit-text { white-space: nowrap; line-height: 1.1; contain: inline-size; } /* its width never depends on the text */
.fit-text > span { display: inline-block; }
</style>
