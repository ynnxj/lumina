<template>
  <section>
    <img src="/src/assets/images/images-and-videos/home-page/shaking-the-drink.jpg" alt="A male bartender with short brown hair, shaking a drink behind a bar">
    <img src="/src/assets/images/images-and-videos/home-page/the-pour.jpg" alt="Pouring a freshly mixed cocktail into a class of ice">
    <img src="/src/assets/images/images-and-videos/home-page/the-spritz.jpg" alt="Spritzing a cocktail with lemon skin">
  </section>
</template>

<style lang="scss" scoped>
  section {
    background-color: #283618;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 32px;
    align-items: center;
    padding: 132px 32px;

    img {
      width: 100%;
      grid-column: span 4;
    }
  }

  @media (max-width: 1023px) {
    section {
      display: grid;
      grid-template-columns: repeat(8, 1fr);
      padding: 100px 32px;

      img:nth-child(2) {
        display: none;
      }
    }
  }

  @media (max-width: 480px) {
    section {
      display: grid;
      grid-template-columns: repeat(2, 1fr);

      img:nth-child(2),
      img:nth-child(3) {
        display: none;
      }
    }
  }
</style>
