<template>
  <div class="">
    <Banner :bgImage="bgImage" :title="$t('our_global_presence.title')" />
    <div class="px-3 md:px-10 mt-6 text-base md:text-lg">
      <h2
        class="font-semibold mb-1 text-center text-xl md:text-2xl text-[#020D3C]"
      >
        {{ $t("our_global_presence.present_countries.title") }}
      </h2>
      <p class="text-justify">
        {{ $t("our_global_presence.present_countries.description") }}
      </p>

      <nuxt-img
        data-aos="fade-up"
        class="mt-4"
        src="/images/global-presence.png"
        alt=""
      />
    </div>
    <div class="px-0 md:px-10">
      <div
        class="mt-10 bg-[#F1F2F3] text-base py-10 px-3 md:px-10 grid-cols-2 grid gap-5 md:gap-10 md:grid-cols-4"
      >
        <div data-aos="fade-up">
          <h2 class="font-semibold">{{ $t("our_global_presence.pakistan.title") }}</h2>

          <p class="">
            {{ $t("our_global_presence.pakistan.address_1") }}
            <br />
            {{ $t("our_global_presence.pakistan.address_2") }} <br />
            {{ $t("our_global_presence.pakistan.contact") }}
          </p>
        </div>
        <div data-aos="fade-up">
          <h2 class="font-semibold">{{ $t("our_global_presence.uae.title") }}</h2>
          <p>
            {{ $t("our_global_presence.uae.address_1") }}
            <br />
            {{ $t("our_global_presence.uae.address_2") }} <br />
            {{ $t("our_global_presence.uae.contact") }}
          </p>
        </div>
        <div data-aos="fade-up">
          <h2 class="font-semibold">{{ $t("our_global_presence.saudi_arabia.title") }}</h2>
          <p>
            {{ $t("our_global_presence.saudi_arabia.address_1") }}
            <br />
            {{ $t("our_global_presence.saudi_arabia.address_2") }} <br />
            {{ $t("our_global_presence.saudi_arabia.contact") }}
          </p>
        </div>
        <div data-aos="fade-up">
          <h2 class="font-semibold">{{ $t("our_global_presence.united_kingdom.title") }}</h2>
          <p>
            {{ $t("our_global_presence.united_kingdom.address_1") }} 
            <br />
            {{ $t("our_global_presence.united_kingdom.address_2") }}
            <br />
            {{ $t("our_global_presence.united_kingdom.contact") }}
          </p>
        </div>
      </div>
    </div>
    <div class="mt-6 bg-[#353D63] text-white">
      <div class="w-full text-center py-16 px-3 md:max-w-[700px] mx-auto">
        <h1 class="font-semibold text-2xl">{{ $t("our_global_presence.global_rollouts.title") }}</h1>
        <p class="mt-3">
          {{ $t("our_global_presence.global_rollouts.description") }}
        </p>
      </div>
    </div>
    <Join />
  </div>
</template>
<script>
const components = {
  Banner: () => import("@/components/common/ServicesBanner.vue"),
  OurMissionIcon: () => import("@/components/icons/our-mission.vue"),
  OurVision: () => import("@/components/icons/our-vision.vue"),
  Join: () => import("@/components/common/Join.vue"),
};

export default {
  layout: "services",
  components,
  data() {
    return {
      bgImage: "/images/cybersecurity.webp",
    };
  },
};
</script>
