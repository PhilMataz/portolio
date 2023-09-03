<template>
  <lottie-player
    class="mx-auto mb-4 mt-4 sm:mt-auto transition-opacity"
    :class="scrollProgress < 0.02 ? 'opacity-100' : 'opacity-0'"
    autoplay
    loop
    mode="normal"
    src="scroll-animation.json"
    style="width: 56px; height: 56px"
  >
  </lottie-player>
</template>
<script lang="ts" setup>
import { onMounted } from "vue";
import { lenis } from "../../scripts/lenis";
import { ref } from "vue";

const scrollProgress = ref(0);

lenis.on("scroll", ({ progress }: { progress: number }) => {
  scrollProgress.value = progress;
});
onMounted(() => {
  if (typeof window !== "undefined") {
    import("@lottiefiles/lottie-player");
  }
});
</script>
