<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg" alt="" />
      <div class="banner-info">
        <div class="banner-title">{{ sightName }}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe63e;</span>
          {{ gallaryImgs.length }}
        </div>
      </div>
    </div>
    <base-fade>
      <base-gallary
        @close="handleGallaryClose"
        v-show="showGallary"
        :imgList="gallaryImgs"
      ></base-gallary>
    </base-fade>
  </div>
</template>

<script>
import BaseGallary from '@/base-ui/BaseGallary.vue'
import BaseFade from '@/base-ui/BaseFade.vue'

import { ref } from 'vue'

export default {
  name: 'DetailBanner',
  components: { BaseGallary, BaseFade },
  props: {
    gallaryImgs: { type: Array, default: () => [] },
    bannerImg: { type: String },
    sightName: { type: String }
  },
  setup() {
    const showGallary = ref(false)
    const handleBannerClick = () => {
      showGallary.value = true
    }
    const handleGallaryClose = () => {
      showGallary.value = false
    }
    return {
      showGallary,
      handleBannerClick,
      handleGallaryClose
    }
  }
}
</script>

<style lang="stylus" scoped>
.banner
  position: relative
  overflow: hidden
  height: 0
  padding-bottom: 55%
  .banner-img
    width: 100%
  .banner-info
    display: flex
    position: absolute
    left: 0
    right: 0
    bottom: 0
    line-height: 0.6rem
    height: 0.6rem
    color: #fff
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)) /* 标准的语法 */
    .banner-title
      flex: 1
      font-size: 0.32rem
      padding: 0 0.2rem
    .banner-number
      line-height: 0.32rem
      height: 0.32rem
      margin-top: 0.14rem
      padding: 0 0.4rem
      border-radius: 0.2rem
      background: rgba(0,0,0,0.8)
      font-size: 0.24rem
      .banner-icon
        font-size: 0.24rem
</style>
