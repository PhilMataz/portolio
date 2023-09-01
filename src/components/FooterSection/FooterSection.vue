<template>
  <section class="bg-gray-900 pt-12 pb-4">
    <div class="max-w-screen-sm mx-auto flex flex-col items-center">
      <h2 class="text-center font-exo-2 font-bold text-4xl text-white">
        Let’s craft digital excellence
      </h2>
      <hr class="w-24 h-px my-4 bg-red-400 border-0" />
      <p class="text-center font-light text-gray-50 max-w-lg">
        Whether it's a new project, a revamp, or just a chat about the latest in
        frontend trends, I'm here. Reach out, and let's embark on a digital
        journey together.
      </p>
      <div class="flex justify-center mt-12">
        <div class="flex items-center mr-8">
          <FooterSectionEnvelopeIcon></FooterSectionEnvelopeIcon>
          <BaseLink
            href="mailto:phillip.matambanadzo@kisscoders.ruhr"
            title="Write me"
            class="text-stone-50 ml-4"
          />
        </div>
        <div class="flex items-center">
          <FooterSectionWhatsappIcon></FooterSectionWhatsappIcon>
          <BaseLink
            href="https://wa.me/4915906562753"
            target="_blank"
            title="+49 1590 656 2753"
            class="text-stone-50 ml-4"
          />
        </div>
      </div>
    </div>
    <div
      class="mt-40 relative max-w-screen-lg w-full mx-auto after:absolute after:bottom-0 after:w-full after:h-3 after:block after:left-0 after:max-w-screen-lg after:mx-auto after:rounded-b-lg after:border-red-400 after:border after:border-t-0"
    >
      <div class="z-5 text-sm text-gray-500 px-2 pb-1 flex justify-between">
        <p class="inline-flex items-end">&copy; Phillip Matambanadzo - 2023</p>
        <p class="w-1/3 text-justify">
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
  </section>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import FooterSectionEnvelopeIcon from "./FooterSectionEnvelopeIcon.vue";
import FooterSectionWhatsappIcon from "./FooterSectionWhatsappIcon.vue";
import BaseLink from "../BaseLink.vue";

const ORIGINAL_LINK_TEXT = "+49 1590 656 2753";

const linkText = ref(ORIGINAL_LINK_TEXT);

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ01234567891" as const;
let interval: number | null = null;

const handleMouseOver = (event: MouseEvent) => {
  let iterations = 0;
  interval = setInterval(() => {
    linkText.value = linkText.value
      .split("")
      .map((_, index) => {
        if (index < iterations) {
          return ORIGINAL_LINK_TEXT[index];
        }
        return LETTERS[Math.floor(Math.random() * LETTERS.length)];
      })
      .join("");
    if (iterations >= ORIGINAL_LINK_TEXT.length && interval)
      clearInterval(interval);
    iterations += 1 / 2;
  }, 30);
};
const handleMouseLeave = () => {
  linkText.value = ORIGINAL_LINK_TEXT;
  if (interval) clearInterval(interval);
};
</script>
