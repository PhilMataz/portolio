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
import { useHoverAnimation } from "../composables/useHoverAnimation";

interface Props {
  title: string;
  href: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  scrollTo?: boolean;
}

const emit = defineEmits(["click"]);

const props = withDefaults(defineProps<Props>(), {
  target: "_self",
  scrollTo: false,
});

const { displayValue, handleMouseOver, handleMouseLeave } = useHoverAnimation(
  props.title
);

const handleClick = (event: MouseEvent) => {
  emit("click", event);
};
</script>
