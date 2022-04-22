import { createStore } from 'vuex'
import localCache from '@/utils/cache'

let cityValue = localCache.getCache('city')
  ? localCache.getCache('city')
  : '未定位'

export default createStore({
  state: {
    city: cityValue
  },
  mutations: {
    changeCity(state, city) {
      state.city = city
      localCache.setCache('city', city)
    }
  },
  actions: {},
  modules: {}
})
