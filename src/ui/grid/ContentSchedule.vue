<script setup lang="ts">
interface PropsSchedule {
  content: {
    title: string
    rows: {
      key: string
      firstValue?: string
      lastValue: string
    }[]
    caption: string
  }
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
    <div v-for="row in content.rows" class="schedule">
      <span class="key">{{ row.key }}</span>
      <span class="value first-value">{{ row.firstValue }}</span>
      <span class="value last-value" :style="updateColorWhenClosed(row.lastValue)">{{
        row.lastValue
      }}</span>
    </div>
    <div class="line" />
    <span class="schedule-caption">{{ content.caption }}</span>
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

  .line {
    border-top: 2px solid hsl(from var(--ref-color-white) h s l / 0.05);
  }

  .schedule-caption {
    text-align: center;
    color: var(--sys-color-text-tertiary);
    font-family: var(--ref-font-family-mono);
    font-size: var(--ref-size-10);
  }
}
</style>
