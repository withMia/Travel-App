<template>
  <div class="wrapper">
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="50"
      :loop="true"
      :pagination="{ clickable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="item of swiperConfig" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="图片无法加载" />
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue.js'
import 'swiper/swiper-bundle.min.css'

export default {
  name: 'BaseSwiper',
  props: {
    swiperConfig: {
      type: Array,
      required: true
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper)
    }
    const onSlideChange = () => {
      console.log('slide change')
    }
    return {
      onSwiper,
      onSlideChange,
      modules: [Pagination]
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background: #fff !important
.wrapper
  overflow: hidden
  width: 100%
  // 宽高比 防抖
  // height: 0
  // padding-bottom:60%
  .swiper-img
    width:100%;
</style>
