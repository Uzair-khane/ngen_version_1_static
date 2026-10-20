<template>
  <section
    class="services text-black duration-200 z-20 left-0 origin-top absolute mt-0 right-0 transition-all bg-white"
  >
    <div class="grid w-full md:grid-cols-3 grid-cols-1 gap-4 px-16">
      <div class="lef-side w-full bg-[#F0F0F0] py-6 px-6">
        <h1 class="font-semibold text-black text-3xl">
          {{ $t("header.about.title") }}
        </h1>
        <div class="py-7">
          <nuxt-img src="/images/about-menu.png" alt="image" />
        </div>
        <p class="text-black">
          {{ $t("header.menu_description") }}
        </p>
      </div>

      <div class="w-full grid py-6 px-4">
        <ul class="space-y-4">
          <nuxt-link
            class="flex gap-1 cursor-pointer hover:text-red-600 group/menu items-center"
            :to="localePath('/about/who-we-Are')"
          >
            <span class="hover:text-red-600 text-lg transition-all">{{
              $t("header.about.who_we_are")
            }}</span>
            <rightArrow
              class="w-5 group-hover/menu:w-9 transition-all mt-1 h-3"
            />
          </nuxt-link>
          <nuxt-link
            :to="localePath('/about/licenses')"
            class="flex gap-1 cursor-pointer hover:text-red-600 group/menu items-center"
          >
            <span class="hover:text-red-600 text-lg transition-all">
              {{ $t("header.about.licenses") }}
            </span>
            <rightArrow
              class="w-5 group-hover/menu:w-9 transition-all mt-1 h-3"
            />
          </nuxt-link>
          <!-- <nuxt-link
            to="/about/acomplishments"
            class="flex gap-1 cursor-pointer hover:text-red-600 group/menu items-center"
          >
            <span class="hover:text-red-600 text-lg transition-all">
              Our Accomplishments
            </span>
            <rightArrow
              class="w-5 group-hover/menu:w-9 transition-all mt-1 h-3"
            />
          </nuxt-link> -->
          <nuxt-link
            :to="localePath('/about/global-presence')"
            class="flex gap-1 cursor-pointer hover:text-red-600 group/menu items-center"
          >
            <span class="hover:text-red-600 text-lg transition-all">
              {{ $t("header.about.our_global") }}
            </span>
            <rightArrow
              class="w-5 group-hover/menu:w-9 transition-all mt-1 h-3"
            />
          </nuxt-link>
          <nuxt-link
            :to="localePath('/about/careers')"
            class="flex gap-1 cursor-pointer hover:text-red-600 group/menu items-center"
          >
            <span class="hover:text-red-600 text-lg transition-all">
              {{ $t("header.about.ngc_careers") }}
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
