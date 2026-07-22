<script lang="ts" setup>
import { type LucideIcon } from '@lucide/vue'
import CardMT from '@/ui/CardMT.vue'

interface dataItemListProps {
  iconName: LucideIcon
  text: string
}

interface Props {
  direction?: 'img-right' | 'img-left'
  graphicIcon: LucideIcon
  listServices: dataItemListProps[]
}

const { direction = 'img-right' } = defineProps<Props>()
</script>

<template>
  <article class="container-content" :class="direction">
    <div class="container-article-text">
      <div>
        <div>
          <component :is="graphicIcon" :size="20" />
        </div>
        <hgroup>
          <h3>
            <slot name="heading" />
          </h3>
          <p>
            <slot name="subheading" />
          </p>
        </hgroup>
      </div>

      <p>
        <slot name="description" />
      </p>

      <div class="list-services">
        <CardMT v-for="item in listServices" :graphic-icon="item.iconName">
          <template #subheading>{{ item.text }}</template>
        </CardMT>
      </div>
    </div>

    <div class="container-article-image">
      <img src="../assets/images/oden-services.jpeg" class="image-service" />
      <div class="text-on-image">
        <hgroup>
          <h4><slot name="image-heading" /></h4>
          <p><slot name="image-subheading" /></p>
        </hgroup>
        <div>
          <p><slot name="image-price" /></p>
          <p><slot name="image-subprice" /></p>
        </div>
      </div>
    </div>
  </article>
</template>

<style lang="css" scoped>
.container-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(500px, 100%), 1fr));
  gap: 50px;

  &.img-left .container-article-text {
    order: 1;
  }

  &.img-left .container-article-image {
    order: -1;
  }

  .container-article-text {
    display: grid;
    gap: 20px;

    > div:has(> div + hgroup) {
      display: inline-flex;
      gap: 15px;
      text-align: center;
      justify-items: center;

      > div {
        width: fit-content;
        height: fit-content;
        padding: 10px;
        border-radius: var(--app-radius-icon);
        background-color: var(--sys-color-primary);

        &:first-child {
          color: var(--sys-color-text-primary);
        }
      }
    }

    .list-services {
      display: grid;
      justify-content: start;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 10px;
    }
  }

  .container-article-image {
    display: grid;
    align-self: center;
    height: fit-content;

    .image-service {
      width: 100%;
      height: 335px;
      object-fit: cover;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    .text-on-image {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: var(--app-background-on-background);
      padding: 20px;
      border-bottom-left-radius: var(--app-radius);
      border-bottom-right-radius: var(--app-radius);

      > div {
        display: grid;
        justify-content: end;

        > p {
          justify-self: end;
          font-family: var(--ref-font-family-condensed);
          font-size: var(--ref-size-32);
          font-weight: var(--ref-font-weight-black);
          color: hsl(from var(--sys-color-primary) h s calc(l + 20));
        }

        > p + p {
          font-family: var(--sys-font-family-caption);
          font-size: var(--sys-font-size-caption);
          color: var(--sys-color-text-tertiary);
        }
      }
    }
  }
}

@media (min-width: 1160px) {
  :deep(.app-about) {
    .about-text {
      text-align: start;
      justify-items: start;
    }
  }
}
</style>
