<template>
  <div class="wrapper">
    <base-swiper :list="swiperList">
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
    swiperList: {
      type: Array,
      required: true
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
  background: #eee !important
.wrapper
  overflow: hidden
  width: 100%
  height: 0
  padding-bottom: 31.5%
  .swiper-img
    width:100%;
</style>
