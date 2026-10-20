<template>
  <section
    class="page-6 h-auto py-20 lg:py-10 lg:h-[90vh] flex md:justify-center items-center px-2 md:px-16 w-full"
  >
    <div>
      <h4
        class="text-white text-center text-lg md:text-4xl !leading-tight font-semibold"
      >
      {{ $t("home.digital_transformation.text") }}
      </h4>
      <div
        class="flex mt-8 gap-10 text-white lg:flex-row flex-col justify-center lg:justify-between"
      >
        <div class="space-y-2">
          <h1
            data-aos="fade-up"
            data-aos-duration="400"
            class="text-3xl md:text-5xl text-center font-semibold"
          >
          {{ $t("home.digital_transformation.achivement_1.title") }}
          </h1>
          <p class="mx-auto lg:mx-0 max-w-64">{{ $t("home.digital_transformation.achivement_1.description") }}</p>
        </div>
        <div class="space-y-2">
          <h1
            data-aos="fade-up"
            data-aos-duration="400"
            class="text-3xl md:text-5xl text-center font-semibold"
          >
          {{ $t("home.digital_transformation.achivement_2.title") }}
          </h1>
          <p class="text-center max-w-68">
            {{ $t("home.digital_transformation.achivement_2.description") }}
          </p>
        </div>
        <div class="space-y-2">
          <h1
            data-aos="fade-up"
            data-aos-duration="400"
            class="text-3xl md:text-5xl text-center font-semibold"
          >
          {{ $t("home.digital_transformation.achivement_3.title") }}
          </h1>
          <p class="text-center max-w-68">{{ $t("home.digital_transformation.achivement_3.description") }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.page-6 {
  background-image: url("/images/page-6.png");
  background-position: center;
  background-size: cover;
}
</style>
