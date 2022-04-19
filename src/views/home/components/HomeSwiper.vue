<template>
  <div class="wrapper">
    <base-swiper :swiperConfig="swiperConfig">
      <template #swiper="{ rowdata }">
        <img class="swiper-img" :src="rowdata.imgUrl" alt="图片无法加载" />
      </template>
    </base-swiper>
  </div>
</template>

<script>
import BaseSwiper from '@/base-ui/BaseSwiper.vue'
export default {
  name: 'HomeSwiper',
  props: {
    swiperConfig: {
      type: Object
    }
  },

  components: {
    BaseSwiper
  },
  setup() {}
}
</script>

<style lang="stylus" scoped>
.wrapper :deep(.swiper-pagination-bullet-active)
  background: red !important
.wrapper
  overflow: hidden
  width: 100%
  // height: 0
  // padding-bottom: 62.5%
  .swiper-img
    width:100%;
</style>
