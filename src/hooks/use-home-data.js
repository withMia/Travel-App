import axios from 'axios'
import { reactive } from 'vue'
import { useStore } from 'vuex'

export function useHomeData() {
  const store = useStore()
  const city = store.state.city

  const dataSet = reactive({
    lastCity: '',
    swiperList: [],
    iconList: [],
    recommendList: [],
    weekendList: []
  })
  const getHomeInfo = async function () {
    let res = await axios.get('/api/index.json?city=' + city)
    res = res.data
    if (res.ret && res.data) {
      dataSet.swiperList = res.data.swiperList
      dataSet.iconList = res.data.iconList
      dataSet.recommendList = res.data.recommendList
      dataSet.weekendList = res.data.weekendList
    }
  }
  return { city, dataSet, getHomeInfo }
}
