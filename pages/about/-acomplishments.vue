<template>
    <Accomplishments />
</template>

<script>
const components = {
    Accomplishments: () => import("@/components/about/accomplishments"),
};

export default {
    components,
    head() {
      return {
        title: "Acomplishments (Next Generation Cirlce)",
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          {
            hid: 'description',
            name: 'description',
            content: 'My custom description'
          }
        ]
      }
    }
};
</script>