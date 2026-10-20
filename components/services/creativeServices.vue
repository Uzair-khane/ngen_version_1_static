<template>
  <div class="">
    <Banner :bgImage="bgImage" :title="$t('creative_services.title')" />
    <div class="px-3 md:px-10 mt-6 text-base md:text-lg">
      <p class="font-semibold text-2xl">
        {{ $t("creative_services.articulate_visualize.title") }}
      </p>
      <p class="mt-4 md:text-justify">
        {{ $t("creative_services.articulate_visualize.description") }}
      </p>
      <img class="mt-6" src="/images/creative-services.png" alt="" />
      <div class="mt-6 space-y-4">
        <div data-aos="fade-up" class="px-3 md:px-6 py-5 shadow-md">
          <h3 class="font-semibold md:text-xl flex gap-3 items-center">
            <span class="w-3 bg-[#F76033] h-3 rounded-full"></span>
            <span> {{ $t("creative_services.concept_note_writing.title") }} </span>
          </h3>
          <p class="mt-2">
            {{ $t("creative_services.concept_note_writing.description") }} 
          </p>
        </div>
        <div data-aos="fade-up" class="px-3 md:px-6 py-5 shadow-md">
          <h3 class="font-semibold md:text-xl flex gap-3 items-center">
            <span class="w-3 bg-[#F76033] h-3 rounded-full"></span>
            <span>{{ $t("creative_services.compelling_proposal_writing.title") }} </span>
          </h3>
          <p class="mt-2">
            {{ $t("creative_services.compelling_proposal_writing.description") }}
          </p>
        </div>
        <div data-aos="fade-up" class="px-3 md:px-6 py-5 shadow-md">
          <h3 class="font-semibold md:text-xl flex gap-3 items-center">
            <span class="w-3 bg-[#F76033] h-3 rounded-full"></span>
            <span> {{ $t("creative_services.persuasive_business_pitch_decks.title") }} </span>
          </h3>
          <p class="mt-2">
            {{ $t("creative_services.persuasive_business_pitch_decks.description") }}
          </p>
        </div>

        <div data-aos="fade-up" class="px-3 md:px-6 py-5 shadow-md">
          <h3 class="font-semibold md:text-xl flex gap-3 items-center">
            <span class="w-3 bg-[#F76033] h-3 rounded-full"></span>
            <span> {{ $t("creative_services.professional_presentation.title") }} </span>
          </h3>
          <p class="mt-2">
            {{ $t("creative_services.professional_presentation.description") }}
          </p>
        </div>

        <div data-aos="fade-up" class="px-3 md:px-6 py-5 shadow-md">
          <h3 class="font-semibold md:text-xl flex gap-3 items-center">
            <span class="w-3 bg-[#F76033] h-3 rounded-full"></span>
            <span> {{ $t("creative_services.innovative_design.title") }} </span>
          </h3>
          <p class="mt-2">
            {{ $t("creative_services.innovative_design.description") }}
          </p>
        </div>
      </div>
    </div>

    <Join />
  </div>
</template>
<script>
const components = {
  Technologies: () => import("@/components/technologies/animation.vue"),
  Join: () => import("@/components/common/Join.vue"),
  Banner: () => import("@/components/common/ServicesBanner.vue"),
};

export default {
  layout: "services",
  components,
  data() {
    return {
      bgImage: "/images/webDev.webp",
    };
  },
};
</script>
