<template>
  <div class="">
    <Banner :bgImage="bgImage" :title="$t('header.insight.news_&_events')" />
    <div
      class="grid grid-cols-1 md:grid-cols-2 place-items-center mt-6 gap-4 md:gap-10 px-3 md:px-10"
    >
      <div>
        <nuxt-img src="/images/newsevents.webp" alt="" />
      </div>
      <div class="max-w-1/2 text-base md:text-lg">
        <div class="flex justify-between">
          <p class="text-red-800 font-semibold">{{ $t("news_events.trending") }}</p>
          <span><img src="/images/trending.png" alt="" /></span>
        </div>
        <a
          href="https://www.nytimes.com/2024/06/23/technology/personaltech/ai-phones-computers-privacy.html
"
          class="font-semibold hover:text-blue-400 transition-all text-2xl mt-2"
        >
        {{ $t("news_events.phones_computer_data.title") }}
        </a>
        <p class="mt-3">
          {{ $t("news_events.phones_computer_data.description_1") }}
        </p>
        <p class="mt-2">
          {{ $t("news_events.phones_computer_data.description_2") }}
        </p>
        <div class="flex gap-10 mt-3">
          <p class="text-sm">{{ $t("news_events.phones_computer_data.time") }}</p>
          <span class="text-sm">{{ $t("news_events.phones_computer_data.time_news") }}</span>
        </div>
      </div>
    </div>

    <div class="browse-news mt-10 px-3 md:px-10">
      <h2 class="font-semibold mb-3 text-2xl">{{ $t("news_events.it_news") }}</h2>
      <div class="grid grid-cols-1 gap-5 md:gap-8 md:grid-cols-3">
        <div class="shadow-md">
          <a
            target="_blank"
            href="https://www.dawn.com/news/1763612/artificial-intelligence-can-run-world-better-than-humans"
          >
            <nuxt-img class="w-full h-64" src="/images/news-1.png" alt="" />
          </a>
          <div class="p-4">
            <a
              href="https://www.dawn.com/news/1763612/artificial-intelligence-can-run-world-better-than-humans
"
              target="_blank"
              class="font-semibold hover:text-blue-400 transition-all text-lg"
            >
              {{ $t("news_events.news_1.title") }}
            </a>
            <p class="mt-2 text-sm">
              {{ $t("news_events.news_1.description") }}
            </p>
            <p class="text-sm mt-3">{{ $t("news_events.news_1.news_name") }}</p>
          </div>
          <div class="flex px-4 py-3 justify-between border-t border-slate-300">
            <p class="text-sm">{{ $t("news_events.news_1.time") }}</p>
            <div class="flex gap-1 items-center">
              <NewsSave class="w-4" />
              <small>{{ $t("news_events.news_1.share") }}</small>
            </div>
          </div>
        </div>
        <div class="shadow-md">
          <a
            target="_blank"
            href="https://english.alarabiya.net/News/world/2024/07/03/brazil-demands-meta-stop-taking-user-data-to-train-ai- "
          >
            <nuxt-img class="w-full h-64" src="/images/news-2.png" alt=""
          /></a>
          <div class="p-4">
            <a
              href="https://english.alarabiya.net/News/world/2024/07/03/brazil-demands-meta-stop-taking-user-data-to-train-ai- "
              class="font-semibold text-lg hover:text-blue-400 transition-all"
              target="_blank"
            >
            {{ $t("news_events.news_2.title") }}
            </a>
            <p class="mt-2 text-sm">
              {{ $t("news_events.news_2.description") }}
            </p>
            <p class="text-sm mt-3">{{ $t("news_events.news_2.news_name") }}</p>
          </div>
          <div class="flex px-4 py-3 justify-between border-t border-slate-300">
            <p class="text-sm">{{ $t("news_events.news_2.time") }}</p>
            <div class="flex gap-1 items-center">
              <NewsSave class="w-4" />
              <small>{{ $t("news_events.news_2.share") }}</small>
            </div>
          </div>
        </div>
        <div class="shadow-md">
          <a
            target="_blank"
            href="https://www.khaleejtimes.com/business/google-parent-in-talks-to-buy-cybersecurity-startup-wiz-for-23-billion "
          >
            <nuxt-img class="w-full h-64" src="/images/news-3.png" alt="" />
          </a>
          <div class="p-4">
            <a
              href="https://www.khaleejtimes.com/business/google-parent-in-talks-to-buy-cybersecurity-startup-wiz-for-23-billion 
"
              class="font-semibold text-lg hover:text-blue-400 transition-all"
              target="_blank"
            >
            {{ $t("news_events.news_3.title") }}
            </a>
            <p class="mt-2 text-sm">
              {{ $t("news_events.news_3.description") }}
            </p>
            <p class="text-sm mt-3">{{ $t("news_events.news_3.news_name") }}</p>
          </div>
          <div class="flex px-4 py-3 justify-between border-t border-slate-300">
            <p class="text-sm">{{ $t("news_events.news_3.time") }}</p>
            <div class="flex gap-1 items-center">
              <NewsSave class="w-4" />
              <small>{{ $t("news_events.news_3.share") }}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="events mt-8 md:mt-14 px-3 md:px-10">
      <h2 class="font-semibold mb-3 text-2xl">{{ $t("news_events.events") }}</h2>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-4">
        <div class="shadow-md rounded-2xl">
          <a
            target="_blank"
            href="https://www.dawn.com/news/1763612/artificial-intelligence-can-run-world-better-than-humans"
          >
            <nuxt-img class="w-full h-52" src="/images/event-1.png" alt="" />
          </a>
          <div class="p-4 flex gap-3">
            <div>
              <h3 class="text-blue-500 font-semibold">{{ $t("news_events.event_news_1.month") }}</h3>
              <h3 class="text-lg font-semibold">{{ $t("news_events.event_news_1.date") }}</h3>
            </div>
            <div>
              <h3 class="font-semibold text-lg">
                {{ $t("news_events.event_news_1.title") }}
              </h3>
              <p class="mt-2 text-slate-400">
                {{ $t("news_events.event_news_1.description") }}
              </p>
            </div>
          </div>
        </div>
        <div class="shadow-md rounded-2xl">
          <a target="_blank" href="https://dublintechsummit.tech/">
            <nuxt-img class="w-full h-52" src="/images/event-2.png" alt="" />
          </a>
          <div class="p-4 flex gap-3">
            <div>
              <h3 class="text-blue-500 font-semibold">{{ $t("news_events.event_news_2.month") }}</h3>
              <h3 class="text-lg font-semibold">{{ $t("news_events.event_news_2.date") }}</h3>
            </div>
            <div>
              <a
                href="https://dublintechsummit.tech/
"
                target="_blank"
                class="font-semibold hover:text-blue-400 transition-all text-lg"
              >
              {{ $t("news_events.event_news_2.title") }}
              </a>
              <p class="mt-2 text-slate-400">
                {{ $t("news_events.event_news_2.description") }}
              </p>
            </div>
          </div>
        </div>
        <div class="shadow-md rounded-2xl">
          <a target="_blank" href="https://www.mwcbarcelona.com/">
            <nuxt-img class="w-full h-52" src="/images/event-3.png" alt="" />
          </a>
          <div class="p-4 flex gap-3">
            <div>
              <h3 class="text-blue-500 font-semibold">{{ $t("news_events.event_news_3.month") }}</h3>
              <h3 class="text-lg font-semibold">{{ $t("news_events.event_news_3.date") }}</h3>
            </div>
            <div>
              <a
                href="https://www.mwcbarcelona.com/"
                target="_blank"
                class="font-semibold text-lg hover:text-blue-400 transition-all"
              >
              {{ $t("news_events.event_news_3.title") }}
              </a>
              <p class="mt-2 text-slate-400">
                {{ $t("news_events.event_news_3.description") }}
              </p>
            </div>
          </div>
        </div>
        <div class="shadow-md rounded-2xl">
          <a target="_blank" href="https://www.gitex.com/ ">
            <nuxt-img class="w-full h-52" src="/images/event-4.png" alt="" />
          </a>
          <div class="p-4 flex gap-3">
            <div>
              <h3 class="text-blue-500 font-semibold">{{ $t("news_events.event_news_4.month") }}</h3>
              <h3 class="text-lg font-semibold">{{ $t("news_events.event_news_4.date") }}</h3>
            </div>
            <div>
              <a
                target="_blank"
                href="https://www.gitex.com/ "
                class="font-semibold text-lg hover:text-blue-400 transition-all"
                >{{ $t("news_events.event_news_4.title") }}</a
              >
              <p class="mt-2 text-slate-400">
                {{ $t("news_events.event_news_4.description") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Join />
  </div>
</template>
<script>
const components = {
  Technologies: () => import("@/components/technologies/animation.vue"),
  Join: () => import("@/components/common/Join.vue"),
  Banner: () => import("@/components/common/ServicesBanner.vue"),
  NewsSave: () => import("@/components/icons/news-save.vue"),
};

export default {
  layout: "services",
  components,
  data() {
    return {
      bgImage: "/images/news-banner.webp",
    };
  },
};
</script>
