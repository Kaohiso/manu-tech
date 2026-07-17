<script setup lang="ts">
import AppSection from '@/features/layout/AppSection.vue'
import CardContactUs from '@/ui/contact/CardContactUs.vue'
import CardContactShort from '@/ui/contact/CardContactShort.vue'
import EyebrowMT from '@/ui/EyebrowMT.vue'

import {
  ClockIcon,
  MailIcon,
  MapPinIcon,
  MessageCircleIcon,
  MessageSquareIcon,
  PhoneIcon,
  type LucideIcon,
} from '@lucide/vue'
import CardContactLarge from '@/ui/contact/CardContactLarge.vue'
import ContentSchedule from '@/ui/grid/ContentSchedule.vue'
import ContentText from '@/ui/grid/ContentText.vue'
import { callPhoneNumber, mailTo, smsPhoneNumber, whatsApp } from '@/data/contact'

interface ContactBase {
  id: number
}

interface ContactOneSpan extends ContactBase {
  type: 'single'
  color: 'filled-blue' | 'green' | 'classic'
  header: {
    icon: LucideIcon
    iconColor?: string
  }
  content: {
    title: string
    value: string
    caption: string
  }
  footer: {
    buttonText: string
    externalLink: string
  }
}

interface Rows {
  key: string
  firstValue?: string
  lastValue: string
}

interface ContactTwoSpan extends ContactBase {
  type: 'double'
  header: {
    icon: LucideIcon
    title: string
    subTitle: string
  }
  footer: {
    caption: string
  }
}

interface ContactTwoSpanText extends ContactTwoSpan {
  contentType: 'text'
  content: string[]
}

interface ContactTwoSpanSchedule extends ContactTwoSpan {
  contentType: 'schedule'
  content: Rows[]
}

type Contact = ContactOneSpan | ContactTwoSpanText | ContactTwoSpanSchedule

const contacts: Contact[] = [
  {
    id: 1,
    type: 'single',
    color: 'filled-blue',
    header: {
      icon: PhoneIcon,
      iconColor: 'var(--ref-color-white)',
    },
    content: {
      title: 'Telephone',
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
    type: 'single',
    header: {
      icon: MessageCircleIcon,
      iconColor: 'var(--sys-color-brand-whatsapp)',
    },
    content: {
      title: 'WhatsApp',
      value: '+33 7 87 33 43 35',
      caption: 'Réponse rapide garantie',
    },
    footer: {
      buttonText: 'Envoyer un message',
      externalLink: whatsApp,
    },
    color: 'green',
  },
  {
    id: 3,
    type: 'single',
    header: {
      icon: MessageSquareIcon,
    },
    content: {
      title: 'SMS',
      value: '+33 7 87 33 43 35',
      caption: 'Contact préféré pour devis',
    },
    footer: {
      buttonText: 'Envoyer un SMS',
      externalLink: smsPhoneNumber,
    },
    color: 'classic',
  },
  {
    id: 4,
    type: 'single',
    header: {
      icon: MailIcon,
    },
    content: {
      title: 'Email',
      value: 'manu-tech@orange.fr',
      caption: 'Réponse sous 24h ouvrées',
    },
    footer: {
      buttonText: 'Envoyer un email',
      externalLink: mailTo,
    },
    color: 'classic',
  },
  {
    id: 6,
    type: 'double',
    header: {
      icon: MapPinIcon,
      title: 'Adresse',
      subTitle: 'Atelier & Point Relais',
    },
    contentType: 'text',
    content: ['16 rue Poincaré', 'Ars-sur-Moselle', '57130'],
    footer: {
      caption: 'Parking gratuit à proximité',
    },
  },
  {
    id: 6,
    type: 'double',
    header: {
      icon: ClockIcon,
      title: "Horaires d'ouvertures",
      subTitle: 'Atelier & accueil',
    },
    contentType: 'schedule',
    content: [
      { key: 'Lundi - Vendredi', firstValue: '9h - 12h30', lastValue: '13h30 - 18h30' },
      { key: 'Samedi', lastValue: '9h - 12h30' },
      { key: 'Dimanche', lastValue: 'Fermé' },
    ],
    footer: {
      caption: 'Contact SMS préféré pour une réponse rapide hors horaires.',
    },
  },
]

function updateColorWhenClosed(status: string) {
  if (status === 'Fermé') {
    return 'color: var(--sys-color-status-closed)'
  }
}
</script>

<template>
  <AppSection class="app-contact" id-section="contact">
    <div class="title">
      <EyebrowMT>Nous joindre</EyebrowMT>
      <h2>Contact</h2>
      <p>
        Choisissez le canal qui vous convient. Le contact par SMS ou WhatsApp est privilégié pour
        une réponse rapide et un devis personnalisé.
      </p>
    </div>

    <template v-for="contact in contacts">
      <CardContactShort
        v-if="contact.type === 'single'"
        :key="contact.id"
        :color="contact.color"
        :redirect="contact.footer.externalLink"
      >
        <template #icon>
          <component
            :is="contact.header.icon"
            :color="
              contact.header.iconColor !== undefined
                ? contact.header.iconColor
                : 'hsl(from var(--sys-color-primary) h s calc(l + 20))'
            "
          />
        </template>
        <template #title>
          {{ contact.content.title }}
        </template>
        <template #value>
          {{ contact.content.value }}
        </template>
        <template #caption>
          {{ contact.content.caption }}
        </template>
        <template #thirdPart>
          {{ contact.footer.buttonText }}
        </template>
      </CardContactShort>

      <CardContactLarge v-if="contact.type === 'double'" :key="contact.id">
        <template #icon>
          <component :is="contact.header.icon" />
        </template>

        <template #title>
          {{ contact.header.title }}
        </template>

        <template #subtitle>
          {{ contact.header.subTitle }}
        </template>

        <template #content>
          <ContentSchedule v-if="contact.contentType === 'schedule'" :content="contact.content" />
          <ContentText v-else-if="contact.contentType === 'text'" :content="contact.content" />
        </template>

        <template #footer v-if="contact.footer.caption">
          <div class="footer">
            <div class="line" />
            <span class="text-caption" :class="updateColorWhenClosed(contact.footer.caption)">
              {{ contact.footer.caption }}
            </span>
          </div>
        </template>
      </CardContactLarge>
    </template>
    <CardContactUs />
  </AppSection>
</template>

<style scoped>
:deep(.app-contact) {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--ref-size-20);

  .title {
    display: grid;
    gap: 20px;
    grid-column: 2 / span 2;
    text-align: center;

    & + div {
      grid-column-start: 1;
    }
  }
}
</style>
