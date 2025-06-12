<template>
  <div>
    <navbar/>

    <main class="border-gray-700">
      <slot />
    </main>

    <myfooter/>
  </div>
</template>
<script setup lang="ts">

import Navbar from "~/components/common/navbar.vue";
import myfooter from "~/components/common/footer.vue";
</script>