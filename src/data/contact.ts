import {
  MailIcon,
  MessageCircleIcon,
  MessageSquareIcon,
  PhoneIcon,
  type LucideIcon,
} from '@lucide/vue'
import { callPhoneNumber, mailTo, smsPhoneNumber, whatsApp } from '@/data/contactInformation'

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

export { contacts, schedule, adress }
