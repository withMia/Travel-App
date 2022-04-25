<template>
  <div class="city">
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list
      :letterClicked="letterClicked"
      :city="city"
      :hotCities="hotCities"
      :cities="cities"
    ></city-list>
    <city-alphabet
      :cities="cities"
      @scrollList="handleLetterChange"
    ></city-alphabet>
  </div>
</template>

<script>
import axios from 'axios'
import { reactive, onMounted, toRefs, ref } from 'vue'
import CityHeader from './components/CityHeader.vue'
import CitySearch from './components/CitySearch.vue'
import CityList from './components/CityList.vue'
import CityAlphabet from './components/CityAlphabet.vue'
export default {
  name: 'City',
  components: { CityHeader, CitySearch, CityList, CityAlphabet },
  setup() {
    let dataSet = reactive({
      city: '',
      hotCities: [],
      cities: {}
    })
    const getCityInfoSucc = function (res) {
      res = res.data
      if (res.ret && res.data) {
        dataSet.city = res.data.city
        dataSet.hotCities = res.data.hotCities
        dataSet.cities = res.data.cities
      }
    }
    const getCityInfo = function () {
      axios.get('/api/city.json').then(getCityInfoSucc)
    }
    onMounted(() => {
      getCityInfo()
    })

    const letterClicked = ref()
    const handleLetterChange = (letter) => {
      letterClicked.value = letter
    }
    return {
      ...toRefs(dataSet),
      handleLetterChange,
      letterClicked
    }
  }
}
</script>
