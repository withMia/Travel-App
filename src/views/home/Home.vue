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
import { onMounted, reactive, ref, toRefs, computed, onActivated } from 'vue'
import HomeHeader from './components/HomeHeader.vue'
import HomeSwiper from './components/HomeSwiper.vue'
import HomeIcons from './components/HomeIcons.vue'
import HomeRecommend from './components/HomeRecommend.vue'
import HomeWeekend from './components/HomeWeekend.vue'
import axios from 'axios'
import { useStore } from 'vuex'

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
    const store = useStore()
    const city = computed(() => store.state.city)
    let lastCity = ref('')
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
      axios.get('/api/index.json?city=' + city.value).then(getHomeInfoSucc)
    }
    onMounted(() => {
      lastCity.value = city
      getHomeInfo()
    })
    onActivated(() => {
      if (lastCity.value !== city.value) {
        lastCity.value = city.value
        getHomeInfo()
      }
    })
    return {
      ...toRefs(dataSet),
      city,
      lastCity
    }
  }
}
</script>
