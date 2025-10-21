<template>
  <div class="min-h-screen bg-[#0d0d0d]">
    <Navbar />
    <Home />
    <Features />
    <Screenshots />
    <FAQ />
    <Leaderboard />
    <Download />
    <Contact />
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Home from './components/Home.vue'
import Features from './components/Features.vue'
import Screenshots from './components/Screenshots.vue'
import FAQ from './components/FAQ.vue'
import Leaderboard from './components/Leaderboard.vue'
import Download from './components/Download.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
</script>
