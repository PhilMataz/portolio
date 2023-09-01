<template>
  <header
    class="z-10 fixed w-screen after:w-full after:h-3 after:bottom-0 after:block after:max-w-screen-lg after:mx-auto after:rounded-t-lg after:border-red-400 after:border after:border-b-0"
  >
    <div class="backdrop-blur-sm w-full">
      <nav
        class="w-full max-w-screen-lg mx-auto font-jetbrains font-normal h-16 flex justify-end items-center ease-in-out transition-colors duration-100"
        :class="isIntersecting ? 'text-stone-50' : 'text-gray-700'"
      >
        <BaseLink title="About Me" href="#about" class="px-4"></BaseLink>
        <BaseLink title="Projects" href="#projects" class="px-4"></BaseLink>
        <BaseLink title="My Stack" href="#my-stack" class="px-4"></BaseLink>
        <BaseLink title="Contact" href="#contact" class="pl-4"></BaseLink>
      </nav>
    </div>
  </header>
</template>
<script lang="ts" setup>
import BaseLink from "../BaseLink.vue";

interface Props {
  isIntersecting?: boolean;
}
withDefaults(defineProps<Props>(), {
  isIntersecting: false,
});
</script>
