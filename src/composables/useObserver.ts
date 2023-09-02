import { ref, onUnmounted, reactive } from "vue";

const isIntersecting = ref(false);
const observedElements = reactive(new Set<HTMLElement>());

const OPTIONS: IntersectionObserverInit = {
  root: null,
  rootMargin: "0px 0px -100% 0px",
  threshold: 0,
} as const;

export const useObserver = () => {
  let observer: IntersectionObserver;
  if (typeof window !== "undefined" && "IntersectionObserver" in window) {
    observer = new IntersectionObserver((entries) => {
      let isVisible = false;
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible = true;
        }
      });
      isIntersecting.value = isVisible;
    }, OPTIONS);
  }

  const registerElement = (element: HTMLElement) => {
    observedElements.add(element);
    observer.observe(element);
  };

  const unregisterElement = (element: HTMLElement) => {
    observedElements.delete(element);
    observer.unobserve(element);
  };

  onUnmounted(() => {
    observer?.disconnect();
  });

  return {
    registerElement,
    unregisterElement,
    isIntersecting,
  };
};
