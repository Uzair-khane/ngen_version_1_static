<template>
  <div class="">
    <Banner :bgImage="bgImage" title="Technology Stack" />
    <div class="px-3 md:px-12 mt-4">
      <h3 class="font-semibold text-2xl">
        {{ $t("technology_stack_page.powering_solution.title") }}
      </h3>
      <p class="mt-2 text-base md:text-lg md:text-justify">
        {{ $t("technology_stack_page.powering_solution.description") }}
      </p>
    </div>
    <WebDevelopment
      :technologStack="true"
      class="bg-[#EDF3F1] py-11 px-3 md:px-10 md:py-14"
    />
    <MobileDevelopment
      :technologyStack="true"
      class="bg-[#EDF3F1] py-11 px-3 md:px-10 mt-20 md:py-14"
    />
    <Animation :technologyStack="true" class="bg-[#EDF3F1] px-3 md:px-10 mt-20" />
    <Join />
  </div>
</template>
<script>
const components = {
  Banner: () => import("@/components/common/ServicesBanner.vue"),
  WebDevelopment: () => import("@/components/technologies/web.vue"),
  MobileDevelopment: () => import("@/components/technologies/mobile.vue"),
  Animation: () => import("@/components/technologies/animation.vue"),
  Join: () => import("@/components/common/Join.vue"),
};

export default {
  layout: "services",
  components,
  data() {
    return {
      bgImage: "/images/animation.webp",
    };
  },
};
</script>
