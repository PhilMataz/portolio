<template>
  <a
    :href="href"
    :aria-label="ariaLabel"
    target="_blank"
    class="group flex items-center"
    @mouseenter="handleMouseOver"
    @mouseleave="handleMouseLeave"
    @click.stop
  >
    <div
      class="w-10 h-10 rounded-full bg-gray-700 inline-flex items-center justify-center"
    >
      <BaseIcon
        class="group-hover:translate-x-px group-hover:-translate-y-px transition-transform"
        :icon="icon"
        size="sm"
      ></BaseIcon>
    </div>
    <span class="font-mono font-normal text-gray-400 ml-4">{{
      displayValue
    }}</span>
  </a>
</template>
<script lang="ts" setup>
import { useHoverAnimation } from "../../composables/useHoverAnimation";
import BaseIcon from "../BaseIcon.vue";

interface Props {
  title: string;
  icon: string;
  href: string;
  ariaLabel: string;
}

const props = defineProps<Props>();

const { displayValue, handleMouseOver, handleMouseLeave } = useHoverAnimation(
  props.title
);
</script>
