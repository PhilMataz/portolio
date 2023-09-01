<template>
  <div
    class="rounded-lg relative before:absolute before:w-full before:top-0 before:border before:border-red-400 before:border-b-0 before:h-4 before:rounded-t-lg after:absolute after:w-full after:bottom-0 after:border after:border-red-400 after:border-t-0 after:h-4 after:rounded-b-lg"
  >
    <div class="p-4">
      <h3 class="font-medium text-lg">
        {{ name }}
      </h3>
      <p class="text-gray-500">{{ date }}</p>
      <p class="my-6">
        {{ description }}
      </p>
      <div class="flex flex-wrap">
        <div
          v-for="skill in skills"
          class="mr-1 mt-1 rounded-full bg-red-100 font-bold text-sm text-red-400 inline-flex h-7 items-center px-4"
        >
          {{ skill }}
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { toRefs } from "vue";

interface Props {
  name: string;
  date: string;
  description: string;
  skills: string[];
}

const props = defineProps<Props>();

const { name, date, description, skills } = toRefs(props);
</script>
