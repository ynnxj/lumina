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
          Magna sit porttitor et nibh proin sagittis nullam quam lacinia. Justo est ac neque amet suspendisse 
          pharetra lobortis tempus. Pharetra quis porta scelerisque vitae feugiat elementum pharetra at. 
          Scelerisque vulputate dictumst pulvinar ipsum mauris feugiat.
        </p>
      </div>

      <div class="info-book">
        <img loading="lazy" class="book-image" :src="bookImage" alt="Uppslagen bok liggandes ner" />
      </div>
    </section>

    <section class="booking-section-under">
      <div class="booking-form">
        <form ref="bookingForm">
          <div class="form-group">
            <label for="name">Namn på bokningen*</label>
            <input v-model="name" type="text" id="name" 
                   :placeholder="showError && name.trim() === '' ? 'Nödvändig information' : 'Ditt namn'" 
                   :class="{'error-placeholder': showError && name.trim() === ''}" />
          </div>

          <div class="form-group">
            <label for="people">Antal personer*</label>
            <input v-model="people" type="text" id="people" 
                   :placeholder="showError && people.trim() === '' ? 'Nödvändig information' : 'Antal personer'" 
                   :class="{'error-placeholder': showError && people.trim() === ''}" />
          </div>

          <div class="form-group">
            <label for="date">Önskat datum*</label>
            <input v-model="date" type="text" id="date" 
                   :placeholder="showError && date.trim() === '' ? 'Nödvändig information' : 'Datum'" 
                   :class="{'error-placeholder': showError && date.trim() === ''}" />
          </div>

          <div class="form-group">
            <label for="time">Önskad tid*</label>
            <input v-model="time" type="text" id="time" 
                   :placeholder="showError && time.trim() === '' ? 'Nödvändig information' : 'Tid'" 
                   :class="{'error-placeholder': showError && time.trim() === ''}" />
          </div>

          <div class="form-group">
            <label for="email">Din e-mail*</label>
            <input v-model="email" type="text" id="email" 
                   :placeholder="showError && email.trim() === '' ? 'Nödvändig information' : 'Din e-post'" 
                   :class="{'error-placeholder': showError && email.trim() === ''}" />
          </div>

          <div class="form-group">
            <label for="phone">Ditt telefonnummer*</label>
            <input v-model="phone" type="text" id="phone" 
                   :placeholder="showError && phone.trim() === '' ? 'Nödvändig information' : 'Ditt telefonnummer'" 
                   :class="{'error-placeholder': showError && phone.trim() === ''}" />
          </div>

          <div class="gdpr">
            <div class="gdpr-content">
              <input v-model="gdprAccepted" type="checkbox" id="gdpr" />
              <label for="gdpr">
                <span class="gdpr-full"> GDPR Lorem ipsum dolor sit amet </span>
                <span class="gdpr-short"> GDPR Lorem ipsum </span>
              </label>
              <p class="necessary-info">* Nödvändig information</p>
              <p v-if="showError && !gdprAccepted" class="error-message">
                Godkänn GDPR för att skicka förfrågan
              </p>
            </div>
          </div>

          <div class="form-buttons">
            <button type="button" class="btn-reset" @click="resetForm">Rensa</button>
            <button type="submit" :class="['btn-submit', { 'btn-disabled': !isFormValid }]" 
                    @click.prevent="validateForm">
              Skicka förfrågan
            </button>
          </div>
        </form>
      </div>

      <div class="booking-image-container">
        <img loading="lazy" class="booking-image" :src="pourImage" alt="Bartender häller upp en drink från höjd" width="2333" height="3500"  />
      </div>
    </section>
  </section>

  <div v-if="showBookingModal" class="booking-modal-overlay">
    <div class="booking-modal-content">
      <h2>Tack för din förfrågan!</h2>
      <p>Vi ser över tillgängligheten och återkommer till dig via e-post inom kort.</p>
      <button @click="closeModal">Okej</button>
    </div>
  </div>
</template>

  
<script setup>
import { ref, computed, nextTick } from "vue";
import bookImage from "@/assets/images/images-and-videos/booking-page/book.png";
import pourImage from "@/assets/images/images-and-videos/booking-page/high-pour.jpg";
import "./SectionTwoBooking.scss";

const bookingForm = ref(null);
const showBookingModal = ref(false);
const name = ref("");
const people = ref("");
const date = ref("");
const time = ref("");
const email = ref("");
const phone = ref("");
const gdprAccepted = ref(false);
const showError = ref(false);

showError.value = false;

const isFormValid = computed(() => {
  return (
    name.value.trim() !== "" &&
    people.value.trim() !== "" &&
    date.value.trim() !== "" &&
    time.value.trim() !== "" &&
    email.value.trim() !== "" &&
    phone.value.trim() !== "" &&
    gdprAccepted.value
  );
});

const resetForm = () => {
  name.value = "";
  people.value = "";
  date.value = "";
  time.value = "";
  email.value = "";
  phone.value = "";
  gdprAccepted.value = false;

  showError.value = false;
  nextTick(() => {
    showError.value = false;
  });
};

const handleBooking = () => {
  if (isFormValid.value) {
    showBookingModal.value = true;
  }
};

const closeModal = () => {
  showBookingModal.value = false;
};

const validateForm = () => {
  showError.value = true;
  
  if (isFormValid.value) {
    showBookingModal.value = true;
    showError.value = false;
  }
};

handleBooking();
</script>