<template>
  <ProfileBrochures />
</template>

<script>
const components = {
  ProfileBrochures: () => import("@/components/insight/profileBrochures.vue"),
};

export default {
  components,
  head() {
    return {
      title: "Profile and Bochures (Next Generation Cirlce)",
    };
  },
};
</script>
