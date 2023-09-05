<template>
  <section
    class="pt-12 pb-24 max-w-screen-lg mx-auto flex flex-col items-center px-2 lg:px-0"
  >
    <BaseSectionHeader>
      Don't just take my word for it
      <template #sub-header
        >Hear from those who've experienced my craft firsthand.</template
      >
    </BaseSectionHeader>
    <div class="sm:grid sm:grid-cols-2 sm:gap-12 max-w-screen-md mt-12">
      <div class="relative px-4 pt-8 mb-8 sm:mb-0">
        <span
          class="text-9xl font-exo-2 font-bold absolute top-0 left-0 text-gray-700"
          >“</span
        >
        <div
          class="w-24 h-24 bg-rose-400 rounded-full float-right ml-4 shadow-inner overflow-hidden"
        >
          <img
            class="object-contain"
            src="/david.png"
            alt="Portrait of David Müller, Founder & Senior Software Architect at Hakobu"
          />
        </div>
        <p class="text-justify mt-10 text-gray-600">
          I have had the privilege of working closely with Phillip for over a
          year. He is an exceptional Software Architect who combines a keen
          attention to detail with strong team-oriented skills. Phillip not only
          excels in a collaborative environment but also possesses the
          leadership capabilities needed to propel a team toward its objectives.
          He has a unique ability to transform abstract concepts into
          fully-realized, functional software solutions. I highly recommend
          Phillip for any software development projects you may have in mind.
        </p>
        <div class="flex flex-row mt-4">
          <p class="font-normal">-&nbsp;</p>
          <div>
            <p class="font-normal">David Müller</p>
            <p class="text-sm">Founder & Senior Software Architect - Hakobu</p>
          </div>
        </div>
      </div>
      <div class="relative px-4 pt-8">
        <span
          class="text-9xl font-exo-2 font-bold absolute top-0 left-0 text-gray-700"
          >“</span
        >
        <div
          class="w-24 h-24 bg-rose-400 rounded-full float-right ml-4 shadow-inner overflow-hidden"
        >
          <img
            class="object-contain"
            src="/chi.png"
            alt="Portrait of Chi Nguyen, Senior Frontend Engineer at Mercedes-Benz.io"
          />
        </div>

        <p class="text-justify mt-10 text-gray-600">
          I have the pleasure to work with Phillip in a flagship project which
          successfully generated millions of dollars for over a year and I would
          wholeheartedly recommend Phillip for his outstanding Vue.js (JS/TS)
          and problem solving skills. Phillip's attention to detail ensures
          top-notch solutions, while his collaborative nature enriches team
          dynamics. He consistently produces high-quality work and is an asset
          to any project.
        </p>
        <div class="flex flex-row mt-4">
          <p class="font-normal">-&nbsp;</p>
          <div>
            <p class="font-normal">Chi Nguyen</p>
            <p class="text-sm">Senior Frontend Engineer - Mercedes-Benz.io</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import BaseSectionHeader from "../BaseSectionHeader.vue";
</script>
