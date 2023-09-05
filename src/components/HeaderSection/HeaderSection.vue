<template>
  <header id="navigation">
    <div
      class="z-20 fixed w-screen after:z-10 after:w-full after:h-3 after:bottom-0 after:block after:max-w-screen-lg after:mx-auto after:rounded-t-lg after:border-rose-400 after:border after:border-b-0 px-2 sm:px-4"
    >
      <div class="relative">
        <div
          class="-z-10 w-screen h-16 absolute backdrop-blur-sm -mx-2 sm:-mx-4"
        ></div>
        <div
          v-if="isMenuOpened"
          class="-z-10 w-screen h-16 absolute backdrop-blur-md -mx-2 sm:hidden"
        ></div>

        <nav
          class="w-full max-w-screen-lg mx-auto font-jetbrains font-normal h-16 flex justify-end items-center ease-in-out transition-colors duration-100"
          :class="isIntersecting ? 'text-stone-50' : 'text-gray-700'"
        >
          <Transition mode="out-in">
            <BaseLink
              v-if="!isMenuOpened"
              ariaLabel="Open menu"
              aria-expanded="false"
              class="px-4 sm:hidden"
              title="Menu"
              href="#"
              @click.prevent="handleMenuClick"
            />
            <BaseLink
              v-else
              class="px-4 sm:hidden"
              aria-label="Close menu"
              aria-expanded="true"
              title="Close"
              href="#"
              @click.prevent="handleMenuClick"
            />
          </Transition>

          <BaseLink
            v-for="{ title, href, ariaLabel } in BASE_LINKS"
            :title="title"
            :href="href"
            :ariaLabel="ariaLabel"
            class="px-4 hidden sm:inline-flex"
            client:load
            @click.prevent="handleClick(href)"
          ></BaseLink>
        </nav>
      </div>
    </div>
    <Transition>
      <HeaderSectionMobileMenu v-if="isMenuOpened" @click="handleClick" />
    </Transition>
  </header>
</template>
<script lang="ts" setup>
import { ref, onMounted, type Ref, computed, watch, nextTick } from "vue";
import HeaderSectionMobileMenu from "./HeaderSectionMobileMenu.vue";
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
    ariaLabel: "Navigate to Hero Section",
  },
  {
    title: "My Work",
    href: "#projects",
    ariaLabel: "Navigate to My Work Section",
  },
  {
    title: "My Stack",
    href: "#stack",
    ariaLabel: "Navigate to My Stack Section",
  },
  {
    title: "Contact",
    href: "#contact",
    ariaLabel: "Navigate to Hero Section",
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
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
