<template>
  <ul class="Alphabet">
    <li
      class="Alphabet-item"
      v-for="item of letters"
      :key="item"
      @click="handleLetterClick"
      @touchstart.prevent="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      :ref="(el) => (eleNodes[item] = el)"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script>
import { computed, onBeforeUpdate, onMounted, onUpdated, ref } from 'vue'
import { useTouchAction } from '@/hooks/use-touch-action.js'
export default {
  name: 'CityAlphabet',
  props: {
    cities: { type: Object, required: true }
  },
  emits: ['scrollList'],
  setup(props, { emit }) {
    const eleNodes = ref([])
    let startY = ref(0)
    const letters = computed(() => {
      const letters = []
      for (let i in props.cities) {
        letters.push(i)
      }
      return letters
    })
    onUpdated(() => {
      startY.value = eleNodes.value['A'].offsetTop
    })
    let [handleTouchStart, handleTouchMove, handleTouchEnd] = useTouchAction(
      startY,
      letters,
      { emit }
    )
    const handleLetterClick = (e) => {
      emit('scrollList', e.target.innerText)
    }
    return {
      handleLetterClick,
      handleTouchStart,
      handleTouchMove,
      handleTouchEnd,
      startY,
      letters,
      eleNodes
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
