<template>
  <Careers />
</template>

<script>
const components = {
  Careers: () => import("@/components/about/careers"),
  InnovativeIcon: () => import("@/components/icons/profile.vue"),
};

export default {
  components,
  head() {
    return {
      title: "Careers (Next Generation Cirlce)",
    }
  }
};
</script>