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
  
        <div class="info-book">
          <img class="book-image" :src="bookImage" alt="Uppslagen bok liggandes ner" />
        </div>
      </section>
  
      <section class="booking-section-under">
        <div class="booking-form">
          <form>
            <div class="form-group">
              <label for="name">Namn på bokningen*</label>
              <input type="text" id="name" placeholder="Placeholder" />
            </div>
  
            <div class="form-group">
              <label for="people">Antal personer*</label>
              <input type="text" id="people" placeholder="Placeholder" />
            </div>
  
            <div class="form-group">
              <label for="date">Önskat datum*</label>
              <input type="text" id="date" placeholder="Placeholder" />
            </div>
  
            <div class="form-group">
              <label for="time">Önskad tid*</label>
              <input type="text" id="time" placeholder="Placeholder" />
            </div>
  
            <div class="form-group">
              <label for="email">Din e-mail*</label>
              <input type="email" id="email" placeholder="Placeholder" />
            </div>
  
            <div class="form-group">
              <label for="phone">Ditt telefonnummer*</label>
              <input type="text" id="phone" placeholder="Placeholder" />
            </div>
  
            <div class="gdpr">
              <div class="gdpr-content">
                <input type="checkbox" id="gdpr" />
                <label for="gdpr">GDPR Lorem ipsum dolor sit amet</label>
              </div>
              <p class="necessary-info">* Nödvändig information</p>
            </div>
  
            <div class="form-buttons">
              <button type="reset" class="btn-reset">Rensa</button>
              <button type="submit" class="btn-submit">Skicka förfrågan</button>
            </div>
          </form>
        </div>
  
        <div class="booking-image-container">
          <img class="booking-image" :src="pourImage" alt="Bartender häller upp en drink från höjd" />
        </div>
      </section>
    </section>
  </template>
  
  <script setup>
  import bookImage from "@/assets/images/images-and-videos/booking-page/book.png";
  import pourImage from "@/assets/images/images-and-videos/booking-page/high-pour.jpg";
  
  import "./SectionTwoBooking.scss";
  </script>
  