<template>
  <h2
    class="text-center font-display font-bold text-4xl"
    :class="dark ? 'text-blue-grey-50' : 'text-blue-grey-700'"
  >
    <slot>Default Section Header</slot>
  </h2>
  <hr class="w-24 h-px my-4 bg-red-vivid-300 border-0" />
  <p class="text-center font-light max-w-lg" :class="dark ? 'text-blue-grey-300' : 'text-blue-grey-500'">
    <slot name="sub-header"></slot>
  </p>
</template>
<script lang="ts" setup>
interface Props {
  dark?: boolean;
}
withDefaults(defineProps<Props>(), {
  dark: false,
});
</script>
