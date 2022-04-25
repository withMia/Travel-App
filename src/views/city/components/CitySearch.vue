<template>
  <div>
    <div class="search">
      <input
        v-model="keyword"
        class="search-input"
        type="text"
        placeholder="请输入城市名或拼音"
      />
    </div>
    <div class="search-content" v-show="keyword.length" ref="wrapper">
      <div class="search-list">
        <ul>
          <li
            class="search-item border-bottom"
            v-for="item of list"
            :key="item.id"
            @click="handleCityClick(item.name)"
          >
            {{ item.name }}
          </li>
          <li class="search-item border-bottom" v-show="hasNoData">
            没有找到匹配数据
          </li>
          <li class="search-item border-bottom" v-show="list.length">
            共有 {{ list.length }} 条搜索结果
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { watch, ref, computed, onDeactivated } from 'vue'
import { useStore } from 'vuex'
import router from '@/router'
import { useBetterScroll } from '@/hooks/use-better-scroll.js'

export default {
  name: 'CitySearch',
  props: {
    cities: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const store = useStore()
    let keyword = ref('')
    const hasNoData = computed(() => {
      return !list.value.length
    })
    let timer = null
    let list = ref([])
    watch(keyword, () => {
      if (timer) {
        clearTimeout(timer)
      }
      if (!keyword.value) {
        list.value = []
        return
      }
      timer = setTimeout(() => {
        const result = []
        for (let i in props.cities) {
          props.cities[i].forEach((item) => {
            if (
              item.spell.indexOf(keyword.value) > -1 ||
              item.name.indexOf(keyword.value) > -1
            ) {
              result.push(item)
            }
          })
        }
        list.value = result
      }, 100)
    })
    onDeactivated(() => {
      keyword.value = ''
    })
    const [wrapper, bs, handleCityClick] = useBetterScroll(store, router, true)
    return {
      keyword,
      list,
      timer,
      wrapper,
      bs,
      hasNoData,
      handleCityClick
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
.border-bottom
  &:before
    border-color: #ccc
.search
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
.search-content
  position: absolute
  top: 1.58rem
  left: 0
  right: 0
  bottom: 0
  overflow: hidden
  z-index: 1
  height: 100%
  .search-list
    .search-item
      line-height 0.62rem
      padding-left: 0.2rem
      color: #666
      background: #eee
      box-sizing: border-box
      width: 100%
</style>
