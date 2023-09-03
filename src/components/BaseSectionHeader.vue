<template>
  <h2
    class="text-center font-exo-2 font-bold text-4xl"
    :class="dark ? 'text-gray-50' : 'text-gray-700'"
  >
    <slot>Default Section Header</slot>
  </h2>
  <hr class="w-24 h-px my-4 bg-rose-400 border-0" />
  <p
    class="text-center font-light"
    :class="dark ? 'text-gray-300' : 'text-gray-500'"
  >
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
