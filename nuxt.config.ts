import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  plugins: [
    '~/plugins/settings-color.client.js', // <-- THIS IS RIGHT!
  ],
  vite: {
    plugins: [
      tailwindcss(), // <-- Only Vite plugins go here
    ],
  },
  runtimeConfig: {
    public: {
      appName: process.env.APP_NAME || 'Veckans R',
    }
  }
})
