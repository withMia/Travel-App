<template>
  <base-swiper :swiperConfig="swiperConfig"></base-swiper>
</template>

<script>
import BaseSwiper from '@/base-ui/BaseSwiper.vue'
export default {
  name: 'HomeSwiper',
  props: {
    swiperConfig: {
      type: Array
    }
  },

  components: {
    BaseSwiper
  },
  setup() {}
}
</script>

<style></style>
