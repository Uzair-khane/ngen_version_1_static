<template>
  <div class="">
    <Banner :bgImage="bgImage" :title="$t('cloud_application.title')" />
    <div class="grid px-3 md:px-12 mt-6 text-base md:text-lg">
      <p class="font-semibold text-2xl">
        {{ $t("cloud_application.cloud_application_integration.title") }}
      </p>
      <p class="mt-4 md:text-justify">
        {{ $t("cloud_application.cloud_application_integration.description_1") }}
      </p>
      <p class="mt-4 md:text-justify">
        {{ $t("cloud_application.cloud_application_integration.description_2") }}
      </p>
    </div>
    <div class="mt-10 md:mt-16 px-3 md:px-12">
      <div
        class="bg-[#354FA0] flex flex-col md:flex-row rounded-md gap-4 md:gap-10 items-center px-10 py-14"
      >
        <div class="col-span-1">
          <nuxt-img src="/images/cloud-data.png" alt="" />
        </div>
        <div class="col-span-2">
          <p
            class="text-2xl md:text-3xl leading-relaxed font-semibold text-white"
          >
          {{ $t("cloud_application.data_cloud") }}
          </p>
        </div>
      </div>
      <div class="what-we-provide mt-20">
        <h2 class="text-xl font-semibold text-center">{{ $t("cloud_application.what_we_provide") }}</h2>
        <nuxt-img src="/images/what-we-provide.webp" alt="" />
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
      bgImage: "/images/cloud-application.webp",
    };
  },
};
</script>
