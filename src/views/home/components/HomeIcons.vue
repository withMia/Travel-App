<template>
  <div class="icons">
    <base-swiper :list="pageList">
      <template #swiper="{ rowdata }">
        <div class="icon" v-for="item of rowdata" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" />
          </div>
          <p class="icon-desc">{{ item.desc }}</p>
        </div>
      </template>
    </base-swiper>
  </div>
</template>

<script>
import BaseSwiper from '../../../base-ui/BaseSwiper.vue'
import { pageNum } from '../../../utils/count-page-number.js'
import { computed } from 'vue'

export default {
  name: 'HomeIcons',
  components: { BaseSwiper },
  props: {
    iconList: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const pageList = computed(() => {
      return pageNum(props.iconList, 8)
    })
    return { pageList }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl';
@import '~styles/mixins.styl';
.icons :deep(.swiper)
  width: 100%
  height: 0
  padding-bottom: 56%
.icons :deep(.swiper-pagination-bullet-active)
  background: $bgColor !important
.icons
  margin-top:0.1rem
  .icon
    position: relative
    overflow: hidden
    float: left
    width: 25%
    height: 0
    padding-bottom: 25%
    .icon-img
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: 0.44rem
      box-sizing: border-box
      padding: 0.1rem
      .icon-img-content
        display: block
        margin: 0 auto
        height: 100%
    .icon-desc
      line-height: 0.44rem
      height: 0.44rem
      position: absolute
      left: 0.12rem
      right: 0.12rem
      bottom: 0
      color: $darkTextColor
      text-align: center
      ellipsis()
</style>
