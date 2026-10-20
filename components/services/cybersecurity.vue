<template>
  <div class="">
    <Banner :bgImage="bgImage" :title="$t('cyber_security.title')" />
    <div class="px-3 md:px-12 mt-4 text-base md:text-lg">
      <p class="font-semibold text-3xl">
        {{ $t("cyber_security.blockchain_innovation.title") }}
      </p>
      <p class="mt-3 md:text-justify">
        {{ $t("cyber_security.blockchain_innovation.description_1") }}
      </p>
      <p class="mt-4 md:text-justify">
        {{ $t("cyber_security.blockchain_innovation.description_2") }}
      </p>
    </div>

    <div class="bg-[#F5F6F6] py-10 mt-10">
      <h2
        class="text-2xl text-[#003654] font-semibold border-b border-slate-300 pb-4 text-center"
      >
        {{ $t("cyber_security.data_security.title") }}
      </h2>
      <div class="px-3 mt-8 lg:px-16 gap-14 grid grid-cols-1 lg:grid-cols-2">
        <div>
          <ul
            class="list-decimal px-7 lg:px-0 flex flex-col justify-center text-[#003654] space-y-4 md:text-lg"
          >
            <li data-aos="fade-up">
              {{ $t("cyber_security.data_security.li_1") }}
            </li>
            <li data-aos="fade-up">
              {{ $t("cyber_security.data_security.li_2") }}
            </li>
            <li data-aos="fade-up">
              {{ $t("cyber_security.data_security.li_3") }}
            </li>
            <li data-aos="fade-up">
              {{ $t("cyber_security.data_security.li_4") }}
            </li>
            <li data-aos="fade-up">
              {{ $t("cyber_security.data_security.li_5") }}
            </li>
            <li data-aos="fade-up">
              {{ $t("cyber_security.data_security.li_6") }}
            </li>
            <li data-aos="fade-up">
              {{ $t("cyber_security.data_security.li_7") }}
            </li>
            <li data-aos="fade-up">
              {{ $t("cyber_security.data_security.li_8") }}
            </li>
            <li data-aos="fade-up">
              {{ $t("cyber_security.data_security.li_9") }}
            </li>
            <li data-aos="fade-up">
              {{ $t("cyber_security.data_security.li_10") }}
            </li>
          </ul>
        </div>
        <div>
          <img class="max-h-92 w-full" src="/images/cyber.png" alt="" />
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
      bgImage: "/images/cybersecurity.webp",
    };
  },
};
</script>
