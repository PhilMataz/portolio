<template>
  <section class="bg-gray-900 pt-12 pb-24">
    <div class="max-w-screen-sm mx-auto flex flex-col items-center">
      <h2 class="text-center font-exo-2 font-bold text-4xl text-white">
        Tech Stack
      </h2>
      <hr class="w-24 h-px my-4 bg-red-400 border-0" />
      <p class="text-center font-light text-gray-50">
        Always evolving, always learning.<br />
        I continuously update my skill set to offer cutting-edge solutions.
      </p>
      <div class="flex flex-wrap justify-center mt-12">
        <StackSection
          v-for="icon in ICONS"
          :name="icon"
          class="fill-red-400 w-1/4 md:w-[calc(100%/7)] mt-8"
        />
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import StackSection from "./StackSectionIcon/StackSectionIcon.vue";
const ICONS = [
  "vue",
  "react",
  "html",
  "css",
  "javascript",
  "typescript",
  "node",
  "git",
  "aws",
  "kubernetes",
  "mongodb",
  "docker",
];
/* const itemClass = (index: number) => {
  let baseClass = "w-full"; // default for small screens: 1 item per row
  if (index < 7) {
    baseClass = "md:w-[calc(100%/7)] lg:w-1/7"; // 1/4 width on medium screens, 1/7 on large for the first 7 items
  } else if (index < 12) {
    baseClass = "md:w-1/5 lg:w-1/5"; // 1/4 width on medium screens, 1/5 on large for the next 5 items
  }
  return baseClass;
}; */
</script>
