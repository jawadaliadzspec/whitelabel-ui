<template>
  <div>
    <!-- Dynamic Navbar -->
    <component v-if="selectedNavbar" :is="selectedNavbar" />

    <main class="border-gray-700">
      <slot />
    </main>

    <!-- Dynamic Footer -->
<!--    <component v-if="selectedFooter" :is="selectedFooter" />-->
  </div>
</template>

<script setup lang="ts">
import { shallowRef, onMounted, type ShallowRef } from 'vue'

// Import all possible headers and footers
import HeaderHomeOne from '~/components/homeOne/Header.vue'
import HeaderHomeTwo from '~/components/homeOne/Header.vue'
// import FooterHomeOne from '~/components/homeOne/Footer.vue'
// import FooterHomeTwo from '~/components/homeTwo/Footer.vue'

// Type for dynamic components
type DynamicComponent = typeof HeaderHomeOne

// Maps for navbars and footers
const navbarMap: Record<string, DynamicComponent> = {
  homeOne: HeaderHomeOne,
  homeTwo: HeaderHomeTwo,
}
// const footerMap: Record<string, DynamicComponent> = {
//   homeOne: FooterHomeOne,
//   homeTwo: FooterHomeTwo,
// }

// Selected components as refs
const selectedNavbar: ShallowRef<DynamicComponent | null> = shallowRef(null)
// const selectedFooter: ShallowRef<DynamicComponent | null> = shallowRef(null)

// On mount, fetch user settings and pick components
onMounted(async () => {
  const settings = await $fetch('/api/settings')
  const homepageKey = settings?.homePage ?? 'homeOne'

  selectedNavbar.value = navbarMap[homepageKey] || HeaderHomeOne
  // selectedFooter.value = footerMap[homepageKey] || FooterHomeOne
})
</script>
