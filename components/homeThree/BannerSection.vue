<template>
  <section class="relative">
    <!-- Container with side padding -->
    <div class="mx-auto max-w-[2000px] mt-10">
      <!-- Image Container with proper aspect ratio -->
      <div class="w-full aspect-[4/3] md:aspect-[16/9] overflow-hidden">
        <img
            src="https://img.meccdn.com/media/991ce6c1-336e-42d9-b486-dc27a7675675.jpg?h=500"
            class="w-full h-full object-cover"
            alt="Liseberg amusement park"
        />
      </div>

      <!-- Content Overlay with responsive side spacing -->
      <div class="absolute inset-0 flex flex-col justify-center items-center">
        <div
            class="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 max-w-6xl mx-auto text-center"
        >
          <div class="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
            <h1
                class="text-white font-bold text-2xl xs:text-3xl sm:text-4xl md:text-[2.7rem] lg:text-5xl drop-shadow-lg"
            >
              Liseberg 🧡 alumner
            </h1>

            <p
                class="text-white text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl drop-shadow-md leading-snug sm:leading-normal px-2 sm:px-4"
            >
              30% rabatt på Lisebergspasset! Köp idag och besök
              Lisebergsparken så ofta du vill i ett helt år.
            </p>

            <div class="pt-1 sm:pt-2">
              <button
                  class="inline-block px-6 py-2 sm:px-8 sm:py-2.5 md:px-10 md:py-3 bg-orange-400 hover:bg-orange-500 text-white font-bold rounded-xl transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50"
              >
                Till Kampanjen
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>