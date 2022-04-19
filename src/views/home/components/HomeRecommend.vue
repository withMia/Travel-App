<template>
  <div class="home-recommend">
    <div class="title">热销推荐</div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item of recommendList"
        :key="item.id"
      >
        <img :src="item.imgUrl" alt="" class="item-img" />
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommendList: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.title
  margin: 0.1rem 0
  line-height: 0.8rem
  background: #eee
  text-indent: 0.2rem
.item
  display: flex
  height: 1.9rem
  overflow: hidden
  .item-img
    width: 1.7rem
    height: 1.7rem
  .item-info
    flex: 1
    padding: 0.1rem
    min-width: 0
    .item-title
      line-height: 0.54rem
      font-size: 0.32rem
    .item-desc
      line-height: 0.4rem
      color: #ccc
      ellipsis()
    .item-button
      color: #fff
      line-height: 0.44rem
      margin top 0.2rem
      padding: 0 0.2rem
      background: #ff9300
      border-radius: 0.06rem
</style>
