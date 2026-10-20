<template>
  <TechnologyStack />
</template>

<script>
const components = {
  TechnologyStack: () => import("@/components/expertise/technologyStack"),
};

export default {
  components,
  head() {
    return {
      title: "Technologies (Next Generation Cirlce)",

    }
  }
};
</script>
