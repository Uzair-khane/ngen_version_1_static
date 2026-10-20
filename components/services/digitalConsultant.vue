<template>
  <div class="">
    <Banner :bgImage="bgImage" :title="$t('digital_consultancy.title')" />
    <div
      class="grid px-3 text-base md:text-lg md:px-10 place-items-center gap-4 md:gap-8 mt-10 grid-cols-1 lg:grid-cols-5"
    >
      <div class="text-justify col-span-3">
        <p class="font-semibold text-3xl">
          {{ $t("digital_consultancy.digital_transformation.title") }}
        </p>
        <p class="mt-4">
          {{ $t("digital_consultancy.digital_transformation.description_1") }}
        </p>
        <p class="mt-4">
          {{ $t("digital_consultancy.digital_transformation.description_2") }}
        </p>
        <p class="mt-4">
          {{ $t("digital_consultancy.digital_transformation.description_3") }}
        </p>
      </div>
      <div
        class="col-span-2"
        :class="[$i18n.locale === 'en' ? 'lg:ml-auto' : 'lg:mr-auto']"
      >
        <nuxt-img
          class="max-h-[380px] w-full"
          src="/images/digital-consultant.png"
          alt=""
        />
      </div>
    </div>
    <div class="mt-10 text-justify text-base md:text-lg md:mt-16 px-3 md:px-10">
      <p class="font-semibold text-3xl">
        {{ $t("digital_consultancy.esg_environmental.title") }}
      </p>
      <p class="mt-5">
        {{ $t("digital_consultancy.esg_environmental.description_1") }}
      </p>
      <p class="mt-5">
        {{ $t("digital_consultancy.esg_environmental.description_2") }}
      </p>
      <nuxt-img
        class="mt-10 w-full h-80 shadow-2xl md:h-[500px] object-fit"
        src="images/digital/digital.webp"
        alt=""
      />
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
