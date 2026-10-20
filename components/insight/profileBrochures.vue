<template>
  <div class="">
    <Banner :bgImage="bgImage" :title="$t('profile_brouchers.title')" />
    <div class="px-3 mb-10 text-base md:text-lg md:px-10 mt-6">
      <h2 class="font-semibold text-lg md:text-2xl">
        {{$t("profile_brouchers.global_compliance.title")}}
      </h2>
      <p class="mt-3 text-justify">
        {{$t("profile_brouchers.global_compliance.description")}}
      </p>
      <div class="mt-10">
        <div
          data-aos="fade-up"
          class="flex md:flex-row flex-col items-center py-6 border-b border-slate-300 justify-center md:justify-between gap-4"
        >
          <h2 class="font-semibold text-lg md:text-2xl">
            {{$t("profile_brouchers.next_generation")}}
          </h2>
          <a
            href="/documents/ngen-profile.pdf"
            download
            class="bg-[#F76236] text-white py-2.5 justify-center rounded-md px-8 flex gap-3 items-center"
          >
            <DownloadIcon class="w-6" />
            <span>{{$t("download")}}</span>
          </a>
        </div>
        <div
          data-aos="fade-up"
          class="flex justify-center md:flex-row flex-col items-center md:justify-between gap-4 py-6 border-b border-slate-300"
        >
          <h2 class="font-semibold text-lg md:text-2xl">{{$t("profile_brouchers.newshunt_broucher")}}</h2>
          <button
            class="bg-[#F76236] text-white py-2.5 rounded-md px-8 flex gap-3 items-center"
          >
            <DownloadIcon class="w-6" />
            <span>{{$t("download")}}</span>
          </button>
        </div>
        <div
          data-aos="fade-up"
          class="flex md:flex-row flex-col items-center justify-center md:justify-between gap-4 py-6 border-b border-slate-300"
        >
          <h2 class="font-semibold text-lg md:text-2xl">{{$t("profile_brouchers.nalyst_broucher")}}</h2>
          <button
            class="bg-[#F76236] text-white py-2.5 justify-center rounded-md px-8 flex gap-3 items-center"
          >
            <DownloadIcon class="w-6" />
            <span>{{$t("download")}}</span>
          </button>
        </div>
        <div
          data-aos="fade-up"
          class="flex md:flex-row flex-col items-center justify-center md:justify-between gap-4 py-6 border-b border-slate-300"
        >
          <h2 class="font-semibold text-xl md:text-2xl">{{$t("profile_brouchers.qaaren_broucher")}}</h2>
          <button
            class="bg-[#F76236] text-white py-2.5 justify-center rounded-md px-8 flex gap-3 items-center"
          >
            <DownloadIcon class="w-6" />
            <span>{{$t("download")}}</span>
          </button>
        </div>
      </div>
    </div>

    <Join />
  </div>
</template>
<script>
const components = {
  Join: () => import("@/components/common/Join.vue"),
  Banner: () => import("@/components/common/ServicesBanner.vue"),
  DownloadIcon: () => import("@/components/icons/download.vue"),
};

export default {
  components,
  data() {
    return {
      bgImage: "/images/profile-brochures.webp",
    };
  },
};
</script>
