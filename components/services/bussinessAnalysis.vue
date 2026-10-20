<template>
  <div class="">
    <Banner :bgImage="bgImage" :title="$t('business_analysis.title')" />

    <div
      class="grid text-base md:text-lg px-3 md:px-10 mt-6 grid-cols-1 md:gap-6 gap-3 lg:grid-cols-5"
    >
      <div class="col-span-3 flex flex-col justify-center">
        <p class="font-semibold text-2xl">
          {{ $t("business_analysis.business_innovation.title") }}
        </p>
        <p class="mt-4 md:text-justify">
          {{ $t("business_analysis.business_innovation.description_1") }}
        </p>
        <p class="mt-4 md:text-justify">
          {{ $t("business_analysis.business_innovation.description_2") }}
        </p>
      </div>
      <div class="col-span-5 lg:col-span-2">
        <nuxt-img
          class="max-h-[340px] lg:ml-auto"
          src="/images/bussiness-analysis.png"
          alt=""
        />
      </div>
    </div>

    <div class="mt-10 md:mt-16 px-3 md:px-10">
      <p class="font-semibold text-2xl">
        {{ $t("business_analysis.optimize_business.title") }}
      </p>
      <p class="mt-5 md:text-justify md:text-lg">
        {{ $t("business_analysis.optimize_business.description") }}
      </p>
      <div class="py-8 px-3 md:px-10 mt-8 bg-[#E9E9EB]">
        <h3 class="font-semibold text-xl">
          {{ $t("business_analysis.business_analysis_services.title") }}
        </h3>
        <div class="flex gap-5 md:gap-0 lg:flex-row flex-col justify-between">
          <ul class="mt-5 list-disc space-y-5 px-4">
            <li data-aos="fade-up">
              {{ $t("business_analysis.business_analysis_services.li_1") }}
            </li>
            <li data-aos="fade-up">
              {{ $t("business_analysis.business_analysis_services.li_2") }}
            </li>
            <li data-aos="fade-up">
              {{ $t("business_analysis.business_analysis_services.li_3") }}
            </li>
            <li data-aos="fade-up">
              {{ $t("business_analysis.business_analysis_services.li_4") }}
            </li>
            <li data-aos="fade-up">
              {{ $t("business_analysis.business_analysis_services.li_5") }}
            </li>
            <li data-aos="fade-up">
              {{ $t("business_analysis.business_analysis_services.li_6") }}
            </li>
            <li data-aos="fade-up">
              {{ $t("business_analysis.business_analysis_services.li_7") }}
            </li>
            <li data-aos="fade-up">
              {{ $t("business_analysis.business_analysis_services.li_8") }}
            </li>
            <li data-aos="fade-up">
              {{ $t("business_analysis.business_analysis_services.li_9") }}
            </li>
          </ul>
          <div class="md:mr-20">
            <img
              data-aos="fade-up"
              class="max-h-[450px]"
              src="/images/bussiness-image.png"
              alt=""
            />
          </div>
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
      bgImage: "/images/bussiness.webp",
    };
  },
};
</script>
