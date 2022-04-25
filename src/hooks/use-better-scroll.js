import BetterScroll from 'better-scroll'
import { ref, onMounted } from 'vue'

export function useBetterScroll(store, router, isObserveDOM) {
  let wrapper = ref(null)
  let bs = ref(null)
  const handleCityClick = (city) => {
    store.commit('changeCity', city)
    router.push('/')
  }
  onMounted(() => {
    bs.value = new BetterScroll(wrapper.value, {
      mouseWheel: true,
      click: true,
      observeDOM: isObserveDOM
    })
  })

  return [wrapper, bs, handleCityClick]
}
