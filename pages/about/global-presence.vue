<template>
    <GlobalPresence />
</template>

<script>
const components = {
    GlobalPresence: () => import("@/components/about/global-presence"),
};

export default {
    components,
    head() {
      return {
        title: "Global Presence (Next Generation Cirlce)",
      }
    }
};
</script>