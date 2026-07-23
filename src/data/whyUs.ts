import * as Icons from '@lucide/vue'

interface ReasonProps {
  id: number
  icon: Icons.LucideIcon
  heading: string
  content: string
}

const reasons: ReasonProps[] = [
  {
    id: 1,
    icon: Icons.BadgeIcon,
    heading: 'Tarifs justes & transparents',
    content: 'Tarification claire sans mauvaises surprises. Devis avant toute intervention.',
  },
  {
    id: 2,
    icon: Icons.ShieldIcon,
    heading: 'Qualité certifiée',
    content:
      "Pièces d'origine ou qualité premium uniquement. Chaque réparation est soigneusement contrôlée.",
  },
  {
    id: 3,
    icon: Icons.ClockIcon,
    heading: 'Délais maîtrisés',
    content:
      'Diagnostic rapide, intervention efficace. Votre immobilisation est réduite au minimum.',
  },
  {
    id: 4,
    icon: Icons.TargetIcon,
    heading: 'Service personnalisé',
    content:
      'Chaque client est unique. Nous adaptons nos solutions à votre situation et votre budget.',
  },
  {
    id: 5,
    icon: Icons.CpuIcon,
    heading: 'Expertise technique pointue',
    content:
      'Spécialiste en électronique embarquée et réparation de précision depuis plus de 10 ans.',
  },
  {
    id: 6,
    icon: Icons.StarIcon,
    heading: 'Satisfaction garantie',
    content:
      "100% de clients satisfaits. Notre réputation repose sur l'honnêteté et le professionnalisme.",
  },
]

export { reasons }
