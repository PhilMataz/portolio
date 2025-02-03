<template>
  <section
    id="contact"
    class="section--dark bg-blue-grey-900 pt-12 pb-4 px-2 sm:px-4"
  >
    <div class="max-w-screen-sm mx-auto flex flex-col items-center">
      <BaseSectionHeader dark>
        Let’s craft digital excellence
        <template #sub-header>
          Whether it's a new project, a revamp, or just a chat about the latest
          in frontend trends, I'm here. Reach out, and let's embark on a digital
          journey together.
        </template>
      </BaseSectionHeader>
      <div class="flex justify-center mt-12 flex-col sm:flex-row">
        <FooterSectionContactLink
          class="mr-8 mb-4 sm:mb-0"
          title="Write me"
          href="mailto:hello@philmataz.dev"
          ariaLabel="Write me an email to hello@philmataz.dev"
          icon="envelope"
        ></FooterSectionContactLink>
        <FooterSectionContactLink
          title="+49 1590 656 2753"
          href="https://wa.me/4915906562753"
          ariaLabel="Send a WhatsApp message to +49 1590 656 2753"
          icon="whatsapp"
        ></FooterSectionContactLink>
      </div>
    </div>
    <div class="mt-40 relative max-w-screen-lg w-full mx-auto">
      <div
        class="relative after:absolute after:bottom-0 after:h-3 after:block after:left-0 after:w-full after:rounded-b-lg after:border-red-vivid-300 after:border after:border-t-0"
      >
        <FooterSectionSocials
          :class="scrollProgress > 0.1 ? 'opacity-100' : 'opacity-0'"
        />

        <div
          class="z-5 text-sm text-blue-grey-500 px-2 pb-1 flex justify-between flex-col-reverse sm:flex-row"
        >
          <p class="inline-flex items-end">
            &copy; Phillip Matambanadzo - 2023
          </p>
          <p class="sm:w-1/3 w-4/5 text-justify mx-auto sm:mx-0 mb-12 sm:mb-0">
            Handcrafted from scratch in
            <BaseLink
              target="_blank"
              href="https://figma.com"
              class="font-mono text-blue-grey-400 text-xxs"
              title="Figma"
              ariaLabel="Visit Figma's official website"
            ></BaseLink
            >, coded in
            <BaseLink
              target="_blank"
              href="https://code.visualstudio.com"
              title="VSCode"
              class="font-mono text-blue-grey-400 text-xxs"
              ariaLabel="Visit VSCode's official website"
            ></BaseLink
            >, by yours truly. Built using
            <BaseLink
              target="_blank"
              href="https://astro.build/"
              title="Astro"
              class="font-mono text-blue-grey-400 text-xxs"
              ariaLabel="Visit Astro's official website"
            ></BaseLink>
            and
            <BaseLink
              target="_blank"
              href="https://tailwindcss.com/"
              title="Tailwind"
              class="font-mono text-blue-grey-400 text-xxs"
              ariaLabel="Visit Tailwind's official website"
            ></BaseLink
            >, and rolled out on
            <BaseLink
              target="_blank"
              href="https://www.netlify.com/"
              title="Netlify"
              class="font-mono text-blue-grey-400 text-xxs"
              ariaLabel="Visit Netlify's official website"
            ></BaseLink
            >. Fonts chosen are
            <BaseLink
              target="_blank"
              href="https://fonts.google.com/specimen/Roboto"
              title="Roboto"
              class="font-mono text-blue-grey-400 text-xxs"
              ariaLabel="Visit Roboto font specimen on Google Fonts"
            ></BaseLink
            >,
            <BaseLink
              target="_blank"
              href="https://fonts.google.com/specimen/Exo+2"
              :title="`Exo\xa02`"
              class="font-mono text-blue-grey-400 text-xxs"
              ariaLabel="Visit Exo 2 font specimen on Google Fonts"
            ></BaseLink>
            and
            <BaseLink
              target="_blank"
              href="https://fonts.google.com/specimen/JetBrains+Mono"
              :title="`JetBrains\xa0Mono`"
              class="font-mono text-blue-grey-400 text-xxs"
              ariaLabel="Visit JetBrains Mono font specimen on Google Fonts"
            ></BaseLink
            >.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import BaseLink from "../BaseLink.vue";
import BaseSectionHeader from "../BaseSectionHeader.vue";
import FooterSectionContactLink from "./FooterSectionContactLink.vue";
import FooterSectionSocials from "./FooterSectionSocials.vue";

import { useLenis } from "../../composables/useLenis";

const { scrollProgress } = useLenis();
</script>
