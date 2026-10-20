<template>
  <div class="">
    <Banner :bgImage="bgImage" :title="$t('mobile_app.title')" />
    <div class="px-3 mb-10 text-base md:text-lg md:px-10 mt-6">
      <h3 class="text-xl md:text-3xl mb-3 font-semibold">
        {{ $t("mobile_app.stay_ahad.title") }}
      </h3>
      <p>
        {{ $t("mobile_app.stay_ahad.description_1") }}
      </p>
      <p class="mt-5">
        {{ $t("mobile_app.stay_ahad.description_2") }} <br />
        {{ $t("mobile_app.stay_ahad.description_3") }}
      </p>
      <div class="flex justify-between mt-4 flex-wrap">
        <ul
          :class="[$i18n.locale === 'en' ? 'ml-6' : 'mr-6']"
          class="mt-4 list-disc marker:text-3xl marker:text-orange-700 list-outside"
        >
          <li data-aos="fade-up">{{ $t("mobile_app.stay_ahad.li_1") }}</li>
          <li data-aos="fade-up">{{ $t("mobile_app.stay_ahad.li_2") }}</li>
          <li data-aos="fade-up">{{ $t("mobile_app.stay_ahad.li_3") }}</li>
          <li data-aos="fade-up">{{ $t("mobile_app.stay_ahad.li_4") }}</li>
          <li data-aos="fade-up">{{ $t("mobile_app.stay_ahad.li_5") }}</li>
          <li data-aos="fade-up">{{ $t("mobile_app.stay_ahad.li_6") }}</li>
          <li data-aos="fade-up">{{ $t("mobile_app.stay_ahad.li_7") }}</li>
          <li data-aos="fade-up">{{ $t("mobile_app.stay_ahad.li_8") }}</li>
          <li data-aos="fade-up">{{ $t("mobile_app.stay_ahad.li_9") }}</li>
          <li data-aos="fade-up">{{ $t("mobile_app.stay_ahad.li_10") }}</li>
        </ul>
        <!-- <div class="md:w-1/3 hidden md:block">
          <img
            class="w-full h-96"
            src="/images/mobile-applications-dev.webp"
            alt=""
          />
        </div> -->
      </div>
    </div>
    <Technologies class="px-3 md:px-10" :mobile="true" />
    <div class="show-casing px-3 md:px-10 text-justify mt-10">
      <h1 class="text-xl md:text-2xl font-semibold">
        {{ $t("mobile_app.showcasing.title") }} <br />
        {{ $t("mobile_app.showcasing.mobile_crafted.title") }}
      </h1>
      <p class="mt-3 text-base md:text-xl">
        {{ $t("mobile_app.showcasing.mobile_crafted.description") }}
      </p

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
      bgImage: "/images/mobile.webp",
    };
  },
};
</script>
