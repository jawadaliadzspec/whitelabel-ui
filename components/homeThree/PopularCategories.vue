<template>
  <section class="py-20 px-6 sm:px-10 lg:px-16 bg-gray-50">
    <h1 class="font-semibold text-4xl text-gray-700 text-center mb-16">
      Popular Coupons
    </h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16 max-w-7xl mx-auto">
      <div
          v-for="(offer, idx) in offers"
          :key="offer.id"
          class="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-gray-300"
      >
        <!-- Image -->
        <div class="w-full md:h-auto md:w-1/2">
          <div class="aspect-[4/3] w-full h-full">
            <img
                :src="offer.thumbnail || 'https://via.placeholder.com/300x200'"
                :alt="offer.title || 'Offer Image'"
                class="w-full h-full object-cover rounded-none"
            />
          </div>
        </div>

        <!-- Content -->
        <div class="w-full md:w-1/2 p-8 flex flex-col justify-center space-y-6">
          <!-- Store Badge with Larger Logo -->
          <div
              class="inline-flex items-center justify-center bg-yellow-100 px-4 py-2 rounded-full w-max"
          >
            <img
                :src="offer.stores?.image || 'https://via.placeholder.com/80x32'"
                alt="Store Logo"
                class="w-[80px] h-[32px] object-contain"
            />
          </div>

          <!-- Offer Title -->
          <div class="text-gray-800 font-semibold text-lg">
            {{ offer.title }}
          </div>

          <!-- CTA Button -->
          <NuxtLink
              :to="`/offers/${offer.path}`"
              class="bg-blue-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-700 transition w-full text-center"
          >
            Discover More
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const offers = ref([])

onMounted(async () => {
  try {
    offers.value = await $fetch('/api/offers/exclusive')
  } catch (error) {
    offers.value = []
  }
})
</script>
