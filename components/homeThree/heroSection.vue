<template>
  <div class="flex flex-col lg:flex-row justify-center py-4 lg:py-10 gap-4 lg:gap-6 px-4">
    <!-- Sidebar (Visible on All Screens) -->
    <aside
        class="w-full lg:w-[20%] text-gray-700 font-medium border border-gray-200 shadow-lg rounded-md bg-white"
    >
      <div class="p-4 lg:p-6 flex flex-col gap-3">
        <NuxtLink
            v-for="(category, idx) in categories"
            :key="category.id"
            :to="{ path: '/browse', query: { categories: category.id } }"
            class="flex items-center justify-between hover:text-[#d63384] transition-colors"
        >
          <span>{{ category.name }}</span>
          <span class="text-sm text-gray-400">
            ({{ category._count?.offers || 0 }} offers)
          </span>
        </NuxtLink>
      </div>
    </aside>

    <!-- Image Slider -->
    <section class="w-full lg:w-[55%] bg-white rounded-xl shadow relative">
      <div class="relative w-full overflow-hidden rounded-xl bg-white">
        <img
            :src="images[currentSlide]"
            class="w-full block object-cover aspect-[25/10] transition-all duration-500"
            alt="Slide"
        />

        <!-- Controls -->
        <button
            @click="prevSlide"
            class="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white shadow p-2 rounded-full z-10 hover:bg-gray-100"
        >
          ◀
        </button>
        <button
            @click="nextSlide"
            class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white shadow p-2 rounded-full z-10 hover:bg-gray-100"
        >
          ▶
        </button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const categories = ref([])

onMounted(async () => {
  try {
    categories.value = await $fetch('/api/categories/popular')
  } catch (error) {
    console.error('Failed to load categories:', error)
    categories.value = []
  }
})

const images = [
  'https://demos.wicombit.com/couponza/images/slider_1635351790.jpg',
  'https://demos.wicombit.com/couponza/images/slider_1635353238.jpg',
  'https://demos.wicombit.com/couponza/images/slider_1635352051.jpg'
]

const currentSlide = ref(0)

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % images.length
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + images.length) % images.length
}

onMounted(() => {
  setInterval(() => {
    nextSlide()
  }, 5000)
})
</script>
