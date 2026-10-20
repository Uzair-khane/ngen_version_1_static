<template>
  <div class="">
    <Banner :bgImage="bgImage" :title="$t('digital_marketing.title')" />
    <div
      class="grid px-3 md:px-10 gap-4 lg:gap-20 mt-5 lg:mt-10 lg:grid-cols-5 text-base md:text-lg"
    >
      <div class="col-span-3 flex flex-col justify-center max-w-2/3">
        <p class="font-semibold text-2xl lg:text-3xl">
          {{ $t("digital_marketing.empower_brand.title") }}
        </p>
        <p class="mt-4 md:text-justify">
          {{ $t("digital_marketing.empower_brand.description") }}
        </p>
      </div>
      <div class="col-span-5 lg:col-span-2">
        <img data-aos="fade-up" src="/images/digital-marketing.webp" alt="" />
      </div>
    </div>
    <div
      class="mt-10 px-3 text-base md:text-justify md:text-lg md:px-10 md:mt-16"
    >
      <h1 class="font-semibold text-xl md:text-3xl text-center">
        {{ $t("digital_marketing.digital_marketing_services") }}
      </h1>
      <div class="grid md:grid-cols-2 mt-10 md:gap-x-40 gap-y-6 md:gap-y-14">
        <div data-aos="fade-up">
          <div class="flex flex-col lg:block items-center space-y-3">
            <SEO class="w-10 h-10" />
            <h4 class="font-semibold md:text-xl">
              {{ $t("digital_marketing.search_engine_optimization.title") }}
            </h4>
          </div>
          <p class="text-justify mt-2">
            {{ $t("digital_marketing.search_engine_optimization.description") }}
          </p>
        </div>
        <div data-aos="fade-up">
          <div class="flex flex-col lg:block items-center space-y-3">
            <SocialMediaMarketing class="w-10 h-10" />
            <h4 class="font-semibold md:text-xl">
              {{ $t("digital_marketing.social_media_marketing.title") }}
            </h4>
          </div>
          <p class="text-justify mt-2">
            {{ $t("digital_marketing.social_media_marketing.description") }}
          </p>
        </div>
        <div data-aos="fade-up">
          <div class="flex flex-col lg:block items-center space-y-3">
            <ContentMarketing class="w-10 h-10" />
            <h4 class="font-semibold md:text-xl">
              {{ $t("digital_marketing.content_marketing.title") }}
            </h4>
          </div>
          <p class="text-justify mt-2">
            {{ $t("digital_marketing.content_marketing.description") }}
          </p>
        </div>
        <div data-aos="fade-up">
          <div class="flex flex-col lg:block items-center space-y-3">
            <EmailMarketing class="w-10 h-10" />
            <h4 class="font-semibold md:text-xl">
              {{ $t("digital_marketing.email_marketing.title") }}
            </h4>
          </div>
          <p class="text-justify mt-2">
            {{ $t("digital_marketing.email_marketing.description") }}
          </p>
        </div>
        <div data-aos="fade-up">
          <div class="flex flex-col lg:block items-center space-y-3">
            <Anylitics class="w-10 h-10" />
            <h4 class="font-semibold md:text-xl">
              {{ $t("digital_marketing.analytics_&_reporting.title") }}
            </h4>
          </div>
          <p class="text-justify mt-2">
            {{ $t("digital_marketing.analytics_&_reporting.description") }}
          </p>
        </div>
        <div data-aos="fade-up">
          <div class="flex flex-col lg:block items-center space-y-3">
            <OnlineRepo class="w-10 h-10" />
            <h4 class="font-semibold md:text-xl">
              {{ $t("digital_marketing.online_reputation.title") }}
            </h4>
          </div>
          <p class="text-justify mt-2">
            {{ $t("digital_marketing.online_reputation.description") }}
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
  SEO: () => import("@/components/icons/seo.vue"),
  ContentMarketing: () => import("@/components/icons/content-marketing.vue"),
  EmailMarketing: () => import("@/components/icons/email-marketing.vue"),
  Anylitics: () => import("@/components/icons/anylitics.vue"),
  OnlineRepo: () => import("@/components/icons/online-repo.vue"),
  SocialMediaMarketing: () =>
    import("@/components/icons/social-media-marketing.vue"),
};

export default {
  layout: "services",
  components,
  data() {
    return {
      bgImage: "/images/digital-banner.webp",
    };
  },
};
</script>
