<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <base-swiper :list="imgList" :paginationOptions="paginationOptions">
        <template #swiper="{ rowdata }">
          <img
            class="gallary-img"
            :src="rowdata.imgUrl"
            alt="图片无法加载"
          /> </template
      ></base-swiper>
    </div>
  </div>
</template>

<script>
import BaseSwiper from './BaseSwiper.vue'
export default {
  name: 'BaseGallary',
  components: { BaseSwiper },
  props: {
    imgList: {
      type: Array,
      default: () => []
    }
  },
  emits: ['close'],
  setup(props, { emit }) {
    const paginationOptions = {
      pagination: { type: 'fraction' },
      observeParents: true,
      observer: true
    }
    const handleGallaryClick = () => {
      emit('close')
    }

    return { paginationOptions, handleGallaryClick }
  }
}
</script>

<style lang="stylus" scoped>
.container :deep(.swiper)
  overflow: inherit
.wrapper :deep(.swiper-pagination)
  color: #fff !important
  bottom: -1rem
.container
  display: flex
  flex-direction: column
  justify-content: center
  z-index: 99
  position: fixed
  left: 0
  right: 0
  top: 0
  bottom: 0
  background: #000
  .wrapper
    width:100%
    height: 0
    padding-bottom: 100%
    .gallary-img
      width: 100%
</style>
