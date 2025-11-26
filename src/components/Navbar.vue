<template>
  <nav class="fixed w-full z-50 bg-black/80 backdrop-blur-md p-4 flex justify-between items-center">
    <div class="text-2xl font-bold text-yellow-600 flex items-center gap-2">
      <i class="fas fa-user-secret"></i> Mafias Rival
    </div>

    <!-- Desktop Links -->
    <ul class="hidden md:flex gap-6 text-white">
      <li v-for="link in links" :key="link.href">
        <a :href="link.href" class="hover:text-red-700">{{ link.name }}</a>
      </li>
    </ul>

    <!-- Mobile Hamburger -->
    <div class="md:hidden">
      <button @click="menuOpen = !menuOpen">
        <i class="fas fa-bars text-white text-2xl"></i>
      </button>
    </div>

    <!-- Mobile Menu -->
    <ul v-if="menuOpen" class="absolute w-full top-16 right-4 bg-gray-900 rounded-lg p-5 space-y-4 shadow-lg md:hidden">
      <li v-for="link in links" :key="link.href">
        <a :href="link.href" class=" justify-center align-center block  hover:text-red-700" @click="menuOpen = false">{{ link.name }}</a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
const links = [
  { name: 'Home', href: '#home' },
  { name: 'Features', href: '#features' },
  { name: 'Screenshots', href: '#screenshots' },
  { name: 'FAQ', href: '#faq' },
/*   { name: 'Leaderboard', href: '#leaderboard' }, */
  { name: 'Download', href: '#download' },
  { name: 'Contact', href: '#contact' },
]
const menuOpen = ref(false)
</script>
