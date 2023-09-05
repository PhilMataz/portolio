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
    <div class="grid sm:grid-rows-2 sm:grid-cols-2 gap-2 w-full mt-12 lg:px-12">
      <ProjectSectionCard
        v-for="project in projects"
        :name="project.name"
        :date="project.date"
        :description="project.description"
        :skills="project.skills"
      />
    </div>
  </section>
</template>
<script lang="ts" setup>
import BaseSectionHeader from "../BaseSectionHeader.vue";
import ProjectSectionCard from "./ProjectSectionCard.vue";

const projects = [
  {
    name: "Senior Frontend Engineer | Mercedes-Benz.io",
    date: "01/2022 - 09/2022 (1 year, 9 months)",
    description:
      "Together with an international team of frontend, backend, and devops engineers, I played a key role in modernizing the Mercedes Connect web store. During this endeavor, I led the transition from Vue 2 to Vue 3 and introduced TypeScript, ensuring a more robust and scalable platform.",
    skills: [
      "Vue",
      "Typescript",
      "Pinia",
      "VueX",
      "Vite",
      "Jenkins",
      "Vitest",
      "Github",
      "Kubernetes",
    ],
  },
  {
    name: "Senior Fullstack Engineer | auteon",
    date: "10/2021 - 04/2022 (6 months)",
    description:
      "I developed a proof-of-concept by reverse engineering automotive eCommerce platforms, resulting in a web scraping service. After completing this, I trained several developers, guiding them through its efficient implementation and usage to ensure optimal results.",
    skills: [
      "Vue",
      "Typescript",
      "Google Cloud Functions",
      "Node.js",
      "Cheerio",
      "Pupeteer",
      "Postman",
      "GraphQL",
      "Hasura",
    ],
  },
  {
    name: "Lead Fullstack Engineer | Ruhrkraft",
    date: "09/2020 - 09/2021 (1 year)",
    description:
      "In my role, I designed and implemented a scheduler for a Digital Signage CMS. This tool was crafted to enable users to efficiently plan, schedule, and upload advertisement campaigns. Once these campaigns were set, they were showcased on multimedia screens across different venues.",
    skills: [
      "Vue",
      "Typescript",
      "VueX",
      "Meteor",
      "Node.js",
      "Jest",
      "MongoDB",
    ],
  },
  {
    name: "Fullstack Engineer | Westend Druckereibetriebe",
    date: "01/2018 - 07/2021 (3 year, 6 months)",
    description:
      "At a leading printing company, I played a pivotal role in optimizing their digital operations. I designed and implemented an order application, which became essential for client interactions. Furthermore, I established an extensive testing suite, guaranteeing the software's performance and robustness.",
    skills: [
      "Vue",
      "Javascript",
      "React",
      "VueX",
      "Cypress",
      "Jest",
      "Docker",
      "Node.js",
      "Meteor",
      "MongoDB",
    ],
  },
];
</script>
