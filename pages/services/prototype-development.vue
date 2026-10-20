<template>
  <div>
    <PrototypeDevelopment />
  </div>
</template>

<script>
const components = {
  PrototypeDevelopment: () =>
    import("@/components/services/prototypeDevelopment.vue"),
};

export default {
  components,
  head() {
    return {
      title: "Prototype Development (Next Generation Cirlce)",
    };
  },
};
</script>
