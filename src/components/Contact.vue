<template>
  <section id="contact" class="w-full bg-black py-16 px-6">
    <div class="max-w-6xl mx-auto">
      <!-- Section Title -->
      <h2 class="text-4xl md:text-5xl text-center font-bold text-yellow-600 mb-12">
        Contact Us
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        <!-- Contact Info -->
        <div class="space-y-6 text-gray-300">
          <p class="text-lg">
            Reach out anytime and our team of mafia bosses will get back to you.
          </p>

          <div class="flex items-center gap-3">
            <i class="fas fa-envelope text-red-700 w-6"></i>
            <span>support@mafiasrival.com</span>
          </div>

          <div class="flex items-center gap-3">
            <i class="fas fa-phone-alt text-red-700 w-6"></i>
            <span>+1 234 567 890</span>
          </div>

          <div class="flex items-center gap-3">
            <i class="fas fa-map-marker-alt text-red-700 w-6"></i>
            <span>Mafia Street, </span>
          </div>

          <!-- Social Links -->
          <div class="flex gap-4 mt-4 text-2xl">
            <a href="#" target="_blank" class="hover:text-yellow-600 transition">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" target="_blank" class="hover:text-yellow-600 transition">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" target="_blank" class="hover:text-yellow-600 transition">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#" target="_blank" class="hover:text-yellow-600 transition">
              <i class="fab fa-discord"></i>
            </a>
          </div>
        </div>

        <!-- Contact Form -->
        <form @submit.prevent="handleSubmit"
          class="space-y-4 bg-black/80 p-8 rounded-2xl border-2 border-yellow-600 w-full shadow-lg">

          <input v-model="form.name" type="text" placeholder="Full Name" required
            class="w-full p-3 rounded bg-black border border-gray-700 focus:border-red-700 outline-none text-white" />

          <input v-model="form.email" type="email" placeholder="Email" required
            class="w-full p-3 rounded bg-black border border-gray-700 focus:border-red-700 outline-none text-white" />

          <input v-model="form.subject" type="text" placeholder="Subject"
            class="w-full p-3 rounded bg-black border border-gray-700 focus:border-red-700 outline-none text-white" />

          <textarea v-model="form.message" rows="5" placeholder="Message" required
            class="w-full p-3 rounded bg-black border border-gray-700 focus:border-red-700 outline-none text-white"></textarea>

          <button type="submit"
            class="w-full py-3 bg-red-700 hover:bg-yellow-600 rounded-xl font-bold text-black transition transform hover:scale-105">
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const handleSubmit = () => {
  // Mock submission
  alert(`Thank you, ${form.value.name}! We received your message.`)
  form.value = { name: '', email: '', subject: '', message: '' }
}
</script>
