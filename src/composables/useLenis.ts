import Lenis from "@studio-freight/lenis";
import { onMounted, ref, type Ref } from "vue";

const scrollProgress = ref(0);
const lenis: Ref<Lenis | null> = ref(null);
export const useLenis = () => {
  onMounted(() => {
    if (!lenis.value) {
      lenis.value = new Lenis({
        smoothTouch: true,
        smoothWheel: true,
      });
      function raf(time: number) {
        lenis.value?.raf(time);
        requestAnimationFrame(raf);
      }
      console.log(lenis.value.on);
      requestAnimationFrame(raf);
    }
    scrollProgress.value = lenis.value?.progress || 0;
  });

  lenis.value?.on("scroll", ({ progress }: { progress: number }) => {
    scrollProgress.value = progress;
  });

  const scrollTo = (target: string, options: { offset?: number }) => {
    lenis.value?.scrollTo(target, options);
  };
  const start = () => {
    lenis.value?.start();
  };
  const stop = () => {
    lenis.value?.stop();
  };

  return { scrollTo, start, stop, scrollProgress };
};
