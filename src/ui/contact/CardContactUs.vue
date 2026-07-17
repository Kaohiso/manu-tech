<script setup lang="ts">
import { callPhoneNumber, whatsApp } from '@/data/contact'
import ButtonMT from '@/ui/ButtonMT.vue'
import { MessageCircleIcon, PhoneIcon } from '@lucide/vue'

const iconSize = 14
</script>

<template>
  <div class="card-contact-us">
    <div class="container-title">
      <h3>Prêt à nous contacter ?</h3>
      <span>Demande de devis — réponse rapide par SMS ou WhatsApp.</span>
    </div>
    <div class="container-buttons">
      <ButtonMT :href="callPhoneNumber">
        <PhoneIcon :size="iconSize" />
        Appeler
      </ButtonMT>
      <ButtonMT variant="filled-green" :href="whatsApp">
        <MessageCircleIcon :size="iconSize" />
        WhatsApp
      </ButtonMT>
    </div>
  </div>
</template>

<style scoped>
.card-contact-us {
  grid-column: 4 span;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(
    to right,
    hsl(from var(--sys-color-primary) h s l / 0.15),
    var(--app-background-on-background),
    hsl(from var(--sys-color-secondary) h s l / 0.15)
  );
  border-radius: var(--app-radius);
  padding: 32px;

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
</style>
