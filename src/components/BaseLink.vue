<template>
  <a
    class="font-jetbrains font-normal"
    :href="href"
    :target="target"
    @mouseover="handleMouseOver"
    @mouseleave="handleMouseLeave"
    @click="handleClick"
    >{{ displayValue }}</a
  >
</template>
<script lang="ts" setup>
import { ref } from "vue";

interface Props {
  title: string;
  href: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  scrollTo?: boolean;
}

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ01234567891" as const;

const emit = defineEmits(["click"]);
let interval: number | null = null;

const props = withDefaults(defineProps<Props>(), {
  target: "_self",
  scrollTo: false,
});
const displayValue = ref(props.title);

const handleClick = (event: MouseEvent) => {
  emit("click", event);
};

const handleMouseOver = () => {
  let iterations = 0;
  interval = setInterval(() => {
    displayValue.value = props.title
      .split("")
      .map((_, index) => {
        if (index < iterations) {
          return props.title[index];
        }
        return LETTERS[Math.floor(Math.random() * LETTERS.length)];
      })
      .join("");
    if (iterations >= props.title.length && interval) {
      clearInterval(interval);
    }
    iterations += 1 / 2;
  }, 30);
};
const handleMouseLeave = () => {
  displayValue.value = props.title;
  if (interval) {
    clearInterval(interval);
  }
};
</script>
