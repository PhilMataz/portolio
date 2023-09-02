<template>
  <section id="contact" class="bg-gray-900 pt-12 pb-4 px-2">
    <div class="max-w-screen-sm mx-auto flex flex-col items-center">
      <h2 class="text-center font-exo-2 font-bold text-4xl text-white">
        Let’s craft digital excellence
      </h2>
      <hr class="w-24 h-px my-4 bg-rose-400 border-0" />
      <p class="text-center font-light text-gray-50 max-w-lg">
        Whether it's a new project, a revamp, or just a chat about the latest in
        frontend trends, I'm here. Reach out, and let's embark on a digital
        journey together.
      </p>
      <div class="flex justify-center mt-12 flex-col sm:flex-row">
        <FooterSectionContactLink
          class="mr-8 mb-4 sm:mb-0"
          title="Write me"
          href="mailto:phillip.matambanadzo@kisscoders.ruhr"
          icon="envelope"
        ></FooterSectionContactLink>
        <FooterSectionContactLink
          title="+49 1590 656 2753"
          href="https://wa.me/4915906562753"
          icon="whatsapp"
        ></FooterSectionContactLink>
      </div>
    </div>
    <div class="mt-40 px-0 lg:px-4 relative max-w-screen-lg w-full mx-auto">
      <div
        class="relative after:absolute after:bottom-0 after:h-3 after:block after:left-0 after:w-full after:rounded-b-lg after:border-rose-400 after:border after:border-t-0"
      >
        <div
          class="grid grid-cols-3 gap-6 w-fit mx-auto mb-12 lg:mb-7 lg:fixed lg:left lg:bottom-0 lg:grid-cols-1 lg:grid-rows-3 lg:-translate-x-1/2 transition-opacity"
          :class="{
            'opacity-100': scrollProgress > 0.1,
            'opacity-0': scrollProgress <= 0.1,
          }"
        >
          <a href="">
            <BaseIcon
              icon="instagram"
              size="sm"
              class="fill-gray-500 hover:fill-gray-400 transition-colors lg:fill-rose-400 lg:hover:fill-rose-300"
            ></BaseIcon>
          </a>
          <a href="">
            <BaseIcon
              icon="linkedIn"
              size="sm"
              class="fill-gray-500 hover:fill-gray-400 transition-colors lg:fill-rose-400 lg:hover:fill-rose-300"
            ></BaseIcon>
          </a>
          <a href="">
            <BaseIcon
              icon="x"
              size="sm"
              class="fill-gray-500 hover:fill-gray-400 transition-colors lg:fill-rose-400 lg:hover:fill-rose-300"
            ></BaseIcon>
          </a>
          <div class="h-20 w-px bg-rose-400 ml-[50%] hidden lg:block"></div>
        </div>

        <div
          class="z-5 text-sm text-gray-500 px-2 pb-1 flex justify-between flex-col-reverse sm:flex-row"
        >
          <p class="inline-flex items-end">
            &copy; Phillip Matambanadzo - 2023
          </p>
          <p class="sm:w-1/3 w-4/5 text-justify mx-auto sm:mx-0 mb-12 sm:mb-0">
            Handcrafted from scratch in
            <BaseLink
              target="_blank"
              href="https://figma.com"
              class="font-jetbrains text-gray-400 text-xxs"
              title="Figma"
            ></BaseLink
            >, coded in
            <BaseLink
              target="_blank"
              href="https://code.visualstudio.com"
              title="VSCode"
              class="font-jetbrains text-gray-400 text-xxs"
            ></BaseLink
            >, by yours truly. Built using
            <BaseLink
              target="_blank"
              href="https://astro.build/"
              title="Astro"
              class="font-jetbrains text-gray-400 text-xxs"
            ></BaseLink>
            and
            <BaseLink
              target="_blank"
              href="https://tailwindcss.com/"
              title="Tailwind"
              class="font-jetbrains text-gray-400 text-xxs"
            ></BaseLink
            >, and rolled out on
            <BaseLink
              target="_blank"
              href="https://www.netlify.com/"
              title="Netlify"
              class="font-jetbrains text-gray-400 text-xxs"
            ></BaseLink
            >. Fonts chosen are
            <BaseLink
              target="_blank"
              href="https://fonts.google.com/specimen/Roboto"
              title="Roboto"
              class="font-jetbrains text-gray-400 text-xxs"
            ></BaseLink
            >,
            <BaseLink
              target="_blank"
              href="https://fonts.google.com/specimen/Exo+2"
              :title="`Exo\xa02`"
              class="font-jetbrains text-gray-400 text-xxs"
            ></BaseLink>
            and
            <BaseLink
              target="_blank"
              href="https://fonts.google.com/specimen/JetBrains+Mono"
              :title="`JetBrains\xa0Mono`"
              class="font-jetbrains text-gray-400 text-xxs"
            ></BaseLink
            >.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import FooterSectionContactLink from "./FooterSectionContactLink.vue";
import BaseLink from "../BaseLink.vue";
import BaseIcon from "../BaseIcon.vue";
import { lenis } from "../../scripts/lenis";
import { ref } from "vue";

const scrollProgress = ref(0);

lenis.on("scroll", ({ progress }: { progress: number }) => {
  scrollProgress.value = progress;
});
</script>
