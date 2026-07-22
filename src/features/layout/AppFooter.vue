<script setup lang="ts">
import manuTechLogo from '@/assets/images/logo/manu-tech-logo.png'
import { callPhoneNumber, facebookManuTech, leboncoinManuTech, mailTo } from '@/data/contact'
import ButtonMT from '@/ui/ButtonMT.vue'
import EyebrowMT from '@/ui/EyebrowMT.vue'
import { MailIcon, MapPinIcon, PhoneIcon } from '@lucide/vue'

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
</script>

<template>
  <footer class="app-footer">
    <div class="container">
      <div class="app-footer-content">
        <div class="column">
          <img :src="manuTechLogo" class="manu-logo" />
          <p class="paragraphe">
            Expert en diagnostic ECU automobile et réparation d'appareils électroniques à
            Ars-sur-Moselle. Fiabilité, précision, prix justes.
          </p>
        </div>

        <div class="column">
          <EyebrowMT class="nav-eyebrow">Navigation</EyebrowMT>
          <nav>
            <ul class="list-link">
              <li v-for="{ id, label } in links" :key="id">
                <a :href="id" variant="text-only">{{ label }}</a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="column">
          <EyebrowMT class="nav-eyebrow">Contact</EyebrowMT>
          <nav>
            <ul>
              <li>
                <ButtonMT :href="callPhoneNumber" variant="text-only" text-position="text-start">
                  <PhoneIcon :size="12" class="icon" />
                  <span>+33 7 87 33 43 35</span>
                </ButtonMT>
              </li>
              <li>
                <ButtonMT :href="mailTo" variant="text-only" text-position="text-start">
                  <MailIcon :size="12" class="icon" />
                  <span>manu-tech@orange.fr</span>
                </ButtonMT>
              </li>
              <li>
                <MapPinIcon :size="12" class="icon" />
                <span>Ars-sur-Moselle, France</span>
              </li>
              <li>
                <span>Lun–Ven : 9h00–18h30 </span>
                <span>Samedi : 9h00–14h00</span>
              </li>
              <li>
                <ButtonMT :href="leboncoinManuTech" variant="text-only" text-position="text-start">
                  <img src="../../assets/images/logo/leboncoin-logo.png" class="brand-logo" />
                </ButtonMT>
                <ButtonMT :href="facebookManuTech" variant="text-only" text-position="text-start">
                  <img src="../../assets/images/logo/facebook-logo.png" class="brand-logo" />
                </ButtonMT>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>

    <div class="bottom-footer">
      <span>© 2025 MANU-TECH. Tous droits réservés.</span>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  display: grid;
  background-color: var(--ref-color-authentic-black-950);
  justify-content: center;

  .container {
    max-width: var(--app-inline-size);
    width: 100vw;

    .app-footer-content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 40px;

      .column {
        display: grid;
        justify-content: start;
        gap: var(--ref-size-20);
        height: fit-content;

        > p {
          color: var(--sys-color-text-tertiary);
          font-size: var(--ref-size-13);
          max-width: 60ch;
        }

        .manu-logo {
          width: 150px;
          height: auto;
        }

        .brand-logo {
          width: 65px;
          height: auto;
        }

        .nav-eyebrow {
          color: var(--ref-color-white);
          font-weight: var(--ref-font-weight-bold);
        }

        nav {
          font-size: var(--sys-font-size-li);
          font-weight: var(--sys-font-weight-li);
        }

        ul {
          display: grid;
          gap: var(--ref-size-10);
          padding: 0;
        }

        li {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          list-style: none;
          text-align: start;
        }

        .icon {
          color: var(--sys-color-primary);
        }

        li:has(span + span) {
          display: grid;
          gap: 0;
          font-family: var(--ref-font-family-mono);
          color: var(--sys-color-text-tertiary);
          font-size: var(--ref-size-11);
        }

        li > a {
          font-size: var(--sys-font-size-li);
          color: var(--sys-color-text-secondary);
        }
      }
    }
  }

  .bottom-footer {
    grid-column: 1 / -1;
    border-top: 2px solid hsl(from var(--ref-color-white) h s l / 0.05);
    padding-block: var(--ref-size-12);
    font-family: var(--ref-font-family-mono);
    color: var(--sys-color-text-tertiary);
    font-size: var(--ref-size-11);
  }
}
</style>
