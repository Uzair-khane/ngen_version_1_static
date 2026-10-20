<template>
  <div>
    <Header :contact="true" />
    <nuxt />
    <LazyFooter />
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
};
</script>
