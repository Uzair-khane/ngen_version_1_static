<template>
  <header v-if="header" :class="[
    isScroll
      ? 'bg-white shadow-md border-b h-16 text-black'
      : ' h-14 text-white',
    contact ? 'bg-slate-900' : '',
  ]" class="w-full transition-all fixed z-50 top-0">
    <nav class="flex items-center px-4 h-full justify-between md:px-8 w-full border-white border-b">
      <div class="flex h-full items-center">
        <nuxt-link :to="localePath('/')">
          <nuxt-img v-if="!isScroll" src="/images/logo.png" alt="" class="w-36" />
          <nuxt-img v-else src="/images/ngen-logo.png" alt="" class="w-36" /></nuxt-link>
        <div :class="[$i18n.locale === 'en' ? 'ml-7' : 'mr-7']" class="hidden h-full md:flex gap-7">
          <div class="flex h-full group gap-1 items-center">
            <span class="text-lg cursor-pointer h-full w-full items-center flex">{{ $t("header.services.title")
              }}</span>
            <!-- <downArrow class="fill-white w-2.5 mt-2 h-2.5" /> -->
            <ServicesMenu :class="[
              isScroll ? 'top-[64px]' : 'top-14',
              isRouteChange ? 'pointer-events-none' : '',
            ]" class="invisible group-hover:visible scale-y-0 group-hover:scale-y-100" />
          </div>

          <div class="flex gap-1 group items-center">
            <span class="text-lg cursor-pointer h-full flex items-center">{{
              $t("header.expertise.title")
            }}</span>
            <!-- <downArrow class="fill-white w-2.5 mt-2 h-2.5" /> -->
            <ExpertiseMenu :class="[
              isScroll ? 'top-[64px]' : 'top-14',
              isRouteChange ? 'pointer-events-none' : '',
            ]" class="invisible group-hover:visible scale-y-0 group-hover:scale-y-100" />
          </div>

          <div class="flex gap-1 group items-center">
            <span class="text-lg cursor-pointer h-full flex items-center">{{
              $t("header.insight.title")
            }}</span>
            <InsightMenu :class="[
              isScroll ? 'top-[64px]' : 'top-14',
              isRouteChange ? 'pointer-events-none' : '',
            ]" class="invisible group-hover:visible scale-y-0 group-hover:scale-y-100" />
          </div>

          <div class="flex gap-1 group items-center">
            <span class="text-lg h-full flex items-center cursor-pointer">{{
              $t("header.about.title")
            }}</span>
            <!-- <downArrow class="fill-white w-2.5 mt-2 h-2.5" /> -->

            <AboutMenu :class="[
              isScroll ? 'top-[64px]' : 'top-14',
              isRouteChange ? 'pointer-events-none' : '',
            ]" class="invisible group-hover:visible scale-y-0 group-hover:scale-y-100" />
          </div>
        </div>
      </div>
      <div class="flex h-full items-center gap-6">
        <div class="group items-center gap-1 h-full text-base cursor-pointer hidden md:flex">
          <span class="text-lg cursor-pointe flex items-center h-full w-full">{{
            $t("header.work.title")
          }}</span>
          <WorkMenu :class="[
            isScroll ? 'top-[64px]' : 'top-14',
            isRouteChange ? 'pointer-events-none' : '',
          ]" class="invisible group-hover:visible scale-y-0 group-hover:scale-y-100" />
          <!-- <downArrow class="fill-white mt-2 w-2.5 h-2.5" /> -->
        </div>

        <div
          class="search hidden md:flex h-full font-medium px-5 text-sm cursor-pointer border-white border-l border-r h-full content-center items-center justify-center">
          <Search :class="[isScroll ? 'fill-black' : 'fill-white']" class="w-4 h-4" />
        </div>

        <div class="text-base relative h-full group gap-2 flex items-center cursor-pointer">
          <Language :class="[isScroll ? 'fill-black' : 'fill-white']" class="w-5" />
          <span>{{ $i18n.locale === "en" ? "EN" : "عربي" }}</span>
          <ul ref="languageModal" :class="[$i18n.locale === 'en' ? ' -left-20' : '-right-20']"
            class="lang-menu w-40 shadow-md py-2 hidden group-hover:block absolute z-40 top-14 text-black rounded-lg bg-white">
            <li @click="changeLocale('en')"
              class="px-2 py-2 rounded-lg cursor-pointer hover:bg-slate-200 transition-all">
              English(en)
            </li>
            <li @click="changeLocale('ar')"
              class="px-2 cursor-pointer items-center flex justify-between py-2 rounded-lg hover:bg-slate-200 transition-all">
              <span> Arabic(ar) </span>
              <span>عربي</span>
            </li>
          </ul>
        </div>

        <span class="md:hidden">
          <Humberger :class="[
            isScroll ? 'fill-black stroke-black' : 'fill-white stroke-white',
          ]" @click.native="toggleMobileMenu" class="cursor-pointer" />
        </span>
      </div>

      <!-- FOR-MOBILE -->
      <div :class="[
        showMobileMenu && $i18n.locale === 'en' ? 'left-0' : '-left-full',
        showMobileMenu && $i18n.locale === 'ar' ? 'right-0' : '-right-full',
      ]" id="menu"
        class="fixed transition-all max-h-screen overflow-auto py-4 duration-500 md:hidden w-full top-0 z-40 inset-0 text-black bg-white">
        <div class="navbar flex flex-col flex-wrap">
          <div class="flex px-3 justify-between items-center">
            <nuxt-img src="/images/blackLogo.png" alt="" class="w-36" />
            <CloseIcon @click.native="toggleMobileMenu" class="w-6 cursor-pointer h-6" />
          </div>
          <div class="mt-2">
            <div class="text-lg px-3 py-6 border-x-white border-b">
              <div @click="toggleSubMenu('services')" class="flex cursor-pointer justify-between items-center">
                <span class="font-semibold">{{
                  $t("header.services.title")
                }}</span>
                <rightMenuIcon
                  :class="[isMenu === 'services' ? 'rotate-90' : $i18n.locale === 'ar' ? 'rotate-180' : '']"
                  class="w-4 h-4" />
              </div>
              <div v-if="isMenu === 'services'" class="px-3 mt-3">
                <h2 class="font-semibold">
                  {{ $t("header.services.digital.title") }}
                </h2>
                <ul class="mt-1 divide-y-1">
                  <nuxt-link @click.native="toggleMobileMenu" :to="localePath('/services/cloud-application')"
                    class="flex gap-1 py-2 cursor-pointer hover:text-red-600 group/menu items-center">
                    <span class="hover:text-red-600 transition-all">
                      {{ $t("header.services.digital.digital_consulting") }}
                    </span>
                  </nuxt-link>
                  <nuxt-link @click.native="toggleMobileMenu" :to="localePath('/services/web-development')"
                    class="flex py-2 gap-1 cursor-pointer hover:text-red-600 group/menu items-center">
                    <span class="hover:text-red-600 transition-all">
                      {{ $t("header.services.digital.website_design") }}
                    </span>
                  </nuxt-link>
                  <nuxt-link @click.native="toggleMobileMenu" :to="localePath('/services/mobile-applications')"
                    class="flex py-2 gap-1 cursor-pointer hover:text-red-600 group/menu items-center">
                    <span class="hover:text-red-600 transition-all">
                      {{ $t("header.services.digital.mobile_app") }}
                    </span>
                  </nuxt-link>
                  <nuxt-link @click.native="toggleMobileMenu" :to="localePath('/services/animation')"
                    class="flex py-2 gap-1 cursor-pointer hover:text-red-600 group/menu items-center">
                    <span class="hover:text-red-600 transition-all">
                      {{ $t("header.services.digital.animation") }}
                    </span>
                  </nuxt-link>
                  <nuxt-link @click.native="toggleMobileMenu" :to="localePath('/services/prototype-development')"
                    class="flex py-2 gap-1 cursor-pointer hover:text-red-600 group/menu items-center">
                    <span class="hover:text-red-600 transition-all">
                      {{ $t("header.services.digital.prototype_development") }}
                    </span>
                  </nuxt-link>
                  <nuxt-link @click.native="toggleMobileMenu" :to="localePath('/services/digital-marketing')"
                    class="flex py-2 gap-1 cursor-pointer hover:text-red-600 group/menu items-center">
                    <span class="hover:text-red-600 transition-all">
                      {{ $t("header.services.digital.digital_marketing") }}
                    </span>
                  </nuxt-link>
                </ul>
                <h1 class="font-semibold mt-2">
                  {{ $t("header.services.data_&_Ai.title") }}
                </h1>
                <ul>
                  <nuxt-link @click.native="toggleMobileMenu" :to="localePath('/services/blockchain')"
                    class="flex py-2 gap-1 cursor-pointer hover:text-red-600 group/menu items-center">
                    <span class="hover:text-red-600 transition-all">
                      {{ $t("header.services.data_&_Ai.blockchain_app") }}
                    </span>
                  </nuxt-link>
                  <nuxt-link @click.native="toggleMobileMenu" :to="localePath('/services/cybersecurity')"
                    class="flex gap-1 py-2 cursor-pointer hover:text-red-600 group/menu items-center">
                    <span class="hover:text-red-600 transition-all">
                      {{ $t("header.services.data_&_Ai.cyber_security") }}
                    </span>
                  </nuxt-link>
                  <nuxt-link @click.native="toggleMobileMenu" :to="localePath('/services/bussiness-analysis')"
                    class="flex py-2 gap-1 cursor-pointer hover:text-red-600 group/menu items-center">
                    <span class="hover:text-red-600 transition-all">
                      {{ $t("header.services.data_&_Ai.business_analysis") }}
                    </span>
                  </nuxt-link>
                </ul>
                <h2 class="font-semibold mt-2">
                  {{ $t("header.services.cloud.title") }}
                </h2>
                <ul>
                  <nuxt-link @click.native="toggleMobileMenu" :to="localePath('/services/cloud-application')"
                    class="flex gap-1 py-2 cursor-pointer hover:text-red-600 group/menu items-center">
                    <span class="hover:text-red-600 transition-all">
                      {{ $t("header.services.cloud.cloud_application") }}
                    </span>
                  </nuxt-link>
                </ul>

                <h2 class="font-semibold mt-2">
                  {{ $t("header.services.business_process_outsourcing.title") }}
                </h2>
                <ul>
                  <nuxt-link @click.native="toggleMobileMenu" :to="localePath('/services/creative-services')"
                    class="flex gap-1 py-2 cursor-pointer hover:text-red-600 group/menu items-center">
                    <span class="hover:text-red-600 transition-all">
                      {{
                        $t(
                          "header.services.business_process_outsourcing.creative_services"
                        )
                      }}
                    </span>
                  </nuxt-link>
                  <nuxt-link @click.native="toggleMobileMenu" :to="localePath('/services/resource-outsourcing')"
                    class="flex gap-1 py-2 cursor-pointer hover:text-red-600 group/menu items-center">
                    <span class="hover:text-red-600 transition-all">
                      {{
                        $t(
                          "header.services.business_process_outsourcing.resource_outsourcing"
                        )
                      }}
                    </span>
                  </nuxt-link>
                </ul>
              </div>
            </div>

            <div class="text-lg py-6 px-3 border-x-white border-b">
              <div @click="toggleSubMenu('expertise')" class="flex justify-between cursor-pointer items-center">
                <span class="font-semibold">{{
                  $t("header.expertise.title")
                }}</span>
                <rightMenuIcon
                  :class="[isMenu === 'expertise' ? 'rotate-90' : $i18n.locale === 'ar' ? 'rotate-180' : '']"
                  class="w-4 h-4" />
              </div>
              <ul v-if="isMenu === 'expertise'" class="space-y-4 px-3 mt-3">
                <nuxt-link :to="localePath('/expertise/technology-stack')" @click.native="toggleMobileMenu"
                  class="flex gap-1 cursor-pointer hover:text-red-600 group/menu items-center">
                  <span class="hover:text-red-600 text-lg transition-all">
                    {{ $t("header.expertise.technology_stacks") }}
                  </span>
                </nuxt-link>
              </ul>
            </div>

            <div class="text-lg py-6 px-3 border-x-white border-b">
              <div class="flex cursor-pointer justify-between items-center" @click="toggleSubMenu('insight')">
                <span class="font-semibold">{{
                  $t("header.insight.title")
                }}</span>
                <rightMenuIcon :class="[isMenu === 'insight' ? 'rotate-90' : $i18n.locale === 'ar' ? 'rotate-180' : '']"
                  class="w-4 h-4" />
              </div>
              <ul v-if="isMenu === 'insight'" class="space-y-4 px-3 mt-3">
                <nuxt-link @click.native="toggleMobileMenu" :to="localePath('/insight/news')"
                  class="flex gap-1 cursor-pointer hover:text-red-600 group/menu items-center">
                  <span class="hover:text-red-600 text-lg transition-all">
                    {{ $t("header.insight.news_&_events") }}
                  </span>
                </nuxt-link>
                <nuxt-link :to="localePath('/insight/profile-bochures')" @click.native="toggleMobileMenu"
                  class="flex gap-1 cursor-pointer hover:text-red-600 group/menu items-center">
                  <span class="hover:text-red-600 transition-all text-lg">
                    {{ $t("header.insight.brochures_&_profile") }}
                  </span>
                </nuxt-link>
              </ul>
            </div>

            <div class="text-lg px-3 py-6 border-x-white border-b">
              <div @click="toggleSubMenu('about')" class="flex cursor-pointer justify-between items-center">
                <span class="font-semibold">{{
                  $t("header.about.title")
                }}</span>
                <rightMenuIcon :class="[isMenu === 'about' ? 'rotate-90' : $i18n.locale === 'ar' ? 'rotate-180' : '']"
                  class="w-4 h-4" />
              </div>
              <ul v-if="isMenu === 'about'" class="space-y-4 px-3 mt-3">
                <nuxt-link @click.native="toggleMobileMenu" :to="localePath('/about/who-we-Are')"
                  class="flex gap-1 cursor-pointer hover:text-red-600 group/menu items-center">
                  <span class="hover:text-red-600 transition-all">
                    {{ $t("header.about.who_we_are") }}
                  </span>
                </nuxt-link>
                <nuxt-link @click.native="toggleMobileMenu" :to="localePath('/about/licenses')"
                  class="flex gap-1 cursor-pointer hover:text-red-600 group/menu items-center">
                  <span class="hover:text-red-600 transition-all">
                    {{ $t("header.about.licenses") }}
                  </span>
                </nuxt-link>

                <!-- <nuxt-link
                  to="/about/acomplishments"
                  @click.native="toggleMobileMenu"
                  class="flex gap-1 cursor-pointer hover:text-red-600 group/menu items-center"
                >
                  <span class="hover:text-red-600 text-lg transition-all">
                    Our Accomplishments
                  </span>
                </nuxt-link> -->
                <nuxt-link :to="localePath('/about/global-presence')" @click.native="toggleMobileMenu"
                  class="flex gap-1 cursor-pointer hover:text-red-600 group/menu items-center">
                  <span class="hover:text-red-600 text-lg transition-all">
                    {{ $t("header.about.our_global") }}
                  </span>
                </nuxt-link>
                <nuxt-link @click.native="toggleMobileMenu" :to="localePath('/about/careers')"
                  class="flex gap-1 cursor-pointer hover:text-red-600 group/menu items-center">
                  <span class="hover:text-red-600 text-lg transition-all">
                    {{ $t("header.about.ngc_careers") }}
                  </span>
                </nuxt-link>
              </ul>
            </div>
          </div>

          <div class="text-lg py-6 px-3 border-x-white border-b">
            <div @click="toggleSubMenu('work')" class="flex cursor-pointer justify-between items-center">
              <span class="font-semibold">{{ $t("header.work.title") }}</span>
              <rightMenuIcon :class="[isMenu === 'work' ? 'rotate-90' : $i18n.locale === 'ar' ? 'rotate-180' : '']"
                class="w-4 h-4" />
            </div>
            <ul v-if="isMenu === 'work'" class="space-y-4 px-3 mt-3">
              <nuxt-link @click.native="toggleMobileMenu" :to="localePath('/work/projects')"
                class="flex gap-1 cursor-pointer hover:text-red-600 group/menu items-center">
                <span class="hover:text-red-600 text-lg transition-all">
                  {{ $t("header.work.projects") }}
                </span>
              </nuxt-link>
              <nuxt-link @click.native="toggleMobileMenu" :to="localePath('/work/products')"
                class="flex gap-1 cursor-pointer hover:text-red-600 group/menu items-center">
                <span class="hover:text-red-600 text-lg transition-all">
                  {{ $t("header.work.our_products") }}
                </span>
              </nuxt-link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
const components = {
  downArrow: () => import("@/components/icons/down-arrow.vue"),
  Search: () => import("@/components/icons/search.vue"),
  Language: () => import("@/components/icons/language.vue"),
  ServicesMenu: () => import("@/components/menus/services.vue"),
  ExpertiseMenu: () => import("@/components/menus/expertise.vue"),
  InsightMenu: () => import("@/components/menus/insight.vue"),
  WorkMenu: () => import("@/components/menus/work.vue"),
  AboutMenu: () => import("@/components/menus/about.vue"),
  Humberger: () => import("@/components/icons/humberger.vue"),
  CloseIcon: () => import("@/components/icons/close.vue"),
  rightMenuIcon: () => import("@/components/icons/right-menu.vue"),
  Ngen: () => import("@/components/icons/ngen.vue"),
  rightArrow: () => import("@/components/icons/arrow-right.vue"),
};
export default {
  props: {
    isScroll: {
      type: Boolean,
      default: false,
    },
    contact: {
      type: Boolean,
      default: false,
    },
    services: {
      type: Boolean,
      default: false,
    },
  },
  components,
  data() {
    return {
      menu: "",
      showMobileMenu: false,
      isRouteChange: false,
      isPointerEvent: true,
      isMenu: "",
      header: false,
    };
  },
  watch: {
    $route() {
      this.isRouteChange = true;
      setTimeout(() => {
        this.isRouteChange = false;
      }, 300);
    },
  },
  created() {
    this.header = true;
  },
  methods: {
    showMenu(showMenu) {
      this.menu = showMenu;
    },
    toggleSubMenu(type) {
      if (this.isMenu === type) {
        this.isMenu = "";
      } else {
        this.isMenu = type;
      }
    },
    toggleMobileMenu() {
      this.showMobileMenu = !this.showMobileMenu;
      if (!this.showMobileMenu) {
        this.isMenu = false;
      }
    },
    async changeLocale(code) {
      if (this.$refs.languageModal) {
        this.$refs.languageModal.display = "hidden"
      }
      await this.$i18n.setLocale(code);
    },
  },
};
</script>
