<template>
  <section class="services my-8 md:mb-0 md:mt-0">
    <div class="grid lg:grid-cols-2 md:gap-4 gap-3">
      <div class="w-full px-3 md:px-10 flex items-center">
        <div>
          <h2 class="uppercase mt-2 font-semibold text-2xl text-[#B2B2B2]">
            {{ $t("home.services.title") }}
          </h2>
          <div class="relative">
            <nuxt-img
              :data-aos="$i18n.locale === 'en' ? 'fade-right' : 'fade-left'"
              data-aos-duration="300"
              class="absolute h-full w-auto"
              src="/images/services.png"
              alt=""
            />
            <h2
              class="font-semibold mt-3 md:mt-4 lg:text-5xl !leading-snug text-3xl"
            >
              {{ $t("home.services.empowering_clients") }}
            </h2>
          </div>
        </div>
      </div>

      <div :class="[$i18n.locale === 'en' ? 'md:border-l' : 'md:border-r']">
        <div
          data-aos="fade-up"
          data-aos-duration="400"
          class="text-justify px-3 md:px-10 py-4 md:border-b"
        >
          <h2 class="font-heading font-semibold text-3xl mt-4">
            {{ $t("home.services.digital.title") }}
          </h2>
          <p class="font-paragraph mt-2">
            {{ $t("home.services.digital.description") }}
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="400"
          class="md:border-b px-3 md:px-10 py-4"
        >
          <h2 class="font-heading font-semibold text-3xl">
            {{ $t("home.services.data_&_ai.title") }}
          </h2>
          <p class="font-paragraph mt-2">
            {{ $t("home.services.data_&_ai.description") }}
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="400"
          class="px-3 md:px-10 py-4"
        >
          <h2 class="font-heading font-semibold text-3xl">
            {{ $t("home.services.branding.title") }}
          </h2>
          <p class="font-paragraph mt-2">
            {{ $t("home.services.branding.description") }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
