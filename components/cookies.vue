<template>
  <div class="">
    <Banner :bgImage="bgImage" title="cookies" />
    <div class="px-3 mb-10 text-base md:text-lg md:px-10 mt-6">
      <img src="/images/cookies.png" alt="" />
    </div>

    <Join />
  </div>
</template>
<script>
const components = {
  Technologies: () => import("@/components/technologies/animation.vue"),
  Join: () => import("@/components/common/Join.vue"),
  Banner: () => import("@/components/common/ServicesBanner.vue"),
};

export default {
  layout: "services",
  components,
  data() {
    return {
      bgImage: "/images/cookies-banner.png",
    };
  },
};
</script>
