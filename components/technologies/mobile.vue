<template>
  <div class="relative">
    <div
      v-if="technologyStack"
      :class="[
        $i18n.locale == 'en' ? 'left-0 pl-3 md:pl-10' : 'right-0 pr-3 md:pr-10',
      ]"
      class="technolog-stack gap-1 md:gap-2 items-center absolute -top-5 md:-top-8 bg-[#F76236] flex py-2 w-full md:w-2/3"
    >
      <span>
        <MobileTechnologyIcon class="w-6 h-6 md:w-10 md:h-10" />
      </span>
      <h2 class="text-white font-semibold text-base md:text-2xl">
        {{ $t("technology_stack.tech_stack_mobile") }}
      </h2>
    </div>
    <div
      class="grid py-3 lg:py-10 border-b gap-12 grid-cols-3 lg:grid-cols-7 items-center mt-5"
    >
      <div class="col-span-3 mt-4 lg:mt-0 lg:col-span-1">
        <h2 class="font-bold text-center text-2xl lg:text-lg lg:text-left">
          {{ $t("technology_stack.android") }}
        </h2>
      </div>
      <div data-aos="fade-up" class="text-center">
        <java class="w-14 mx-auto h-14" />
        <p class="font-semibold mt-1">java</p>
      </div>
      <div data-aos="fade-up" class="text-center">
        <Kotlin class="w-14 mx-auto h-14" />
        <p class="font-semibold mt-1">Kotlin</p>
      </div>
      <div data-aos="fade-up" class="text-center">
        <Dart class="w-14 mx-auto h-14" />
        <p class="font-semibold mt-1">Dart</p>
      </div>
      <div data-aos="fade-up" class="text-center">
        <Cpp class="w-14 mx-auto h-14" />
        <p class="font-semibold mt-1">C++</p>
      </div>
    </div>

    <div
      class="grid py-3 lg:py-10 border-b gap-12 grid-cols-3 lg:grid-cols-7 items-center"
    >
      <div class="col-span-3 mt-4 lg:mt-0 lg:col-span-1">
        <h2 class="font-bold text-center text-2xl lg:text-lg lg:text-left">
          {{ $t("technology_stack.ios") }}
        </h2>
      </div>
      <div data-aos="fade-up" class="text-center">
        <Swift class="w-14 mx-auto h-14" />
        <p class="font-semibold mt-1">Swift</p>
      </div>
      <div data-aos="fade-up" class="text-center">
        <SwiftUi class="w-14 mx-auto h-14" />
        <p class="font-semibold mt-1">SwiftUi</p>
      </div>
      <div data-aos="fade-up" class="text-center">
        <ObjectiveC class="w-14 mx-auto h-14" />
        <p class="font-semibold mt-1">Objective-C</p>
      </div>
      <div data-aos="fade-up" class="text-center">
        <UiKit class="w-14 mx-auto h-14" />
        <p class="font-semibold mt-1">UIKIT</p>
      </div>
    </div>

    <div
      class="grid lg:py-10 border-b gap-12 grid-cols-3 lg:grid-cols-7 items-center mt-5"
    >
      <div class="col-span-3 mt-4 lg:mt-0 lg:col-span-1">
        <h2
          class="font-bold text-center text-2xl lg:text-lg whitespace-nowrap lg:text-left"
        >
          {{ $t("technology_stack.cross_plateform") }}
        </h2>
      </div>
      <div data-aos="fade-up" class="text-center">
        <Flutter class="w-14 mx-auto h-14" />
        <p class="font-semibold mt-1">Flutter</p>
      </div>
      <div data-aos="fade-up" class="text-center">
        <ReactNative class="w-14 mx-auto h-14" />
        <p class="font-semibold mt-1">React Native</p>
      </div>
    </div>
  </div>
</template>

<script>
const components = {
  Azure: () => import("@/components/logos/azure.vue"),
  Kubernetes: () => import("@/components/logos/kubernetes.vue"),
  Docker: () => import("@/components/logos/docker.vue"),
  ReactNative: () => import("@/components/logos/react.vue"),

  Nginx: () => import("@/components/logos/nginx.vue"),
  Java: () => import("@/components/logos/java.vue"),
  Dart: () => import("@/components/logos/dart.vue"),
  Kotlin: () => import("@/components/logos/kotlin.vue"),
  Cpp: () => import("@/components/logos/cpp.vue"),
  Swift: () => import("@/components/logos/swift.vue"),
  SwiftUi: () => import("@/components/logos/swiftUi.vue"),
  ObjectiveC: () => import("@/components/logos/objectiveC.vue"),
  UiKit: () => import("@/components/logos/uiKit.vue"),
  Flutter: () => import("@/components/logos/flutter.vue"),
  MobileTechnologyIcon: () =>
    import("@/components/icons/mobile-technology.vue"),
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
