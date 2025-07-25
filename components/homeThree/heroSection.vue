<template>
  <div class="flex flex-col lg:flex-row justify-center py-4 lg:py-10 gap-4 lg:gap-6 px-4">
    <!-- Sidebar -->
    <aside class="hidden lg:block w-full lg:w-[20%] text-gray-700 font-medium border border-gray-200 shadow-lg rounded-md bg-white">
      <div class="p-4 lg:p-6 grid grid-cols-2 sm:grid-cols-1 gap-2 lg:gap-4">
        <div class="flex items-center gap-2"><span>✈️</span> Hotels & Travel</div>
        <div class="flex items-center gap-2"><span>🚴‍♂️</span> Things To Do</div>
        <div class="flex items-center gap-2"><span>🌿</span> Beauty & Spas</div>
        <div class="flex items-center gap-2"><span>💓</span> Health & Fitness</div>
        <div class="flex items-center gap-2"><span>🍔</span> Food & Drink</div>
        <div class="flex items-center gap-2"><span>🎁</span> Retail</div>
        <div class="flex items-center gap-2"><span>🚗</span> Automotive</div>
      </div>
    </aside>

    <!-- Pure JS Image Slider -->
    <section class="w-full lg:w-[55%] overflow-hidden bg-white rounded-xl shadow relative">
      <div class="relative w-full h-64 sm:h-80">
        <img
            :src="images[currentSlide]"
            class="w-full h-full object-contain sm:object-cover transition-all duration-500"
            alt="Slide"
        />
        <!-- Controls -->
        <button @click="prevSlide" class="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full">
          ◀
        </button>
        <button @click="nextSlide" class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full">
          ▶
        </button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

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
