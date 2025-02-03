<template>
  <div
    class="grid grid-cols-3 gap-6 w-fit mx-auto mb-12 lg:mb-7 lg:fixed lg:bottom-0 lg:grid-cols-1 lg:grid-rows-3 lg:-translate-x-1/2 transition-opacity"
  >
    <a v-for="{ icon, href, ariaLabel } in SOCIAL_LINKS" :href="href" :ariaLabel="ariaLabel"
      ><BaseIcon
        :icon="icon"
        size="sm"
        class="fill-blue-grey-500 hover:fill-blue-grey-400 transition-all lg:fill-red-vivid-300 lg:hover:fill-red-vivid-300 hover:tranblue-grey-x-px hover:-tranblue-grey-y-px"
      ></BaseIcon
    ></a>
    <div class="h-20 w-px bg-red-vivid-300 ml-[50%] hidden lg:block"></div>
  </div>
</template>
<script lang="ts" setup>
import BaseIcon from '../BaseIcon.vue';

const SOCIAL_LINKS = [
  {
    icon: 'instagram',
    href: 'https://www.instagram.com/phil.mataz/',
    ariaLabel: 'Link to Instagram profile',
  },
  {
    icon: 'linkedIn',
    href: 'https://www.linkedin.com/in/phillip-matambanadzo-b858751b9/',
    ariaLabel: 'Link to LinkedIn profile',
  },
  {
    icon: 'x',
    href: 'https://twitter.com/philmataz',
    ariaLabel: 'Link to Twitter profile',
  },
];
</script>
