<template>
  <Licenses />
</template>

<script>
const components = {
  Licenses: () => import("@/components/about/licenses.vue"),
};

export default {
  components,
  head() {
    return {
      title: "Licenses (Next Generation Cirlce)",
    };
  },
};
</script>
