<template>
  <div>
      <BussinessAnalysis />
  </div>
</template>

<script>
const components = {
  BussinessAnalysis: () =>
    import("@/components/services/bussinessAnalysis.vue"),
};

export default {
  components,
  head() {
    return {
      title: "Bussiness Analysis (Next Generation Cirlce)",
    };
  },
};
</script>
