<template>
  <div>
    <!-- Hero Banner with Background Image + Overlay -->
    <div class="faq-hero relative flex items-center justify-center h-52 sm:h-60 md:h-64 lg:h-72 xl:h-80 rounded-b-3xl shadow-md mb-10 mt-6 sm:mt-10">
      <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold text-white z-10 text-center px-4">Frequently Asked Questions</h1>
    </div>

    <!-- FAQ Section -->
    <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <!-- FAQ Items -->
        <div class="bg-white p-5 sm:p-6 rounded-2xl shadow-lg transition hover:shadow-xl">
          <h3 class="text-lg sm:text-xl font-semibold text-purple-700 mb-2">What is your return policy?</h3>
          <p class="text-gray-600 text-sm sm:text-base">We accept returns within 30 days. Items must be unused and in original packaging.</p>
        </div>

        <div class="bg-white p-5 sm:p-6 rounded-2xl shadow-lg transition hover:shadow-xl">
          <h3 class="text-lg sm:text-xl font-semibold text-purple-700 mb-2">How long does shipping take?</h3>
          <p class="text-gray-600 text-sm sm:text-base">Shipping usually takes 3–7 business days depending on your location.</p>
        </div>

        <div class="bg-white p-5 sm:p-6 rounded-2xl shadow-lg transition hover:shadow-xl">
          <h3 class="text-lg sm:text-xl font-semibold text-purple-700 mb-2">Do you ship internationally?</h3>
          <p class="text-gray-600 text-sm sm:text-base">Yes, we ship to most countries globally with applicable international rates.</p>
        </div>

        <div class="bg-white p-5 sm:p-6 rounded-2xl shadow-lg transition hover:shadow-xl">
          <h3 class="text-lg sm:text-xl font-semibold text-purple-700 mb-2">Can I track my order?</h3>
          <p class="text-gray-600 text-sm sm:text-base">Absolutely! We provide a tracking number once your order is dispatched.</p>
        </div>

        <div class="bg-white p-5 sm:p-6 rounded-2xl shadow-lg transition hover:shadow-xl">
          <h3 class="text-lg sm:text-xl font-semibold text-purple-700 mb-2">How do I contact support?</h3>
          <p class="text-gray-600 text-sm sm:text-base">Reach out through our contact form or email us at support@example.com.</p>
        </div>


        <div class="bg-white p-5 sm:p-6 rounded-2xl shadow-lg transition hover:shadow-xl">
          <h3 class="text-lg sm:text-xl font-semibold text-purple-700 mb-2">How do I contact support?</h3>
          <p class="text-gray-600 text-sm sm:text-base">Reach out through our contact form or email us at support@example.com.</p>
        </div>
        <div class="bg-white p-5 sm:p-6 rounded-2xl shadow-lg transition hover:shadow-xl">
          <h3 class="text-lg sm:text-xl font-semibold text-purple-700 mb-2">How do I contact support?</h3>
          <p class="text-gray-600 text-sm sm:text-base">Reach out through our contact form or email us at support@example.com.</p>
        </div>


        <div class="bg-white p-5 sm:p-6 rounded-2xl shadow-lg transition hover:shadow-xl">
          <h3 class="text-lg sm:text-xl font-semibold text-purple-700 mb-2">Can I change my order?</h3>
          <p class="text-gray-600 text-sm sm:text-base">Yes, contact us within 24 hours and we’ll do our best to help you modify it.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.faq-hero {
  background-image: url('https://knowmax-ai-website.s3.amazonaws.com/wp-content/uploads/2024/06/08222118/FAQ-page-examples-1.webp');
  background-size: cover;
  background-position: center;
  position: relative;
  border-bottom-left-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
}

.faq-hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background-color: rgba(139, 30, 175, 0.36); /* Purple overlay */
  border-bottom-left-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
  z-index: 0;
}
</style>

<script setup lang="ts">
</script>