<template>
  <div class="">
    <Banner :bgImage="bgImage" :title="$t('resources_outsourcing.title')" />
    <div class="grid px-3 md:px-10 gap-4 md:gap-20 mt-5 md:mt-10 md:grid-cols-5 text-base md:text-lg">
      <div class="col-span-3 flex flex-col justify-center max-w-2/3">
        <p class="font-semibold text-2xl md:text-3xl">
          {{ $t("resources_outsourcing.momentum_achieve.title") }}
        </p>
        <p class="mt-4 md:text-justify">
          {{ $t("resources_outsourcing.momentum_achieve.description") }}
        </p>
      </div>
      <div class="col-span-5 md:col-span-2">
        <img data-aos="fade-up" src="/images/resource-outsourcing.webp" alt="" />
      </div>
    </div>
    <div class="mt-10 px-3 text-base md:text-lg md:px-10 md:mt-16">
      <h1 class="font-semibold text-xl md:text-3xl text-center">
        {{ $t("resources_outsourcing.comprehensive_resource.title") }}
      </h1>
      <p class="mt-4">
        {{ $t("resources_outsourcing.comprehensive_resource.description") }}
      </p>
      <div class="space-y-4 md:space-y-7 mt-6">
        <div data-aos="fade-up">
          <h3 class="font-semibold text-xl">{{ $t("resources_outsourcing.web_technologies.title") }}</h3>
          <p>
            {{ $t("resources_outsourcing.web_technologies.description") }}
          </p>
        </div>
        <div data-aos="fade-up">
          <h3 class="font-semibold text-xl">{{ $t("resources_outsourcing.mobile_technologies.title") }}</h3>
          <p>
            {{ $t("resources_outsourcing.mobile_technologies.description") }}
          </p>
        </div>
        <div data-aos="fade-up">
          <h3 class="font-semibold text-xl">{{ $t("resources_outsourcing.desktop_technologies.title") }}</h3>
          <p>
            {{ $t("resources_outsourcing.desktop_technologies.description") }}
          </p>
        </div>
        <div data-aos="fade-up">
          <h3 class="font-semibold text-xl">{{ $t("resources_outsourcing.databases.title") }}</h3>
          <p>
            {{ $t("resources_outsourcing.databases.description") }}
          </p>
        </div>
        <div data-aos="fade-up">
          <h3 class="font-semibold text-xl">{{ $t("resources_outsourcing.cloud_deployment.title") }}</h3>
          <p>
            {{ $t("resources_outsourcing.cloud_deployment.description") }}
          </p>
        </div>
        <div data-aos="fade-up">
          <h3 class="font-semibold text-xl">{{ $t("resources_outsourcing.frontend_designing.title") }}</h3>
          <p>
            {{ $t("resources_outsourcing.frontend_designing.description") }}
          </p>
        </div>
        <div data-aos="fade-up">
          <h3 class="font-semibold text-xl">{{ $t("resources_outsourcing.ui_ux.title") }}</h3>
          <p>
            {{ $t("resources_outsourcing.ui_ux.description") }}
          </p>
        </div>
        <div data-aos="fade-up">
          <h3 class="font-semibold text-xl">{{ $t("resources_outsourcing.project_management.title") }}</h3>
          <p>
            {{ $t("resources_outsourcing.project_management.description") }}
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
      bgImage: "/images/resource-banner.webp",
    };
  },
};
</script>
