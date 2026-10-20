<template>
  <div>
      <DigitalConsultant />
  </div>
</template>

<script>
const components = {
  DigitalConsultant: () =>
    import("@/components/services/digitalConsultant.vue"),
};

export default {
  components,
  head() {
    return {
      title: "Digital Consultant (Next Generation Cirlce)",
    };
  },
};
</script>
