<script lang="ts" setup>
import EyebrowMT from '@/ui/EyebrowMT.vue'
import * as Icons from '@lucide/vue'
import ServiceMT from '@/ui/ServiceMT.vue'
import AppVehicles from '@/features/AppVehicles.vue'
import AppSection from '@/features/layout/AppSection.vue'

interface dataItemListProps {
  iconName: Icons.LucideIcon
  text: string
}

const itemListDiagnosis: dataItemListProps[] = [
  { iconName: Icons.SearchIcon, text: 'Diagnostic électronique automobile' },
  {
    iconName: Icons.CircleAlertIcon,
    text: "Lecture des codes défauts, codages, activations d'options",
  },
  { iconName: Icons.ActivityIcon, text: 'Test complet de la santé de la batterie' },
  { iconName: Icons.RefreshCcwIcon, text: 'Activation CarPlay / Android Auto' },
  { iconName: Icons.SettingsIcon, text: 'Mise à jour Firmware / GPS' },
  { iconName: Icons.RadioIcon, text: 'Initialisation capteurs TPMS' },
  { iconName: Icons.ToggleRightIcon, text: "Activation / désactivation d'options" },
  { iconName: Icons.KeyIcon, text: 'Programmation clé / carte code PIN' },
]

const itemListRepair: dataItemListProps[] = [
  { iconName: Icons.SmartphoneIcon, text: 'Remplacement écran smartphone' },
  { iconName: Icons.GamepadIcon, text: 'Réparation console de jeux' },
  { iconName: Icons.TabletIcon, text: 'Remplacement écran tablette' },
  { iconName: Icons.BatteryIcon, text: 'Remplacement de batterie' },
  { iconName: Icons.MonitorIcon, text: 'Remplacement écran PC' },
  { iconName: Icons.ShieldIcon, text: 'Pose de film Hydrogel' },
  { iconName: Icons.LightbulbIcon, text: 'Remplacement rétroéclairage LED' },
  { iconName: Icons.DrillIcon, text: 'Remplacement pièce électroménager' },
]
</script>

<template>
  <AppSection class="app-services" id-section="services">
    <EyebrowMT>Nos prestations</EyebrowMT>
    <h2>
      <span>Expertise complète</span>
      <span> résultats garantis</span>
    </h2>
    <p>
      De l’automobile aux appareils mobiles — nous intervenons sur tous vos équipements
      électroniques avec précision et professionnalisme.
    </p>
    <ServiceMT
      :icon-h3="Icons.CarIcon"
      title-h3="Diagnostic électronique automobile"
      caption-h3="Diagnostic & programmation électronique"
      p-h3="Equipé des derniers outils de diagnostic professionnel, nous intervenons sur l'ensemble
          des systèmes électroniques de votre véhicule : lecture des codes défauts, codage d'options
          et bien plus encore."
      :item-list="itemListDiagnosis"
      title-h4="Diagnostic complet"
      caption-h4="Toutes marques & modèles"
      price="35€"
      caption-price="tarif fixe"
    />

    <AppVehicles />

    <ServiceMT
      direction="img-left"
      :icon-h3="Icons.HammerIcon"
      title-h3="Réparation Électronique"
      caption-h3="Smartphones · Tablettes · Consoles"
      p-h3="Nous intervenons sur tous les appareils électroniques grand public avec rigueur et précision. Pièces d'origine ou haute qualité, garantie sur chaque intervention."
      :item-list="itemListRepair"
      title-h4="Remplacement écran"
      caption-h4="Smartphone · Tablette · Console"
      price="50€"
      caption-price="+ pièce"
    />
  </AppSection>
</template>

<style lang="css" scoped>
:deep(.app-services) {
  display: grid;
  gap: 30px;
  text-align: center;

  h2 {
    > span {
      display: inline;
    }
  }

  & > p {
    max-width: 60ch;
    margin-inline: auto;
  }
}
</style>
