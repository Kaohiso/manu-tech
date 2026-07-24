<script setup lang="ts">
import { ChevronRightIcon, MenuIcon, PhoneIcon, XIcon } from '@lucide/vue'
import ButtonMT from '@/ui/ButtonMT.vue'
import { callPhoneNumber } from '@/data/contactInformation'
import DialogMT from '@/ui/DialogMT.vue'
import { useMediaQuery } from '@/composables/useMediaQuery'

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

const isMobile = useMediaQuery('(max-width: 1025px)')
</script>

<template>
  <header v-if="isMobile" id="app-header-mobile" class="app-header-mt">
    <div>
      <img
        src="/src/assets/images/logo/manu-tech-logo.png"
        alt="Logo de l'entreprise MANU-TECH"
        class="image-logo"
      />
      <ButtonMT variant="icon" popovertarget="dialog-menu">
        <MenuIcon color="white" :size="21" />
      </ButtonMT>
    </div>

    <DialogMT id="dialog-menu" popover backdrop>
      <nav>
        <ul>
          <li v-for="link in links" :key="link.id">
            <a :href="link.id" interestfor="dialog-menu">
              {{ link.label }}
              <ChevronRightIcon :size="13" class="icon" />
            </a>
          </li>
        </ul>
      </nav>

      <div class="container-button">
        <ButtonMT :href="callPhoneNumber" class="dialog-button">
          <PhoneIcon :size="13" />
          Appeler maintenant
        </ButtonMT>
      </div>
    </DialogMT>
  </header>

  <header v-else id="app-header-desktop" class="app-header-mt">
    <div class="container">
      <img src="/src/assets/images/logo/manu-tech-logo.png" alt="logo-header" class="image-logo" />
      <nav>
        <ul>
          <li v-for="{ id, label } in links" :key="id">
            <a :href="id">{{ label }}</a>
          </li>
        </ul>
      </nav>

      <ButtonMT :href="callPhoneNumber">
        <PhoneIcon :size="13" />
        <span>Demander un devis</span>
      </ButtonMT>
    </div>
  </header>
</template>

<style>
:global(:has(#dialog-menu:popover-open)) {
  overflow-y: hidden;
}

.app-header-mt {
  z-index: 666;
  position: fixed;
  top: 0;
  background-color: var(--sys-color-background);
  box-shadow: 0px 10px 30px -10px var(--sys-color-background);
  inline-size: 100%;
}

#app-header-mobile {
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

    &::backdrop {
      position-anchor: --header;
      inset-block-start: anchor(end);
      position: fixed;
      background-color: var(--sys-color-background);
      opacity: 0.75;
    }

    > nav > ul > li {
      &:first-child {
        border-top: 2px solid hsl(from var(--sys-color-text-primary) h s l / 0.05);
      }

      &:nth-child(n) {
        border-bottom: 2px solid hsl(from var(--sys-color-text-primary) h s l / 0.05);
      }

      > a {
        display: flex;
        justify-content: space-between;
        padding: 16px 24px;
        font-size: var(--sys-font-size-li);
        color: var(--sys-color-text-primary);
        font-weight: var(--ref-font-weight-medium);
        interest-delay-end: 0.01s;
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

#app-header-desktop {
  padding-inline: 15px;
  display: flex;
  justify-content: center;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: var(--app-inline-size);
    width: 100%;
    padding: var(--ref-size-32) 0;

    .image-logo {
      width: 150px;
      height: auto;
    }
  }

  nav {
    font-size: var(--sys-font-size-li);
    font-weight: var(--sys-font-weight-li);
  }

  ul {
    display: flex;
    gap: var(--ref-size-24);
  }

  li {
    list-style: none;
  }

  li > a {
    font-size: var(--sys-font-size-li);
    color: var(--sys-color-text-secondary);
  }
}
</style>
