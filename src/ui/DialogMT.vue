<script setup lang="ts">
import { useTemplateRef } from 'vue'

const { backdrop = true } = defineProps<{ backdrop?: boolean }>()
const dialog = useTemplateRef('dialogMT')

function openDialogMt() {
  if (backdrop) dialog.value?.showModal()
  else dialog.value?.show()
}

function closeDialogMt() {
  dialog.value?.close()
}

function toggleDialogMt() {
  console.log(dialog.value?.open)
  if (dialog.value?.open) closeDialogMt()
  else openDialogMt()
}

defineExpose({ openDialogMt, closeDialogMt, toggleDialogMt })
</script>

<template>
  <dialog class="dialog-mt" ref="dialogMT" closedby="any">
    <slot :openDialogMt :closeDialogMt :toggleDialogMt />
  </dialog>
</template>

<style scoped></style>
