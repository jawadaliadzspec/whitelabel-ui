<template>
  <component v-if="selectedComponent" :is="selectedComponent" />
</template>

<script setup>
import { shallowRef, onMounted } from 'vue'
import HomeOne from '~/components/homeOne/main.vue'
import HomeTwo from '~/components/homeTwo/main.vue'
import HomeThree from '~/components/homeThree/main.vue'
import HomeFour from '~/components/homeFour/main.vue'

const componentMap = {
  homeOne: HomeOne,
  homeTwo: HomeTwo,
  homeThree: HomeThree,
  homeFour: HomeFour
}

const selectedComponent = shallowRef(null) // no component yet

onMounted(async () => {
  const settings = await $fetch('/api/settings')
  const homepageKey = settings.find(item => item.key === 'homePage')?.value

  if (componentMap[homepageKey]) {
    selectedComponent.value = componentMap[homepageKey]
  } else {
    selectedComponent.value = HomeOne
  }
})
</script>
