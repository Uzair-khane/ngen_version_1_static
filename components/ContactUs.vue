<template>
  <div class="py-20 bg-[#EDECEC]">
    <div class="md:px-16 grid grid-cols-7">
      <div class="col-span-4 hidden md:block">
        <img alt="Contact us" src="/images/contact.webp" />
      </div>
      <div class="col-span-7 px-2 md:px-0 md:col-span-3">
        <div class="relative">
          <div :class="[
            $i18n.locale === 'en'
              ? '-left-20 rounded-ss-[40px]'
              : '-right-20 rounded-se-[40px]',
          ]" class="form py-8 px-3 md:px-6 top-5 bg-white md:absolute">
            <h2 class="text-[#16205F] text-2xl font-semibold">
              {{ $t("contact_us.title") }}
            </h2>
            <div class="grid gap-4 mt-4 grid-cols-2">
              <div>
                <label for="">{{ $t("contact_us.name") }}</label>
                <input class="w-full py-2 px-3 mt-3 focus:outline-none border border-slate-500 rounded-md" type="text"
                  :placeholder="$t('contact_us.enter_name')" />
              </div>
              <div>
                <label for="">{{ $t("contact_us.phone_no") }}</label>
                <input class="w-full py-2 focus:outline-none px-3 mt-3 border border-slate-500 rounded-md" type="text"
                  :placeholder="$t('contact_us.enter_phone')" />
              </div>
              <div class="col-span-2">
                <label for="">{{ $t("contact_us.email") }}</label>
                <input class="w-full py-2 focus:outline-none mt-3 px-3 border border-slate-500 rounded-md" type="text"
                  :placeholder="$t('contact_us.enter_email')" />
              </div>
            </div>
            <div class="mt-5">
              <label for="">{{ $t("contact_us.message") }}</label>
              <textarea name="" :placeholder="$t('contact_us.write_message')" id=""
                class="w-full border focus:outline-none p-3 rounded-md mt-3 border-slate-500" rows="3"></textarea>
            </div>
            <div class="mt-5 flex gap-2">
              <div class="mt-0.5">
                <input type="checkbox" class="" />
              </div>
              <p class="m-0 p-0">
                {{ $t("contact_us.privacy_policy") }}
              </p>
            </div>
            <button class="bg-[#262B3F] text-white px-10 mt-6 py-2 rounded-md">
              {{ $t("contact_us.submit") }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>
