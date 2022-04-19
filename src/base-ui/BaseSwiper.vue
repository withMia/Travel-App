<template>
  <swiper
    :modules="modules"
    :initial-slide="1"
    :loop="true"
    :autoplay="false"
    :pagination="{ clickable: true }"
  >
    <swiper-slide v-for="item of list" :key="item.id">
      <slot name="swiper" :rowdata="item"> </slot>
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
    list: {
      type: Array,
      required: true
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      modules: [Pagination]
    }
  }
}
</script>

<style lang="stylus" scoped></style>
