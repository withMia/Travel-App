<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img
        class="banner-img"
        src="https://youimg1.c-ctrip.com/target/fd/tg/g6/M01/3F/0C/CggYslcMiZaAMKb5AFIii5F_U5g388.jpg"
        alt=""
      />
      <div class="banner-info">
        <div class="banner-title">大连圣亚海洋世界（AAAA景区）</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe63e;</span>
          39
        </div>
      </div>
    </div>
    <base-gallary
      @close="handleGallaryClose"
      v-show="showGallary"
      :imgList="imgList"
    ></base-gallary>
  </div>
</template>

<script>
import BaseGallary from '@/base-ui/BaseGallary.vue'
import { ref } from 'vue'

export default {
  name: 'DetailBanner',
  components: { BaseGallary },
  setup() {
    const showGallary = ref(false)

    const imgList = [
      {
        id: 1,
        imgUrl:
          'https://youimg1.c-ctrip.com/target/fd/tg/g6/M01/3F/0C/CggYslcMiZaAMKb5AFIii5F_U5g388.jpg'
      },
      {
        id: 2,
        imgUrl:
          'https://youimg1.c-ctrip.com/target/fd/tg/g6/M01/3F/0C/CggYslcMiZaAMKb5AFIii5F_U5g388.jpg'
      },
      {
        id: 3,
        imgUrl:
          'https://youimg1.c-ctrip.com/target/fd/tg/g6/M01/3F/0C/CggYslcMiZaAMKb5AFIii5F_U5g388.jpg'
      }
    ]

    const handleBannerClick = () => {
      showGallary.value = true
    }

    const handleGallaryClose = () => {
      showGallary.value = false
    }
    return {
      imgList,
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
