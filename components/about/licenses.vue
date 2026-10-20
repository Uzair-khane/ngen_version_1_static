<template>
  <div class="">
    <Banner :bgImage="bgImage" :title="$t('licenses.title')" />
    <div class="px-3 mb-10 text-base md:text-lg md:px-10 mt-6">
      <h2 class="font-semibold text-xl md:text-2xl">
        {{ $t("licenses.company_licenses.title") }}
      </h2>
      <p class="mt-3">
        {{ $t("licenses.company_licenses.description") }}
      </p>
      <LicenseDownload
        @toggleLicenseModal="toggleLicenseModal"
        :title="title"
        v-if="showLicense"
      />

      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-8 md:gap-14"
      >
        <div v-for="licence in licenses" :key="licence.id">
          <div class="h-92 relative">
            <img class="h-full" :src="licence.image" :alt="licence.title" />
            <button
              @click="toggleLicenseModal(licence.title)"
              class="bg-[#F76236] left-1/2 -translate-x-1/2 text-white py-3 justify-center rounded-xl w-2/3 flex gap-3 items-center absolute -bottom-5"
            >
              <DownloadIcon class="w-6" />
              <span>{{ $t("download") }}</span>
            </button>
          </div>
          <h2 class="font-semibold mt-8 text-center text-lg md:text-xl">
            {{ licence.title }}
          </h2>
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
  LicenseDownload: () => import("@/components/modals/LicenseDownload.vue"),
};

export default {
  layout: "services",
  components,
  data() {
    return {
      bgImage: "/images/licence-banner.webp",
      showLicense: false,
      title: "",
      licenses: [
        {
          id: 1,
          image: "/images/licenses/license-1.png",
          title: "Next Generation Circle Pakistan",
        },
        {
          id: 2,
          image: "/images/licenses/license-2.png",
          title: "Next Generation Circle Dubai",
        },
        {
          id: 3,
          image: "/images/licenses/license-3.png",
          title: "Tax Registration Certificate",
        },
        {
          id: 4,
          image: "/images/licenses/license-4.png",
          title: "PESB Pakistan",
        },
      ],
    };
  },
  methods: {
    toggleLicenseModal(title) {
      this.showLicense = !this.showLicense;
      this.title = title;
    },
  },
};
</script>
