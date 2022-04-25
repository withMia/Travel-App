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
import { onMounted, toRefs } from 'vue'
import CityHeader from './components/CityHeader.vue'
import CitySearch from './components/CitySearch.vue'
import CityList from './components/CityList.vue'
import CityAlphabet from './components/CityAlphabet.vue'
import { useLetterClick } from '@/hooks/use-letter-click.js'
import { useCityData } from '@/hooks/use-city-data.js'

export default {
  name: 'City',
  components: { CityHeader, CitySearch, CityList, CityAlphabet },
  setup() {
    const { letterClicked, handleLetterChange } = useLetterClick()
    const { dataSet, getCityInfo } = useCityData()
    onMounted(() => {
      getCityInfo()
    })
    return {
      ...toRefs(dataSet),
      letterClicked,
      handleLetterChange
    }
  }
}
</script>
