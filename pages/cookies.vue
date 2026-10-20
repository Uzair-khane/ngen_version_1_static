<template>
  <Cookies />
</template>

<script>
const components = {
  Cookies: () => import("@/components/cookies.vue"),
};

export default {
  components,
  head() {
    return {
      title: "Cookies (Next Generation Cirlce)",
   
    };
  },
};
</script>
