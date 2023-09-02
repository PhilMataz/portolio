<template>
  <section ref="rootElement" class="bg-gray-900 pt-12 pb-24 px-2 lg:px-0">
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
import { onMounted, onUnmounted, ref } from "vue";
import StackSection from "./StackSectionIcon/StackSectionIcon.vue";
import { ICONS } from "./enums";
import { useObserver } from "../../composables/useObserver";

const rootElement = ref(null);
const { registerElement, unregisterElement } = useObserver();

onMounted(() => {
  if (rootElement.value) {
    registerElement(rootElement.value);
  }
});
onUnmounted(() => {
  if (rootElement.value) {
    unregisterElement(rootElement.value);
  }
});
</script>
