<template>
  <WhoWeAre />
</template>

<script>
const components = {
  WhoWeAre: () => import("@/components/about/WhoWeAre"),
};

export default {
  components,
  head() {
    return {
      title: "Who Are We (Next Generation Cirlce)",
    }
  }
};
</script>
