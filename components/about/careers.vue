<template>
  <div>
    <section
      class="career_home h-[500px] md:h-screen flex justify-center items-center page-1"
    >
      <div class="text-center max-w-[750px]">
        <h1
          class="font-mono font-bold text-white md:text-4xl text-3xl text-center"
        >
          {{ $t("ngc_careers.title") }}
        </h1>
        <div class="">
          <p class="text-white text-wrap">
            {{ $t("ngc_careers.description") }}
          </p>
          <button
            class="px-14 py-2 rounded-lg bg-[#F76236] text-white text-base mt-4"
          >
          {{ $t("ngc_careers.join_team") }}
          </button>
        </div>
      </div>
    </section>

    <section class="mt-6 px-3 md:px-16">
      <div class="grid md:grid-cols-7 grid-cols-1 gap-4 md:gap-16">
        <div class="left-side col-span-3">
          <h1 class="font-semibold text-2xl uppercase">{{ $t("ngc_careers.benefits.title") }}</h1>
          <div class="left-side-data py-6">
            <h2 class="font-semibold ms:text-4xl text-2xl">
              {{ $t("ngc_careers.benefits.join_global_team.title") }}
            </h2>
            <p class="py-3 md:py-6 text-base">
              {{ $t("ngc_careers.benefits.join_global_team.description_1") }}
            </p>
            <p class="py-2 md:py-6 text-base">
              {{ $t("ngc_careers.benefits.join_global_team.description_2") }}
            </p>
            <p class="py-2 md:py-6 text-base">
              {{ $t("ngc_careers.benefits.join_global_team.description_3") }}
            </p>
          </div>
        </div>

        <div
          class="right-side col-span-4 grid md:grid-cols-2 grid-cols-1 gap-4"
        >
          <div class="text-center md:text-left">
            <InnovativeIcon
              class="w-16 p-3 mx-auto md:mx-0 bg-[#E7F2FF] h-16"
            />
            <div class="data py-4">
              <h2 class="font-bold text-lg">{{ $t("ngc_careers.benefits.innovative_work.title") }}</h2>
              <p class="text-base py-1">
                {{ $t("ngc_careers.benefits.innovative_work.description") }}
              </p>
            </div>
          </div>

          <div class="text-center md:text-left">
            <workLifeIcon class="w-16 mx-auto md:mx-0 p-3 bg-[#F1F7E8] h-16" />
            <div class="py-4">
              <h2 class="font-bold text-lg">{{ $t("ngc_careers.benefits.life_balance.title") }}</h2>
              <p class="text-base py-1">
                {{ $t("ngc_careers.benefits.life_balance.description") }}
              </p>
            </div>
          </div>

          <div class="text-center md:text-left">
            <CareersDvelopment
              class="w-16 mx-auto md:mx-0 p-3 bg-[#EFF2F5] h-16"
            />
            <div class="data py-4">
              <h2 class="font-bold text-lg">{{ $t("ngc_careers.benefits.career_development.title") }}</h2>
              <p class="text-base py-1">
                {{ $t("ngc_careers.benefits.career_development.description") }}
              </p>
            </div>
          </div>

          <div class="text-center md:text-left">
            <GlobalImpact class="w-16 mx-auto md:mx-0 p-3 bg-[#FFEEED] h-16" />
            <div class="data py-4">
              <h2 class="font-bold text-lg">{{ $t("ngc_careers.benefits.global_impact.title") }}</h2>
              <p class="text-base py-1">
                {{ $t("ngc_careers.benefits.global_impact.description") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      class="py-5 md:py-16 px-3 md:px-20 bg-[#F9F9F9]"
      id="career_opening"
    >
      <div class="opening_contents">
        <h1 class="font-semibold text-base text-center">{{ $t("ngc_careers.come_join_us.title") }}</h1>
        <div
          class="opening_data-1 flex content-center items-center py-4 justify-center text-center flex-wrap"
        >
          <div class="lg:w-2/4">
            <h2 class="font-bold text-3xl">{{ $t("ngc_careers.come_join_us.career_openings.title") }}</h2>
            <p class="text-base py-2">
              {{ $t("ngc_careers.come_join_us.career_openings.description") }}
            </p>
          </div>
        </div>
        <div class="opening_data-2 grid md:grid-cols-4 grid-cols-1 py-8">
          <div class="left-side col-span-1">
            <ul>
              <li class="font-bold text-lg py-2">HT & ADMINS</li>
              <li class="font-bold text-lg py-2 text-red-600">
                ENGINEERING (20)
              </li>
              <li class="font-bold text-lg py-2">SUPPORT</li>
              <li class="font-bold text-lg py-2">DESIGN</li>
              <li class="font-bold text-lg py-2">DIGITAL MARKETING</li>
            </ul>
          </div>

          <div class="right-side col-span-3">
            <div
              class="card bg-[#FFFFFF] py-4 flex flex-wrap justify-between px-6 md:items-center flex-1"
            >
              <h1 class="font-bold w-52 text-base">Wordpress Developer</h1>
              <ul class="">
                <li class="font-bold text-[#D4D4D4]">Experience</li>
                <h1 class="font-bold text-base">2 Years</h1>
              </ul>

              <ul>
                <li class="font-bold text-[#D4D4D4]">Deadline</li>
                <h1 class="font-bold text-base">2021-05-08</h1>
              </ul>
              <div class="icon self-end md:self-auto">
                <RightArrow />
              </div>
            </div>
            <br />

            <div
              class="card bg-[#FFFFFF] flex-wrap py-4 flex justify-between px-6 md:items-center flex-1"
            >
              <h1 class="font-bold w-52 text-base">JavaScript</h1>
              <ul class="">
                <li class="font-bold text-[#D4D4D4]">Experience</li>
                <h1 class="font-bold text-base">1 Year</h1>
              </ul>

              <ul>
                <li class="font-bold text-[#D4D4D4]">Deadline</li>
                <h1 class="font-bold text-base">2021-05-08</h1>
              </ul>
              <div class="icon self-end md:self-auto">
                <RightArrow />
              </div>
            </div>
            <br />

            <div
              class="card bg-[#FFFFFF] py-4 flex-wrap flex justify-between content-center px-6 md:items-center flex-1"
            >
              <h1 class="w-52 font-bold text-base">Apps Developer</h1>
              <ul class="">
                <li class="font-bold text-[#D4D4D4]">Experience</li>
                <h1 class="font-bold text-base">3 Years</h1>
              </ul>

              <ul>
                <li class="font-bold text-[#D4D4D4]">Deadline</li>
                <h1 class="font-bold text-base">2021-05-08</h1>
              </ul>
              <div class="icon self-end md:self-auto">
                <RightArrow />
              </div>
            </div>
            <br />

            <div
              class="card bg-[#FFFFFF] py-4 flex-wrap flex justify-between content-center px-6 md:items-center flex-1"
            >
              <h1 class="w-52 font-bold text-base">IOS Developer</h1>
              <ul class="">
                <li class="font-bold text-[#D4D4D4]">Experience</li>
                <h1 class="font-bold text-base">2 Years</h1>
              </ul>

              <ul>
                <li class="font-bold text-[#D4D4D4]">Deadline</li>
                <h1 class="font-bold text-base">2021-05-08</h1>
              </ul>
              <div class="icon self-end md:self-auto">
                <RightArrow />
              </div>
            </div>
            <br />

            <div
              class="card bg-[#FFFFFF] flex-wrap py-4 flex justify-between content-center px-6 md:items-center flex-1"
            >
              <h1 class="w-52 font-bold text-base">Node JS Developer</h1>
              <ul class="">
                <li class="font-bold text-[#D4D4D4]">Experience</li>
                <h1 class="font-bold text-base">3 Years</h1>
              </ul>

              <ul>
                <li class="font-bold text-[#D4D4D4]">Deadline</li>
                <h1 class="font-bold text-base">2021-05-08</h1>
              </ul>
              <div class="icon self-end md:self-auto">
                <RightArrow />
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    </section>

    <section class="flex items-center px-3 justify-center md:py-16">
      <div class="stay_in_data w-full md:w-3/4 text-center">
        <h1 class="font-bold text-3xl">{{ $t("ngc_careers.stay_touch.title") }}</h1>
        <ul class="py-2">
          <li class="text-base">
            {{ $t("ngc_careers.stay_touch.li_1") }}
          </li>
          <li class="text-base">
            {{ $t("ngc_careers.stay_touch.li_2") }}
          </li>
        </ul>

        <button class="bg-[#F76236] rounded-lg px-14 py-2 my-8 text-white">
          {{ $t("ngc_careers.stay_touch.submit_cv") }}
        </button>
      </div>

          
    </section>
  </div>
</template>

<script>
const components = {
  InnovativeIcon: () => import("@/components/icons/profile.vue"),
  workLifeIcon: () => import("@/components/icons/work-life.vue"),
  CareersDvelopment: () => import("@/components/icons/careers-development.vue"),
  GlobalImpact: () => import("@/components/icons/global-impact.vue"),
  RightArrow: () => import("@/components/icons/right-arrow.vue"),
};
export default {
  components,
};
</script>

<style scoped>
.career_home {
  background-image: url("/images/careers.webp");
  width: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
