<template>
  <div
    ref="lottiePlayer"
    class="mx-auto mb-4 mt-4 sm:mt-auto transition-opacity"
    :class="scrollProgress < 0.02 ? 'opacity-100' : 'opacity-0'"
  ></div>
</template>
<script lang="ts" setup>
import { onMounted, onUnmounted } from "vue";
import { lenis } from "../../scripts/lenis";
import { ref } from "vue";
import bodymovin, { type AnimationItem } from "lottie-web";

const scrollProgress = ref(0);
const lottiePlayer = ref(null);
let animation: AnimationItem | null = null;

lenis.on("scroll", ({ progress }: { progress: number }) => {
  scrollProgress.value = progress;
});
onMounted(() => {
  if (typeof window !== "undefined" && lottiePlayer.value) {
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
