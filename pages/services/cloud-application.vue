<template>
  <div>
      <CloudApplication />
  </div>
</template>

<script>
const components = {
  CloudApplication: () => import("@/components/services/cloudApplication.vue"),
};

export default {
  components,
  head() {
    return {
      title: "Cloud Applicatoins (Next Generation Cirlce)",
    };
  },
};
</script>
