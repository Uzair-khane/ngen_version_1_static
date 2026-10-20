<template>
  <WebDevelopment />
</template>

<script>
const components = {
  WebDevelopment: () => import("@/components/services/web.vue"),
};

export default {
  components,
  head() {
    return {
      title: "Web Development (Next Generation Cirlce)",
    };
  },
};
</script>
