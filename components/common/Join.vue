<template>
  <section class="mt-20 help flex items-center justify-center text-white">
    <div class="flex items-center gap-3 justify-center flex-col text-center">
      <h1
        data-aos="fade-up"
        data-aos-duration="400"
        class="font-heading font-semibold md:text-5xl text-xl"
      >
        {{ $t("help.title") }}
      </h1>
      <p class="font-heading font-medium">
        {{ $t("help.description") }}
      </p>

      <nuxt-link
        :to="localePath('/contact')"
        class="bg-[#262B3F] transition-all hover:scale-110 px-14 py-3 text-white rounded-lg"
      >
        {{ $t("help.contact_us") }}
      </nuxt-link>
    </div>
  </section>
</template>

<style scoped>
.help {
  background-image: url("/images/join-us.png");
  height: 300px;
  background-position: center;
  background-size: cover;
}
</style>
