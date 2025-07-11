<template>
  <section class="bg-white py-10 px-4 sm:px-6 lg:px-24">
    <!-- Heading -->
    <h1 class="font-bold text-3xl sm:text-4xl text-left mb-10">
      Exklusiva rabatter
    </h1>

    <!-- Card Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

      <!-- Card 1 -->
      <div class="relative bg-white rounded-2xl border border-gray-200 flex flex-col items-center pt-12 pb-6 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
        <button class="absolute top-4 left-4 bg-pink-50 border-pink-300 p-1 rounded-full text-pink-500 hover:bg-pink-100">
          <i class="fas fa-heart"></i>
        </button>
        <div class="absolute top-4 right-4 bg-yellow-100 text-sm font-medium px-3 py-2 rounded-lg flex items-center gap-1">
          <i class="fas fa-gem"></i>
          Exklusiv
        </div>
        <img src="https://www.veckansr.se/assets/images/frontend/store/67f78c2e82d371744276526.png" alt="Card Image" class="w-[90px] h-[90px] object-contain">
        <div class="w-[95%] bg-slate-50 rounded-[12px] mt-6 p-4 flex flex-col items-center">
          <h3 class="text-lg font-semibold text-gray-800 text-center break-words">
            Upp till 20%
          </h3>
          <button class="bg-[#d63384] px-5 py-2 mt-6 text-white rounded-lg font-semibold hover:text-[#d63384] hover:bg-white hover:outline hover:outline-1 hover:outline-[#d63384] transition duration-700">
            Upptäck Mer
          </button>
        </div>
      </div>

      <!-- Card 2 -->
      <div class="relative bg-white rounded-2xl border border-gray-200 flex flex-col items-center pt-12 pb-6 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
        <button class="absolute top-4 left-4 bg-pink-50 border-pink-300 p-1 rounded-full text-pink-500 hover:bg-pink-100">
          <i class="fas fa-heart"></i>
        </button>
        <div class="absolute top-4 right-4 bg-yellow-100 text-sm font-medium px-3 py-2 rounded-lg flex items-center gap-1">
          <i class="fas fa-gem"></i>
          Exklusiv
        </div>
        <img src="https://www.veckansr.se/assets/images/frontend/store/67f78cdb5426f1744276699.png" alt="Card Image" class="w-[90px] h-[90px] object-contain">
        <div class="w-[95%] bg-slate-50 rounded-[12px] mt-6 p-4 flex flex-col items-center">
          <h3 class="text-lg font-semibold text-gray-800 text-center break-words">
            Upp till 25% på lek & aktivering
          </h3>
          <button class="bg-[#d63384] px-5 py-2 mt-6 text-white rounded-lg font-semibold hover:text-[#d63384] hover:bg-white hover:outline hover:outline-1 hover:outline-[#d63384] transition duration-700">
            Upptäck Mer
          </button>
        </div>
      </div>

      <!-- Card 3 -->
      <div class="relative bg-white rounded-2xl border border-gray-200 flex flex-col items-center pt-12 pb-6 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
        <button class="absolute top-4 left-4 bg-pink-50 border-pink-300 p-1 rounded-full text-pink-500 hover:bg-pink-100">
          <i class="fas fa-heart"></i>
        </button>
        <div class="absolute top-4 right-4 bg-yellow-100 text-sm font-medium px-3 py-2 rounded-lg flex items-center gap-1">
          <i class="fas fa-gem"></i>
          Exklusiv
        </div>
        <img src="https://www.veckansr.se/assets/images/frontend/store/67f78cff480721744276735.png" alt="Card Image" class="w-[270px] h-[90px] object-contain">
        <div class="w-[95%] bg-slate-50 rounded-[12px] mt-6 p-4 flex flex-col items-center">
          <h3 class="text-lg font-semibold text-gray-800 text-center break-words">
            Upp till 45% på elcyklar
          </h3>
          <button class="bg-[#d63384] px-5 py-2 mt-6 text-white rounded-lg font-semibold hover:text-[#d63384] hover:bg-white hover:outline hover:outline-1 hover:outline-[#d63384] transition duration-700">
            Upptäck Mer
          </button>
        </div>
      </div>

      <!-- Card 4 (wraps to second row on 1024px, stays inline at 1280px+) -->
      <div class="lg:col-span-3 xl:col-span-1 relative bg-white rounded-2xl border border-gray-200 flex flex-col items-center pt-12 pb-6 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
        <button class="absolute top-4 left-4 bg-pink-50 border-pink-300 p-1 rounded-full text-pink-500 hover:bg-pink-100">
          <i class="fas fa-heart"></i>
        </button>
        <div class="absolute top-4 right-4 bg-yellow-100 text-sm font-medium px-3 py-2 rounded-lg flex items-center gap-1">
          <i class="fas fa-gem"></i>
          Exklusiv
        </div>
        <img src="https://www.veckansr.se/assets/images/frontend/store/67f78d0c61d0d1744276748.png" alt="Card Image" class="w-[90px] h-[90px] object-contain">
        <div class="w-[95%] bg-slate-50 rounded-[12px] mt-6 p-4 flex flex-col items-center">
          <h3 class="text-lg font-semibold text-gray-800 text-center break-words">
            Upp Till 30% På Damkläder
          </h3>
          <button class="bg-[#d63384] px-5 py-2 mt-6 text-white rounded-lg font-semibold hover:text-[#d63384] hover:bg-white hover:outline hover:outline-1 hover:outline-[#d63384] transition duration-700">
            Upptäck Mer
          </button>
        </div>
      </div>

    </div>
  </section>
</template>