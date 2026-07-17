import {
  CalendarClockIcon,
  ClockIcon,
  InfoIcon,
  MapPinIcon,
  ParkingCircleIcon,
  TruckIcon,
  WeightIcon,
  type LucideIcon,
} from '@lucide/vue'
import colissimo from '../assets/images/logo/colissimo-logo.png'
import dpd from '../assets/images/logo/dpd-logo.png'
import chronopost from '../assets/images/logo/chronopost-logo.png'
import colisPrive from '../assets/images/logo/colis-prive-logo.png'

interface Rows {
  key: string
  firstValue?: string
  lastValue: string
}

interface PropsImages {
  title: string
  images: string[]
}

interface PickupBase {
  id: number
  icon: LucideIcon
  title: string
  subtitle: string
}

interface PickupText extends PickupBase {
  type: 'text'
  content: string[]
}

interface PickupSchedule extends PickupBase {
  type: 'schedule'
  content: Rows[]
  caption: string
}

interface PickupImage extends PickupBase {
  type: 'image'
  content: string[]
}

type Pickup = PickupText | PickupSchedule | PickupImage

const pickups: Pickup[] = [
  {
    id: 1,
    type: 'text',
    icon: MapPinIcon,
    title: 'Adresse',
    subtitle: 'Atelier',
    content: ['16 rue Poincaré, Ars-sur-Moselle', '57130'],
  },
  {
    id: 2,
    type: 'text',
    icon: ParkingCircleIcon,
    title: 'Stationnement',
    subtitle: 'Proximite immediate',
    content: ['Parking gratuit'],
  },
  {
    id: 7,
    type: 'image',
    icon: TruckIcon,
    title: 'Partenaires logistiques',
    subtitle: 'Marques',
    content: [colissimo, chronopost, dpd, colisPrive],
  },
  {
    id: 3,
    type: 'text',
    icon: WeightIcon,
    title: 'Poids maximum',
    subtitle: 'Par colis',
    content: ['20 kg'],
  },
  {
    id: 4,
    type: 'text',
    icon: CalendarClockIcon,
    title: 'Délai de retrait',
    subtitle: 'Apres notification',
    content: ['7 jours ouvrés'],
  },
  {
    id: 6,
    type: 'schedule',
    icon: ClockIcon,
    title: "Horaires d'ouvertures",
    subtitle: 'Horaires du point relais',
    content: [
      { key: 'Lundi - Vendredi', firstValue: '9h - 12h30', lastValue: '13h30 - 18h30' },
      { key: 'Samedi', lastValue: '9h - 12h30' },
      { key: 'Dimanche', lastValue: 'Fermé' },
    ],

    caption:
      "Les colis peuvent être déposés ou récupérés pendant les heures d'ouverture de la boutique.",
  },
  {
    id: 5,
    type: 'text',
    icon: InfoIcon,
    title: 'Notification',
    subtitle: 'Automatique',
    content: ['SMS & Email'],
  },
]

export { pickups }
