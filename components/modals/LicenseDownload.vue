<template>
  <div
    class="fixed flex items-center px-2 bg-[rgba(0,0,0,0.5)] inset-0 z-50 w-full"
  >
    <div
      class="relative rounded-lg bg-white mx-auto text-black py-10 md:py-16 px-5 md:px-10 w-[550px] max-w-[600px]"
    >
      <CloseIcon
        @click.native="$emit('toggleLicenseModal')"
        class="w-5 cursor-pointer absolute right-3 top-3"
      />
      <h2 class="font-semibold text-xl md:text-3xl">
        {{ title }}
      </h2>
      <p class="mt-4 text-center">
        {{ $t("licenses.license_download_popup.title") }}
      </p>
      <div class="flex mt-6 w-full">
        <input
          :placeholder="$t('licenses.license_download_popup.email_address')"
          type="text"
          class="py-3 rounded-s-xl w-full focus:border-none focus:outline-none uppercse bg-[#F3F3F3] px-7"
        />
        <button
          class="bg-[#F76033] rounded-e-xl text-sm py-3 px-5 text-white uppercase whitespace-nowrap"
        >
        {{ $t("licenses.license_download_popup.get_license") }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
const components = {
  CloseIcon: () => import("@/components/icons/close.vue"),
};
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  components,
};
</script>
