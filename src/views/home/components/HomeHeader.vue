<template>
  <div class="home-header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{ city }} <span class="iconfont arrow-down-icon">&#xeb6d;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: {
      type: String
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'

.home-header
  display: flex
  line-height: $headerHeight
<<<<<<< HEAD
=======
  height: $headerHeight
>>>>>>> main
  background-color: $bgColor
  color: #fff
  .header-left
    width 0.64rem
    float: left
    .back-icon
      text-align: center
      font-size: 0.4rem
  .header-input
    flex: 1
    background-color: #fff
    border-radius: 0.1rem
    margin-top: 0.12rem
    margin-left: 0.2rem
    padding-left:0.1rem
    height: 0.62rem
    line-height: 0.62rem
    color: #ccc
  .header-right
    width: 1.24rem
    float: right
    text-align: center
    color: #fff
    .arrow-down-icon
      font-size: 0.24rem
</style>
