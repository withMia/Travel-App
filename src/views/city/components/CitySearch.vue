<template>
  <div class="city-search">
    <input class="search-input" type="text" placeholder="请输入城市名或拼音" />
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
  .city-search
    height: 0.72rem
    background: $bgColor
    padding: 0 0.1rem
    .search-input
      box-sizing: border-box
      padding: 0 0.1rem
      height 0.62rem
      line-height: 0.62rem
      text-align: center
      width: 100%
</style>
