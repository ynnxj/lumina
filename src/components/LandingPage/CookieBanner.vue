<template>
  <div v-if="showBanner" class="cookie-banner">
    <div class="cookie-container">
      <h2 class="cookie-lumina">COOKIES</h2>
      <p class="cookie-text">
        Vi använder cookies för att förbättra din upplevelse.
        Välj "Acceptera" för att godkänna alla cookies
        eller "Neka" för att endast använda nödvändiga cookies.
        Du kan när som helst ändra dina inställningar i webbläsaren.
      </p>
      <div class="cookie-buttons">
        <button class="btn-decline" @click="declineCookies">Neka</button>
        <button class="btn-accept" @click="acceptCookies">Acceptera</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const showBanner = ref(true);

function acceptCookies() {
  localStorage.setItem("cookieConsent", "accepted");
  showBanner.value = false;
}

function declineCookies() {
  localStorage.setItem("cookieConsent", "declined");
  showBanner.value = false;
}
</script>

<style scoped>
@import "CookieBanner.scss";
</style>
