<template>
  <footer class="">
    <div
      class="bg-[#EFF0F2] px-3 md:px-12 py-10 flex justify-between flex-wrap"
    >
      <div>
        <nuxt-img class="w-64" src="/images/ngen-logo.png" alt="" />
    
      </div>

      <div class="center-side-content3 mt-3 md:mt-6">
        <h3
          :class="[$i18n.locale === 'en' ? 'after:left-0' : 'after:right-0']"
          class="font-bold text-xl mb-4 pb-2"
        >
          {{ $t("footer.company.title") }}
        </h3>
        <ul class="md:flex space-y-3 md:space-y-0">
          <nuxt-link
            class="block whitespace-nowrap md:px-2 md:border-slate-600"
            :class="[$i18n.locale === 'en' ? 'md:border-r' : '']"
            :to="localePath('/about/who-we-are')"
            >{{ $t("footer.company.who_we_are") }}</nuxt-link
          >
          <nuxt-link
            class="block md:border-r whitespace-nowrap md:px-2 md:border-slate-600"
            :to="localePath('/about/global-presence')"
            >{{ $t("footer.company.global_presence") }}</nuxt-link
          >
          <nuxt-link
            class="block md:border-r whitespace-nowrap md:px-2 md:border-slate-600"
            :to="localePath('/about/careers')"
            >{{ $t("footer.company.ngc_careers") }}</nuxt-link
          >
          <nuxt-link
            :to="localePath('/insight/profile-bochures')"
            class="block md:border-r whitespace-nowrap md:border-slate-600 md:px-2"
          >
            {{ $t("footer.company.brouchers_profile") }}
          </nuxt-link>
          <nuxt-link
            class="block md:px-2 whitespace-nowrap"
            :to="localePath('/privacy-policy')"
            :class="[
              $i18n.locale === 'ar' ? 'md:border-r md:border-slate-600' : '',
            ]"
            >{{ $t("footer.company.privacy") }}</nuxt-link
          >
        </ul>
      </div>

      <div class="right-side-social mt-3 md:mt-6">
        <h3
          class="font-bold text-xl mb-4 pb-2"
          :class="[$i18n.locale === 'en' ? 'after:left-0' : 'after:right-0']"
        >
          {{ $t("footer.follow_us.title") }}
        </h3>
        <div class="social-images flex gap-5">
          <a
            target="_blank"
            href="https://www.facebook.com/nextgcircle?mibextid=LQQJ4d"
          >
            <FbIcon class="w-6 h-6" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/company/nextgenerationcircle/"
          >
            <Linkdin class="w-6" />
          </a>
          <a target="_blank" href="https://x.com/Nextg_circle">
            <TwitterIcon class="w-6" />
          </a>

          <a
            target="_blank"
            href="https://www.instagram.com/nextgcircle?igsh=MW5nMjN4eHB0eDYzcg%3D%3D&utm_source=qr
"
          >
            <InstragramIcon class="w-6" />
          </a>
        </div>
      </div>
    </div>
    <div class="bg-black py-5 text-white px-4">
      <p class="text-center">
        {{ $t("footer.copy_right") }}
      </p>
    </div>
  </footer>
</template>

<script>
const components = {
  FbIcon: () => import("@/components/icons/fb.vue"),
  TelegramIcon: () => import("@/components/icons/telegram.vue"),
  TwitterIcon: () => import("@/components/icons/twitter.vue"),
  InstragramIcon: () => import("@/components/icons/instagram.vue"),
  Linkdin: () => import("@/components/icons/linkdin.vue"),
};
export default {
  components,
};
</script>

<style scoped>
footer h3 {
  position: relative;
  text-decoration: none;
  color: black;
}

footer h3::after {
  content: "";
  position: absolute;
  bottom: 0;
  width: 30px;
  height: 2px;
  background-color: black;
}
</style>
