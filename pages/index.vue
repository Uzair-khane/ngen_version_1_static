<template>
  <div>
    <TopBanner />
    <Services />
    <Deliver />
    <Performance />
    <Technologies class="px-3 md:px-12" :showAll="true" />
    <Enterprises />
    <Clients />
    <Join />
  </div>
</template>

<script>
const components = {
  Technologies: () => import("@/components/common/Technologies.vue"),
  Join: () => import("@/components/common/Join.vue"),
  Clients: () => import("@/components/home/Clients.vue"),
  Enterprises: () => import("@/components/home/Enterprises.vue"),
  TopBanner: () => import("@/components/home/TopBanner.vue"),
  Performance: () => import("@/components/home/Performance.vue"),
  Services: () => import("@/components/home/Services.vue"),
  Deliver: () => import("@/components/home/Deliver.vue"),
};
export default {
  layout: "home",
  components,
};
</script>

<style></style>
