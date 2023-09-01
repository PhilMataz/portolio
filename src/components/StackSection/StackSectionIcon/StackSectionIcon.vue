<template>
  <component :is="iconComponent" />
</template>
<script lang="ts" setup>
import { computed } from "vue";
import IconAws from "./IconAws.vue";
import IconCss from "./IconCss.vue";
import IconDocker from "./IconDocker.vue";
import IconGit from "./IconGit.vue";
import IconHtml from "./IconHtml.vue";
import IconJavascript from "./IconJavascript.vue";
import IconKubernetes from "./IconKubernetes.vue";
import IconMongodb from "./IconMongodb.vue";
import IconNode from "./IconNode.vue";
import IconReact from "./IconReact.vue";
import IconTypescript from "./IconTypescript.vue";
import IconVue from "./IconVue.vue";
import IconDefault from "./IconDefault.vue";

interface Props {
  name: string;
  width?: string;
  height?: string;
}

const props = withDefaults(defineProps<Props>(), {
  width: "52",
  height: "52",
});

const ICON_COMPONENTS = new Map([
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
  const icon = ICON_COMPONENTS.get(props.name);
  if (!icon) {
    console.error(`Icon ${props.name} not found`);
    return IconDefault;
  }
  return icon;
});
</script>
