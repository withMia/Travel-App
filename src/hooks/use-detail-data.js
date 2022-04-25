import axios from 'axios'
import { reactive } from 'vue'
import { useRoute } from 'vue-router'

export function useDetailData() {
  let route = useRoute()
  let dataSet = reactive({
    sightName: '',
    bannerImg: '',
    gallaryImgs: [],
    categoryList: []
  })

  const getDetailInfo = async function () {
    let res = await axios.get('/api/detail.json', {
      params: {
        id: route.params.id
      }
    })
    res = res.data
    if (res.ret && res.data) {
      dataSet.sightName = res.data.sightName
      dataSet.bannerImg = res.data.bannerImg
      dataSet.gallaryImgs = res.data.gallaryImgs
      dataSet.categoryList = res.data.categoryList
    }
  }

  return { dataSet, getDetailInfo }
}
