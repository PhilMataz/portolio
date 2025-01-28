<template>
  <a
    class="font-mono font-normal"
    :href="href"
    :target="target"
    :aria-label="ariaLabel"
    @mouseover="handleMouseOver"
    @mouseleave="handleMouseLeave"
    @click="handleClick"
    >{{ displayValue }}</a
  >
</template>
<script lang="ts" setup>
import { useHoverAnimation } from '../composables/useHoverAnimation';

interface Props {
  title: string;
  href: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  scrollTo?: boolean;
  ariaLabel?: string;
}

const emit = defineEmits(['click']);

const props = withDefaults(defineProps<Props>(), {
  target: '_self',
  scrollTo: false,
  ariaLabel: '',
});

const { displayValue, handleMouseOver, handleMouseLeave } = useHoverAnimation(props.title);

const handleClick = (event: MouseEvent) => {
  emit('click', event);
};
</script>
