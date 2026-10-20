<template>
  <div
    :class="[isMounted ? 'bottom-0' : '-bottom-full']"
    class="fixed w-full bg-white p-4 z-50 md:p-5 duration-500 transition-all shadow-inner"
  >
    <h2 class="font-semibold md:text-xl">{{ $t("cookies.title") }}</h2>
    <div
      class="flex justify-between lg:flex-nowrap flex-wrap items-center mt-2 gap-6 md:gap-10"
    >
      <p class="">
        {{ $t("cookies.description") }}
      </p>
      <div class="flex gap-4 ml-auto md:ml-0">
        <button
          class="md:px-10 px-8 py-2 hidden md:block md:py-3 whitespace-nowrap rounded-md border-slate-700 border-2"
        >
        {{ $t("cookies.customize") }}
        </button>
        <button
          @click="acceptCookies"
          class="md:px-10 px-8 py-2 md:py-3 border-slate-700 whitespace-nowrap rounded-md border-2"
        >
        {{ $t("cookies.reject") }}
        </button>
        <button
          @click="acceptCookies"
          class="px-8 py-2 md:px-10 md:py-3 bg-[#F76236] whitespace-nowrap text-white rounded-md"
        >
        {{ $t("cookies.accept") }}
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isMounted: false,
    };
  },
  mounted() {
    this.isMounted = true;
  },
  methods: {
    acceptCookies() {
      this.$cookies.set("isAcceptCookie", true);
      this.$emit("allowCookie");
    },
  },
};
</script>
