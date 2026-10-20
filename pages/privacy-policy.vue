<template>
  <PrivacyPolicy />
</template>

<script>
const components = {
  PrivacyPolicy: () => import("@/components/PrivacyPolicy.vue"),
};

export default {
  components,
  head() {
    return {
      title: "Privacy policy (Next Generation Cirlce)",
    };
  },
};
</script>
