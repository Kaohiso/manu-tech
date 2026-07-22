<script setup lang="ts">
import AppSection from '@/features/layout/AppSection.vue'
import EyebrowMT from '@/ui/EyebrowMT.vue'
import {
  ChevronRightIcon,
  ClockIcon,
  MailIcon,
  MapPinIcon,
  MessageCircleIcon,
  MessageSquareIcon,
  PhoneIcon,
  type LucideIcon,
} from '@lucide/vue'
import { callPhoneNumber, mailTo, smsPhoneNumber, whatsApp } from '@/data/contact'
import CardMT from '@/ui/CardMT.vue'
import ButtonMT from '@/ui/ButtonMT.vue'
import ScheduleMT from '@/ui/ScheduleMT.vue'

interface ContactProps {
  id: number
  type: 'single'
  variant?: 'filled-blue' | 'green-border'
  header: {
    icon: LucideIcon
  }
  content: {
    heading: string
    value: string
    caption: string
  }
  footer: {
    buttonText: string
    externalLink: string
  }
}

const contacts: ContactProps[] = [
  {
    id: 1,
    type: 'single',
    variant: 'filled-blue',
    header: {
      icon: PhoneIcon,
    },
    content: {
      heading: 'Telephone',
      value: '+33 7 87 33 43 35',
      caption: 'Appel direct — Lun–Sam',
    },
    footer: {
      buttonText: 'Appeler maintenant',
      externalLink: callPhoneNumber,
    },
  },
  {
    id: 2,
    variant: 'green-border',
    type: 'single',
    header: {
      icon: MessageCircleIcon,
    },
    content: {
      heading: 'WhatsApp',
      value: '+33 7 87 33 43 35',
      caption: 'Réponse rapide garantie',
    },
    footer: {
      buttonText: 'Envoyer un message',
      externalLink: whatsApp,
    },
  },
  {
    id: 3,
    type: 'single',
    header: {
      icon: MessageSquareIcon,
    },
    content: {
      heading: 'SMS',
      value: '+33 7 87 33 43 35',
      caption: 'Contact préféré pour devis',
    },
    footer: {
      buttonText: 'Envoyer un SMS',
      externalLink: smsPhoneNumber,
    },
  },
  {
    id: 4,
    type: 'single',
    header: {
      icon: MailIcon,
    },
    content: {
      heading: 'Email',
      value: 'manu-tech@orange.fr',
      caption: 'Réponse sous 24h ouvrées',
    },
    footer: {
      buttonText: 'Envoyer un email',
      externalLink: mailTo,
    },
  },
]

const schedule = [
  { key: 'Lundi - Vendredi', firstValue: '9h - 12h30', lastValue: '13h30 - 18h30' },
  { key: 'Samedi', lastValue: '9h - 12h30' },
  { key: 'Dimanche', lastValue: 'Fermé' },
]

const adress = ['16 rue Poincaré', 'Ars-sur-Moselle', '57130']
</script>

<template>
  <AppSection class="app-contact" id-section="contact">
    <header class="app-contact-header">
      <EyebrowMT>Nous joindre</EyebrowMT>
      <h2>Contact</h2>
      <p>
        Choisissez le canal qui vous convient. Le contact par SMS ou WhatsApp est privilégié pour
        une réponse rapide et un devis personnalisé.
      </p>
    </header>

    <div>
      <CardMT
        v-for="contact in contacts"
        :graphicIcon="contact.header.icon"
        :iconSize="24"
        cardSize="big"
        :variant="contact.variant"
      >
        <template #cardMtContent>
          <div class="card-content">
            <EyebrowMT :variant="contact.variant ?? 'on-card'">
              {{ contact.content.heading }}
            </EyebrowMT>

            <h4>
              {{ contact.content.value }}
            </h4>

            <p class="caption">
              {{ contact.content.caption }}
            </p>
          </div>
        </template>

        <template #cardMtFooter>
          <ButtonMT
            variant="text-only"
            icon-position="right"
            :href="smsPhoneNumber"
            textPosition="text-start"
          >
            <ChevronRightIcon :size="11" />
            {{ contact.footer.buttonText }}
          </ButtonMT>
        </template>
      </CardMT>
    </div>

    <div class="bottom-card-contact">
      <CardMT
        :graphicIcon="MapPinIcon"
        :iconSize="24"
        cardSize="big"
        class="card-long"
        footerDivider="line"
      >
        <template #heading>Adresse</template>
        <template #subheading>Atelier & Point Relais</template>
        <template #cardMtContent>
          <p v-for="value in adress">
            {{ value }}
          </p>
        </template>

        <template #cardMtFooter> Parking gratuit à proximité </template>
      </CardMT>

      <CardMT
        :graphicIcon="ClockIcon"
        :iconSize="24"
        cardSize="big"
        class="card-long"
        footerDivider="line"
      >
        <template #heading>Horaires d'ouverture</template>
        <template #subheading>Atelier & Accueil</template>
        <template #cardMtContent>
          <ScheduleMT :content="schedule" />
        </template>

        <template #cardMtFooter>
          Contact SMS préféré pour une réponse rapide hors horaires.
        </template>
      </CardMT>
    </div>

    <div>
      <CardMT variant="gradient" cardSize="big">
        <template #cardMtContent>
          <div class="card-contact-us">
            <div class="container-title">
              <h3>Prêt à nous contacter ?</h3>
              <span>Demande de devis — réponse rapide par SMS ou WhatsApp.</span>
            </div>
            <div class="container-buttons">
              <ButtonMT :href="callPhoneNumber">
                <PhoneIcon :size="14" />
                Appeler
              </ButtonMT>
              <ButtonMT variant="filled-green" :href="whatsApp">
                <MessageCircleIcon :size="14" />
                WhatsApp
              </ButtonMT>
            </div>
          </div>
        </template>
      </CardMT>
    </div>
  </AppSection>
</template>

<style scoped>
:deep(.app-contact) {
  display: grid;
  gap: var(--ref-size-20);

  > header {
    grid-column: 1 / -1;
    display: grid;
    gap: 20px;
    text-align: center;
    justify-items: center;

    > p {
      max-width: 60ch;
    }

    & + div {
      grid-column-start: 1;
    }
  }

  > div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
    gap: var(--ref-size-20);
  }

  .bottom-card-contact {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(250px, 100%), 1fr));
    gap: var(--ref-size-20);
  }

  .card-content {
    display: grid;
    gap: 5px;

    .caption {
      font-size: var(--ref-size-11);
    }
  }

  .card-contact-us {
    grid-column: 1 / -1;
    display: flex;
    justify-content: space-between;

    .container-title {
      text-align: start;
      display: grid;
      gap: 10px;
    }

    .container-buttons {
      display: inline-flex;
      gap: 20px;
      justify-content: end;
    }
  }
}
</style>
