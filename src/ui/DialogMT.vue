<script setup lang="ts">
import { useTemplateRef } from 'vue'

const { backdrop = false } = defineProps<{ backdrop?: boolean }>()
const dialog = useTemplateRef('dialogMobile')

function openDialogMt() {
  if (backdrop) dialog.value?.showModal()
  else dialog.value?.show()
}

function closeDialogMt() {
  dialog.value?.close()
}

function toggle() {
  if (dialog.value?.open) closeDialogMt()
  else openDialogMt()
}

defineExpose({ openDialogMt, closeDialogMt, toggle, dialog })
</script>

<template>
  <dialog class="dialog-mt" ref="dialogMobile" closedby="any">
    <slot :openDialogMt :closeDialogMt :toggle />
  </dialog>
</template>

<style scoped>
.dialog-mt {
  position: fixed;
  max-width: 100%;
  inline-size: 100dvw;
  margin: 0;
  border: none;
  background-color: var(--sys-color-background);
}
</style>
