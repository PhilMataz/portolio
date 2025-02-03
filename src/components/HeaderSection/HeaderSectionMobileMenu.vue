<template>
  <div
    class="z-10 fixed h-screen w-screen backdrop-blur-md flex flex-col justify-between px-2 sm:hidden mt-16"
  >
    <div class="flex flex-col mt-16">
      <BaseLink
        v-for="{ id, title, href } in BASE_LINKS"
        :ref="(el) => setRef(el, id)"
        :key="id"
        :title="title"
        :href="href"
        class="px-4 text-6xl font-black my-6"
        :class="isOverlapping(id) ? 'text-blue-grey-100' : ''"
        client:load
        @click.prevent="handleClick(href)"
      ></BaseLink>
    </div>

    <div
      class="h-3 mb-4 block left-0 w-full rounded-b-lg border-red-vivid-300 border border-t-0"
    ></div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref, type ComponentPublicInstance } from "vue";
import BaseLink from "../BaseLink.vue";
import { BASE_LINKS } from "./enums";

const linkRefs = ref<Map<string, Element>>(new Map());
const sections = ref<Element[] | null>(null);

const emit = defineEmits(["click"]);
const handleClick = (href: string) => {
  emit("click", href);
};

const isVerticallyContained = (link: DOMRect, section: DOMRect) => {
  // Calculate the overlapping height
  const overlappingHeight =
    Math.min(link.bottom, section.bottom) - Math.max(link.top, section.top);

  // Check if overlapping height is at least 50% of the link's height
  return overlappingHeight >= 0.5 * link.height;
};

const isOverlapping = (id: string) => {
  const linkRect = linkRefs.value.get(id)?.getBoundingClientRect();

  if (linkRect) {
    return sections.value?.some((section) =>
      isVerticallyContained(linkRect, section.getBoundingClientRect())
    );
  }

  return false;
};

const setRef = (el: Element | ComponentPublicInstance | null, id: string) => {
  if (!el) return;
  if (el instanceof Element) {
    linkRefs.value.set(id, el);
  } else {
    linkRefs.value.set(id, el.$el);
  }
};

onMounted(() => {
  sections.value = [...document.querySelectorAll(".section--dark")];
});
</script>
