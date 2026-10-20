<template>
  <div
    class="grid py-3 md:py-10 border-b gap-12 grid-cols-3 lg:grid-cols-7 items-center mt-5"
  >
    <div class="col-span-3 mt-4 lg:mt-0 lg:col-span-1">
      <h2 class="font-bold text-center text-2xl lg:text-lg lg:text-left">
        {{ $t("technology_stack.infrastructure") }}
      </h2>
    </div>
    <div data-aos="fade-up" class="text-center">
      <Aws class="w-14 mx-auto h-14" />
      <p class="font-semibold mt-1">Aws</p>
    </div>
    <div data-aos="fade-up" class="text-center">
      <Gcp class="w-14 mx-auto h-14" />
      <p class="font-semibold mt-1">Gcp</p>
    </div>
    <div data-aos="fade-up" class="text-center">
      <Azure class="w-14 mx-auto h-14" />
      <p class="font-semibold mt-1">Azure</p>
    </div>
    <div data-aos="fade-up" class="text-center">
      <Kubernetes class="w-14 mx-auto h-14" />
      <p class="font-semibold mt-1">Kubernetes</p>
    </div>
    <div data-aos="fade-up" class="text-center">
      <Docker class="w-14 mx-auto h-14" />
      <p class="font-semibold mt-1">Docker</p>
    </div>
    <div data-aos="fade-up" class="text-center">
      <Nginx class="w-14 mx-auto h-14" />
      <p class="font-semibold mt-1">Nginx</p>
    </div>
  </div>
</template>

<script>
const components = {
  Redis: () => import("@/components/logos/redis.vue"),
  ElasticSearch: () => import("@/components/logos/elasticSearch.vue"),
  GraphQl: () => import("@/components/logos/graphql.vue"),
  Aws: () => import("@/components/logos/aws.vue"),
  Gcp: () => import("@/components/logos/gcp.vue"),
  Azure: () => import("@/components/logos/azure.vue"),
  Kubernetes: () => import("@/components/logos/kubernetes.vue"),
  Docker: () => import("@/components/logos/docker.vue"),
  Nginx: () => import("@/components/logos/nginx.vue"),
  Java: () => import("@/components/logos/java.vue"),
};
export default {
  components,
};
</script>
