<template>
  <section
    class="pt-12 pb-24 max-w-screen-lg mx-auto flex flex-col items-center px-2 sm:px-0"
  >
    <h2 class="text-center font-exo-2 font-bold text-4xl">Recent Projects</h2>
    <hr class="w-24 h-px my-4 bg-red-400 border-0" />
    <p class="text-center font-light">
      Always evolving, always learning.<br />
      I continuously update my skill set to offer cutting-edge solutions.
    </p>
    <div class="grid sm:grid-rows-2 sm:grid-cols-2 gap-2 w-full mt-12">
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
import ProjectSectionCard from "./ProjectSectionCard.vue";

const projects = [
  {
    name: "Senior Frontend Engineer | Mercedes-Benz.io",
    date: "01/2022 - 09/2022 (1 year, 9 months)",
    description:
      "Together with an international team of frontend, backend and devops engineers, I've contributed to the development of the Mercedes Me web storefront.",
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
      "I developed a proof of concept reverse engineering automotive eCommerce websites to create a web scraping service. After its completion, Itrained several developers on its implementation and usage.",
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
      "I was responsible for the design and implementation of a scheduler for a Digital Signage Content Management System. The main goal of this scheduler was to offer users a straightforward platform for planning, scheduling, and uploading advertisement campaigns. Once uploaded, these campaigns were then seamlessly displayed on multimedia screens across various locations.",
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
      "At this prominent printing firm, Iwas responsible for enhancing and streamlining their digital operations. My primary tasks included the design and implementation of an order placement application. This application served as a vital touchpoint between the company and its clientele. Additionally, I was tasked with building an end-to-end and unit testing suite to ensure the application's reliability and functionality.",
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
