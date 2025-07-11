<template>
  <div class="bg-[#f8f9fa] flex flex-col-reverse lg:flex-row justify-between items-center relative py-10 px-4 sm:px-8 md:px-16 max-w-screen-2xl mx-auto overflow-hidden">
    <!-- Left/Text Section -->
    <div class="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left p-4 md:p-8 lg:p-12">
      <p class="font-bold text-primary text-2xl md:text-3xl mb-2">
        Over 300 discounts available now!
      </p>
      <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold pt-3 leading-tight">
        Save money
      </h2>
      <button class="bg-primary text-lg px-8 py-3 text-white rounded-lg font-semibold mt-8 hover:text-primary hover:bg-white hover:outline hover:outline-1 hover:outline-[#d63384] transition duration-300">
        Discover More
      </button>
    </div>

    <!-- Right/Image Section -->
    <div class="relative w-full lg:w-1/2 flex justify-center items-end min-h-[250px] md:min-h-[350px] lg:min-h-[400px]">
      <!-- Pink background shape -->
      <div class="absolute w-[95%] md:w-[550px] lg:w-[800px] h-[180px] md:h-[320px] lg:h-[390px] bg-[#d63384] right-1 bottom-2 rounded-[137%_15%_0%_8%/103%_80%_57%_45%] z-0"></div>
      <!-- Image -->
      <img src="https://www.veckansr.se/assets/images/frontend/banner_three/67f3c134be30c1744027956.png"
           class="relative z-10 max-w-[85vw] md:max-w-[420px] lg:max-w-[420px] xl:max-w-[480px] object-contain pt-6 lg:ml-8"
           alt="Promotional Image"
      >
    </div>
  </div>
</template>