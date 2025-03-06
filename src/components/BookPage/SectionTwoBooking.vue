<template>
    <section class="booking-page2">
    <section class="booking-section-over">
      <div class="booking-content">
        <h2 class="booking-title">Boka bord</h2>
        <p class="booking-info-over">
          Lorem ipsum dolor sit amet consectetur. Elementum amet mattis in placerat placerat elit maecenas.
          Fermentum placerat volutpat diam purus justo. Accumsan eget vehicula eget amet arcu nibh.
        </p>
        <p class="booking-info-under">
          Magna sit porttitor et nibh proin sagittis nullam quam lacinia.
          Justo est ac neque amet suspendisse pharetra lobortis tempus.
          Pharetra quis porta scelerisque vitae feugiat elementum pharetra at.
          Scelerisque vulputate dictumst pulvinar ipsum mauris feugiat.
        </p>
      </div>
  
      <!-- Höger sida: Bild -->
      <div class="info-book">
        <img class="book-image" :src="bookImage" alt="Uppslagen bok liggandes ner" />
      </div>
    </section>
</section>
  </template>
  
  <script setup>
  import bookImage from "@/assets/images/images-and-videos/booking-page/book.png";
  import "./SectionTwoBooking.scss";
  </script>
  