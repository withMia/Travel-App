<template>
  <div class="city-header">
    城市选择
    <router-link to="/">
      <div class="iconfont back-icon">&#xe624;</div>
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
  line-height: $headerHeight
  height: $headerHeight
  background: $bgColor
  overflow: hidden
  color: #fff
  text-align: center
  .back-icon
    position: absolute
    top: 0
    left: 0
    color: #fff
    width: 0.64rem
    text-align: center
    font-size: 0.4rem
</style>
