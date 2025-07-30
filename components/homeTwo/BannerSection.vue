<template>
  <div class="relative w-full mx-auto rounded-xl overflow-hidden md:p-8 sm:p-8">
    <!-- Background image -->
    <img
        :src=" 'https://www.studentkortet.se/wp-content/uploads/2024/09/bokus-stuk-host-24-web.jpg'"
        :alt=" 'Bokus student offer'"
        class="w-full h-auto min-h-[200px] sm:min-h-[300px] object-cover rounded-xl"
    />

    <!-- Overlay content -->
    <div class="absolute inset-0 flex items-center justify-start px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
      <div class="max-w-full space-y-2 sm:space-y-4 md:space-y-6 lg:space-y-8">
        <!-- Logo -->
        <h2 class="text-orange-600 font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          {{ data.secondHeading?.trim() || 'With hundreds of discounts and stores, you will find what you are looking for here!' }}
        </h2>

        <!-- Heading Text -->
        <p class="text-gray-900 font-extrabold leading-snug text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
          {{ data.mainHeading?.trim() || 'Discounts, discounts, discounts, here you will find them.' }}<br class="hidden sm:block" />

        </p>

        <!-- Button -->
        <a
            :href="data.buttonLink || '#'"
            class="inline-block bg-black text-white text-xs sm:text-sm md:text-base font-semibold px-6 sm:px-8 md:px-12 lg:px-16 py-2 sm:py-3 md:py-3 rounded-full transition"
        >
          {{ data.buttonText?.trim() || 'TILL ERBJUDANDET' }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  data: {
    mainHeading?: string;
    secondHeading?: string;
    buttonText?: string;
    buttonLink?: string;
  };
}>();
</script>
