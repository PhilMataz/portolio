<template>
  <section
    id="projects"
    class="pt-12 pb-24 max-w-screen-lg mx-auto flex flex-col items-center px-2 lg:px-0"
  >
    <BaseSectionHeader>
      Recent Projects
      <template #sub-header
        >From Concept to Code.<br />
        Projects that highlight my frontend journey.</template
      >
    </BaseSectionHeader>
    <div class="w-full mt-12 lg:px-12">
      <div class="grid sm:grid-rows-2 sm:grid-cols-2 gap-2">
        <ProjectSectionCard v-for="project in projects" :key="project.id" :project="project.data" />
      </div>
      <div class="w-full flex items-center mt-8 sm:justify-end">
        <a
          href="/cv"
          aria-label="View my full resume"
          class="relative inline-flex h-14 font-mono uppercase font-bold text-blue-grey-600 px-6 items-center after:rounded-tr hover:after:rounded before:rounded-bl before:hover:rounded after:h-2 after:w-3/5 after:top-0 after:right-0 after:border-t after:border-r after:border-blue-grey-500 after:absolute before:h-2 before:w-3/5 before:bottom-0 before:left-0 before:border-b before:border-l before:border-blue-grey-500 before:absolute hover:before:w-full hover:before:h-full before:transition-all hover:after:w-full hover:after:h-full after:transition-all"
          @mouseover="handleMouseOver"
          @mouseleave="handleMouseLeave"
        >
          {{ displayValue }}
        </a>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import type { CollectionEntry } from 'astro:content';
import { useHoverAnimation } from '../../composables/useHoverAnimation';
import BaseSectionHeader from '../BaseSectionHeader.vue';
import ProjectSectionCard from './ProjectSectionCard.vue';

interface Props {
  projects: CollectionEntry<'projects'>[];
}

const props = defineProps<Props>();

const { displayValue, handleMouseOver, handleMouseLeave } = useHoverAnimation('Full Resume');
</script>
