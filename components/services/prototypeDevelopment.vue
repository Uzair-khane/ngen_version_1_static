<template>
  <div class="">
    <Banner :bgImage="bgImage" :title="$t('prototype_development.title')" />
    <div
      class="grid px-3 gap-5 md:gap-20 lg:grid-cols-2 md:px-10 mt-6 text-base md:text-lg"
    >
      <div class="flex flex-col justify-center">
        <p class="font-semibold text-2xl">
          {{ $t("prototype_development.translate_imagination.title") }}
        </p>
        <p class="mt-4 md:text-justify text-lg">
          {{ $t("prototype_development.translate_imagination.description") }}
        </p>
      </div>
      <div>
        <img
          data-aos="fade-up"
          class="max-h-[350px] w-full"
          src="/images/prototype.png"
          alt=""
        />
      </div>
    </div>
    <div class="mt-6 md:mt-14 px-3 md:px-10">
      <h2 class="font-semibold text-2xl mb-6 text-center">
        {{ $t("prototype_development.digital_solutions") }}
      </h2>
      <img data-aos="fade-up" src="/images/digital-solution-1.WEBP" alt="" class="h-[550px] w-full" />

      <div class="mt-4">
        <h2 class="font-semibold text-xl"> {{ $t("prototype_development.web_app_development.title") }}</h2>
        <p class="md:text-lg">
          {{ $t("prototype_development.web_app_development.description") }}
        </p>
      </div>
      <div class="mt-10">
        <img data-aos="fade-up" src="/images/mobile-solution.png" alt="" />
      </div>
      <div class="mt-6">
        <h2 class="font-semibold text-xl">{{ $t("prototype_development.mobile_app_development.title") }}</h2>
        <p class="md:text-lg">
          {{ $t("prototype_development.mobile_app_development.description") }}
        </p>
      </div>
      <div class="mt-10 md:mt-20">
        <h2 class="font-semibold text-xl mt-3 text-center">
          {{ $t("prototype_development.additional_services.title") }}
        </h2>
        <p class="md:text-lg">
          {{ $t("prototype_development.additional_services.description") }}
        </p>
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
      bgImage: "/images/webDev.png",
    };
  },
};
</script>
