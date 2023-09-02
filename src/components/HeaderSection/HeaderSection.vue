<template>
  <header
    class="z-10 fixed w-screen after:w-full after:h-3 after:bottom-0 after:block after:max-w-screen-lg after:mx-auto after:rounded-t-lg after:border-red-400 after:border after:border-b-0"
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
        ></BaseLink>
      </nav>
    </div>
  </header>
</template>
<script lang="ts" setup>
import BaseLink from "../BaseLink.vue";
import { useObserver } from "../../composables/useObserver";

const { isIntersecting } = useObserver();

const BASE_LINKS = [
  {
    title: "About Me",
    href: "#about",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "My Stack",
    href: "#my-stack",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];
</script>
