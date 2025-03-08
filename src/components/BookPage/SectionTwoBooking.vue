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
          <form ref="bookingForm">
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
                <label for="gdpr">
                  <span class="gdpr-full"> GDPR Lorem ipsum dolor sit amet </span>
                  <span class="gdpr-short"> GDPR Lorem ipsum </span>
                </label>
                <p class="necessary-info">* Nödvändig information</p>
              </div>
            </div>
  
            <div class="form-buttons">
              <button type="button" class="btn-reset" @click="resetForm">Rensa</button>
              <button type="submit" class="btn-submit" @click.prevent="handleBooking">
                Skicka förfrågan
              </button>
            </div>
          </form>
        </div>
  
        <div class="booking-image-container">
          <img class="booking-image" :src="pourImage" alt="Bartender häller upp en drink från höjd" />
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
  import { ref } from "vue";
  import bookImage from "@/assets/images/images-and-videos/booking-page/book.png";
  import pourImage from "@/assets/images/images-and-videos/booking-page/high-pour.jpg";
  import "./SectionTwoBooking.scss";
  
  const bookingForm = ref(null);
  const showBookingModal = ref(false);
  
  const resetForm = () => {
    if (bookingForm.value) {
      bookingForm.value.reset();
    }
  };
  
  const handleBooking = () => {
    showBookingModal.value = true;
  };
  
  const closeModal = () => {
    showBookingModal.value = false;
  };
  </script>
  
<style scoped>

.booking-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

.booking-modal-content {
  position: relative;
  width: 768px;
  height: 361px;
  background-color: #283618;
  color: #d7d3cb;
  border-radius: 8px;
  box-sizing: border-box;
}

.booking-modal-content h2 {
  position: absolute;
  top: 90px;
  margin-left: 95px;
  color: #f4c96d;
  font-size: 24px;
}

.booking-modal-content p {
  position: absolute;
  top: 130px; 
  text-align: center;
  font-size: 16px;
  line-height: 24px;
  width: 100%;
}

.booking-modal-content button {
  height: 40px;
  width: 160px;
  position: absolute;
  top: 230px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #f4c96d;
  border: none;
  padding: 12px 24px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.booking-modal-content button:hover {
  background-color: #d9a947;
}

@media (max-width: 700px) {
  .booking-modal-content {
    width: 320px;
    height: 240px;
  }

  .booking-modal-content h2 {
    top: 40px;
    margin-left: 10px;
    font-size: 16px;
  }

  .booking-modal-content p {
    top: 70px;
    text-align: left;
    margin-left: 10px;
  }

  .booking-modal-content button {
    top: 160px;
  }
}
</style>