<template>
  <ul class="Alphabet">
    <li
      class="Alphabet-item"
      @click="handleLetterClick"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      v-for="item of letters"
      :key="item"
      :ref="
        (el) => {
          divNodes[item] = el
        }
      "
    >
      {{ item }}
    </li>
  </ul>
</template>

<script>
import { computed, onBeforeUpdate, onUpdated, ref } from 'vue'
export default {
  name: 'CityAlphabet',
  props: {
    cities: { type: Object, required: true }
  },
  emits: ['scrollList'],
  setup(props, { emit }) {
    let divNodes = ref({})
    let touchStatus = false
    let startY = 0
    let timer = null
    onBeforeUpdate(() => {
      divNodes.value = {}
    })
    const letters = computed(() => {
      const letters = []
      for (let i in props.cities) {
        letters.push(i)
      }
      return letters
    })
    onUpdated(() => {
      startY = divNodes.value['A'].offsetTop
    })
    const handleTouchStart = () => {
      touchStatus = true
    }
    const handleTouchMove = (e) => {
      if (touchStatus) {
        if (timer) {
          clearTimeout(timer)
        }
        timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - startY) / 16)
          if (index >= 0 && index < letters.value.length) {
            emit('scrollList', letters.value[index])
          }
        }, 16)
      }
    }
    const handleTouchEnd = () => {
      touchStatus = true
    }
    const handleLetterClick = (e) => {
      console.log(e.target.innerText)
      emit('scrollList', e.target.innerText)
    }
    return {
      handleLetterClick,
      touchStatus,
      handleTouchStart,
      handleTouchMove,
      handleTouchEnd,
      letters,
      divNodes
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
.Alphabet
  position: absolute
  top: 1.58rem
  bottom: 0
  right: 0
  display: flex
  flex-direction: column
  justify-content: center
  width: 0.4rem
  color: $bgColor
  cursor: pointer
  .Alphabet-item
    margin: 0.02rem 0
</style>
