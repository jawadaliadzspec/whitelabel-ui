<template>
  <!-- Hero Section -->
  <div class="bg-[#f5f3fc] relative overflow-hidden">
  <div class="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center px-4 md:px-10 py-10 md:py-20">
    <div class="flex-1 text-center md:text-left z-10">
      <div class="text-[#d63384] font-semibold text-lg md:text-xl mb-4">Over 3000 discounts available now!</div>
      <h1 class="font-black text-4xl md:text-6xl lg:text-7xl text-gray-900 mb-6 leading-tight">
        Save money
      </h1>
      <NuxtLink
          to="/browse"
          class="inline-block bg-[#d63384] text-white px-8 py-3 rounded-lg font-bold text-lg md:text-xl shadow-md hover:bg-[#a81e63] transition"
      >
        Discover More
      </NuxtLink>
    </div>
    <!-- Right Side Image and Shape -->
    <div class="flex-1 relative flex justify-center items-center mt-12 md:mt-0 w-full">
      <!-- Big pink background shape -->
      <div class="absolute -right-10 md:right-0 top-4 w-[440px] h-[420px] md:w-[540px] md:h-[440px] rounded-tl-[200px] rounded-bl-[200px] rounded-br-[250px] bg-[#c34c7b] z-0"></div>
      <!-- The person image -->
      <img
          src="https://veckansr.se/assets/images/frontend/banner_three/67f3c134be30c1744027956.png"
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
<!--  <div class="bg-[#f8f9fa] flex flex-col-reverse lg:flex-row justify-between items-center relative py-10 px-4 sm:px-8 md:px-16 max-w-screen-2xl mx-auto overflow-hidden">-->
<!--    &lt;!&ndash; Left/Text Section &ndash;&gt;-->
<!--    <div class="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left p-4 md:p-8 lg:p-12">-->
<!--      <p class="font-bold text-primary text-2xl md:text-3xl mb-2">-->
<!--        Over 300 discounts available now!-->
<!--      </p>-->
<!--      <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold pt-3 leading-tight">-->
<!--        Save money-->
<!--      </h2>-->
<!--      <button class="bg-primary text-lg px-8 py-3 text-white rounded-lg font-semibold mt-8 hover:text-primary hover:bg-white hover:outline hover:outline-1 hover:outline-[#d63384] transition duration-300">-->
<!--        Discover More-->
<!--      </button>-->
<!--    </div>-->

<!--    &lt;!&ndash; Right/Image Section &ndash;&gt;-->
<!--    <div class="relative w-full lg:w-1/2 flex justify-center items-end min-h-[250px] md:min-h-[350px] lg:min-h-[400px]">-->
<!--      &lt;!&ndash; Pink background shape &ndash;&gt;-->
<!--      <div class="absolute w-[95%] md:w-[550px] lg:w-[800px] h-[180px] md:h-[320px] lg:h-[390px] bg-[#d63384] right-1 bottom-2 rounded-[137%_15%_0%_8%/103%_80%_57%_45%] z-0"></div>-->
<!--      &lt;!&ndash; Image &ndash;&gt;-->
<!--      <img src="https://www.veckansr.se/assets/images/frontend/banner_three/67f3c134be30c1744027956.png"-->
<!--           class="relative z-10 max-w-[85vw] md:max-w-[420px] lg:max-w-[420px] xl:max-w-[480px] object-contain pt-6 lg:ml-8"-->
<!--           alt="Promotional Image"-->
<!--      >-->
<!--    </div>-->
<!--  </div>-->
</template>
<script setup lang="ts">
</script>