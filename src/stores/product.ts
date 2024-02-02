import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProductsStore = defineStore(
  'products',
  () => {
    const products = ref([
      {
        id: 1,
        name: 'Nike Shoes',
        color: 'Mix Color',
        price: '$35',
        imageSrc: 'https://images4.alphacoders.com/108/1085299.jpg'
      }
    ])

    return { products }
  },
  {
    persist: true
  }
)
