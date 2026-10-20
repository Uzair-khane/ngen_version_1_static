<template>
  <div class="">
    <Banner :bgImage="bgImage" :title="$t('our_products.title')" />
    <section class="px-3 md:px-10 mt-4">
      <div class="text-base md:text-lg">
        <p class="py-4 md:text-justify">
          {{ $t("our_products.description_1") }}
        </p>
        <p class="md:text-justify">
          {{ $t("our_products.description_2") }}
        </p>
      </div>
    </section>

    <!-- EXPLORE OUR LEADING PRODUCTS -->

    <section class="py-7 md:py-4" id="our_leading_products">
      <div class="px-3 text-base md:text-lg md:px-10">
        <h1 class="font-semibold text-xl md:text-2xl">
          {{ $t("our_products.leading_products.title") }}
        </h1>
        <p class="py-2">
          {{ $t("our_products.leading_products.description") }}
        </p>
      </div>
      <div class="products_data px-3 md:px-10">
        <div>
          <div
            class="grid md:grid-cols-5 mb-4 place-items-center grid-cols-1 gap-4 md:gap-8"
          >
            <div class="col-span-3">
              <h2 class="font-bold md:text-5xl text-3xl">{{ $t("our_products.news_hunt.title") }}</h2>
              <ul class="text-base md:text-lg">
                <li class="py-3 md:text-justify">
                  <span class="font-semibold text-2xl">{{ $t("our_products.news_hunt.span") }} </span> 
                  {{ $t("our_products.news_hunt.description_1") }}
                </li>
                <li class="md:text-justify">
                  {{ $t("our_products.news_hunt.description_2") }}
                </li>
              </ul>
            </div>
            <div class="col-span-2">
              <nuxt-img
                data-aos="fade-up"
                src="/images/products/product-1.png"
                class="w-full"
                alt=""
              />
            </div>
          </div>
          <div class="px-2 relative">
            <nuxt-img
              data-aos="fade-bottom"
              src="/images/products/product-2.webp"
              alt=""
            />
          </div>
        </div>

        <div class="">
          <div
            class="grid mb-4 md:grid-cols-5 place-items-center grid-cols-1 gap-8"
          >
            <div class="col-span-3">
              <h2 class="font-bold md:text-5xl text-3xl">{{ $t("our_products.nalyst.title") }}</h2>
              <ul class="text-base md:text-lg">
                <li class="py-3">
                  <span class="font-semibold text-2xl md:text-justify"
                    >{{ $t("our_products.nalyst.span") }}
                  </span>
                  {{ $t("our_products.nalyst.description_1") }}
                </li>
                <li class="md:text-justify">
                  {{ $t("our_products.nalyst.description_2") }}
                </li>
              </ul>
            </div>
            <div class="col-span-2">
              <nuxt-img
                data-aos="fade-bottom"
                src="/images/products/product-3.png"
                class="w-full"
                alt=""
              />
            </div>
          </div>

          <div class="product_image-1 product-image relative md:px-16 px-8">
            <nuxt-img
              data-aos="fade-up"
              src="/images/products/product-4.webp"
              alt=""
            />
          </div>
        </div>

        <div class="">
          <div
            class="grid mb-4 md:grid-cols-5 place-items-center grid-cols-1 gap-8"
          >
            <div class="col-span-3">
              <h2 class="font-bold md:text-5xl text-3xl">{{ $t("our_products.qaaren.title") }}</h2>
              <ul class="text-base md:text-lg">
                <li class="py-3 md:text-justify">
                  <span class="font-semibold text-2xl">{{ $t("our_products.qaaren.span") }} </span>
                  {{ $t("our_products.qaaren.description_1") }}
                </li>
                <li class="md:text-justify">
                  {{ $t("our_products.qaaren.description_2") }}
                </li>
              </ul>
            </div>
            <div class="col-span-2">
              <nuxt-img
                data-aos="fade-bottom"
                src="/images/products/product-5.png"
                class="w-full"
                alt=""
              />
            </div>
          </div>

          <div class="product_image-3 product-image relative md:px-16 px-8">
            <nuxt-img
              data-aos="fade-up"
              src="/images/products/product-6.webp"
              alt=""
            />
          </div>
        </div>

        <div class="">
          <div
            class="project-data-2 mb-4 place-items-center grid md:grid-cols-5 grid-cols-1 gap-8"
          >
            <div class="col-span-3">
              <h2 class="font-bold md:text-5xl text-3xl">{{ $t("our_products.find_1.title") }}</h2>
              <ul class="text-base md:text-lg">
                <li class="py-3 md:text-justify">
                  <span class="font-semibold text-2xl">{{ $t("our_products.find_1.span") }} </span>
                  {{ $t("our_products.find_1.description_1") }}
                </li>
                <li class="md:text-justify">
                  {{ $t("our_products.find_1.description_2") }}
                </li>
              </ul>
            </div>
            <div class="col-span-2">
              <nuxt-img
                data-aos="fade-up"
                src="/images/products/product-7.png"
                class="w-full"
                alt=""
              />
            </div>
          </div>

          <div class="product_image-3 product-image relative md:px-16 px-8">
            <nuxt-img
              data-aos="fade-up"
              src="/images/products/product-8.webp"
              alt=""
            />
          </div>
        </div>

        <div class="">
          <div
            class="grid mb-4 md:grid-cols-5 place-items-center grid-cols-1 gap-8"
          >
            <div class="col-span-3">
              <h2 class="font-bold md:text-5xl text-3xl">{{ $t("our_products.tims.title") }}</h2>
              <ul class="text-base md:text-lg">
                <li class="py-3">
                  <span class="font-semibold text-2xl md:text-justify"
                    >{{ $t("our_products.tims.span") }}</span
                  >
                  {{ $t("our_products.tims.description_1") }}
                </li>
                <li class="text-justify">
                  {{ $t("our_products.tims.description_2") }}
                </li>
              </ul>
            </div>
            <div class="col-span-2">
              <nuxt-img
                data-aos="fade-up"
                src="/images/products/product-9.png"
                class="w-full"
                alt=""
              />
            </div>
          </div>

          <div class="product_image-3 product-image relative md:px-16 px-8">
            <nuxt-img
              data-aos="fade-up"
              src="/images/products/product-10.webp"
              alt=""
            />
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
  WebDevelopment: () => import("@/components/technologies/web.vue"),
  MobileDevelopment: () => import("@/components/technologies/mobile.vue"),
  Animation: () => import("@/components/technologies/animation.vue"),
  Join: () => import("@/components/common/Join.vue"),
};

export default {
  layout: "services",
  components,
  data() {
    return {
      bgImage: "/images/animation.webp",
    };
  },
};
</script>
