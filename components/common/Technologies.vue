<template>
  <div class="bg-[#EDF3F1] py-10">
    <h1 data-aos="flip-left" class="uppercase font-bold text-2xl">
      {{ $t("technology_stack.title") }}
    </h1>
    <Web v-if="showAll || web" />
    <Infrastructure v-if="showAll" />
    <Mobile v-if="showAll || mobile" />
    <Animations v-if="animation" />
  </div>
</template>

<script>
const components = {
  Web: () => import("@/components/technologies/web.vue"),
  Mobile: () => import("@/components/technologies/mobile.vue"),
  Infrastructure: () => import("@/components/technologies/infrastructure.vue"),
  Animations: () => import("@/components/technologies/animation.vue"),
};
export default {
  components,
  props: {
    web: {
      type: Boolean,
      default: false,
    },
    showAll: {
      type: Boolean,
      default: false,
    },
    mobile: {
      type: Boolean,
      default: false,
    },
    animation: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
