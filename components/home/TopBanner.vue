<template>
  <section id="home" class="home h-[70vh] md:h-screen px-3 md:px-16 flex items-center text-white w-full">
    <div class="md:max-w-[80%]">
      <h2 ref="h1" :class="[!isTextCompleted ? 'banner-heading' : '']"
        class="font-semibold relative !leading-snug md:text-6xl text-3xl">

      </h2>
      <p ref="DrivingGrowth" class="italic mt-4  md:text-2xl text-[14px]">
        {{ $t("home.driving_growth") }}
      </p>
      <nuxt-link :to="localePath('/contact')"
        class="mt-12 font-medium inline-block hover:bg-orange-600 transition-all text-white bg-[#F76236] rounded-xl px-12 py-3">
        {{ $t("home.get_in_touch") }}
      </nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isTextCompleted: false,
      index: 0,
      heading: this.$t("home.home_emp_business")
    }
  },
  mounted() {
    this.appendText()
  }, methods: {
    appendText() {
      if (this.index < this.heading.length) {
        this.$refs.h1.innerHTML += this.heading.charAt(this.index)
        this.index = this.index + 1
        setTimeout(this.appendText, 40);
      }
      if (this.index === this.heading.length) {
        this.isTextCompleted = true
      }
    }
  }
}



</script>


<style scoped>
.home {
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url('/images/bg.webp');
  background-position: center;
  background-size: cover;
}

.banner-heading:after {
  content: "";
  width: 2px;
  background-color: #F76236;
  border: 2px solid #F76236;
}
</style>
