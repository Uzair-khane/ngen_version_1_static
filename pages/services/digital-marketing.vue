<template>
  <div>
      <DigitalMarketing />
  </div>
</template>

<script>
const components = {
  DigitalMarketing: () => import("@/components/services/digitalMarketing.vue"),
};

export default {
  components,
  head() {
    return {
      title: "Digital Marketing (Next Generation Cirlce)",
    };
  },
};
</script>
