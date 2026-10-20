<template>
  <div>
    <MobileAppsDev />
  </div>
</template>

<script>
const components = {
  MobileAppsDev: () => import("@/components/services/mobile.vue"),
};

export default {
  components,
  head() {
    return {
      title: "Mobile Applications (Next Generation Cirlce)",

    };
  },
};
</script>
