<script lang="ts" setup>
import EyebrowMT from '@/ui/EyebrowMT.vue'
import {
  CarIcon,
  SearchIcon,
  ActivityIcon,
  RefreshCcwIcon,
  SettingsIcon,
  ToggleRightIcon,
  KeyIcon,
  RadioIcon,
  CircleAlertIcon,
  type LucideIcon,
} from '@lucide/vue'
import ItemService from '@/ui/ItemService.vue'

interface dataItemListProps {
  iconName: LucideIcon
  text: string
}

const dataItemList: dataItemListProps[] = [
  { iconName: SearchIcon, text: 'Codage après remplacement de pièce' },
  { iconName: CircleAlertIcon, text: 'Initialisation capteurs pression pneus' },
  { iconName: ActivityIcon, text: 'Test complet de la batterie' },
  { iconName: RefreshCcwIcon, text: 'Activation CarPlay / Android Auto' },
  { iconName: SettingsIcon, text: 'Mise à jour GPS et logiciel multimédia' },
  { iconName: RadioIcon, text: 'Calibration boîte de vitesses' },
  { iconName: ToggleRightIcon, text: "Activation/désactivation d'options" },
  { iconName: KeyIcon, text: 'Programmation clé / carte code PIN' },
]
</script>

<template>
  <section class="app-services">
    <EyebrowMT>Nos prestations</EyebrowMT>
    <h2>
      <span>Expertise complète</span>
      <span> résultats garantis</span>
    </h2>
    <p>
      De l’automobile aux appareils mobiles — nous intervenons sur tous vos équipements
      électroniques avec précision et professionnalisme.
    </p>
    <article class="container-content">
      <div class="article-left">
        <div class="container-article-title">
          <CarIcon class="icon-title" :color="'var(--sys-color-text-primary)'" />
          <div>
            <h3>Diagnostic électronique automobile</h3>
            <span>Diagnostic & programmation électronique</span>
          </div>
        </div>
        <p>
          Equipé des derniers outils de diagnostic professionnel, nous intervenons sur l'ensemble
          des systèmes électroniques de votre véhicule : lecture des codes défauts, codage d'options
          et bien plus encore.
        </p>
        <div class="list-services">
          <ItemService v-for="item in dataItemList">
            <template #icon-list>
              <component :is="item.iconName" class="icon-list" />
            </template>
            <template #text>{{ item.text }}</template>
          </ItemService>
        </div>
      </div>
      <div class="article-right">
        <img src="../assets/images/oden-services.jpeg" class="image-service" />
        <div class="under-image-service">
          <div class="container-title">
            <h4>Diagnostic complet</h4>
            <span>Toutes marques & modèles</span>
          </div>
          <div class="container-price">
            <span class="price">35€</span>
            <span class="caption-price">tarif fixe</span>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<style lang="css" scoped>
.app-services {
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

  .container-content {
    display: grid;
    text-align: start;
    grid-template-columns: 1fr 1fr;
    column-gap: 50px;

    .article-left {
      display: grid;
      row-gap: 30px;

      .container-article-title {
        display: inline-flex;
        gap: 15px;
        align-items: center;

        .icon-title {
          padding: 10px;
          width: 20px;
          height: 20px;
          border-radius: var(--app-radius-icon);
          background-color: var(--sys-color-primary);
        }
      }

      .list-services {
        display: grid;
        justify-content: start;
        grid-template-columns: 50% 50%;
        row-gap: 10px;
        column-gap: 10px;
      }
    }

    .article-right {
      display: grid;
      align-self: center;
      height: fit-content;

      .image-service {
        width: 100%;
        max-height: 350px;
        object-fit: cover;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }

      .under-image-service {
        display: flex;
        background-color: var(--app-background-on-background);
        justify-content: space-between;
        padding: 20px;
        border-bottom-left-radius: var(--app-radius);
        border-bottom-right-radius: var(--app-radius);

        .container-title {
          display: grid;
          align-items: flex-end;
        }

        .container-price {
          display: grid;
          justify-content: end;

          .price {
            justify-self: end;
            font-family: var(--ref-font-family-condensed);
            font-size: var(--ref-size-32);
            font-weight: var(--ref-font-weight-black);
            color: var(--sys-color-primary);
          }

          .caption-price {
            font-family: var(--sys-font-family-caption);
            font-size: var(--sys-font-size-caption);
            color: var(--sys-color-text-caption);
          }
        }
      }
    }
  }
}
</style>
