<template>
  <div>
    <Header :isScroll="isScroll" :services="true" />
    <nuxt />
    <LazyFooter />
    <cookiesPopup @allowCookie="allowCookie" v-if="!isCookie" />
  </div>
</template>

<script>
export default {
  head() {
    return {
      htmlAttrs: {
        dir: this.$i18n.locale === "ar" ? "rtl" : "ltr",
        lang: this.$i18n.locale,
      },
    };
  },
  data() {
    return {
      isScroll: false,
      isCookie: false,
    };
  },
  created() {
    this.checkCookie();
  },
  methods: {
    allowCookie() {
      this.isCookie = true;
    },
    checkCookie() {
      const cookies = this.$cookies.get("isAcceptCookie");
      if (cookies) {
        this.isCookie = true;
      } else {
        this.isCookie = false;
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        this.isScroll = true;
      } else {
        this.isScroll = false;
      }
    });
  },
};
</script>
