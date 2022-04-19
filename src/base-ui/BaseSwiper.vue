<template>
  <swiper
    :modules="modules"
    :slides-per-view="swiperConfig.perView"
    :loop="true"
    :pagination="{ clickable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide v-for="item of swiperConfig.list" :key="item.id">
      <slot name="swiper" :rowdata="item">
        <!-- <img class="swiper-img" :src="item.imgUrl" alt="图片无法加载" /> -->
      </slot>
    </swiper-slide>
  </swiper>
</template>
<script>
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue.js'
import 'swiper/swiper-bundle.min.css'

export default {
  name: 'BaseSwiper',
  props: {
    swiperConfig: {
      type: Object,
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

<style lang="stylus" scoped></style>
