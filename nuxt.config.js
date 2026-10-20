export default {
  head: {
    title: "NGEN (Next Generation Circle)",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Over the years, NGEN (Next Generation Circle) has evolved into a full-service IT solutions provider with a global presence",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
  },

  devtools: { enabled: true },
  css: ["@/assets/css/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/aos.client.js" },
    { src: "~/plugins/vue-swiper.js", ssr: false },
  ],

  server: {
    port: process.env.PORT,
  },
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  target: "static",
  loading: { color: "#00C000", throttle: 0, height: "5px" },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/tailwindcss", "@nuxt/image"],
  modules: ["cookie-universal-nuxt", "nuxt-i18n"],

  i18n: {
    langDir: "locales/",
    locales: [
      {
        name: "English",
        code: "en",
        iso: "en",
        file: "en",
      },
      {
        name: "Arabic",
        code: "ar",
        iso: "ar",
        file: "ar",
      },
    ],
    defaultLocale: "en",
    detectBrowserLanguage: {
      useCookie: true,
      alwaysRedirect: true,
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
