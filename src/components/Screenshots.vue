<template>
  <section id="screenshots" class="py-16 px-6 bg-black">
    <div class="max-w-6xl mx-auto text-center">
      <h2 class="text-3xl md:text-4xl font-bold text-yellow-600 mb-12">Screenshots</h2>
      
      <swiper
        :slides-per-view="1"
        :space-between="20"
        :loop="true"
        :breakpoints="{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }"
        navigation
        class="group"
      >
        <swiper-slide v-for="(slide, index) in slides" :key="index" class="flex justify-center">
          <img
            :src="slide"
            alt="Screenshot"
            class="rounded-2xl shadow-lg transform transition duration-300 hover:scale-105"
          />
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'

// Import your screenshots explicitly
import slider1 from '../assets/bannar/slider1.png'
import slider2 from '../assets/bannar/slider2.png'
import slider3 from '../assets/bannar/slider3.png'
import slider4 from '../assets/bannar/slider4.png'
import slider5 from '../assets/bannar/slider5.png'

const slides = [slider1, slider2, slider3, slider4, slider5]
</script>
