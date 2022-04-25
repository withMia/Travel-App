import axios from 'axios'
import { reactive } from 'vue'

export function useCityData() {
  const dataSet = reactive({
    city: '',
    hotCities: [],
    cities: {}
  })
  const getCityInfo = async function () {
    let res = await axios.get('/api/city.json')
    res = res.data
    if (res.ret && res.data) {
      dataSet.city = res.data.city
      dataSet.hotCities = res.data.hotCities
      dataSet.cities = res.data.cities
    }
  }

  return { dataSet, getCityInfo }
}
