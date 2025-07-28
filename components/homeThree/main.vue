<template>
  <hero-section/>
  <exclusive-section/>
  <PopularCategories/>
  <banner-section/>
  <Faq/>

</template>
<script setup lang="ts">
import HeroSection from "~/components/homeThree/heroSection.vue";
import ExclusiveSection from "~/components/homeThree/ExclusiveSection.vue";
import BannerSection from "~/components/homeThree/BannerSection.vue";
import PopularCategories from "~/components/homeThree/PopularCategories.vue";
import Faq from "~/components/homeThree/Faq.vue";
</script>