<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
  </div>
</template>

<script>
import { onMounted, toRefs, onActivated } from 'vue'
import HomeHeader from './components/HomeHeader.vue'
import HomeSwiper from './components/HomeSwiper.vue'
import HomeIcons from './components/HomeIcons.vue'
import HomeRecommend from './components/HomeRecommend.vue'
import HomeWeekend from './components/HomeWeekend.vue'
import { useHomeData } from '../../hooks/use-home-data'
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
    const { city, dataSet, getHomeInfo } = useHomeData()
    onMounted(() => {
      dataSet.lastCity = city
      getHomeInfo()
    })
    onActivated(() => {
      if (dataSet.lastCity !== city) {
        dataSet.lastCity = city
        getHomeInfo()
      }
    })
    return {
      ...toRefs(dataSet)
    }
  }
}
</script>
