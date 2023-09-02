<template>
  <header>
    <div
      class="z-20 fixed w-screen after:z-10 after:w-full after:h-3 after:bottom-0 after:block after:max-w-screen-lg after:mx-auto after:rounded-t-lg after:border-rose-400 after:border after:border-b-0"
    >
      <div
        class="backdrop-blur-sm w-full"
        :class="isMenuOpened ? 'backdrop-blur-md' : 'backdrop-blur-sm'"
      >
        <nav
          class="w-full max-w-screen-lg mx-auto font-jetbrains font-normal h-16 flex justify-end items-center ease-in-out transition-colors duration-100"
          :class="isIntersecting ? 'text-stone-50' : 'text-gray-700'"
        >
          <Transition mode="out-in">
            <BaseLink
              v-if="!isMenuOpened"
              class="px-4 sm:hidden"
              title="Menu"
              href="#"
              @click.prevent="handleMenuClick"
            />
            <BaseLink
              v-else
              class="px-4 sm:hidden"
              title="Close"
              href="#"
              @click.prevent="handleMenuClick"
            />
          </Transition>

          <BaseLink
            v-for="{ title, href } in BASE_LINKS"
            :title="title"
            :href="href"
            class="px-4 hidden sm:inline-flex"
            client:load
            @click.prevent="handleClick(href)"
          ></BaseLink>
        </nav>
      </div>
    </div>
    <Transition>
      <div
        v-if="isMenuOpened"
        class="z-10 fixed h-screen w-screen backdrop-blur-md flex flex-col justify-between px-2"
      >
        <div class="flex flex-col mt-16">
          <BaseLink
            v-for="{ title, href } in BASE_LINKS"
            :title="title"
            :href="href"
            class="px-4 text-6xl font-black my-6"
            client:load
            @click.prevent="handleClick(href)"
          ></BaseLink>
        </div>
        <div
          class="h-3 mb-4 block left-0 w-full rounded-b-lg border-rose-400 border border-t-0"
        ></div>
      </div>
    </Transition>
  </header>
</template>
<script lang="ts" setup>
import { ref, onMounted, type Ref, computed, watch, nextTick } from "vue";
import BaseLink from "../BaseLink.vue";
import { useObserver } from "../../composables/useObserver";
import type Lenis from "@studio-freight/lenis";

let lenis: Ref<Lenis | null> = ref(null);
const isMenuOpened = ref(false);

const { isIntersecting } = useObserver();

const BASE_LINKS = [
  {
    title: "About Me",
    href: "#hero",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "My Stack",
    href: "#stack",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

onMounted(() => {
  import("../../scripts/lenis").then((module) => {
    lenis.value = module.lenis;
  });
});

const handleClick = (target: string) => {
  if (isMenuOpened.value) {
    isMenuOpened.value = false;
  }
  nextTick(() => {
    if (lenis.value) {
      lenis.value.scrollTo(target, { offset: -64 });
    }
  });
};

const handleMenuClick = () => {
  isMenuOpened.value = !isMenuOpened.value;
};

const menuTitle = computed(() => {
  return isMenuOpened.value ? "Close" : "Menu";
});
watch(isMenuOpened, (value) => {
  if (value) {
    lenis.value?.stop();
  } else {
    lenis.value?.start();
  }
});
</script>
<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.33s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
