<template>
  <section
    class="services duration-200 text-black z-20 left-0 origin-top absolute right-0 transition-all overflow-auto bg-white"
  >
    <div class="grid w-full md:grid-cols-3 grid-cols-1 gap-4 md:px-5 lg:px-16">
      <div class="lef-side w-full bg-[#F0F0F0] py-6 px-6">
        <h1 class="font-semibold text-black text-3xl">
          {{ $t("header.services.title") }}
        </h1>
        <div class="nuxt-img py-7">
          <nuxt-img src="/images/services-menu.webp" alt="image" />
        </div>
        <p class="text-black">
          {{ $t("header.services.description") }}
        </p>
      </div>

      <div class="w-full grid py-6 px-4">
        <div class="space-y-2">
          <h1 class="text-2xl font-medium">
            {{ $t("header.services.digital.title") }}
          </h1>
          <ul class="space-y-2">
            <nuxt-link
              :to="localePath('/services/digital-consultant')"
              class="flex gap-1 cursor-pointer hover:text-red-600 group/menu items-center"
            >
              <span class="hover:text-red-600 transition-all">
                {{ $t("header.services.digital.digital_consulting") }}
              </span>
              <rightArrow
                class="w-5 group-hover/menu:w-9 transition-all mt-1 h-3"
              />
            </nuxt-link>
            <nuxt-link
              :to="localePath('/services/web-development')"
              class="flex gap-1 cursor-pointer hover:text-red-600 group/menu items-center"
            >
              <span class="hover:text-red-600 transition-all">
                {{ $t("header.services.digital.website_design") }}
              </span>
              <rightArrow
                class="w-5 group-hover/menu:w-9 transition-all mt-1 h-3"
              />
            </nuxt-link>
            <nuxt-link
              :to="localePath('/services/mobile-applications')"
              class="flex gap-1 cursor-pointer hover:text-red-600 group/menu items-center"
            >
              <span
                class="hover:text-red-600 transition-all lg:whitespace-nowrap"
              >
                {{ $t("header.services.digital.mobile_app") }}
              </span>
              <rightArrow
                class="w-5 group-hover/menu:w-9 transition-all mt-1 h-3"
              />
            </nuxt-link>
            <nuxt-link
              :to="localePath('/services/animation')"
              class="flex gap-1 cursor-pointer hover:text-red-600 group/menu items-center"
            >
              <span class="hover:text-red-600 transition-all">
                {{ $t("header.services.digital.animation") }}
              </span>
              <rightArrow
                class="w-5 group-hover/menu:w-9 transition-all mt-1 h-3"
              />
            </nuxt-link>
            <nuxt-link
              :to="localePath('/services/prototype-development')"
              class="flex gap-1 cursor-pointer hover:text-red-600 group/menu items-center"
            >
              <span class="hover:text-red-600 transition-all">
                {{ $t("header.services.digital.prototype_development") }}
              </span>
              <rightArrow
                class="w-5 group-hover/menu:w-9 transition-all mt-1 h-3"
              />
            </nuxt-link>
            <nuxt-link
              :to="localePath('/services/digital-marketing')"
              class="flex gap-1 cursor-pointer hover:text-red-600 group/menu items-center"
            >
              <span class="hover:text-red-600 transition-all">
                {{ $t("header.services.digital.digital_marketing") }}
              </span>
              <rightArrow
                class="w-5 group-hover/menu:w-9 transition-all mt-1 h-3"
              />
            </nuxt-link>
          </ul>
        </div>

        <div class="space-y-2">
          <h1 class="text-2xl font-medium">
            {{ $t("header.services.data_&_Ai.title") }}
          </h1>
          <ul class="space-y-2">
            <nuxt-link
              :to="localePath('/services/blockchain')"
              class="flex gap-1 cursor-pointer hover:text-red-600 group/menu items-center"
            >
              <span class="hover:text-red-600 transition-all">
                {{ $t("header.services.data_&_Ai.blockchain_app") }}
              </span>
              <rightArrow
                class="w-5 group-hover/menu:w-9 transition-all mt-1 h-3"
              />
            </nuxt-link>
            <nuxt-link
              :to="localePath('/services/cybersecurity')"
              class="flex gap-1 cursor-pointer hover:text-red-600 group/menu items-center"
            >
              <span class="hover:text-red-600 transition-all">
                {{ $t("header.services.data_&_Ai.cyber_security") }}
              </span>
              <rightArrow
                class="w-5 group-hover/menu:w-9 transition-all mt-1 h-3"
              />
            </nuxt-link>
            <nuxt-link
              :to="localePath('/services/bussiness-analysis')"
              class="flex gap-1 cursor-pointer hover:text-red-600 group/menu items-center"
            >
              <span class="hover:text-red-600 transition-all">
                {{ $t("header.services.data_&_Ai.business_analysis") }}
              </span>
              <rightArrow
                class="w-5 group-hover/menu:w-9 transition-all mt-1 h-3"
              />
            </nuxt-link>
          </ul>
        </div>

        <div class="space-y-2">
          <h1 class="text-2xl font-medium">
            {{ $t("header.services.cloud.title") }}
          </h1>
          <ul class="space-y-2">
            <nuxt-link
              :to="localePath('/services/cloud-application')"
              class="flex gap-1 cursor-pointer hover:text-red-600 group/menu items-center"
            >
              <span class="hover:text-red-600 transition-all">
                {{ $t("header.services.cloud.cloud_application") }}
              </span>
              <rightArrow
                class="w-5 group-hover/menu:w-9 transition-all mt-1 h-3"
              />
            </nuxt-link>
          </ul>
        </div>
      </div>

      <div class="right-side w-full py-6 px-1 md:px-4">
        <div class="space-y-2">
          <h1 class="text-2xl font-medium">
            {{ $t("header.services.business_process_outsourcing.title") }}
          </h1>
          <ul class="space-y-2">
            <nuxt-link
              :to="localePath('/services/creative-services')"
              class="flex gap-1 cursor-pointer hover:text-red-600 group/menu items-center"
            >
              <span class="hover:text-red-600 transition-all">
                {{
                  $t(
                    "header.services.business_process_outsourcing.creative_services"
                  )
                }}
              </span>
              <rightArrow
                class="w-5 group-hover/menu:w-9 transition-all mt-1 h-3"
              />
            </nuxt-link>
            <nuxt-link
              :to="localePath('/services/resource-outsourcing')"
              class="flex gap-1 cursor-pointer hover:text-red-600 group/menu items-center"
            >
              <span class="hover:text-red-600 transition-all">
                {{
                  $t(
                    "header.services.business_process_outsourcing.resource_outsourcing"
                  )
                }}
              </span>
              <rightArrow
                class="w-5 group-hover/menu:w-9 transition-all mt-1 h-3"
              />
            </nuxt-link>
          </ul>
        </div>
      </div>
    </div>
          
  </section>
</template>

<script>
const components = {
  rightArrow: () => import("@/components/icons/arrow-right.vue"),
};

export default {
  components,
};
</script>

<style scoped>
.services::-webkit-scrollbar {
  display: none;
}
</style>
