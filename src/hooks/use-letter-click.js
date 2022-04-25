import { ref } from 'vue'
export function useLetterClick() {
  const letterClicked = ref('')
  const handleLetterChange = (letter) => {
    letterClicked.value = letter
  }
  return { letterClicked, handleLetterChange }
}
