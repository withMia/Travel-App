<template>
  <div>
    <detail-banner
      :bannerImg="bannerImg"
      :gallaryImgs="gallaryImgs"
      :sightName="sightName"
    ></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="categoryList"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/DetailBanner.vue'
import DetailHeader from './components/DetailHeader.vue'
import DetailList from './components/DetailList.vue'
import { reactive, onMounted, toRefs, onActivated } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'

export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  setup() {
    let route = useRoute()
    let dataSet = reactive({
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      categoryList: []
    })
    const getDetailInfoSucc = function (res) {
      res = res.data
      if (res.ret && res.data) {
        dataSet.sightName = res.data.sightName
        dataSet.bannerImg = res.data.bannerImg
        dataSet.gallaryImgs = res.data.gallaryImgs
        dataSet.categoryList = res.data.categoryList
      }
    }
    const getDetailInfo = function () {
      axios
        .get('/api/detail.json', {
          params: {
            id: route.params.id
          }
        })
        .then(getDetailInfoSucc)
    }

    onMounted(() => {
      getDetailInfo()
    })
    onActivated(() => {
      getDetailInfo()
    })

    return {
      ...toRefs(dataSet),
      route
    }
  }
}
</script>

<style lang="stylus" scoped>
.content
  height 50rem
</style>
