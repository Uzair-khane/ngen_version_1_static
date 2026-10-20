<template>
  <div
    :style="{ 'background-image': `url(${bgImage})` }"
    class="relative services h-[40vh] md:h-[43vh]"
  >
   <div class="w-full h-full absolute bg-[rgba(0,0,0,0.3)]"></div>
    <div class="w-full h-full services">
      <p
        :class="[
          $i18n.locale === 'en' ? 'left-4 md:left-10' : 'right-4 md:right-10',
        ]"
        class="absolute uppercase font-semibold bottom-6 text-white text-xl md:text-3xl"
      >
        {{ title }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.services {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    web: {
      type: Boolean,
      default: false,
    },
    mobile: {
      type: Boolean,
      default: false,
    },
    animation: {
      type: Boolean,
      default: true,
    },
    bgImage: {
      default: "",
    },
  },
};
</script>
