<template>
  <div class="">
    <Banner :bgImage="bgImage" :title="$t('website_design.title')" />
    <div class="px-3 text-justify text-base md:text-lg mb-10 md:px-10 mt-6">
      <h3 class="text-3xl mb-3 font-semibold">
        {{ $t("website_design.stay_ahad.title") }}
      </h3>
      <p>
        {{ $t("website_design.stay_ahad.description_1") }}
      </p>
      <br class="mt-5">
        <p>{{ $t("website_design.stay_ahad.description_2") }} </br>  {{ $t("website_design.stay_ahad.description_3") }}
      </p>
      <div class="flex justify-between gap-4  flex-wrap items-center">
        <ul
         :class="[$i18n.locale === 'en' ? 'ml-6' : 'mr-6']"
          class="mt-4 list-disc marker:text-3xl marker:text-orange-700 list-outside"
        >
          <li data-aos="fade-up">{{ $t("website_design.stay_ahad.li_1") }}</li>
          <li data-aos="fade-up">{{ $t("website_design.stay_ahad.li_2") }}</li>
          <li data-aos="fade-up">{{ $t("website_design.stay_ahad.li_3") }}</li>
          <li data-aos="fade-up">{{ $t("website_design.stay_ahad.li_4") }}</li>
          <li data-aos="fade-up">{{ $t("website_design.stay_ahad.li_5") }}</li>
          <li data-aos="fade-up">{{ $t("website_design.stay_ahad.li_6") }}</li>
          <li data-aos="fade-up">{{ $t("website_design.stay_ahad.li_7") }}</li>
          <li data-aos="fade-up">{{ $t("website_design.stay_ahad.li_8") }}</li>
          <li data-aos="fade-up">{{ $t("website_design.stay_ahad.li_9") }}</li>
        </ul>
        <!-- <div class="md:w-1/3 hidden md:block">
          <img class="max-h-80 w-full" src="/images/web-dev.png" alt="" />
        </div> -->
      </div>
    </div>
    <Technologies class="px-3 md:px-10" :web="true" />
    <div class="show-casing px-3 md:px-10 mt-10">
      <h1 class="text-xl md:text-2xl font-semibold">
        {{ $t("website_design.showcasing.title") }} <br /> {{ $t("website_design.showcasing.websites_crafted.title") }}
      </h1>
      <p class="mt-3 text-lg md:text-xl">
        {{ $t("website_design.showcasing.websites_crafted.description") }} 
      </p>

      <swiper class="mt-6 px-5">
        <swiper-slide>
          <nuxt-img
            data-aos="fade-bottom"
            src="/images/web-projects.webp"
            class="mt-4 w-full"
            alt=""
          />
        </swiper-slide>

        <button slot="button-prev" class="swiper-button-prev"></button>
        <button slot="button-next" class="swiper-button-next"></button>
      </swiper>
    </div>
    <Join />
  </div>
</template>
<script>
const components = {
  Banner: () => import("@/components/common/ServicesBanner.vue"),
  Technologies: () => import("@/components/common/Technologies.vue"),
  Join: () => import("@/components/common/Join.vue"),
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
