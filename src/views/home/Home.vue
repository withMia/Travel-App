<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper :swiperConfig="swiperConfig"></home-swiper>
    <home-icons></home-icons>
    <home-recommend :recommendConfig="recommendConfig"></home-recommend>
    <home-weekend :recommendConfig="recommendConfig"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/HomeHeader.vue'
import HomeSwiper from './components/HomeSwiper.vue'
import HomeIcons from './components/HomeIcons.vue'
import HomeRecommend from './components/HomeRecommend.vue'
import HomeWeekend from './components/HomeWeekend.vue'

import { swiperConfig } from './config/swiperConfig.js'
import { recommendConfig } from './config/recommendConfig.js'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  setup() {
    return {
      swiperConfig,
      recommendConfig
    }
  }
}
</script>

<style scoped></style>
