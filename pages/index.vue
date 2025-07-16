<template>
  <component v-if="selectedComponent" :is="selectedComponent" />
</template>

<script setup>
import { shallowRef, onMounted } from 'vue'
import HomeOne from '~/components/homeOne/main.vue'
import HomeTwo from '~/components/homeTwo/main.vue'
import { usePageMeta } from '~/composables/usePageMeta'

usePageMeta('Home', 'Contact With Us')
const componentMap = {
  homeOne: HomeOne,
  homeTwo: HomeTwo,
}

const selectedComponent = shallowRef(null) // no component yet

onMounted(async () => {
  const settings = await $fetch('/api/settings')

  const homepageKey = settings?.homePage ?? 'homeOne'

  if (componentMap[homepageKey]) {
    selectedComponent.value = componentMap[homepageKey]
  } else {
    selectedComponent.value = HomeOne
  }
})

</script>
