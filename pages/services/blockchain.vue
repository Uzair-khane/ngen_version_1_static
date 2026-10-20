<template>
  <div>
      <Blockchain />
  </div>
</template>

<script>
const components = {
  Blockchain: () => import("@/components/services/blockchain.vue"),
};

export default {
  components,
  head() {
    return {
      title: "Blockchain (Next Generation Cirlce)",
    };
  },
};
</script>
