<script setup lang="ts">
import AppSection from '@/features/layout/AppSection.vue'
import EyebrowMT from '@/ui/EyebrowMT.vue'
import { ChevronRightIcon, ClockIcon, MapPinIcon, MessageCircleIcon, PhoneIcon } from '@lucide/vue'
import { callPhoneNumber, smsPhoneNumber, whatsApp } from '@/data/contactInformation'
import CardMT from '@/ui/CardMT.vue'
import ButtonMT from '@/ui/ButtonMT.vue'
import ScheduleMT from '@/ui/ScheduleMT.vue'
import { contacts, schedule, adress } from '@/data/contact'
</script>

<template>
  <AppSection class="app-contact" id-section="contact">
    <header>
      <EyebrowMT>Nous joindre</EyebrowMT>
      <h2>Contact</h2>
      <p>
        Choisissez le canal qui vous convient. Le contact par SMS ou WhatsApp est privilégié pour
        une réponse rapide et un devis personnalisé.
      </p>
    </header>

    <div class="contact-information">
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

    <div class="card-contact-us">
      <hgroup class="container-title">
        <h3>Prêt à nous contacter ?</h3>
        <p>Demande de devis — réponse rapide par SMS ou WhatsApp.</p>
      </hgroup>
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

  .contact-information {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(250px, 100%), 1fr));
    gap: var(--ref-size-20);
  }

  .bottom-card-contact {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(500px, 100%), 1fr));
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
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
    justify-content: space-between;
    border: none;
    background: linear-gradient(
      to right,
      hsl(from var(--sys-color-primary) h s l / 0.15),
      var(--app-background-on-background),
      hsl(from var(--sys-color-secondary) h s l / 0.15)
    );
    padding: 24px;
    border-radius: var(--app-radius);
    gap: 10px;

    .container-title {
      text-align: start;
      display: grid;
      gap: 10px;
    }

    .container-buttons {
      display: inline-flex;
      align-items: center;
      gap: 20px;
      justify-content: start;
    }
  }
}

@media (min-width: 768px) {
  :deep(.app-contact) {
    .card-contact-us {
      .container-buttons {
        justify-content: end;
      }
    }
  }
}
</style>
