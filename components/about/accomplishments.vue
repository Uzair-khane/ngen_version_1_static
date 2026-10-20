<template>
  <div class="text-base md:text-lg">
    <section
      class="career_home h-[700px] md:h-screen px-5 justify-center flex items-center"
    >
      <div class="text-white max-w-[750px]">
        <h1
          class="font-mono font-bold text-white md:text-4xl text-3xl text-center"
        >
          OUR ACCOMPLISHMENTS
        </h1>
        <div class="space-y-3 mt-4">
          <p class="text-white text-wrap">
            At Next Generation Circle, we take immense pride in our
            accomplishments, which reflect our commitment to innovation,
            quality, and client satisfaction.
          </p>
          <p>
            Over the years, we have successfully completed numerous projects,
            transforming ideas into tangible, impactful solutions across various
            industries. Our accolades include industry awards, certifications,
            and recognition for our excellence in software development, digital
            consultancy, and IT solutions.
          </p>
          <p>
            Each achievement is a testament to our team's expertise, dedication,
            and collaborative spirit. We continuously strive to set new
            benchmarks and drive success for our clients and partners.
          </p>
        </div>
      </div>
    </section>

    <section class="py-8 md:py-10 px-3 md:px-16">
      <div class="">
        <h1 class="font-bold text-[#003654] text-xl md:text-2xl">
          Projects and Products Success
        </h1>
        <p class="mt-2 md:text-justify">
          At Next Generation Circle, our track record of successful projects and
          innovative products speaks volumes about our dedication to excellence
          and client satisfaction. We have delivered a wide array of
          cutting-edge solutions that address complex business challenges and
          drive tangible results.
        </p>
        <p class="mt-5 md:text-justify">
          Our portfolio includes transformative software applications, advanced
          data science initiatives, and robust IT infrastructure projects that
          have consistently exceeded client expectations. Each success story
          underscores our commitment to quality, innovation, and collaborative
          problem-solving. We take pride in turning visionary concepts into
          impactful realities, ensuring our clients achieve their strategic
          objectives and thrive in a competitive marketplace.
        </p>
      </div>
      <nuxt-img class="mt-6" src="/images/accomplish-projects.png" alt="" />
    </section>

    <section class="gallery mt-7 px-3 md:px-16">
      <div class="text-center">
        <h3 class="font-semibold text-2xl">Photo Gallery</h3>
        <p class="mt-2">
          Loremxt of the printing and typesetting industry. Lorem Ipsum ha.
        </p>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 mt-5">
        <nuxt-img
          data-aos="fade-right"
          class="col-span-2 row-span-1"
          src="/images/gallery/gallery-1.png"
          alt=""
        />
        <nuxt-img
          data-aos="fade-up"
          class="md:col-span-1 row-span-1"
          src="/images/gallery/gallery-2.png"
          alt=""
        />
        <nuxt-img
          data-aos="fade-bottom"
          class="md:col-span-1 row-span-1"
          src="/images/gallery/gallery-3.png"
          alt=""
        />
        <nuxt-img
          data-aos="fade-right"
          class="md:col-span-1 row-span-1"
          src="/images/gallery/gallery-4.png"
          alt=""
        />
        <nuxt-img
          data-aos="fade-up"
          class="md:col-span-1 row-span-2"
          src="/images/gallery/gallery-5.png"
          alt=""
        />
        <nuxt-img
          data-aos="fade-bottom"
          class="md:col-span-1 block md:hidden row-span-1"
          src="/images/gallery/gallery-9.png"
          alt=""
        />

        <nuxt-img
          data-aos="fade-up"
          class="col-span-2 row-span-1"
          src="/images/gallery/gallery-6.png"
          alt=""
        />
        <nuxt-img
          data-aos="fade-left"
          class="md:col-span-1 row-span-1"
          src="/images/gallery/gallery-7.png"
          alt=""
        />
        <nuxt-img
          data-aos="fade-right"
          class="md:col-span-1 row-span-1"
          src="/images/gallery/gallery-8.png"
          alt=""
        />
        <nuxt-img
          data-aos="fade-bottom"
          class="md:col-span-1 hidden md:block row-span-1"
          src="/images/gallery/gallery-9.png"
          alt=""
        />
      </div>
    </section>
    <Join />
  </div>
</template>

<script>
const components = {
  InnovativeIcon: () => import("@/components/icons/profile.vue"),
  workLifeIcon: () => import("@/components/icons/work-life.vue"),
  CareersDvelopment: () => import("@/components/icons/careers-development.vue"),
  GlobalImpact: () => import("@/components/icons/global-impact.vue"),
  RightArrow: () => import("@/components/icons/right-arrow.vue"),
  Join: () => import("@/components/common/Join.vue"),
};
export default {
  components,
};
</script>

<style scoped>
.career_home {
  background-image: url("/images/accomplisment.png");
  width: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
