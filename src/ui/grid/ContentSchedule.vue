<script setup lang="ts">
interface Rows {
  key: string
  firstValue?: string
  lastValue: string
}

interface PropsSchedule {
  content: Rows[]
}

defineProps<PropsSchedule>()

function updateColorWhenClosed(status: string) {
  if (status === 'Fermé') {
    return 'color: var(--sys-color-status-closed)'
  }
}
</script>

<template>
  <div class="container">
    <div v-for="row in content" class="schedule">
      <span class="key">{{ row.key }}</span>
      <span class="value first-value">{{ row.firstValue }}</span>
      <span class="value last-value" :style="updateColorWhenClosed(row.lastValue)">{{
        row.lastValue
      }}</span>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  gap: 20px;

  .schedule {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    .key {
      grid-column: 2 span;
      color: var(--sys-color-text-tertiary);
    }

    .value {
      color: var(--sys-color-text-primary);
      font-family: var(--ref-font-family-mono);
    }

    .first-value {
      text-align: start;
      grid-column-start: 4;
    }

    .last-value {
      text-align: end;
      grid-column-start: 5;
    }
  }
}
</style>
