import {
  CalendarClockIcon,
  InfoIcon,
  MapPinIcon,
  ParkingCircleIcon,
  WeightIcon,
  type LucideIcon,
} from '@lucide/vue'

interface PickupProps {
  id: number
  icon: LucideIcon
  heading: string
  subheading: string
  content: string[]
}

const pickups: PickupProps[] = [
  {
    id: 1,
    icon: MapPinIcon,
    heading: 'Adresse',
    subheading: 'Atelier',
    content: ['16 rue Poincaré, Ars-sur-Moselle 57130'],
  },
  {
    id: 2,
    icon: ParkingCircleIcon,
    heading: 'Stationnement',
    subheading: 'Proximite immediate',
    content: ['Parking gratuit'],
  },
  {
    id: 3,
    icon: WeightIcon,
    heading: 'Poids maximum',
    subheading: 'Par colis',
    content: ['20 kg'],
  },
  {
    id: 4,
    icon: CalendarClockIcon,
    heading: 'Délai de retrait',
    subheading: 'Apres notification',
    content: ['7 jours ouvrés'],
  },
  {
    id: 5,
    icon: InfoIcon,
    heading: 'Notification',
    subheading: 'Automatique',
    content: ['SMS & Email'],
  },
]

export { pickups }
