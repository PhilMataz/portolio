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
          <a
            href="mailto:phillip.matambanadzo@kisscoders.ruhr"
            class="text-stone-50 font-jetbrains ml-4 font-normal"
            >Write me</a
          >
        </div>
        <div class="flex items-center">
          <FooterSectionWhatsappIcon></FooterSectionWhatsappIcon>
          <a
            href="https://wa.me/4915906562753"
            target="_blank"
            class="text-stone-50 font-jetbrains ml-4 font-normal"
            >+49 1590 656 2753</a
          >
        </div>
      </div>
    </div>
    <div
      class="mt-40 relative max-w-screen-lg w-full mx-auto after:absolute after:bottom-0 after:w-full after:h-3 after:block after:left-0 after:max-w-screen-lg after:mx-auto after:rounded-b-lg after:border-red-400 after:border after:border-t-0"
    >
      <div class="text-sm text-gray-500 px-2 pb-1 flex justify-between">
        <p class="inline-flex items-end">&copy; Phillip Matambanadzo - 2023</p>
        <p class="w-1/3 text-justify">
          Handcrafted from scratch in
          <a href="" class="font-jetbrains text-gray-400 text-xxs">Figma</a>,
          coded in
          <a href="" class="font-jetbrains text-gray-400 text-xxs">VSCode</a>,
          by yours truly. Built using
          <a href="" class="font-jetbrains text-gray-400 text-xxs">Astro</a>
          and
          <a href="" class="font-jetbrains text-gray-400 text-xxs">Tailwind</a>,
          and rolled out on
          <a href="" class="font-jetbrains text-gray-400 text-xxs">Netlify</a>.
          Fonts chosen are
          <a href="" class="font-jetbrains text-gray-400 text-xxs">Roboto</a>,
          <a href="" class="font-jetbrains text-gray-400 text-xxs"
            >JetBrains Mono</a
          >
          and
          <a href="" class="font-jetbrains text-gray-400 text-xxs">Exo 2</a>.
        </p>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import FooterSectionEnvelopeIcon from "./FooterSectionEnvelopeIcon.vue";
import FooterSectionWhatsappIcon from "./FooterSectionWhatsappIcon.vue";
</script>
