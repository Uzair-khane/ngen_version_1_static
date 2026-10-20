<template>
  <section class="py-10 md:py-20">
    <div class="grid md:grid-cols-2 grid-cols-1 px-3 md:px-12">
      <div class="left-side max-w-[450px]">
        <h1
          data-aos="fade-up"
          data-aos-duration="400"
          class="font-heading !leading-tight md:text-5xl text-3xl"
        >
          {{ $t("home.performance.title") }}
        </h1>
        <p
          data-aos="fade-up"
          data-aos-duration="400"
          class="font-paragraph !leading-normal mt-4 text-xl"
        >
          {{ $t("home.performance.description") }}
        </p>
      </div>

      <div
        :class="[$i18n.locale === 'en' ? 'md:pl-14' : 'md:pr-14']"
        class="relative mt-7 md:mt-0 border-gray-300 grid gap-10 md:gap-0 grid-cols-2 md:grid-row-2"
      >
        <nuxt-img
          class="absolute hidden md:block -top-20"
          :class="[
            $i18n.locale === 'en'
              ? 'max-h-[450px] scale-x-100'
              : 'max-h-[380px] -scale-x-100',
          ]"
          src="/images/h-line.png"
          alt=""
        />
        <div class="max-w-52">
          <h1
            data-aos="fade-up"
            data-aos-duration="400"
            class="font-heading font-extrabold md:text-5xl text-3xl"
          >
            {{ $t("home.performance.progress.achivement_1.title") }}
          </h1>
          <p class="font-heading font-normal">
            {{ $t("home.performance.progress.achivement_1.description") }}
          </p>
        </div>

        <div class="max-w-52">
          <h1
            data-aos="fade-up"
            data-aos-duration="400"
            class="font-heading font-extrabold md:text-5xl text-3xl"
          >
            {{ $t("home.performance.progress.achivement_2.title") }}
          </h1>
          <p class="font-heading font-normal">
            {{ $t("home.performance.progress.achivement_2.description") }}
          </p>
        </div>

        <div class="max-w-52">
          <h1
            data-aos="fade-up"
            data-aos-duration="400"
            class="font-heading font-extrabold md:text-5xl text-3xl"
          >
            {{ $t("home.performance.progress.achivement_3.title") }}
          </h1>
          <p class="font-heading font-normal">
            {{ $t("home.performance.progress.achivement_3.description") }}
          </p>
        </div>

        <div class="max-w-52">
          <h1
            data-aos="fade-up"
            data-aos-duration="400"
            class="font-heading font-extrabold md:text-5xl text-3xl"
          >
            {{ $t("home.performance.progress.achivement_4.title") }}
          </h1>
          <p class="font-heading font-normal">
            {{ $t("home.performance.progress.achivement_4.description") }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
