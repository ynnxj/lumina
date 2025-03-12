<template>
	<!-- Menu Page Header -->
	<div>
    <!-- Header Background Image -->
    <img class="header-img" src="/src/assets/images/images-and-videos/menu-page/jigger-pour.jpg" alt="A male bartender with short dark brown hair pouring liquid into a jigger behind a bar" loading="lazy" width="3500" height="2333">

    <!-- Transparent Menu Logo -->
    <h2>
      <img class="menu-logo" src="/src/assets/images/images-and-videos/menu-page/menu-logo.svg" alt="Lumina Menu Logo" loading="lazy">
    </h2>
	</div>
</template>

<style lang="scss" scoped>
  div {
    height: 100vh;
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    .header-img {
      width: 100vw;
      height: 100%;
      object-fit: cover;
      object-position: 0 50%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
    }

    .menu-logo {
      margin-bottom: 150px;
      width: 438px;
      height: 98px;
    }
  }

  @media (max-width: 1023px) {
    div {
      height: 50vh;

      .header-img {
        object-position: 50%;
        top: -15%;
      }

      .menu-logo {
        width: 200px;
        margin-bottom: 80px;
      }
    }
  }

  @media (max-width: 480px) {
    div {
      height: 30vh;

      .header-img {
        object-position: 25%;
        top: -30%;
      }

      .menu-logo {
        width: 150px;
        margin-bottom: 40px;
      }
    }
  }
</style>
