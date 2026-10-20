<template>
  <div class="">
    <Banner :bgImage="bgImage" :title="$t('who_we_are.title')" />
    <section class="section_1 text-base #section_1 mt-6">
      <div
        class="section_data px-3 md:px-10 grid md:grid-cols-2 gap-7 md:gap-10 text-justify"
      >
        <div>
          <nuxt-img
            src="/images/who-we-are-image.webp"
            class="h-96 md:h-[430px] w-full"
            alt=""
          />
        </div>
        <div class="content flex flex-wrap">
          <p>
            {{ $t("who_we_are.description_1") }}
          </p>
          <p>
            {{ $t("who_we_are.description_2") }}
          </p>
          <p>
            {{ $t("who_we_are.description_3") }}
          </p>
        </div>
      </div>
    </section>

    <section class="py-10 md:py-16 px-3 md:px-12">
      <div class="grid md:grid-cols-5 gap-7 md:gap-14 text-justify">
        <div class="col-span-1 md:col-span-3">
          <div data-aos="fade-right" class="inline-flex items-center gap-2">
            <OurMissionIcon class="w-7 h-7" />
            <h1 class="font-mono md:text-2xl text-4xl font-bold">
              {{ $t("who_we_are.our_mission.title") }}
            </h1>
          </div>
          <p class="text-base py-6">
            {{ $t("who_we_are.our_mission.description") }}
          </p>
          <div data-aos="fade-right" class="inline-flex items-center gap-2">
            <OurVision class="w-7 h-7" />
            <h1 class="font-mono md:text-2xl text-4xl font-bold">
              {{ $t("who_we_are.our_vission.title") }}
            </h1>
          </div>
          <p class="text-base text-justify py-6">
            {{ $t("who_we_are.our_vission.description") }}
          </p>
        </div>

        <div class="col-span-1 md:col-span-2">
          <nuxt-img
            src="/images/our-mission.webp"
            class="h-[380px] w-full"
            alt=""
          />
        </div>
      </div>
    </section>

    <section class="px-3 md:px-16 bg-[#ECECEC] py-10">
      <div>
        <h1 data-aos="fade-up" class="md:text-4xl font-bold text-2xl py-2">
          {{ $t("who_we_are.our_team.title") }}
        </h1>
        <p class="text-base py-2">
          {{ $t("who_we_are.our_team.description_1") }}
        </p>
        <p class="text-base py-2">
          {{ $t("who_we_are.our_team.description_2") }}
        </p>
      </div>
      <h1 data-aos="fade-right" class="font-bold md:text-2xl text-xl mt-4">
        Executive Leadership Team
      </h1>
      <div class="grid md:grid-cols-4 gap-5 py-4">
        <div
          v-for="(executive, index) in executive"
          :key="index"
          data-aos="fade-up"
          class="group max-w-sm bg-white shadow-xl overflow-hidden rounded-tr-[25px]"
        >
          <div
            class="relative p-6 text-center rounded-tl-[0px] rounded-tr-[0px] rounded-bl-[25px] rounded-br-[-150px] overflow-hidden"
          >
            <!-- Base Gradient -->
            <div
              class="absolute inset-0 bg-gradient-to-r from-blue-400 via-pink-500 to-purple-600 transition-opacity duration-700 ease-in-out"
            ></div>

            <!-- Hover Gradient -->
            <div
              class="absolute inset-0 bg-gradient-to-b from-blue-500/80 to-pink-500/80 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out"
            ></div>

            <!-- Content -->
            <div class="relative z-10 flex items-center justify-center">
              <div
                class="w-40 h-40 shadow-lg bg-[rgb(228,233,240)] rounded-full overflow-hidden border-4 border-white"
              >
                <nuxt-img
                  :src="executive.image"
                  alt=""
                  class="w-full h-full rounded-full border-4 border-[#4070f4]"
                />
              </div>
            </div>
          </div>
          <div class="text-center mt-10 mb-6">
            <h2 class="text-lg font-semibold text-gray-800">
              {{ executive.name }}
            </h2>
            <p class="text-sm text-gray-600 mt-1">
              {{ executive.designation }}
            </p>
          </div>
        </div>
      </div>

      <!-- IT Team -->
      <h1 data-aos="fade-right" class="font-bold md:text-2xl text-xl mt-4">
        IT Leadership Team
      </h1>
      <div class="grid md:grid-cols-4 gap-5 py-4">
        <div
          v-for="(IT_Team, index) in it_team"
          :key="index"
          data-aos="fade-up"
          class="group max-w-sm bg-white shadow-xl overflow-hidden rounded-tr-[25px]"
        >
          <div
            class="relative p-6 text-center rounded-tl-[0px] rounded-tr-[0px] rounded-bl-[25px] rounded-br-[-150px] overflow-hidden"
          >
            <!-- Base Gradient -->
            <div
              class="absolute inset-0 bg-gradient-to-r from-blue-400 via-pink-500 to-purple-600 transition-opacity duration-700 ease-in-out"
            ></div>

            <!-- Hover Gradient -->
            <div
              class="absolute inset-0 bg-gradient-to-b from-blue-500/80 to-pink-500/80 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out"
            ></div>

            <!-- Content -->
            <div class="relative z-10 flex items-center justify-center">
              <div
                class="w-40 h-40 bg-[rgb(228,233,240)] rounded-full overflow-hidden border-4 border-white"
              >
                <nuxt-img
                  :src="IT_Team.image"
                  alt=""
                  class="w-full h-full rounded-full border-4 border-[#4070f4]"
                />
              </div>
            </div>
          </div>
          <div class="text-center mt-10 mb-6">
            <h2 class="text-lg font-semibold text-gray-800">
              {{ IT_Team.name }}
            </h2>
            <p class="text-sm text-gray-600 mt-1">{{ IT_Team.designation }}</p>
            <!-- <button class="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
      View More
    </button> -->
          </div>
        </div>
      </div>

      <!-- IT Intern Team -->
      <h1 data-aos="fade-right" class="font-bold md:text-2xl text-xl mt-4">
        IT Intern Team
      </h1>
      <div class="grid md:grid-cols-4 gap-5 py-4">
        <div
          v-for="(intern, index) in intern"
          :key="index"
          data-aos="fade-up"
          class="group max-w-sm bg-white shadow-xl overflow-hidden rounded-tr-[25px]"
        >
          <div
            class="relative p-6 text-center rounded-tl-[0px] rounded-tr-[0px] rounded-bl-[25px] rounded-br-[-150px] overflow-hidden"
          >
            <!-- Base Gradient -->
            <div
              class="absolute inset-0 bg-gradient-to-r from-blue-400 via-pink-500 to-purple-600 transition-opacity duration-700 ease-in-out"
            ></div>

            <!-- Hover Gradient -->
            <div
              class="absolute inset-0 bg-gradient-to-b from-blue-500/80 to-pink-500/80 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out"
            ></div>

            <!-- Content -->
            <div class="relative z-10 flex items-center justify-center">
              <div
                class="w-40 h-40 bg-[rgb(228,233,240)] rounded-full overflow-hidden border-4 border-white"
              >
                <nuxt-img
                  :src="intern.image"
                  alt=""
                  class="w-full h-full rounded-full border-4 border-[#4070f4]"
                />
              </div>
            </div>
          </div>
          <div class="text-center mt-10 mb-6">
            <h2 class="text-lg font-semibold text-gray-800">
              {{ intern.name }}
            </h2>
            <p class="text-sm text-gray-600 mt-1">{{ intern.designation }}</p>
            <!-- <button class="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
      View More
    </button> -->
          </div>
        </div>
      </div>
    </section>

    <section class="px-3 md:px-16 mt-10">
      <div>
        <div class="insights_contents">
          <h1 data-aos="fade-up" class="md:text-4xl font-bold text-2xl">
            {{ $t("who_we_are.insights.title") }}
          </h1>
          <p class="text-base py-2 font-semibold">
            {{ $t("who_we_are.insights.description_1") }}
          </p>
          <p class="font-semibold text-base py-2">
            {{ $t("who_we_are.insights.description_2") }}
          </p>
        </div>
        <div class="grid md:grid-cols-3 relative grid-cols-1 gap-4">
          <nuxt-img
            v-for="data in insigts"
            @click="showImage(data.image, data.title)"
            :key="data.id"
            data-aos="fade-up"
            :src="data.image"
            class="md:cursor-pointer"
            :alt="data.title"
          >
          </nuxt-img>
          <div
            v-if="selectedImage"
            class="absolute md:flex w-full h-full hidden justify-center bg-[rgba(0,0,0,0.7)]"
          >
            <span
              @click="hideImage"
              class="bg-slate-600 cursor-pointer text-white absolute right-2 top-2 text-2xl flex justify-center items-center w-10 h-10 rounded-full"
            >
              <CloseIcon class="w-5 h-5 fill-white" />
            </span>
            <img class="h-full md:w-3/4" :src="selectedImage" alt="" />
            <p class="absolute bottom-5 text-white">
              {{ title }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <Join />
  </div>
</template>
<script>
const components = {
  Banner: () => import("@/components/common/ServicesBanner.vue"),
  OurMissionIcon: () => import("@/components/icons/our-mission.vue"),
  OurVision: () => import("@/components/icons/our-vision.vue"),
  Join: () => import("@/components/common/Join.vue"),
  CloseIcon: () => import("@/components/icons/close.vue"),
};

export default {
  layout: "services",
  components,
  data() {
    return {
      bgImage: "/images/who-we-are.webp",
      selectedImage: "",
      title: "",
      executive: [
        {
          id: 1,
          name: "Dr. Naveed Ahmad",
          designation: "Chief Executive Officer",
          image: "/images/user.webp",
        },
        {
          id: 90,
          name: "Saira Naseem",
          designation: "Chief Technology Officer",
          image: "/images/user.webp",
        },
        {
          id: 2,
          name: "Adnan Ahmad",
          designation: "Business Development Manager",
          image: "/images/user.webp",
        },
        {
          id: 3,
          name: "Muhammad Asif",
          designation: "Leads & Relationship Director",
          image: "/images/user.webp",
        },
      ],
      it_team: [
        {
          id: 1,
          name: "Imran Azim",
          designation: "IT Team Lead",
          image: "/images/team/imran.webp",
        },
        {
          id: 2,
          name: "Hazrat Bilal",
          designation: "Project Manager",
          image: "/images/team/bilal.webp",
        },
        {
          id: 3,
          name: "Murtaza Khan",
          designation: "Backend Developer",
          image: "/images/team/murtaza.webp",
        },
        {
          id: 4,
          name: "Faisal Khan",
          designation: "Frontend Team Lead",
          image: "/images/team/faisal.webp",
        },
        {
          id: 5,
          name: "Shoaib Bangash",
          designation: "Frontend Developer",
          image: "/images/team/shoaib.webp",
        },
        {
          id: 6,
          name: "Gulfam Khan",
          designation: "Frontend Developer",
          image: "/images/team/gulfam.webp",
        },
        
        {
          id: 7,
          name: "Arsalan Khan",
          designation: "Senior Android App Developer",
          image: "/images/team/arsalan.webp",
        },
        {
          id: 8,
          name: "Suleman Afzal",
          designation: "Android App Developer",
          image: "/images/team/suleman.webp",
        },
        {
          id: 9,
          name: "Rafi Khan",
          designation: "Senior IOS Developer",
          image: "/images/team/rafi1.webp",
        },
        {
          id: 10,
          name: "Nigar Gulalay",
          designation: "Senior Designer (UI/UX)",
          image: "/images/user.webp",
        },
        {
          id: 11,
          name: "Rayyan Amjad",
          designation: "Senior Designer (Graphics & UI/UX)",
          image: "/images/team/rayyan.webp",
        },
        {
          id: 12,
          name: "M Salman Khan",
          designation: "Video Editor",
          image: "/images/team/salman.webp",
        },
        {
          id: 13,
          name: "Yousha Khan",
          designation: "Graphics Designer",
          image: "/images/user.webp",
        },
        
      ],
      intern:[
      {
          id: 1,
          name: "Tayyab Khan",
          designation: "  Backend Developer",
          image: "/images/team/tayyab.webp",
        },
        {
          id: 2,
          name: "Rahim Khan",
          designation: "Frontend Developer",
          image: "/images/team/raheem.webp",
        },
        {
          id: 3,
          name: "Zeerak Khan Khattak",
          designation: " Frontend Developer",
          image: "/images/team/zeerak.webp",
        },
        {
          id: 4,
          name: "Hussain Khan",
          designation: " Frontend Developer",
          image: "/images/team/hussain.webp",
        },
        {
          id: 5,
          name: "Hamad Khan",
          designation: " Graphics Designer",
          image: "/images/team/hammad.webp",
        },
        
      ],
      insigts: [
        {
          id: 1,
          title:
            "Khyber Pakhtunkhwa Investment Facilitation Center KPIFC Portal Final Launch",
          image: "/images/insight-1.webp",
        },
        {
          id: 2,
          title:
            "Khyber Pakhtunkhwa Investment Facilitation Center KPIFC Portal Final Meeting - SMEDA",
          image: "/images/insight-2.webp",
        },
        {
          id: 3,
          title:
            "Training Management and  Information System UNODC Pakistan - Training Session",
          image: "/images/insight-3.webp",
        },
        {
          id: 4,
          title:
            "AMZ Wordspy Software Training Session - Institute of Management Sciences - Pakistan",
          image: "/images/insight-4.webp",
        },
        {
          id: 5,
          title:
            "AMZ Wordspy Software Training Session - Institute of Management Sciences - Pakistan",
          image: "/images/insight-5.webp",
        },
        {
          id: 6,
          title:
            "Laboratory Management Information System LMIS - Veterinary Research Institute Pakistan ",
          image: "/images/insight-6.webp",
        },
      ],
    };
  },
  methods: {
    showImage(image, title) {
      this.selectedImage = image;
      this.title = title;
    },
    hideImage() {
      this.selectedImage = "";
      this.title = "";
    },
  },
};
</script>
<!-- 
<style scoped>
#overlay::before,
#overlay::after {
  content: "";
  position: absolute;
  right: 0;
  bottom: 152px;
  height: 40px;
  width: 40px;
  background-color: #3b82f6;
}
#overlay::after {
  border-radius: 0 25px 0 0;
  background-color: white;
}
@media (max-width: 768px) {
  #overlay::before,
  #overlay::after {
    right: 0;
    bottom: 100px;
  }

}
</style> -->
