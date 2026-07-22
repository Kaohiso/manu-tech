<script setup lang="ts">
import { ChevronRightIcon, MenuIcon, PhoneIcon } from '@lucide/vue'
import ButtonMT from '@/ui/ButtonMT.vue'
import { callPhoneNumber } from '@/data/contact.ts'
import DialogMT from '@/ui/DialogMT.vue'
import { useTemplateRef } from 'vue'

type Link = { id: string; label: string }

const links: Link[] = [
  { id: '#home', label: 'Accueil' },
  { id: '#about', label: 'A propos' },
  { id: '#services', label: 'Services' },
  { id: '#price', label: 'Tarif' },
  { id: '#whyUs', label: 'Pourquoi nous' },
  { id: '#gallery', label: 'Galerie' },
  { id: '#pickup', label: 'Point relais' },
  { id: '#contact', label: 'Contact' },
]

const dialogMt = useTemplateRef('dialogMobile')
const iconSize = 13
</script>

<template>
  <header class="app-header">
    <div>
      <img
        src="/src/assets/images/logo/manu-tech-logo.png"
        alt="logo-manu-tech"
        class="image-logo"
      />
      <ButtonMT variant="icon" @pointerdown.stop.prevent @click.stop="dialogMt?.toggle">
        <MenuIcon color="white" :size="21" />
      </ButtonMT>
    </div>

    <DialogMT id="dialog-mobile" v-slot="{ closeDialogMt }" ref="dialogMobile" backdrop>
      <nav>
        <ul>
          <li v-for="link in links" :key="link.id">
            <a :href="link.id" @click.stop="closeDialogMt">
              {{ link.label }}
              <ChevronRightIcon :size="13" class="icon" />
            </a>
          </li>
        </ul>
      </nav>

      <div class="container-button">
        <ButtonMT :href="callPhoneNumber" class="dialog-button">
          <PhoneIcon :size="iconSize" />
          Appeler maintenant
        </ButtonMT>
      </div>
    </DialogMT>
  </header>
</template>

<style scoped>
:global(html:has(#dialog-mobile[open])) {
  overflow-y: hidden;
}

.app-header {
  z-index: 666;
  position: fixed;
  top: 0;
  background-color: var(--sys-color-background);
  box-shadow: 0px 10px 30px -10px var(--sys-color-background);
  inline-size: 100%;
  anchor-name: --header;

  > div {
    display: flex;
    justify-content: space-between;
    padding: var(--ref-size-12);

    .image-logo {
      width: 150px;
      height: auto;
    }
  }

  > dialog {
    position-anchor: --header;
    inset-block-start: anchor(end);

    &[open]::backdrop {
      position-anchor: --header;
      inset-block-start: anchor(end);
      position: fixed;
      background-color: var(--sys-color-background);
      opacity: 0.75;
    }

    > nav > ul > li {
      padding: 16px 24px;

      &:first-child {
        border-top: 2px solid hsl(from var(--sys-color-text-primary) h s l / 0.05);
      }

      &:nth-child(n) {
        border-bottom: 2px solid hsl(from var(--sys-color-text-primary) h s l / 0.05);
      }

      > a {
        display: flex;
        justify-content: space-between;
        font-size: var(--sys-font-size-li);
        color: var(--sys-color-text-primary);
        font-weight: var(--ref-font-weight-medium);
      }
    }

    .icon {
      color: var(--sys-color-primary);
    }

    .container-button {
      display: flex;
      width: 100%;
      justify-content: center;
      padding-block: 20px;
    }
  }
}
</style>
