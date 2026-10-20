<template>
  <div>
      <Cybersecurity />
  </div>
</template>

<script>
const components = {
  Cybersecurity: () => import("@/components/services/cybersecurity.vue"),
};

export default {
  components,
  head() {
    return {
      title: "CyberSecurity (Next Generation Cirlce)",
    };
  },
};
</script>
