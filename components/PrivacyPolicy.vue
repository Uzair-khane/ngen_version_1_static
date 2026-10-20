<template>
  <div class="">
    <Banner :bgImage="bgImage" title="PRIVACY POLICY" />
    <div class="px-3 mb-10 text-base md:text-lg md:px-10 mt-6">
      <div class="flex justify-center">
        <img class="max-w-[450px]" src="/images/privacy.png" alt="" />
      </div>
      <div class="mt-8">
        <h2 class="font-semibold text-xl md:text-2xl">Introduction</h2>
        <p class="mt-2">
          Next Generation Circle (“Next Generation Circle”, “we”, “us”, or
          “our”) is committed to protecting the privacy of your personal data
          collected through our software and services. This statement summarizes
          the policies of Next Generation Circle regarding the collection, use,
          and transfer of your personal data, and the security measures we
          employ to protect such data.
        </p>
      </div>
      <div class="privacy mt-10">
        <div data-aos="fade-up">
          <div class="flex items-center">
            <img
              class="w-20"
              src="/images/privacy-policy/information-collect.png"
              alt=""
            />
            <h3 class="font-semibold text-lg md:text-xl">
              The Information we Collect
            </h3>
          </div>
          <p class="mt-3">
            We will not sell, share, or rent this information to others in ways
            different from what is disclosed in this Privacy Policy. Next
            Generation Circle and its affiliates are the sole owners of the
            information collected through our software and services.
          </p>
          <p class="mt-3">
            Next Generation Circle reserves its right to share your personal
            information with its licensees and affiliates.
          </p>
        </div>
        <div data-aos="fade-up" class="mt-8 md:mt-12">
          <div class="flex items-center">
            <img
              class="w-20"
              src="/images/privacy-policy/information-security.png"
              alt=""
            />
            <h3 class="font-semibold text-lg md:text-xl">
              Information Security and Integrity
            </h3>
          </div>
          <p class="mt-3">
            To prevent unauthorized access, maintain the accuracy of data, and
            ensure proper use of information, Next Generation Circle has put in
            place appropriate physical, electronic, and managerial security
            procedures to safeguard all information collected online.
          </p>
          <p class="mt-3">
            We will not process your personal information in a way that is
            incompatible with what is outlined in this Privacy Policy, and will
            use our best efforts to ensure that data is accurate, complete,
            current, and reliable for its intended use. We also will use our
            best efforts to protect your information from loss, misuse,
            unauthorized access, disclosure, alteration, and destruction.
          </p>
        </div>
        <div data-aos="fade-up" class="mt-8 md:mt-12">
          <div class="flex items-center">
            <img class="w-20" src="/images/privacy-policy/cookies.png" alt="" />
            <h3 class="font-semibold text-lg md:text-xl">Cookies</h3>
          </div>
          <p class="mt-3">
            A cookie is a piece of data stored on the user’s hard drive
            containing information associated with the user. We use cookies to
            be reminded of who you are and to access your account information
            (stored on our computers) in order to deliver you a better and more
            personalized service.
          </p>
          <p class="mt-3">
            This cookie is set when you register. Cookies are also used to
            estimate the number of visitors to our site. Each browser accessing
            our website is given a unique cookie that is then used to determine
            repeat usage versus initial usage.
          </p>
        </div>

        <div data-aos="fade-up" class="mt-8 md:mt-12">
          <div class="flex items-center">
            <img class="w-20" src="/images/privacy-policy/links.png" alt="" />
            <h3 class="font-semibold text-lg md:text-xl">Links</h3>
          </div>
          <p class="mt-3">
            Please be aware that our software and services may contain links to
            third-party websites. This Privacy Policy applies solely to
            information collected by Next Generation Circle. This Privacy Policy
            does not apply to, nor is Next Generation Circle responsible for,
            any content, privacy practices, or conduct of such websites.
          </p>
          <p class="mt-3">
            We encourage our users to be aware when they leave our site and to
            read the privacy policies of each and every website, including those
            that collect personally identifiable information.
          </p>
        </div>

        <div data-aos="fade-up" class="mt-8 md:mt-12">
          <div class="flex items-center">
            <img
              class="w-20"
              src="/images/privacy-policy/ip-address.png"
              alt=""
            />
            <h3 class="font-semibold text-lg md:text-xl">IP Adresses</h3>
          </div>
          <p class="mt-3">
            We use IP addresses for purposes of system administration, to
            analyze trends, administer the site, track users' movements within
            the site, and gather broad demographic information for aggregate
            use. IP addresses are not linked to personally identifiable
            information.
          </p>
        </div>

        <div data-aos="fade-up" class="mt-8 md:mt-12">
          <div class="flex items-center">
            <img
              class="w-20"
              src="/images/privacy-policy/change-privacy.png"
              alt=""
            />
            <h3 class="font-semibold text-lg md:text-xl">
              Change the Privacy Policy
            </h3>
          </div>
          <p class="mt-3">
            Next Generation Circle reserves the right to modify or amend this
            Privacy Policy at any time and for any reason. Please check back to
            this Privacy Policy from time to time to stay informed.
          </p>
          <p class="mt-3">
            Nothing contained in this Privacy Policy is intended to create a
            contract or agreement between Next Generation Circle and any user
            visiting the site or providing identifying information in any form.
            If you have any questions about your personal information, please
            contact us.
          </p>
        </div>
        <p class="mt-7 md:mt-10">
          If you feel that this company is not abiding by its posted privacy
          policy, you should contact us at <b> info@nextgcircle.com </b>
        </p>
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
};

export default {
  layout: "services",
  components,
  data() {
    return {
      bgImage: "/images/privacy-policy.jpg",
    };
  },
};
</script>
