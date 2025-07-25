<template>
  <section
      class="py-20 px-6 sm:px-12"
      :style="{ backgroundColor: settings.faq_section_bg || '#ffffff' }"
  >
    <div class="max-w-5xl mx-auto">
      <!-- Title -->
      <h2
          class="text-4xl font-bold mb-12 text-center"
          :style="{ color: settings.faq_title_color || '#1f2937' }"
      >
        {{ settings.faq_title || 'Need Help? We’ve Got Answers' }}
      </h2>

      <!-- FAQ Grid -->
      <div v-if="faqs && faqs.length > 0" class="grid gap-6 sm:grid-cols-2">
        <div
            v-for="faq in faqs"
            :key="faq.question"
            class="rounded-3xl p-6 shadow-lg border border-gray-100 transition-all duration-300"
            :style="{ backgroundColor: settings.faq_card_color || '#fef3c7' }"
        >
          <h3
              class="font-semibold text-lg mb-2"
              :style="{ color: settings.faq_text_color || '#92400e' }"
          >
            ❓ {{ faq.question }}
          </h3>
          <p class="text-sm leading-relaxed text-gray-600">
            {{ faq.answer }}
          </p>
        </div>
      </div>

      <!-- No FAQs Message -->
      <div v-else class="text-center text-gray-400 italic">
        No FAQs available.
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'

withDefaults(
    defineProps<{
      faqs?: { question: string; answer: string }[]
      settings?: {
        faq_section_bg?: string
        faq_card_color?: string
        faq_text_color?: string
        faq_title?: string
        faq_title_color?: string
      }
    }>(),
    {
      faqs: () => [
        {
          question: 'What services do you offer?',
          answer: 'We offer design, development, and marketing solutions customized to your business needs.'
        },
        {
          question: 'How can I contact support?',
          answer: 'You can reach us via live chat, email, or our contact form — 24/7 availability guaranteed.'
        },
        {
          question: 'Is there a free trial available?',
          answer: 'Yes! We offer a 14-day no-obligation trial. No credit card needed.'
        },
        {
          question: 'Can I upgrade my plan later?',
          answer: 'Absolutely. You can upgrade or downgrade anytime from your dashboard.'
        },
        {
          question: 'Do you support international clients?',
          answer: 'Yes, our services are available globally, and our team can work across time zones.'
        },
        {
          question: 'Will my data remain secure?',
          answer: 'We use industry-standard encryption and GDPR-compliant practices to keep your data safe.'
        }
      ],
      settings: () => ({
        faq_section_bg: '#ffffff',
        faq_card_color: '#fef3c7',
        faq_text_color: '#92400e',
        faq_title: 'Need Help? We’ve Got Answers',
        faq_title_color: '#1f2937'
      })
    }
)
</script>
