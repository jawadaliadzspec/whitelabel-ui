<template>
  <section>
    <!-- Gradient background with header - adjusted padding for mobile -->
    <div
      class="relative bg-gradient-to-br from-purple-700 to-blue-900 text-white pt-12 md:pt-16 pb-32 md:pb-48 lg:pb-2 h-auto md:h-[32rem] text-center px-4"
    >
      <div class="max-w-6xl mx-auto">
        <h1
          class="text-3xl md:text-4xl lg:text-5xl text-yellow-400 font-extrabold leading-tight mb-4"
        >
          Din nya favoritwebbplats för <br class="hidden md:block" />
          studentrabatter med erbjudanden<br />
          <span class="text-yellow-400">du inte hittar någon annanstans.</span>
        </h1>
        <p class="text-base md:text-lg text-purple-200 px-2 md:px-4">
          Din nya favoritsajt med studentrabatter med erbjudanden som du inte
          hittar någon annanstans.
        </p>
        <br class="hidden md:block" />

        <!-- Cards on medium and larger screens: absolutely positioned - EXACTLY as you had -->
        <div
          class="hidden md:block absolute inset-x-0 bottom-0 translate-y-32 px-6"
        >
          <div
            class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 h-80"
          >
            <!-- Cards (same content) -->
            <div
              class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <img
                src="https://www.studentkortet.se/wp-content/uploads/2023/09/adlibris-large.jpg"
                alt="Chrome extension"
                class="w-full h-48 object-cover"
              />
              <div class="p-8">
                <h3 class="text-lg font-bold text-gray-800">
                  Installera vårt Chrome-tillägg
                </h3>
                <a href="#" class="text-sm text-purple-600 hover:underline"
                  >Upptäck mer</a
                >
              </div>
            </div>

            <div
              class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <img
                src="https://www.studentkortet.se/wp-content/uploads/2024/12/nextory-large.jpg"
                alt="Rekommenderas"
                class="w-full h-48 object-cover"
              />
              <div class="p-8">
                <h3 class="text-lg font-bold text-gray-800">
                  Rekommenderas för dig
                </h3>
                <a href="#" class="text-sm text-purple-600 hover:underline"
                  >Upptäck mer</a
                >
              </div>
            </div>

            <div
              class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <img
                src="https://www.studentkortet.se/wp-content/uploads/2022/06/samsung-large-new.jpg"
                alt="Hett just nu"
                class="w-full h-48 object-cover"
              />
              <div class="p-8">
                <h3 class="text-lg font-bold text-gray-800">Hett just nu</h3>
                <a href="#" class="text-sm text-purple-600 hover:underline"
                  >Upptäck erbjudanden</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Cards on small screens: shown normally in flow - EXACTLY as you had -->
    <div class="block md:hidden px-6 mt-8 mb-12">
      <div class="grid grid-cols-1 gap-6">
        <!-- Same 3 cards repeated -->
        <div
          class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
        >
          <img
            src="https://www.studentkortet.se/wp-content/uploads/2023/09/adlibris-large.jpg"
            alt="Chrome extension"
            class="w-full h-48 object-cover"
          />
          <div class="p-8">
            <h3 class="text-lg font-bold text-gray-800">
              Installera vårt Chrome-tillägg
            </h3>
            <a href="#" class="text-sm text-purple-600 hover:underline"
              >Upptäck mer</a
            >
          </div>
        </div>

        <div
          class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
        >
          <img
            src="https://www.studentkortet.se/wp-content/uploads/2024/12/nextory-large.jpg"
            alt="Rekommenderas"
            class="w-full h-48 object-cover"
          />
          <div class="p-8">
            <h3 class="text-lg font-bold text-gray-800">
              Rekommenderas för dig
            </h3>
            <a href="#" class="text-sm text-purple-600 hover:underline"
              >Upptäck mer</a
            >
          </div>
        </div>

        <div
          class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
        >
          <img
            src="https://www.studentkortet.se/wp-content/uploads/2022/06/samsung-large-new.jpg"
            alt="Hett just nu"
            class="w-full h-48 object-cover"
          />
          <div class="p-8">
            <h3 class="text-lg font-bold text-gray-800">Hett just nu</h3>
            <a href="#" class="text-sm text-purple-600 hover:underline"
              >Upptäck erbjudanden</a
            >
          </div>
        </div>
      </div>
    </div>

    <!-- White background section to show overlap on large screens - adjusted height for mobile -->
    <div class="bg-white h-32 lg:h-50"></div>
  </section>

  <section class="bg-gray-50 py-10 px-4">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-xl sm:text-2xl font-semibold text-gray-800 mb-6">
        Hot deals 🔥
      </h2>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        <!-- Card 1 -->
        <div
          class="bg-white rounded-xl shadow-md overflow-hidden relative min-h-[21rem] flex flex-col justify-between"
        >
          <!-- Top Section (Image) -->
          <div>
            <div class="relative">
              <img
                src="https://www.studentkortet.se/wp-content/uploads/2025/05/hudoteket-unite-app.jpg"
                alt="JD Background"
                class="w-full h-44 object-cover"
              />
            </div>

            <!-- Overlapping Logo -->
            <div
              class="absolute left-1/2 top-[176px] transform -translate-x-1/2 -translate-y-1/2 z-10"
            >
              <div class="bg-white px-3 py-2 rounded-md shadow">
                <img
                  src="https://www.studentkortet.se/wp-content/uploads/2025/04/hudoteket-logo.png"
                  alt="JD logo"
                  class="w-16 h-16 object-contain"
                />
              </div>
            </div>
          </div>

          <!-- Middle Content -->
          <div class="p-4 text-center pt-10">
            <p class="text-lg font-bold text-gray-800">25% rabatt</p>
          </div>

          <!-- Bottom: Campaign Label (fixed at bottom of card) -->
          <div
            class="bg-pink-600 text-white text-xs font-bold text-center py-2 uppercase"
          >
            Campaign
          </div>
        </div>

        <!-- Card 2 -->
        <div
          class="bg-white rounded-xl shadow-md overflow-hidden relative min-h-[21rem] flex flex-col justify-between"
        >
          <!-- Top Section (Image) -->
          <div>
            <div class="relative">
              <img
                src="https://www.studentkortet.se/wp-content/uploads/2025/05/levis-summer-25-app.jpg"
                alt="JD Background"
                class="w-full h-44 object-cover"
              />
            </div>

            <!-- Overlapping Logo -->
            <div
              class="absolute left-1/2 top-[176px] transform -translate-x-1/2 -translate-y-1/2 z-10"
            >
              <div class="bg-white px-3 py-2 rounded-md shadow">
                <img
                  src="https://www.studentkortet.se/wp-content/uploads/2025/01/levis-logo.png"
                  alt="JD logo"
                  class="w-16 h-16 object-contain"
                />
              </div>
            </div>
          </div>

          <!-- Middle Content -->
          <div class="p-4 text-center pt-10">
            <p class="font-bold text-gray-800">
              50% studentrabatt i 5 mån + <br />50GB extra surf
            </p>
          </div>

          <!-- Bottom: Campaign Label (fixed at bottom of card) -->
          <div
            class="bg-pink-600 text-white text-xs font-bold text-center py-2 uppercase"
          >
            Campaign
          </div>
        </div>

        <!-- Card 3 -->
        <div
          class="bg-white rounded-xl shadow-md overflow-hidden relative min-h-[21rem] flex flex-col justify-between"
        >
          <!-- Top Section (Image) -->
          <div>
            <div class="relative">
              <img
                src="https://www.studentkortet.se/wp-content/uploads/2025/05/sony-kamera-app.jpg"
                alt="JD Background"
                class="w-full h-44 object-cover"
              />
            </div>

            <!-- Overlapping Logo -->
            <div
              class="absolute left-1/2 top-[176px] transform -translate-x-1/2 -translate-y-1/2 z-10"
            >
              <div class="bg-white px-3 py-2 rounded-md shadow">
                <img
                  src="https://www.studentkortet.se/wp-content/uploads/2025/02/sony-logo.png"
                  alt="JD logo"
                  class="w-16 h-16 object-contain"
                />
              </div>
            </div>
          </div>

          <!-- Middle Content -->
          <div class="p-4 text-center pt-10">
            <p class="font-bold text-gray-800">49 dagar gratis</p>
          </div>

          <!-- Bottom: Campaign Label (fixed at bottom of card) -->
          <div
            class="bg-pink-600 text-white text-xs font-bold text-center py-2 uppercase"
          >
            Campaign
          </div>
        </div>

        <!-- Card 4 -->
        <div
          class="bg-white rounded-xl shadow-md overflow-hidden relative min-h-[21rem] flex flex-col justify-between"
        >
          <!-- Top Section (Image) -->
          <div>
            <div class="relative">
              <img
                src="https://www.studentkortet.se/wp-content/uploads/2024/05/hallon-maj-app.jpg"
                alt="JD Background"
                class="w-full h-44 object-cover"
              />
            </div>

            <!-- Overlapping Logo -->
            <div
              class="absolute left-1/2 top-[176px] transform -translate-x-1/2 -translate-y-1/2 z-10"
            >
              <div class="bg-white px-3 py-2 rounded-md shadow">
                <img
                  src="https://www.studentkortet.se/wp-content/uploads/2023/11/hallon-ny-logo.png"
                  alt="JD logo"
                  class="w-16 h-16 object-contain"
                />
              </div>
            </div>
          </div>

          <!-- Middle Content -->
          <div class="p-4 text-center pt-10">
            <p class="text-md font-bold text-gray-800">
              5% studentrabatt på kurslitteratur
            </p>
          </div>

          <!-- Bottom: Campaign Label (fixed at bottom of card) -->
          <div
            class="bg-pink-600 text-white text-xs font-bold text-center py-2 uppercase"
          >
            Campaign
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="relative w-full mx-auto rounded-xl overflow-hidden shadow-md md:p-8 sm:p-8">
    <!-- Background image - ensures it's always properly sized -->
    <img
      src="https://www.studentkortet.se/wp-content/uploads/2024/09/bokus-stuk-host-24-web.jpg"
      alt="Bokus student offer"
      class="w-full h-auto min-h-[200px] sm:min-h-[300px] object-cover rounded-xl"
    />

    <!-- Overlay content - adjusts for small screens -->
    <div
      class="absolute inset-0 flex items-center justify-start px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20"
    >
      <div class="max-w-full space-y-2 sm:space-y-4 md:space-y-6 lg:space-y-8">
        <!-- Logo - smaller on mobile -->
        <h2
          class="text-orange-600 font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl"
        >
          bokus
        </h2>

        <!-- Main text - wraps properly on small screens -->
        <p
          class="text-gray-900 font-extrabold leading-snug text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
        >
          5% STUDENTRABATT<br class="hidden sm:block" />
          PÅ HELA SORTIMENTET
        </p>

        <!-- Button - smaller on mobile -->
        <a
          href="#"
          class="inline-block bg-black text-white text-xs sm:text-sm md:text-base font-semibold px-6 sm:px-8 md:px-12 lg:px-16 py-2 sm:py-3 md:py-3 rounded-full transition"
        >
          TILL ERBJUDANDET
        </a>
      </div>
    </div>
  </section>
</template>
