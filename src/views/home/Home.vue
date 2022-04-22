<template>
  <div class="home">
    <home-header :city="city"></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
  </div>
</template>

<script>
//reactive, toRefs,
import { onMounted, reactive, toRefs } from 'vue'
import HomeHeader from './components/HomeHeader.vue'
import HomeSwiper from './components/HomeSwiper.vue'
import HomeIcons from './components/HomeIcons.vue'
import HomeRecommend from './components/HomeRecommend.vue'
import HomeWeekend from './components/HomeWeekend.vue'

// import { swiperConfig } from './config/swiperConfig.js'
// import { recommendConfig } from './config/recommendConfig.js'
import axios from 'axios'

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
    let dataSet = reactive({
      city: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    })
    const getHomeInfoSucc = function (res) {
      res = res.data
      if (res.ret && res.data) {
        dataSet.city = res.data.city
        dataSet.swiperList = res.data.swiperList
        dataSet.iconList = res.data.iconList
        dataSet.recommendList = res.data.recommendList
        dataSet.weekendList = res.data.weekendList
      }
    }
    const getHomeInfo = function () {
      axios.get('/api/index.json').then(getHomeInfoSucc)
    }
    onMounted(() => {
      getHomeInfo()
    })

    return {
      ...toRefs(dataSet)
    }
  }
}
</script>

<style scoped></style>
