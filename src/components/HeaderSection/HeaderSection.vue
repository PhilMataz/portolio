<template>
  <header
    class="z-10 fixed w-screen after:w-full after:h-3 after:bottom-0 after:block after:max-w-screen-lg after:mx-auto after:rounded-t-lg after:border-rose-400 after:border after:border-b-0"
  >
    <div class="backdrop-blur-sm w-full">
      <nav
        class="w-full max-w-screen-lg mx-auto font-jetbrains font-normal h-16 flex justify-end items-center ease-in-out transition-colors duration-100"
        :class="isIntersecting ? 'text-stone-50' : 'text-gray-700'"
      >
        <BaseLink
          v-for="{ title, href } in BASE_LINKS"
          :title="title"
          :href="href"
          class="px-4"
          client:load
          @click.prevent="handleClick(href)"
        ></BaseLink>
      </nav>
    </div>
  </header>
</template>
<script lang="ts" setup>
import { ref, onMounted } from "vue";
import BaseLink from "../BaseLink.vue";
import { useObserver } from "../../composables/useObserver";

let lenis = ref(null);

const { isIntersecting } = useObserver();

const BASE_LINKS = [
  {
    title: "About Me",
    href: "#hero",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "My Stack",
    href: "#stack",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

onMounted(() => {
  import("../../scripts/lenis").then((module) => {
    lenis.value = module.lenis;
  });
});

const handleClick = (target) => {
  if (lenis.value) {
    lenis.value.scrollTo(target, { offset: -64 });
  }
};
</script>
