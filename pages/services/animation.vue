<template>
  <Animation />
</template>

<script>
const components = {
  Animation: () => import("@/components/services/animation.vue"),
};

export default {
  components,
  head() {
    return {
      title: "Animation (Next Generation Cirlce)",
    
    };
  },
};
</script>
