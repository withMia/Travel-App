<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper :swiperConfig="swiperConfig"></home-swiper>
    <home-icons></home-icons>
  </div>
</template>

<script>
import HomeHeader from './components/HomeHeader.vue'
import HomeSwiper from './components/HomeSwiper.vue'
import HomeIcons from './components/HomeIcons.vue'

import { swiperConfig } from './config/swiperConfig.js'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons
  },
  setup() {
    return {
      swiperConfig
    }
  }
}
</script>

<style scoped></style>
