<template>
  <div class="relative mt-16">
    <div
      v-if="technologStack"
      :class="[
        $i18n.locale == 'en' ? 'left-0 pl-3 md:pl-10' : 'right-0 pr-3 md:pr-10',
      ]"
      class="technolog-stack gap-4 items-center absolute -top-5 md:-top-8 bg-[#F76236] flex py-2 w-full md:w-2/3"
    >
      <span>
        <WebTechnologyIcon class="w-6 h-6 md:w-10 md:h-10" />
      </span>
      <h2 class="text-white font-semibold text-base md:text-2xl">
        {{ $t("technology_stack.tech_stack_web") }}
      </h2>
    </div>
    <div
      class="grid py-3 lg:py-10 border-b gap-12 grid-cols-3 lg:grid-cols-7 items-center"
    >
      <div class="col-span-3 lg:col-span-1">
        <h2 class="font-bold text-center lg:text-left text-2xl lg:text-lg">
          {{ $t("technology_stack.front_end") }}
        </h2>
      </div>
      <div data-aos="fade-up" data-aos-duration="200" class="text-center">
        <Vue class="w-14 mx-auto h-14" />
        <p class="font-semibold mt-1">Vue</p>
      </div>
      <div data-aos="fade-up" data-aos-duration="200" class="text-center">
        <AngularLogo class="w-14 mx-auto h-14" />
        <p class="font-semibold mt-1">Angular</p>
      </div>
      <div data-aos="fade-up" data-aos-duration="700" class="text-center">
        <React class="w-14 mx-auto h-14" />
        <p class="font-semibold mt-1">React</p>
      </div>
      <div class="text-center" data-aos="fade-up" data-aos-duration="600">
        <Html class="w-14 mx-auto h-14" />
        <p class="font-semibold mt-1">Html</p>
      </div>
      <div class="text-center" data-aos="fade-up" data-aos-duration="1000">
        <Css class="w-14 mx-auto h-14" />
        <p class="font-semibold mt-1">Css</p>
      </div>
      <div class="text-center" data-aos="fade-up" data-aos-duration="1100">
        <Boostrap class="w-14 mx-auto h-14" />
        <p class="font-semibold mt-1">Boostrap</p>
      </div>
    </div>
    <div
      class="grid py-3 lg:py-10 border-b gap-12 grid-cols-3 lg:grid-cols-7 items-center mt-5"
    >
      <div class="col-span-3 mt-4 lg:mt-0 lg:col-span-1">
        <h2 class="font-bold text-2xl lg:text-lg text-center lg:text-left">
          {{ $t("technology_stack.back_end") }}
        </h2>
      </div>
      <div data-aos="fade-up" class="text-center">
        <Node class="w-14 mx-auto h-14" />
        <p class="font-semibold mt-1">Node</p>
      </div>
      <div data-aos="fade-up" class="text-center">
        <Aspnet class="w-14 mx-auto h-14" />
        <p class="font-semibold mt-1">Asp.Net</p>
      </div>
      <div data-aos="fade-up" class="text-center">
        <Django class="w-14 mx-auto h-14" />
        <p class="font-semibold mt-1">Django</p>
      </div>
      <div data-aos="fade-up" class="text-center">
        <PhpLaravel class="w-14 mx-auto h-14" />
        <p class="font-semibold mt-1">Php Laravel</p>
      </div>
      <div data-aos="fade-up" class="text-center">
        <Go class="w-14 mx-auto h-14" />
        <p class="font-semibold mt-1">Golang</p>
      </div>

      <div data-aos="fade-up" class="text-center">
        <JavaSpring class="w-14 mx-auto h-14" />
        <p class="font-semibold mt-1">Java Spring</p>
      </div>
    </div>
    <div
      class="grid py-3 md:py-10 border-b gap-12 grid-cols-3 lg:grid-cols-7 items-center mt-5"
    >
      <div class="col-span-3 mt-4 lg:mt-0 lg:col-span-1">
        <h2 class="font-bold text-center text-2xl lg:text-lg lg:text-left">
          {{ $t("technology_stack.database") }}
        </h2>
      </div>
      <div data-aos="fade-up" class="text-center">
        <MongoDb class="w-14 mx-auto h-14" />
        <p class="font-semibold mt-1">MongoDB</p>
      </div>
      <div data-aos="fade-up" class="text-center">
        <Mysql class="w-14 mx-auto h-14" />
        <p class="font-semibold mt-1">My SQL</p>
      </div>
      <div data-aos="fade-up" class="text-center">
        <Msql class="w-14 mx-auto h-14" />
        <p class="font-semibold mt-1">MS SQL</p>
      </div>
      <div data-aos="fade-up" class="text-center">
        <Redis class="w-14 mx-auto h-14" />
        <p class="font-semibold mt-1">Redis</p>
      </div>
      <div data-aos="fade-up" class="text-center">
        <ElasticSearch class="w-14 mx-auto h-14" />
        <p class="font-semibold mt-1">Elastic Search</p>
      </div>
      <div data-aos="fade-up" class="text-center">
        <GraphQl class="w-14 mx-auto h-14" />
        <p class="font-semibold mt-1">GraphQl</p>
      </div>
    </div>
  </div>
</template>

<script>
const components = {
  AngularLogo: () => import("@/components/logos/angular.vue"),
  React: () => import("@/components/logos/react.vue"),
  Html: () => import("@/components/logos/html.vue"),
  Css: () => import("@/components/logos/css.vue"),
  Boostrap: () => import("@/components/logos/boostrap.vue"),
  Vue: () => import("@/components/logos/vue.vue"),
  Aspnet: () => import("@/components/logos/aspnet.vue"),
  Node: () => import("@/components/logos/node.vue"),
  Django: () => import("@/components/logos/django.vue"),
  PhpLaravel: () => import("@/components/logos/phpLaravel.vue"),
  Go: () => import("@/components/logos/go.vue"),
  JavaSpring: () => import("@/components/logos/javaSpring.vue"),
  Mysql: () => import("@/components/logos/mysql.vue"),
  Msql: () => import("@/components/logos/msql.vue"),
  MongoDb: () => import("@/components/logos/mongoDb.vue"),
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
  Dart: () => import("@/components/logos/dart.vue"),
  WebTechnologyIcon: () => import("@/components/icons/web-technology.vue"),
};
export default {
  components,
  props: {
    technologStack: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
