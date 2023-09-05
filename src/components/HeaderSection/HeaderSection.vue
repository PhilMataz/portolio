<template>
  <header id="navigation">
    <div
      class="z-20 fixed w-screen after:z-10 after:w-full after:h-3 after:bottom-0 after:block after:max-w-screen-lg after:mx-auto after:rounded-t-lg after:border-rose-400 after:border after:border-b-0 px-2 sm:px-4"
    >
      <div class="relative">
        <div
          class="-z-10 w-full h-16 absolute"
          :class="isMenuOpened ? 'backdrop-blur-md' : 'backdrop-blur-sm'"
        ></div>
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
