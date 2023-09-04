<template>
  <section
    id="stack"
    ref="rootElement"
    class="bg-gray-900 pt-12 pb-24 lg:px-0 px-2 sm:px-4"
  >
    <div class="max-w-screen-sm mx-auto flex flex-col items-center">
      <BaseSectionHeader dark>
        Tech Stack
        <template #sub-header>
          Always evolving, always learning.<br />
          I continuously update my skill set to offer cutting-edge solutions.
        </template>
      </BaseSectionHeader>
      <div class="flex flex-wrap justify-center mt-12">
        <div
          v-for="{ icon, label } in ICONS"
          class="flex flex-col items-center w-1/4 md:w-[calc(100%/7)] mt-8"
        >
          <BaseIcon :icon="icon" size="lg" class="fill-rose-400" />
          <span class="text-xs text-rose-400 font-bold mt-0.5">{{
            label
          }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from "vue";
import BaseSectionHeader from "../BaseSectionHeader.vue";
import BaseIcon from "../BaseIcon.vue";
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
