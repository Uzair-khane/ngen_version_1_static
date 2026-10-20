<template>
  <div class="">
    <Banner :bgImage="bgImage" :title="$t('our_projects.title')" />
    <div class="px-3 md:px-10 mt-6 text-base md:text-lg">
      <p>
        {{ $t("our_projects.description_1") }}
      </p>
      <p class="mt-7">
        {{ $t("our_projects.description_2") }}
      </p>
    </div>
    <div class="projects mt-7">
      <div class="bg-[#F4F4F4]">
        <h2 class="font-semibold uppercase text-center text-xl py-4">
          {{ $t("our_projects.project_portfolio") }}
        </h2>
      </div>
      <swiper class="mt-6 px-5">
        <swiper-slide v-for="(project, index) in projects" :key="index">
          <div class="flex text-center px-4 md:px-32 flex-col justify-center items-center">
            <h2 class="font-semibold text-2xl">{{ project.title }}</h2>
            <p>{{ project.description }}</p>
          </div>
          <nuxt-img :src="project.image" :alt="project.title" />
        </swiper-slide>
        <button slot="button-prev" class="swiper-button-prev"></button>
        <button slot="button-next" class="swiper-button-next"></button>
      </swiper>
    </div>
    <Join />
  </div>
</template>
<script>
const components = {
  Banner: () => import("@/components/common/ServicesBanner.vue"),
  Join: () => import("@/components/common/Join.vue"),
};

export default {
  layout: "services",
  components,
  data() {
    return {
      bgImage: "/images/animation.webp",
      projects: [
        {
          title: this.$t("our_projects.project_1.title"),
          description: this.$t("our_projects.project_1.description"),
          image: "/images/projects/kpTourism.webp",
        },
        {
          title: this.$t("our_projects.project_2.title"),
          description: this.$t("our_projects.project_2.description"),
          image: "/images/projects/kpFacility.webp",
        },
        {
          title: this.$t("our_projects.project_3.title"),
          description: this.$t("our_projects.project_3.description"),
          image: "/images/projects/laboratory-management.webp",
        },
        {
          title: this.$t("our_projects.project_4.title"),
          description: this.$t("our_projects.project_4.description"),
          image: "/images/projects/device-x.webp",
        },
        {
          title: this.$t("our_projects.project_5.title"),
          description: this.$t("our_projects.project_5.description"),
          image: "/images/projects/wde.webp",
        },
        {
          title: this.$t("our_projects.project_6.title"),
          description: this.$t("our_projects.project_6.description"),
          image: "/images/projects/mis.webp",
        },
        {
          title: this.$t("our_projects.project_7.title"),
          description: this.$t("our_projects.project_7.description"),
          image: "/images/projects/amz.webp",
        },
        {
          title: this.$t("our_projects.project_8.title"),
          description: this.$t("our_projects.project_8.description"),
          image: "/images/projects/document-digitilization.webp",
        },
      ],

    };
  },
  mounted() { },
};
</script>

<style scoped>
.swiper-button-next,
.swiper-button-prev {
  top: 12%;
}
</style>
