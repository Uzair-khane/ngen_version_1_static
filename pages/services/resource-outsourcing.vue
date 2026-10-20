<template>
  <div>
      <ResourceOutsourcing />
  </div>
</template>

<script>
const components = {
  ResourceOutsourcing: () =>
    import("@/components/services/resourceOutsourcing.vue"),
};

export default {
  components,
  head() {
    return {
      title: "Resource Outsourcing (Next Generation Cirlce)",
    };
  },
};
</script>
