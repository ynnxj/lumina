<script>
</script>

<template>
  <main>
    <!-- Mobile/Tablet video -->
    <video width="768" height="1048" autoplay loop muted playsinline class="video-small-hp" src="/src/assets/images/images-and-videos/home-page/mobile-and-tablet-video/tablet-and-mobile-video.mp4" type="video/mp4"></video>

    <!-- Desktop video -->
    <video width="1440" height="924" autoplay loop muted playsinline class="video-hp" src="/src/assets/images/images-and-videos/home-page/desktop-video/desktop-video.mp4" type="video/mp4"></video>

    <div class="container">
      <h1>
        <img width="279" height="86" src="/src/assets/images/images-and-videos/logos/LUMINA-logo.svg" alt="Logotyp för Lumina">
      </h1>

      <div class="btn-container">
        <router-link to="/menu">
          <button class="menu">Meny</button>
        </router-link>
        <router-link to="/book">
          <button class="book">Boka bord</button>
        </router-link>

      </div>
    </div>
  </main>
</template>

<style scoped>
  @import 'SectionOneStyle.scss';
</style>
