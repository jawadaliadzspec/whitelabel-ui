<template>
  <hero-section :data="heroData" :colors="settings.colors"/>
  <exclusive-section/>
  <PopularCategories/>
  <banner-section :data="bannerData"/>
  <Faq :data="faqData"/>

</template>
<script setup lang="ts">
import HeroSection from "~/components/homeThree/heroSection.vue";
import ExclusiveSection from "~/components/homeThree/ExclusiveSection.vue";
import BannerSection from "~/components/homeThree/BannerSection.vue";
import PopularCategories from "~/components/homeThree/PopularCategories.vue";
import Faq from "~/components/homeThree/Faq.vue";
const props = defineProps<{
  settings: Record<string, any>
}>()

const heroData = props.settings?.homeThree?.heroSection ?? {
  mainHeading: '',
  secondHeading: '',
  buttonText: '',
  image: '',
};

const bannerData = props.settings?.homeThree?.bannerSection ?? {
  mainHeading: '',
  secondHeading: '',
  buttonText: '',
  image: '',
};


const faqData = props.settings?.homeThree?.faqSection ?? {
  title: 'FAQ',
  items: []
}
</script>