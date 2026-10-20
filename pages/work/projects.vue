<template>
  <Projects />
</template>

<script>
const components = {
  Projects: () => import("@/components/work/projects.vue"),
};

export default {
  components,
  head() {
    return {
      title: "Projects (Next Generation Cirlce)",
    }
  }
};
</script>
