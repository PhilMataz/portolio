<template>
  <!-- Hero Section with Navigation -->
  <header
    class="z-10 fixed w-screen after:w-full after:h-3 after:bottom-0 after:block after:max-w-screen-lg after:mx-auto after:rounded-t-lg after:border-red-400 after:border after:border-b-0"
  >
    <div class="backdrop-blur-sm w-full">
      <nav
        class="w-full max-w-screen-lg mx-auto font-jetbrains font-normal h-16 flex justify-end items-center ease-in-out transition-colors duration-100"
        :class="isIntersecting ? 'text-stone-50' : 'text-gray-700'"
      >
        <a href="#about" class="px-4">About Me</a>
        <a href="#tech-stack" class="px-4">My Stack</a>
        <a href="#projects" class="px-4">Projects</a>
        <a href="#contact" class="pl-4">Contact</a>
      </nav>
    </div>
  </header>
  <main class="">
    <section id="hero" class="pt-48 max-w-screen-sm mx-auto h-screen">
      <h1 class="font-exo-2 font-bold text-7xl">Hi, I'm Phil.</h1>
      <p class="text-3xl text-gray-600">
        I turn <span class="text-red-400">visions</span> into interactive
        realities with <span class="text-red-400">precision</span> and
        <span class="text-red-400">flair</span>.
      </p>
      <p class="mt-10 leading-8 text-gray-600">
        With 6 years of experience as a
        <span class="text-red-400 font-normal">Frontend Developer</span>, I
        specialize in transforming intricate challenges into intuitive,
        user-friendly solutions. My work is not just about writing code; it's
        about writing the future of businesses, one line at a time. While my
        core expertise lies in frontend development, my interests in
        <span class="text-red-400 font-normal">UI/UX</span>,
        <span class="text-red-400 font-normal">blockchain technology</span>, and
        even <span class="text-red-400 font-normal">dance</span>, add a unique
        flavor to my approach. Let's build something extraordinary together.
      </p>
    </section>
    <ProjectSection></ProjectSection>

    <StackSection client:load @is-intersecting="handleIntersection" />
    <ReferenceSection />
  </main>
  <FooterSection />
</template>
<script lang="ts" setup>
import ProjectSection from "../components/ProjectSection/ProjectSection.vue";
import StackSection from "../components/StackSection/StackSection.vue";
import ReferenceSection from "../components/ReferenceSection/ReferenceSection.vue";
import FooterSection from "../components/FooterSection/FooterSection.vue";
import { ref } from "vue";

const isIntersecting = ref(false);

const handleIntersection = (value: boolean) => {
  console.log(
    "🚀 ~ file: HomePage.vue:55 ~ handleIntersection ~ value:",
    value
  );
  isIntersecting.value = value;
};
</script>
