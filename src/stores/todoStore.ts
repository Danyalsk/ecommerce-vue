import { ref } from 'vue'
import { acceptHMRUpdate, defineStore } from 'pinia'

export const useTodoStore = defineStore(
  'todo',
  () => {
    const todoListItems = ref<string[]>([])

    return { todoListItems }
  },
  {
    persist: true
  }
)

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTodoStore, import.meta.hot))
}
