<template>
  <lottie-player
    class="mx-auto mb-4 mt-auto transition-opacity"
    :class="{
      'opacity-100': scrollProgress < 0.1,
      'opacity-0': scrollProgress >= 0.1,
    }"
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
