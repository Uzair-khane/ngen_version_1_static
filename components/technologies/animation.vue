<template>
  <div class="bg-[#EDF3F1] relative py-10">
    <div
      v-if="technologyStack"
      :class="[
        $i18n.locale == 'en' ? 'left-0 pl-3 md:pl-10' : 'right-0 pr-3 md:pr-10',
      ]"
      class="technolog-stack gap-4 items-center absolute -top-5 md:-top-8 bg-[#F76236] flex py-2 w-full md:w-2/3"
    >
      <span>
        <AnimationIcon class="w-6 h-6 md:w-10 md:h-10" />
      </span>
      <h2 class="text-white font-semibold text-base md:text-2xl">
        {{ $t("technology_stack.tech_stack_animation_presentation") }}
      </h2>
    </div>
    <h1 v-if="!technologyStack" data-aos="flip-left" class="font-bold text-2xl">
      {{ $t("technology_stack.animation_tools") }}
    </h1>
    <div
      class="grid py-3 lg:py-10 border-b gap-12 grid-cols-3 lg:grid-cols-6 items-center mt-5"
    >
      <div class="col-span-3 mt-4 lg:mt-0 lg:col-span-1">
        <h2
          class="font-bold whitespace-nowrap text-center text-2xl lg:text-lg lg:text-left"
        >
          {{ $t("technology_stack.presentation") }}
        </h2>
      </div>
      <div data-aos="fade-up" class="text-center">
        <Mspoint class="w-14 mx-auto h-14" />
        <p class="font-semibold mt-1">Microsoft PowerPoint</p>
      </div>
      <div data-aos="fade-up" class="text-center">
        <AdobePhotoshop class="w-14 mx-auto h-14" />
        <p class="font-semibold mt-1">Adobe Photoshop</p>
      </div>
      <div data-aos="fade-up" class="text-center">
        <AdobeIllustrator class="w-14 mx-auto h-14" />
        <p class="font-semibold mt-1">Adobe Illustrator</p>
      </div>
      <div data-aos="fade-up" class="text-center">
        <Canva class="w-14 mx-auto h-14" />
        <p class="font-semibold mt-1">Canva</p>
      </div>
      <div data-aos="fade-up" class="text-center">
        <Emaze class="w-14 mx-auto h-14" />
        <p class="font-semibold mt-1">Emaze</p>
      </div>
    </div>
    <div
      class="grid py-3 md:py-10 border-b gap-12 grid-cols-3 lg:grid-cols-6 items-center mt-5"
    >
      <div class="col-span-3 mt-4 lg:mt-0 lg:col-span-1">
        <h2
          class="font-bold whitespace-nowrap text-center text-2xl lg:text-lg lg:text-left"
        >
          {{ $t("technology_stack.animation") }}
        </h2>
      </div>
      <div data-aos="fade-up" class="text-center">
        <Blender class="w-14 mx-auto h-14" />
        <p class="font-semibold mt-1">Blender</p>
      </div>
      <div data-aos="fade-up" class="text-center">
        <Maya class="w-14 mx-auto h-14" />
        <p class="font-semibold mt-1">Maya</p>
      </div>
      <div data-aos="fade-up" class="text-center">
        <Autodesk class="w-14 mx-auto h-14" />
        <p class="font-semibold mt-1">Autodesk</p>
      </div>
      <div data-aos="fade-up" class="text-center">
        <Vray class="w-14 mx-auto h-14" />
        <p class="font-semibold mt-1">V-Ray</p>
      </div>
      <div data-aos="fade-up" class="text-center">
        <Zbrush class="w-14 mx-auto h-14" />
        <p class="font-semibold mt-1">ZBrush</p>
      </div>
    </div>
    <div
      class="grid py-3 md:py-10 border-b gap-12 grid-cols-3 lg:grid-cols-6 items-center mt-5"
    >
      <div class="col-span-3 mt-4 lg:mt-0 lg:col-span-1">
        <h2
          class="font-bold whitespace-nowrap text-center text-2xl lg:text-lg lg:text-left"
        >
          {{ $t("technology_stack.motion_graphics") }}
        </h2>
      </div>
      <div data-aos="fade-up" class="text-center">
        <AfterEffects class="w-14 mx-auto h-14" />
        <p class="font-semibold mt-1">Adobe After Effects</p>
      </div>
      <div data-aos="fade-up" class="text-center">
        <AdobeAnimate class="w-14 mx-auto h-14" />
        <p class="font-semibold mt-1">Adobe Animate</p>
      </div>
      <div data-aos="fade-up" class="text-center">
        <AdobeAudition class="w-14 mx-auto h-14" />
        <p class="font-semibold mt-1">Adobe Audition</p>
      </div>
      <div data-aos="fade-up" class="text-center">
        <Cinema4d class="w-14 mx-auto h-14" />
        <p class="font-semibold mt-1">Cinema 4D</p>
      </div>
      <div data-aos="fade-up" class="text-center">
        <Unity class="w-14 mx-auto h-14" />
        <p class="font-semibold mt-1">Unity</p>
      </div>
    </div>
  </div>
</template>

<script>
const components = {
  Mspoint: () => import("@/components/logos/mspoint.vue"),
  AdobePhotoshop: () => import("@/components/logos/adobep.vue"),
  AdobeIllustrator: () => import("@/components/logos/adobei.vue"),
  Canva: () => import("@/components/logos/canvas.vue"),
  Blender: () => import("@/components/logos/blender.vue"),
  Emaze: () => import("@/components/logos/emaze.vue"),
  Maya: () => import("@/components/logos/maya.vue"),
  Autodesk: () => import("@/components/logos/autodesk.vue"),
  Vray: () => import("@/components/logos/vray.vue"),
  Zbrush: () => import("@/components/logos/zbrush.vue"),
  AfterEffects: () => import("@/components/logos/aftereffect.vue"),
  AdobeAnimate: () => import("@/components/logos/adobeanimate.vue"),
  AdobeAudition: () => import("@/components/logos/adobeaudition.vue"),
  Cinema4d: () => import("@/components/logos/cinema4d.vue"),
  Unity: () => import("@/components/logos/unity.vue"),
  AnimationIcon: () => import("@/components/icons/animation-technology.vue"),
};
export default {
  components,
  props: {
    technologyStack: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
