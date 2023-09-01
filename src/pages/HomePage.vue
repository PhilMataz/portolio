<template>
  <HeaderSection :isIntersecting="isIntersecting" />
  <main>
    <HeroSection />
    <ProjectSection />
    <StackSection @is-intersecting="handleIntersection" />
    <ReferenceSection />
  </main>
  <FooterSection />
</template>
<script lang="ts" setup>
import HeaderSection from "../components/HeaderSection/HeaderSection.vue";
import HeroSection from "../components/HeroSection/HeroSection.vue";
import ProjectSection from "../components/ProjectSection/ProjectSection.vue";
import StackSection from "../components/StackSection/StackSection.vue";
import ReferenceSection from "../components/ReferenceSection/ReferenceSection.vue";
import FooterSection from "../components/FooterSection/FooterSection.vue";
import { ref } from "vue";

const isIntersecting = ref(false);

const handleIntersection = (value: boolean) => {
  isIntersecting.value = value;
};
</script>
