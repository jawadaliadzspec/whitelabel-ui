<template>
  <div class="bg-[#d63384] pb-4">
    <div class="flex flex-col px-6 py-16 sm:px-12 lg:px-24 items-start sm:items-center text-left sm:text-center">
      <p class="font-bold text-4xl sm:text-5xl text-white leading-snug">
        Discounts, discounts, discounts,<br class="hidden sm:block">here you will find them.
      </p>
      <h2 class="font-bold text-lg sm:text-xl text-white pt-4 sm:pt-6 max-w-xl">
        With hundreds of discounts and stores, you'll find what you're looking for here!
      </h2>
      <NuxtLink
          :to="`/browse`"
          class="bg-white text-gray-900 text-lg px-6 py-2 rounded-lg font-bold hover:text-[#d63384] hover:bg-white transition duration-700 mt-6 sm:mt-8">
        Find your discounts
      </NuxtLink>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>