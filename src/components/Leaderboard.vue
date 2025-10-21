<template>
  <section id="leaderboard" class="py-16 bg-black text-white px-6">
    <div class="max-w-6xl mx-auto">
      <!-- Title -->
      <h2 class="text-4xl md:text-5xl font-bold text-yellow-600 mb-2 text-center">Leaderboard</h2>
      <p class="text-gray-400 text-center mb-8">
        The top Mafia bosses and crews. Data served from a mocked API.
      </p>

      <!-- Tabs -->
      <div class="flex justify-center gap-4 mb-8 flex-wrap">
        <button v-for="tab in tabs" :key="tab.key" @click="active = tab.key"
          :class="[
            'px-5 py-2 rounded-full font-semibold transition-colors duration-300',
            active === tab.key
              ? 'bg-red-700 text-yellow-300 shadow-lg shadow-red-900/50'
              : 'bg-gray-900 text-gray-300 hover:bg-red-700 hover:text-yellow-300'
          ]">
          {{ tab.label }}
        </button>
      </div>

      <!-- Leaderboard Panels -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">

        <!-- Main Table -->
        <div class="bg-gray-900/50 p-6 rounded-2xl shadow-lg">
          <h3 class="text-xl font-bold text-yellow-600 mb-4">{{ currentLabel }}</h3>
          <table class="w-full table-auto text-left border-collapse">
            <thead>
              <tr class="text-gray-400 border-b border-gray-700">
                <th class="pb-2">Rank</th>
                <th class="pb-2">Image</th>
                <th class="pb-2">Player</th>
                <th class="pb-2 text-right">Score</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(p, idx) in items" :key="idx"
                  class="border-b border-gray-800 hover:bg-gray-800/40 transition">
                <td class="py-2 font-bold text-yellow-500">#{{ idx + 1 }}</td>
                <td class="py-2  items-center gap-3">
                  <img
                    :src="p.avatar || '/images/final.png'"
                    alt="avatar"
                    class="w-10 h-10 rounded-full object-cover border-2 border-yellow-600"
                  />
                   </td>
                   <td class="py-2  items-center ">
                  <div>{{ p.name }}</div>
               </td>
                <td class="py-2 text-right">{{ format(p.score) }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Top 5 Highlights -->
        <div class="bg-gray-900/50 p-6 rounded-2xl shadow-lg">
          <h3 class="text-xl font-bold text-yellow-600 mb-4">Top 5 Highlights</h3>
          <ol class="space-y-3">
            <li v-for="(p, idx) in items.slice(0, 5)" :key="idx"
                class="flex justify-between items-center p-2 rounded-md hover:bg-gray-800/40 transition">
              <div class="flex items-center gap-2">
             
                <span class="font-semibold text-yellow-400">#{{ idx + 1 }} {{ p.name }}</span>
              </div>
              <span class="text-gray-300">{{ format(p.score) }}</span>
            </li>
          </ol>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'
import finalAvatar from '../assets/bannar/final.png'

const tabs = [
  { key: 'topBosses', label: 'Top Bosses' },
  { key: 'topCrews', label: 'Top Crews' },
  { key: 'richestPlayers', label: 'Richest Players' },
  { key: 'mostWanted', label: 'Most Wanted' }
]

const active = ref('topBosses')
const data = ref({ topBosses: [], topCrews: [], richestPlayers: [], mostWanted: [] })

async function load() {
  try {
    const res = await axios.get('http://localhost:3001/api/leaderboard')
    // Add placeholder avatar if missing
    for (const key in res.data) {
      res.data[key] = res.data[key].map(p => ({ avatar: 'https://via.placeholder.com/40', ...p }))
    }
    data.value = res.data
  } catch (e) {
    console.error('Failed to load leaderboard', e)
  }
}

onMounted(() => { load() })

const items = computed(() => data.value[active.value] || [])
const currentLabel = computed(() => tabs.find(t => t.key === active.value).label)
function format(n) { return n.toLocaleString() }
</script>
