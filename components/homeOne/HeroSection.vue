<template>
  <!-- Hero Section -->
  <div class="bg-[#f5f3fc] relative overflow-hidden">
  <div class="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center px-4 md:px-10 py-10 md:py-20">
    <div class="flex-1 text-center md:text-left z-10">
      <div class="text-[#d63384] font-semibold text-lg md:text-xl mb-4">{{ data.secondHeading || 'Over 3000 discounts available now!'}}</div>
      <h1 class="font-black text-4xl md:text-6xl lg:text-7xl text-gray-900 mb-6 leading-tight">
        {{data.mainHeading || 'Save money'}}
      </h1>
      <NuxtLink
          to="/browse"
          class="inline-block bg-[#d63384] text-white px-8 py-3 rounded-lg font-bold text-lg md:text-xl shadow-md hover:bg-[#a81e63] transition"
      >
        {{ data.buttonText || 'Discover More'}}
      </NuxtLink>
    </div>
    <!-- Right Side Image and Shape -->
    <div class="flex-1 relative flex justify-center items-center mt-12 md:mt-0 w-full">
      <!-- Big pink background shape -->
      <div class="absolute -right-10 md:right-0 top-4 w-[440px] h-[420px] md:w-[540px] md:h-[440px] rounded-tl-[200px] rounded-bl-[200px] rounded-br-[250px] bg-[#c34c7b] z-0"></div>
      <!-- The person image -->
      <img
          :src="data.image || 'https://veckansr.se/assets/images/frontend/banner_three/67f3c134be30c1744027956.png'"
          alt="Spara pengar"
          class="relative z-10 w-64 md:w-80 lg:w-96 object-contain"
          style="object-position: bottom;"
      />
    </div>
  </div>
  <!-- (Optional) Decorative circles -->
  <div class="absolute left-0 bottom-0 w-[260px] h-[260px] bg-white/70 rounded-full -z-10" style="filter: blur(2px);"></div>
  <div class="absolute top-0 left-0 w-[400px] h-[220px] bg-white/40 rounded-full -z-10"></div>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  data: {
    mainHeading: string;
    secondHeading: string;
    buttonText: string;
    image: string;
  }
}>()

</script>