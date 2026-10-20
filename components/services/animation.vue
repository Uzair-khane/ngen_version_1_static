<template>
  <div class="">
    <Banner :bgImage="bgImage" :title="$t('animation.title')" />
    <div class="px-3 mb-10 text-base md:text-lg md:px-10 mt-6">
      <h3 class="text-xl md:text-3xl mb-4 font-semibold">
        {{ $t("animation.transforming_vision.title") }}
      </h3>
      <p class="md:text-justify">
        {{ $t("animation.transforming_vision.description_1") }}
      </p>
      <p class="mt-5">
        {{ $t("animation.transforming_vision.description_2") }}
      </p>
    </div>
    <Technologies class="px-3 md:px-10" :animation="true" />
    <div
      class="grid px-3 text-base md:text-lg md:px-10 mt-10 grid-cols-1 gap-4 lg:grid-cols-5"
    >
      <div class="col-span-3 flex flex-col justify-center">
        <p class="font-semibold text-3xl">
          {{ $t("animation.evisually_content.title") }}
        </p>
        <p class="mt-4 md:text-justify">
          {{ $t("animation.evisually_content.description_1") }}
        </p>
        <p class="mt-4 md:text-justify">
          {{ $t("animation.evisually_content.description_2") }}
        </p>
      </div>
      <div
        :class="[$i18n.locale === 'en' ? 'lg:ml-auto' : 'lg:mr-auto']"
        class="col-span-2"
      >
        <nuxt-img
          class="max-h-[380px]"
          src="/images/animation-test.png"
          alt=""
        />
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
      bgImage: "/images/animation.webp",
    };
  },
};
</script>
