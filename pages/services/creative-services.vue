<template>
  <div>
      <CreativeServices />
  </div>
</template>

<script>
const components = {
  CreativeServices: () => import("@/components/services/creativeServices.vue"),
};

export default {
  components,
  head() {
    return {
      title: "Creative Services (Next Generation Cirlce)",
  
    };
  },
};
</script>
