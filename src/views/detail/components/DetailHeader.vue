<template>
  <div>
    <router-link class="header-abs" tag="div" to="/" v-show="showAbs">
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
export default {
  name: 'DetailHeader',
  setup() {
    const showAbs = ref(true)
    const opacityStyle = ref({ opacity: 0 })
    const handleScroll = () => {
      const top =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.scrollY
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        opacityStyle.value = { opacity }
        showAbs.value = false
      } else {
        showAbs.value = true
      }
    }
    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })
    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })
    return {
      showAbs,
      opacityStyle
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'

.header-abs
  position: absolute
  left: 0.2rem
  top: 0.2rem
  width: 0.8rem
  height: 0.8rem
  line-height: 0.8rem
  border-radius: 50%
  text-align center
  background: rgba(0,0,0,0.8)
  .header-abs-back
    color: #fff
    font-size: 0.4rem
.header-fixed
  z-index: 2
  position: fixed
  top: 0
  left: 0
  right: 0
  line-height: $headerHeight
  height: $headerHeight
  background: $bgColor
  overflow: hidden
  color: #fff
  text-align: center
  .header-fixed-back
    position: absolute
    top: 0
    left: 0
    color: #fff
    width: 0.64rem
    text-align: center
    font-size: 0.4rem
</style>
