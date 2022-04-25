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
import { onMounted, toRefs, onActivated } from 'vue'
import { useDetailData } from '../../hooks/use-detail-data'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  setup() {
    const { dataSet, getDetailInfo } = useDetailData()
    onMounted(() => {
      getDetailInfo()
    })
    onActivated(() => {
      getDetailInfo()
    })

    return {
      ...toRefs(dataSet)
    }
  }
}
</script>

<style lang="stylus" scoped>
.content
  height 50rem
</style>
