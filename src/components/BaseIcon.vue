<template>
  <component :is="iconComponent" :width="iconSize" :height="iconSize" />
</template>
<script lang="ts" setup>
import { computed } from "vue";
import IconWhatsapp from "./Icons/IconWhatsapp.vue";
import IconEnvelope from "./Icons/IconEnvelope.vue";
import IconLinkedIn from "./Icons/IconLinkedIn.vue";
import IconX from "./Icons/IconX.vue";
import IconInstagram from "./Icons/IconInstagram.vue";
import IconAws from "./Icons/IconAws.vue";
import IconCss from "./Icons/IconCss.vue";
import IconDocker from "./Icons/IconDocker.vue";
import IconGit from "./Icons/IconGit.vue";
import IconHtml from "./Icons/IconHtml.vue";
import IconJavascript from "./Icons/IconJavascript.vue";
import IconKubernetes from "./Icons/IconKubernetes.vue";
import IconMongodb from "./Icons/IconMongodb.vue";
import IconNode from "./Icons/IconNode.vue";
import IconReact from "./Icons/IconReact.vue";
import IconTypescript from "./Icons/IconTypescript.vue";
import IconVue from "./Icons/IconVue.vue";

import IconDefault from "./Icons/IconDefault.vue";

interface Props {
  icon: string;
  size: string;
}

const props = withDefaults(defineProps<Props>(), {
  size: "md",
});

const ICON_SIZES = new Map([
  ["sm", 24],
  ["md", 36],
  ["lg", 52],
]);

const ICON_COMPONENTS = new Map([
  ["whatsapp", IconWhatsapp],
  ["envelope", IconEnvelope],
  ["instagram", IconInstagram],
  ["linkedIn", IconLinkedIn],
  ["x", IconX],
  ["aws", IconAws],
  ["vue", IconVue],
  ["react", IconReact],
  ["html", IconHtml],
  ["css", IconCss],
  ["javascript", IconJavascript],
  ["typescript", IconTypescript],
  ["node", IconNode],
  ["git", IconGit],
  ["docker", IconDocker],
  ["kubernetes", IconKubernetes],
  ["mongodb", IconMongodb],
]);
const iconComponent = computed(() => {
  const icon = ICON_COMPONENTS.get(props.icon);
  if (!icon) {
    console.error(`Icon ${props.icon} not found`);
    return IconDefault;
  }
  return icon;
});

const iconSize = computed(() => {
  const size = ICON_SIZES.get(props.size);
  if (!size) {
    console.error(`Icon ${props.size} not found`);
    return 36;
  }
  return size;
});
</script>
