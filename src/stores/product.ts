import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProductsStore = defineStore(
  'products',
  () => {
    const products = ref([
      {
        id: '1',
        name: 'Zip Tote Basket',
        price: '$140',
        rating: 4,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg',
        description: `<p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>`
      }
    ])

    return { products }
  },
  {
    persist: true
  }
)
