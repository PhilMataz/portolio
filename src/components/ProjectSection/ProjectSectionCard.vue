<template>
  <div
    class="flex items-stretch rounded-lg relative before:absolute before:w-full before:top-0 before:border before:border-rose-400 before:border-b-0 before:h-4 before:rounded-t-lg after:absolute after:w-full after:bottom-0 after:border after:border-rose-400 after:border-t-0 after:h-4 after:rounded-b-lg"
  >
    <div class="flex flex-col p-4">
      <h3 class="font-medium text-lg">
        {{ project.title }}
      </h3>
      <p class="text-blue-grey-500">{{ project.duration }}</p>
      <p class="my-6 text-sm">
        {{ project.description }}
      </p>
      <div class="flex flex-wrap mt-auto gap-1">
        <span
          v-for="skill in project.technologies"
          class="inline-flex items-center rounded-full bg-red-vivid-50 px-2 py-1 text-xs font-medium text-red-vivid-700 ring-1 ring-inset ring-red-vivid-600/10"
          >{{ skill }}</span
        >
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { InferEntrySchema } from 'astro:content';

interface Props {
  project: InferEntrySchema<'projects'>;
}

defineProps<Props>();
</script>
