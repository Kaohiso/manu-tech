<script setup lang="ts">
import { useTemplateRef } from 'vue'

const { backdrop = false } = defineProps<{ backdrop?: boolean }>()
const dialog = useTemplateRef('dialogMobile')

function openDialogMt() {
  console.log('OPEN?')
  console.log(dialog.value?.open)
  if (backdrop) dialog.value?.showModal()
  else dialog.value?.show()
}

function closeDialogMt() {
  console.log('CLOSE')
  console.log(dialog.value)
  dialog.value?.close()
}

function toggle() {
  console.log('TOGGLE open ?')
  console.log(dialog.value?.open)
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
  inline-size: 100dvw;
  background-color: var(--sys-color-background);
  margin: 0;
  border: none;
}
</style>
