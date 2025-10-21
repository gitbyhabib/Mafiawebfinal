<template>
  <footer class="bg-black-900 text-gray-400 py-8 mt-16 border-t border-gray-800">
    <div class="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div>
        <h2 class="text-2xl font-bold text-yellow-600 flex items-center gap-2">
          <i class="fas fa-user-secret"></i> Mafias Rival
        </h2>
        <p class="mt-2 text-gray-400">Rule the streets, climb the ranks, and become the ultimate mafia boss.</p>
      </div>
      <div>
        <h3 class="font-semibold text-red-700 mb-2">Quick Links</h3>
        <ul class="space-y-1">
          <li v-for="link in links" :key="link.href">
            <a :href="link.href" class="hover:text-yellow-600">{{ link.name }}</a>
          </li>
        </ul>
      </div>
      <div>
        <h3 class="font-semibold text-red-700 mb-2">Follow Us</h3>
        <div class="flex gap-4">
          <a href="https://www.facebook.com/mafiasrivalgame/" class="hover:text-yellow-600"><i class="fab fa-facebook-f"></i></a>
          <a href="https://twitter.com/mafiasrival" class="hover:text-yellow-600"><i class="fab fa-twitter"></i></a>
          <a href="https://www.instagram.com/mafiasrivalgame/" class="hover:text-yellow-600"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
    </div>
    <div class="mt-8 text-center text-gray-500 text-sm">&copy; 2025 Mafias Rival. All Rights Reserved.</div>
  </footer>
</template>

<script setup>
const links = [
  { name: 'Home', href: '#home' },
  { name: 'Features', href: '#features' },
  { name: 'Screenshots', href: '#screenshots' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Leaderboard', href: '#leaderboard' },
  { name: 'Download', href: '#download' },
  { name: 'Contact', href: '#contact' },
]
</script>
