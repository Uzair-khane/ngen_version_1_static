<template>
  <section
    class="services text-black duration-200 z-20 left-0 origin-top absolute mt-0 right-0 transition-all max-h-[90vh] overflow-auto bg-white"
  >
    <div class="grid w-full md:grid-cols-3 grid-cols-1 gap-4 px-16">
      <div class="lef-side w-full bg-[#F0F0F0] py-6 px-6">
        <h1 class="font-semibold text-black text-3xl">
          {{ $t("header.work.title") }}
        </h1>
        <div class="nuxt-img py-7">
          <nuxt-img src="/images/work-menu.webp" alt="image" />
        </div>
        <p class="text-black">
          {{ $t("header.menu_description") }}
        </p>
      </div>

      <div class="w-full grid py-6 px-4">
        <ul class="space-y-4">
          <nuxt-link
            :to="localePath('/work/projects')"
            class="flex gap-1 cursor-pointer hover:text-red-600 group/menu items-center"
          >
            <span class="hover:text-red-600 text-lg transition-all">
              {{ $t("header.work.projects") }}
            </span>
            <rightArrow
              class="w-5 group-hover/menu:w-9 transition-all mt-1 h-3"
            />
          </nuxt-link>
          <nuxt-link
            :to="localePath('/work/products')"
            class="flex gap-1 cursor-pointer hover:text-red-600 group/menu items-center"
          >
            <span class="hover:text-red-600 transition-all text-lg">
              {{ $t("header.work.our_products") }}
            </span>
            <rightArrow
              class="w-5 group-hover/menu:w-9 transition-all mt-1 h-3"
            />
          </nuxt-link>
        </ul>
      </div>
    </div>
          
  </section>
</template>

<style scoped>
.services::-webkit-scrollbar {
  display: none;
}
</style>

<script>
const components = {
  rightArrow: () => import("@/components/icons/arrow-right.vue"),
};

export default {
  components,
};
</script>
