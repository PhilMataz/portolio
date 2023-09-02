<template>
  <div
    class="grid grid-cols-3 gap-6 w-fit mx-auto mb-12 lg:mb-7 lg:fixed lg:left lg:bottom-0 lg:grid-cols-1 lg:grid-rows-3 lg:-translate-x-1/2 transition-opacity"
  >
    <a v-for="{ icon, href } in SOCIAL_LINKS" :href="href"
      ><BaseIcon
        :icon="icon"
        size="sm"
        class="fill-gray-500 hover:fill-gray-400 transition-all lg:fill-rose-400 lg:hover:fill-rose-400 hover:translate-x-px hover:-translate-y-px"
      ></BaseIcon
    ></a>
    <div class="h-20 w-px bg-rose-400 ml-[50%] hidden lg:block"></div>
  </div>
</template>
<script lang="ts" setup>
import BaseIcon from "../BaseIcon.vue";

const SOCIAL_LINKS = [
  {
    icon: "instagram",
    href: "https://www.instagram.com/phil.mataz/",
  },
  {
    icon: "linkedIn",
    href: "https://www.linkedin.com/in/phillip-matambanadzo-b858751b9/",
  },
  {
    icon: "x",
    href: "https://twitter.com/philmataz",
  },
];
</script>
