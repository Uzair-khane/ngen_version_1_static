<template>
  <ClientOnly>
    <Products />
  </ClientOnly>
</template>

<script>
const components = {
  Products: () => import("@/components/work/products"),
};

export default {
  components,
  head() {
    return {
      title: "Products (Next Generation Cirlce)",

    };
  },
};
</script>
