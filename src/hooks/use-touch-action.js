import { onUpdated } from 'vue'
export function useTouchAction(startY, list, { emit }) {
  let touchTime = null
  let touchTimer = null
  let touchStatus = false
  let timer = null

  const handleTouchStart = () => {
    touchStatus = true
    touchTime = 0
    touchTimer = setInterval(() => {
      touchTime = touchTime + 1
    }, 500)
  }
  const handleTouchMove = (e) => {
    if (touchStatus) {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        const touchY = e.touches[0].clientY - 79
        const index = Math.floor((touchY - startY.value) / 16)
        if (index >= 0 && index < list.value.length) {
          emit('scrollList', list.value[index])
        }
      }, 8)
    }
  }
  const handleTouchEnd = (e) => {
    touchStatus = true
    let el = e.currentTarget
    clearInterval(touchTimer)
    if (touchTime < 1) {
      if (el) {
        el.click()
      }
    }
  }

  return [handleTouchStart, handleTouchMove, handleTouchEnd]
}
