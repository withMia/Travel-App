<template>
  <div class="city-header">
    城市选择
    <router-link to="/">
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'

.city-header
  height: $headerHeight
  line-height: $headerHeight
  overflow: hidden
  color: #fff
  text-align center
  background: $bgColor
  .header-back
    position: absolute
    top: 0
    left: 0
    width: 0.64rem
    text-align: center
    font-size: 0.4rem
    color: #fff
</style>
