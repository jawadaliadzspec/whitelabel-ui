<template>
  <div
      class="relative w-full mx-auto rounded-xl overflow-hidden shadow-md md:p-8 sm:p-8"
  >
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
      <div
          class="max-w-full space-y-2 sm:space-y-4 md:space-y-6 lg:space-y-8"
      >
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
  </div>
</template>
<script setup lang="ts">
</script>