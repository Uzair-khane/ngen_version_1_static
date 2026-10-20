<template>
  <div class="">
    <Banner
      :bgImage="bgImage"
      :title="$t('blockchain_app_development.title')"
    />
    <div class="px-3 text-base md:text-lg md:px-10 mt-6">
      <p class="font-semibold text-3xl">
        {{ $t("blockchain_app_development.blockchain_innovation.title") }}
      </p>
      <p class="mt-4 text-justify">
        {{
          $t("blockchain_app_development.blockchain_innovation.description_1")
        }}
      </p>
      <p class="mt-4 text-justify">
        {{
          $t("blockchain_app_development.blockchain_innovation.description_2")
        }}
      </p>
    </div>

    <div class="what-we-deliver text-base md:text-lg px-3 md:px-10 mt-10">
      <h2 class="text-xl md:text-2xl font-semibold mb-3">
        {{ $t("blockchain_app_development.we_deliver") }}
      </h2>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20">
        <div class="w-full flex items-center">
          <nuxt-img
            class="max-h-96 md:max-h-[450px] w-full"
            src="/images/blockchain2.png"
            alt=""
          />
        </div>
        <div
          :class="[$i18n.locale === 'en' ? 'pl-6 lg:pl-0' : 'pr-6 lg:pr-0']"
          class="flex items-center"
        >
          <ul class="space-y-2 md:text-justify">
            <li
              class="font-semibold"
              :class="$i18n.locale === 'en' ? 'list-decimal' : '-mr-5'"
            >
              {{ $t("blockchain_app_development.consulting_strategy.title") }}
            </li>
            <ul class="space-y-2 list-disc">
              <li>
                {{ $t("blockchain_app_development.consulting_strategy.li_1") }}
              </li>
              <li>
                {{ $t("blockchain_app_development.consulting_strategy.li_2") }}
              </li>
              <li>
                {{ $t("blockchain_app_development.consulting_strategy.li_3") }}
              </li>
            </ul>
            <li
              :class="$i18n.locale === 'en' ? 'list-decimal' : '-mr-5'"
              class="font-semibold"
            >
              {{
                $t(
                  "blockchain_app_development.custom_blockchain_development.title"
                )
              }}
            </li>
            <ul class="space-y-2 mt-4 list-disc">
              <li>
                {{
                  $t(
                    "blockchain_app_development.custom_blockchain_development.li_1"
                  )
                }}
              </li>
              <li>
                {{
                  $t(
                    "blockchain_app_development.custom_blockchain_development.li_2"
                  )
                }}
              </li>
              <li>
                {{
                  $t(
                    "blockchain_app_development.custom_blockchain_development.li_3"
                  )
                }}
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </div>

    <Join />
  </div>
</template>
<script>
const components = {
  Technologies: () => import("@/components/technologies/animation.vue"),
  Join: () => import("@/components/common/Join.vue"),
  Banner: () => import("@/components/common/ServicesBanner.vue"),
};

export default {
  layout: "services",
  components,
  data() {
    return {
      bgImage: "/images/blockchain.webp",
    };
  },
};
</script>
