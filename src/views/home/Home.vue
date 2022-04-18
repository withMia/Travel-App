<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper :swiperConfig="swiperList"></home-swiper>
    <!-- <div>测试</div> -->
  </div>
</template>

<script>
import HomeHeader from './components/HomeHeader.vue'
import HomeSwiper from './components/HomeSwiper.vue'
import { swiperList } from './config/swiperConfig.js'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper
  },
  setup() {
    return {
      swiperList
    }
  }
}
</script>

<style scoped></style>
