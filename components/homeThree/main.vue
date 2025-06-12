<template>
  <div class="flex flex-col lg:flex-row justify-center py-4 lg:py-10 gap-4 lg:gap-6 px-4">
    <!-- Sidebar (left) - Full width on mobile, 20% on desktop -->
    <aside
      class="hidden lg:block w-full lg:w-[20%] text-gray-700 font-medium border shadow-lg"
    >
      <div class="p-4 lg:p-6 grid grid-cols-2 sm:grid-cols-1 gap-2 lg:gap-4">
        <div class="flex items-center gap-2">
          <span>✈️</span> Hotels & Travel
        </div>
        <div class="flex items-center gap-2"><span>🚴‍♂️</span> Things To Do</div>
        <div class="flex items-center gap-2"><span>🌿</span> Beauty & Spas</div>
        <div class="flex items-center gap-2">
          <span>💓</span> Health & Fitness
        </div>
        <div class="flex items-center gap-2"><span>🍔</span> Food & Drink</div>
        <div class="flex items-center gap-2"><span>🎁</span> Retail</div>
        <div class="flex items-center gap-2"><span>🚗</span> Automotive</div>
      </div>
    </aside>

    <!-- Image Slider (right) - Full width on mobile, 55% on desktop -->
    <section
      class="w-full lg:w-[55%] overflow-hidden bg-white rounded-xl shadow"
    >
      <div class="swiper mySwiper w-full h-64 sm:h-80 lg:h-80">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img
              src="https://demos.wicombit.com/couponza/images/slider_1635351790.jpg"
              class="w-full h-full object-contain sm:object-cover"
              alt="Slide 1"
            />
          </div>
          <div class="swiper-slide">
            <img
              src="https://demos.wicombit.com/couponza/images/slider_1635353238.jpg"
              class="w-full h-full object-contain sm:object-cover"
              alt="Slide 2"
            />
          </div>
          <div class="swiper-slide">
            <img
              src="https://demos.wicombit.com/couponza/images/slider_1635352051.jpg"
              class="w-full h-full object-contain sm:object-cover"
              alt="Slide 3"
            />
          </div>
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </div>
    </section>
  </div>

  <footer class="bg-white text-gray-700 border-t px-8 py-10">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- About Us -->
      <div>
        <h2 class="text-lg font-semibold mb-2">About Us</h2>
        <p class="text-sm text-gray-600 mb-4">
          An About Us page helps your company make a good first impression, and
          is critical for building custo
        </p>
        <div class="flex space-x-4 text-blue-600">
          <span
            class="bg-purple-600 p-3 px-5 rounded-full text-white text-xl hover:bg-white hover:text-purple-600 border border-purple-600 cursor-pointer"
          >
            <i class="fa-brands fa-facebook-f"></i>
          </span>
          <span
            class="bg-purple-600 p-3 px-4 text-white rounded-full text-xl hover:bg-white hover:text-purple-600 border border-purple-600 cursor-pointer"
          >
            <i class="fa-brands fa-twitter"></i>
          </span>
          <span
            class="bg-purple-600 p-3 px-4 text-white rounded-full text-xl hover:bg-white hover:text-purple-600 border border-purple-600 cursor-pointer"
          >
            <i class="fa-brands fa-youtube"></i>
          </span>
          <span
            class="bg-purple-600 text-white p-3 px-4 rounded-full text-xl hover:bg-white hover:text-purple-600 border border-purple-600 cursor-pointer"
          >
            <i class="fa-brands fa-linkedin-in"></i>
          </span>
        </div>
      </div>

      <!-- Quick Links -->
      <div>
        <h2 class="text-lg font-semibold mb-2">Quick Links</h2>
        <ul class="text-sm text-gray-600 space-y-2">
          <li><a href="#" class="hover:underline">Home Page</a></li>
          <li><a href="#" class="hover:underline">Privacy Policy</a></li>
          <li>
            <a href="#" class="hover:underline">Terms and Conditions</a>
          </li>
        </ul>
      </div>

      <!-- Newsletter -->
      <div>
        <h2 class="text-lg font-semibold mb-2">Newsletter</h2>
        <form class="flex flex-col space-y-2">
          <input
            type="email"
            placeholder="Email Address"
            class="border rounded px-4 py-2 text-sm focus:outline-none focus:ring focus:border-blue-300"
          />
          <button
            type="submit"
            class="bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition duration-200"
          >
            Subscribe Now
          </button>
        </form>
      </div>
    </div>

    <!-- Cookie Notice -->
    <div class="mt-10 border-t pt-4 text-sm text-gray-500 text-center">
      This website uses cookies to ensure you get the best experience on our
      website.
      <a href="#" class="text-purple-600 hover:underline ml-1">Learn more</a>
      <button
        class="ml-4 bg-purple-600 text-white px-4 py-1 rounded hover:bg-purple-700"
      >
        Got it
      </button>
    </div>
  </footer>
</template>
