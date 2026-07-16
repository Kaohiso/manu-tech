<script setup lang="ts"></script>

<template>
  <div class="card-contact-large">
    <div class="head-card">
      <div class="container-icon">
        <slot name="icon" />
      </div>
      <div class="title">
        <h4>
          <slot name="title" />
        </h4>
        <EyebrowMT variant="caption">
          <slot name="subtitle" />
        </EyebrowMT>
      </div>
    </div>

    <slot name="content" />

    <div class="footer">
      <div class="line" />
      <span class="text-caption">
        <slot name="footer" />
      </span>
    </div>
  </div>
</template>

<style scoped>
.card-contact-large {
  background-color: var(--app-background-on-background);
  border: 2px solid hsl(from var(--ref-color-white) h s l / 0.05);
  grid-column: 2 span;
  display: grid;
  padding: var(--ref-size-20);
  border-radius: var(--app-radius);
  gap: 20px;

  .head-card {
    display: inline-flex;
    align-items: center;
    gap: 10px;

    .container-icon {
      background-color: hsl(from var(--sys-color-primary) h s l / 0.12);
      padding: 10px;
      border-radius: var(--app-radius);
    }

    .title {
      display: grid;
      text-align: start;
      gap: 3px;
    }
  }

  .footer {
    display: grid;
    gap: 10px;

    .line {
      border-top: 2px solid hsl(from var(--ref-color-white) h s l / 0.05);
    }

    .text-caption {
      text-align: start;
      color: var(--sys-color-text-tertiary);
      font-family: var(--ref-font-family-mono);
      font-size: var(--ref-size-10);
    }
  }
}
</style>
