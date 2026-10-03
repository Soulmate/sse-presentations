<script setup lang="ts">
// QR code generated in the browser from a URL — no image file needed.
import { ref, onMounted } from 'vue'
import QRCode from 'qrcode'
const props = defineProps<{ value: string; size?: number }>()
const svg = ref('')
onMounted(async () => {
  svg.value = await QRCode.toString(props.value, {
    type: 'svg', margin: 0, errorCorrectionLevel: 'M',
    color: { dark: '#134a6eff', light: '#00000000' },
  })
})
</script>

<template>
  <div class="qr" :style="{ width: (size ?? 220) + 'px' }" v-html="svg" />
</template>

<style scoped>
.qr :deep(svg) { width: 100%; height: auto; display: block; }
</style>
