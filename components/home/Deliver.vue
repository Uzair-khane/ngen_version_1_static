<template>
  <section
    class="deliver px-3 md:px-12 py-10 lg:py-5 h-auto lg:h-screen w-full"
  >
    <div class="flex justify-between gap-6 flex-wrap items-center w-full">
      <div
        class="flex text-gray-400 pb-1 border-b items-center gap-2"
        :class="[lang === 'en' ? 'pr-10' : 'pl-10']"
        data-aos="fade-up"
        data-aos-duration="300"
      >
        <Location />
        <h1>{{ $t("home.location.pakistan") }}</h1>
      </div>

      <div
        :class="[lang === 'en' ? 'pr-10' : 'pl-10']"
        class="flex text-gray-400 pb-1 border-b items-center gap-2"
        data-aos="fade-bottom"
        data-aos-duration="300"
      >
        <Location />
        <h1 class="text-gray-400">{{ $t("home.location.saudi_arabia") }}</h1>
      </div>
      <div
        class="flex text-gray-400 pb-1 border-b items-center gap-2"
        data-aos="fade-up"
        :class="[lang === 'en' ? 'pr-10' : 'pl-10']"
        data-aos-duration="300"
      >
        <Location />
        <h1>{{ $t("home.location.uae") }}</h1>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="300"
        class="flex text-gray-400 pb-1 border-b items-center gap-2"
        :class="[lang === 'en' ? 'pr-10' : 'pl-10']"
      >
        <Location />

        <h1>{{ $t("home.location.uk") }}</h1>
      </div>
    </div>
    <div class="text-white mt-10">
      <h1>{{ $t("home.location.our_features") }}</h1>
      <div
        :data-aos="lang === 'en' ? 'fade-right' : 'fade-up'"
        data-aos-duration="500"
        class="md:w-3/4"
      >
        <h2 class="mt-2 text-3xl md:text-5xl">
          {{ $t("home.location.devlivering") }}
        </h2>
        <p class="mt-2 md:text-4xl !leading-snug">
          {{ $t("home.location.from_uk") }}
        </p>
        <p class="md:mt-4 mt-2 italic">
          {{ $t("home.location.from_peshawar") }}
        </p>
        <!-- <div class="flex mt-7 gap-1 items-center">
          <span class="uppercase">Read more</span>
          <arrowLeft class="w-4" />
        </div> -->
      </div>
    </div>
  </section>
</template>

<style scoped>
.deliver {
  background-image: url("/images/deliver.png");
  background-position: center;
  background-size: cover;
}
</style>

<script>
const components = {
  Location: () => import("@/components/icons/Location.vue"),
  arrowLeft: () => import("@/components/icons/arrow-left.vue"),
};
export default {
  components,
  computed: {
    lang() {
      return this.$i18n.locale;
    },
  },
};
</script>
