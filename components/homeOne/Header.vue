<template>
  <header class="bg-[#f5f3fc] relative overflow-hidden">
    <nav class="max-w-7xl mx-auto flex items-center justify-between py-7 px-4 md:px-10">
      <!-- Logo -->
      <div class="flex items-center">
        <NuxtLink
            to="/"
            class="hover:text-[#d63384] transition"
            @click="closeMenu"
        ><span class="text-[#d63384] font-bold text-2xl" style="font-family: 'Pacifico', cursive;">Veckans R</span></NuxtLink>
      </div>
      <!-- Desktop Nav Links -->
      <ul class="hidden md:flex gap-7 items-center font-medium text-lg">
        <li>
          <NuxtLink
              to="/"
              exact-active-class="text-[#d63384] border-b-2 border-[#d63384] pb-1"
              class="hover:text-[#d63384] transition"
          >Home</NuxtLink>
        </li>
<!--        <li>-->
<!--          <NuxtLink-->
<!--              to="/about"-->
<!--              exact-active-class="text-[#d63384] border-b-2 border-[#d63384] pb-1"-->
<!--              class="hover:text-[#d63384] transition"-->
<!--          >About Us</NuxtLink>-->
<!--        </li>-->
        <li>
          <NuxtLink
              to="/categories"
              exact-active-class="text-[#d63384] border-b-2 border-[#d63384] pb-1"
              class="hover:text-[#d63384] transition"
          >Categories</NuxtLink>
        </li>
        <li>
          <NuxtLink
              to="/browse"
              exact-active-class="text-[#d63384] border-b-2 border-[#d63384] pb-1"
              class="hover:text-[#d63384] transition"
          >Browse</NuxtLink>
        </li>
        <!--        <li>-->
<!--          <NuxtLink-->
<!--              to="/blog"-->
<!--              exact-active-class="text-[#d63384] border-b-2 border-[#d63384] pb-1"-->
<!--              class="hover:text-[#d63384] transition"-->
<!--          >Blog</NuxtLink>-->
<!--        </li>-->
        <li>
          <NuxtLink
              to="/contact"
              exact-active-class="text-[#d63384] border-b-2 border-[#d63384] pb-1"
              class="hover:text-[#d63384] transition"
          >Contact</NuxtLink>
        </li>
      </ul>
      <!-- Login Button (Desktop only) -->
<!--      <NuxtLink-->
<!--          to="/login"-->
<!--          class="ml-4 border border-[#d63384] text-[#d63384] px-5 py-1.5 rounded-xl font-medium hover:bg-[#d63384] hover:text-white transition hidden md:inline-block"-->
<!--      >-->
<!--        Logga in-->
<!--      </NuxtLink>-->
      <!-- Mobile Menu Button -->
      <button
          class="md:hidden flex items-center px-3 py-2 border rounded text-[#d63384] border-[#d63384] focus:outline-none"
          @click="toggleMenu"
          aria-label="Open main menu"
      >
        <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </nav>
    <!-- Mobile Menu Overlay -->
    <transition name="fade">
      <div
          v-if="mobileMenuOpen"
          class="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
          @click.self="toggleMenu"
      />
    </transition>
    <!-- Mobile Menu Drawer -->
    <transition name="slide-down">
      <div
          v-if="mobileMenuOpen"
          class="fixed top-0 left-0 right-0 bg-[#f5f3fc] z-50 p-6 shadow-lg md:hidden"
      >
        <div class="flex justify-between items-center mb-4">
          <NuxtLink
              to="/"
              class="hover:text-[#d63384] transition"
              @click="closeMenu"
          ><span class="text-[#d63384] font-bold text-2xl" style="font-family: 'Pacifico', cursive;">Veckans R</span></NuxtLink>
          <button @click="toggleMenu" aria-label="Close main menu" class="text-[#d63384] text-3xl px-2 focus:outline-none">&times;</button>
        </div>
        <ul class="flex flex-col gap-4 text-lg font-medium">
          <li>
            <NuxtLink
                to="/"
                exact-active-class="text-[#d63384] border-b-2 border-[#d63384] pb-1"
                class="hover:text-[#d63384] transition"
                @click="closeMenu"
            >Home</NuxtLink>
          </li>
<!--          <li>-->
<!--            <NuxtLink-->
<!--                to="/about"-->
<!--                exact-active-class="text-[#d63384] border-b-2 border-[#d63384] pb-1"-->
<!--                class="hover:text-[#d63384] transition"-->
<!--                @click="closeMenu"-->
<!--            >About Us</NuxtLink>-->
<!--          </li>-->
          <li>
            <NuxtLink
                to="/categories"
                exact-active-class="text-[#d63384] border-b-2 border-[#d63384] pb-1"
                class="hover:text-[#d63384] transition"
                @click="closeMenu"
            >Categories</NuxtLink>
          </li>
          <li>
            <NuxtLink
                to="/browse"
                exact-active-class="text-[#d63384] border-b-2 border-[#d63384] pb-1"
                class="hover:text-[#d63384] transition"
                @click="closeMenu"
            >Browse</NuxtLink>
          </li>
          <!--          <li>-->
<!--            <NuxtLink-->
<!--                to="/blog"-->
<!--                exact-active-class="text-[#d63384] border-b-2 border-[#d63384] pb-1"-->
<!--                class="hover:text-[#d63384] transition"-->
<!--                @click="closeMenu"-->
<!--            >Blog</NuxtLink>-->
<!--          </li>-->
          <li>
            <NuxtLink
                to="/contact"
                exact-active-class="text-[#d63384] border-b-2 border-[#d63384] pb-1"
                class="hover:text-[#d63384] transition"
                @click="closeMenu"
            >Contact</NuxtLink>
          </li>
<!--          <li>-->
<!--            <NuxtLink-->
<!--                to="/login"-->
<!--                class="mt-2 border border-[#d63384] text-[#d63384] px-5 py-1.5 rounded-xl font-medium hover:bg-[#d63384] hover:text-white transition w-full block text-center"-->
<!--                @click="closeMenu"-->
<!--            >Logga in</NuxtLink>-->
<!--          </li>-->
        </ul>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const mobileMenuOpen = ref(false)
const toggleMenu = () => (mobileMenuOpen.value = !mobileMenuOpen.value)
const closeMenu = () => (mobileMenuOpen.value = false)
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.slide-down-enter-active,
.slide-down-leave-active {
  transition: transform 0.2s ease, opacity 0.2s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  transform: translateY(-32px);
  opacity: 0;
}
</style>
