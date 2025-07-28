<template>
  <section class="bg-gray-50 py-12 px-4">
    <div class="max-w-5xl mx-auto bg-white shadow-2xl rounded-2xl p-10">
      <!-- Header -->
      <h2 class="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-4">
        FREQUENTLY ASKED QUESTIONS
      </h2>
      <p class="text-center text-gray-500 max-w-2xl mx-auto mb-10">
        Podcasting operational change management inside of workflows to establish a framework.
        Taking seamless key performance indicators offline to maximise the long tail.
      </p>

      <!-- FAQ Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div
            v-for="faq in faqs"
            :key="faq.id"
            :ref="el => faqRefs[faq.id] = el"
            :class="[
            'rounded-md overflow-hidden transition-all duration-300 border border-[#7A5AF8]',
            activeId === faq.id ? 'bg-white text-gray-800' : 'bg-[#7A5AF8] text-white'
          ]"
        >
          <!-- Question -->
          <button
              class="w-full px-6 py-4 flex justify-between items-center font-semibold hover:opacity-90 transition"
              @click="toggle(faq.id)"
          >
            <span>{{ faq.id }} : {{ faq.question }}</span>
            <span class="text-xl">
              {{ activeId === faq.id ? '–' : '›' }}
            </span>
          </button>

          <!-- Answer -->
          <div
              v-if="activeId === faq.id"
              class="px-6 pb-4 text-sm text-gray-700"
          >
            {{ faq.answer }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, nextTick } from 'vue'

// Use unique IDs
const faqs = [
  { id: 1, question: 'How can I edit a complaint I posted?', answer: 'Go to profile > My Complaints > Edit.' },
  { id: 2, question: 'How can I contact?', answer: 'Use the contact form or email support@example.com.' },
  { id: 3, question: 'Do you give any offer for premium customer?', answer: 'Yes, 20% off for all premium accounts.' },
  { id: 4, question: 'How do I reset my password?', answer: 'Click “Forgot Password” on login screen.' },
  { id: 5, question: 'Can I cancel my subscription?', answer: 'Yes. Go to billing settings to cancel.' },
  { id: 6, question: 'Is support available 24/7?', answer: 'Yes, we’re online 24/7 via chat and email.' }
]

const activeId = ref(null)
const faqRefs = ref({})

const toggle = async (id) => {
  activeId.value = activeId.value === id ? null : id

  await nextTick()
  if (faqRefs.value[id] && activeId.value === id) {
    faqRefs.value[id].scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}
</script>
