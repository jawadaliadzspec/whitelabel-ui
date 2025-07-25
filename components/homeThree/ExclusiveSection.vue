<template>
  <h1 class="font-semibold text-4xl text-gray-700 text-center mt-5">
    Exclusive coupon
  </h1>
  <div class="p-3 sm:p-4 md:p-5 lg:p-6">
    <div
        class="w-full lg:h-50 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row border border-gray-300"
    >
      <!-- Image Section -->
      <div class="w-full aspect-[4/3] md:aspect-auto md:h-auto md:w-1/2">
        <img
            src="https://demos.wicombit.com/couponza/images/coupon_1639512679.jpg"
            alt="Uber Eats"
            class="w-full h-full object-cover"
        />
      </div>

      <!-- Content Section -->
      <div
          class="w-full md:w-1/2 p-3 sm:p-4 md:p-5 lg:p-6 flex flex-col justify-center space-y-4"
      >
        <!-- Badge -->
        <div
            class="inline-flex items-center bg-yellow-500 text-white text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full w-max"
        >
          <svg class="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
            <path
                d="M10 15l-5.878 3.09L5.5 12.18 1 7.91l6.06-.91L10 2l2.94 5 6.06.91-4.5 4.27 1.378 5.91z"
            />
          </svg>
          Exclusive
        </div>

        <!-- Offer Text -->
        <div class="text-gray-800 font-semibold text-base sm:text-lg">
          15% Off For Students
        </div>

        <!-- CTA Button -->
        <button
            class="bg-blue-600 text-white text-sm sm:text-base font-semibold px-5 py-3 rounded-full hover:bg-blue-700 transition w-full"
        >
          Get Code
        </button>
      </div>
    </div>
  </div>
</template>