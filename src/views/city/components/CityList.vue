<template>
  <div class="city-list" ref="wrapper">
    <div class="content">
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{ currentCity }}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div
            class="button-wrapper"
            @click="handleCityClick(item.name)"
            v-for="item of hotCities"
            :key="item.id"
          >
            <div class="button">
              {{ item.name }}
            </div>
          </div>
        </div>
      </div>
      <div
        class="area"
        v-for="(item, key) of cities"
        :key="key"
        :ref="(el) => (divNodes[key] = el)"
      >
        <div class="title border-topbottom">{{ key }}</div>
        <div class="item-list">
          <div
            @click="handleCityClick(subItem.name)"
            class="item border-bottom"
            v-for="subItem of item"
            :key="subItem.id"
          >
            {{ subItem.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, watch } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { useBetterScroll } from '@/hooks/use-better-scroll.js'
export default {
  name: 'CityList',
  props: {
    city: { type: String, required: true },
    hotCities: { type: Array, required: true },
    cities: { type: Object, required: true },
    letterClicked: { type: String }
  },
  setup(props) {
    const store = useStore()
    const router = useRouter()
    const currentCity = computed(() => store.state.city)
    let divNodes = ref([])

    const [wrapper, bs, handleCityClick] = useBetterScroll(store, router, false)
    watch(
      () => props.letterClicked,
      () => {
        if (props.letterClicked && bs.value) {
          const element = divNodes.value[props.letterClicked]
          bs.value.scrollToElement(element)
        }
      }
    )
    return { wrapper, bs, divNodes, store, handleCityClick, currentCity }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
.border-topbottom
  &:before
    border-color: #ccc
  &:after
    border-color: #ccc
.border-bottom
  &:before
    border-color: #ccc
.city-list
  overflow: hidden
  position: absolute
  top: 1.58rem
  left: 0
  bottom: 0
  right: 0
  .content
    height: 26600px
    .title
      line-height: 0.54rem
      background: #eee
      padding-left: 0.2rem
      color: #666
      font-size: 0.26rem
    .button-list
      padding: 0.1rem 0.6 rem 0.1rem 0.1rem
      overflow: hidden
      .button-wrapper
        float: left
        width:33.33%
        .button
          text-align: center
          margin: 0.1rem
          padding: 0.1rem 0
          border: 0.02rem  solid #ccc
          border-radius: 0.06rem
          cursor: pointer

    .item-list
      .item
        line-height: 0.54rem
        color: #666
        padding-left: 0.2rem
        cursor: pointer
</style>
