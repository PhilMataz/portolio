<template>
  <div
    ref="lottiePlayer"
    class="mx-auto mb-4 mt-4 sm:mt-auto transition-opacity"
    :class="scrollProgress < 0.02 ? 'opacity-100' : 'opacity-0'"
  ></div>
</template>
<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from "vue";
import bodymovin, { type AnimationItem } from "lottie-web";

import { useLenis } from "../../composables/useLenis";

const { scrollProgress } = useLenis();
const lottiePlayer = ref(null);
let animation: AnimationItem | null = null;

onMounted(() => {
  if (lottiePlayer.value) {
    animation = bodymovin.loadAnimation({
      container: lottiePlayer.value,
      path: "scroll-animation.json",
      renderer: "svg",
      loop: true,
      autoplay: true,
    });
  }
});
onUnmounted(() => {
  animation?.destroy();
  bodymovin.destroy();
});
</script>
