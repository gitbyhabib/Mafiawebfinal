<template>
  <section id="faq" class="py-16 px-6">
    <h2 class="text-3xl md:text-4xl text-center font-bold text-[#b30000] mb-12">FAQ</h2>
    <div class="max-w-4xl mx-auto space-y-4">
      <div v-for="(q, i) in faqs" :key="i" class="bg-[#1a1a1a]/70 p-4 rounded-xl border-2 border-[#c0a060]">
        <button @click="toggle(i)" class="w-full text-left font-semibold flex justify-between items-center">
          {{ q.question }}
          <span>{{ active === i ? '-' : '+' }}</span>
        </button>
        <p v-show="active === i" class="mt-2 text-gray-300">{{ q.answer }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const faqs = ref([
  { question: 'How to play?', answer: 'Join gangs, fight rivals, climb the leaderboard.' },
  { question: 'Is it free?', answer: 'Yes, free to play with optional in-game purchases.' },
  { question: 'Can I play on mobile?', answer: 'Absolutely, fully responsive design.' }
])
const active = ref(null)
function toggle(i) { active.value = active.value === i ? null : i }
</script>
