import { defineStore } from 'pinia'

export const useCartStore = defineStore('yourStore', {
  state: () => ({
    open: false
  }),

  actions: {
    setopen(value: boolean) {
      this.open = value
    }
  }
})
