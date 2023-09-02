<template>
  <component :is="iconComponent" />
</template>
<script lang="ts" setup>
import { computed } from "vue";
import IconWhatsapp from "./Icons/IconWhatsapp.vue";
import IconEnvelope from "./Icons/IconEnvelope.vue";
import IconDefault from "./Icons/IconDefault.vue";

interface Props {
  name: string;
}

const props = defineProps<Props>();

const ICON_COMPONENTS = new Map([
  ["whatsapp", IconWhatsapp],
  ["envelope", IconEnvelope],
]);
const iconComponent = computed(() => {
  const icon = ICON_COMPONENTS.get(props.name);
  if (!icon) {
    console.error(`Icon ${props.name} not found`);
    return IconDefault;
  }
  return icon;
});
</script>
