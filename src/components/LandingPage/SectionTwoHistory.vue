<template>
  <section class="history">
    <div class="history-container">
      <h2 class="lumina-history">Luminas Historia</h2>

      <div class="history-text">
        <p class="primary-text">
          Lumina Bar är där atmosfär möter ljus och skapar en upplevelse utöver det vanliga.
          Här kombineras elegans med noggrant utvalda detaljer som framhäver barens unika identitet.
          Med stilrena former, lekfulla kontraster och genomtänkt ljussättning blir varje
          besök en inbjudan till avkoppling. Namnet Lumina hämtar inspiration från det
          latinska ordet "lumen", som betyder ljus. Filosofin genomsyrar allt – från designval
          till stämningen i lokalen. Med en sofistikerad mix av skarpa linjer och varma detaljer
          skapas en dynamisk balans.
        </p>

        <p class="secondary-text">
          Bakom varje aspekt av Lumina finns en tanke att förena stilrent och oväntat.
          En plats för inspiration, umgänge och smakupplevelser.
        </p>
      </div>

      <div class="history-image-container">
        <img class="history-main-image" :src="barImage" alt="Daniel Tending Lumina Bar" />
      </div>

      <div class="history-drinks">
        <img class="history-drinks-image" :src="drinksImage" alt="Fyra drinkar" />
      </div>
    </div>
  </section>
</template>

<script setup>
import barImage from "@/assets/images/images-and-videos/home-page/daniel-tending-the-bar.jpg";
import drinksImage from "@/assets/images/images-and-videos/home-page/drinks.png";

import "./SectionTwoHistoryStyle.scss";
</script>
