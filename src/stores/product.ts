import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

interface Product {
  id: string
  name: string
  price: number
  imageSrc: string
  description: string
}

interface Order {
  id: string
  products: CartItem[]
}

interface CartItem extends Product {
  quantity: number
}

export const useProductsStore = defineStore(
  'products',
  () => {
    const products = ref<Product[]>([
      {
        id: '1',
        name: 'Nike Air Max 270',
        price: 899,
        imageSrc:
          'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description:
          'The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.'
      },
      {
        id: '2',
        name: 'Nike Bold Black And White ',
        price: 1299,
        imageSrc:
          'https://images.unsplash.com/photo-1623684225794-a8f1f5037f5c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description:
          'The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.'
      },
      {
        id: '3',
        name: 'Nike Light Blue',
        price: 1499,
        imageSrc:
          'https://images.unsplash.com/photo-1552066344-2464c1135c32?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description:
          'The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.'
      },
      {
        id: '4',
        name: 'Nike Light Blue',
        price: 1799,
        imageSrc:
          'https://images.unsplash.com/photo-1542219550-37153d387c27?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description:
          'The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.'
      }
    ])

    const cart = ref<CartItem[]>([])

    const cartTotal = computed(() =>
      cart.value.reduce((acc, item) => acc + item.price * item.quantity, 0)
    )

    const addToCart = (product: Product) => {
      const existingProductIndex = cart.value.findIndex((p) => p.id === product.id)
      if (existingProductIndex !== -1) {
        cart.value[existingProductIndex].quantity += 1
      } else {
        cart.value.push({ ...product, quantity: 1 })
      }
    }

    const orders = ref<Order[]>([])

    const lastOrder = computed(() => {
      const ordersArray = orders.value
      return ordersArray.length > 0 ? ordersArray[ordersArray.length - 1] : null
    })

    return { products, cart, cartTotal, addToCart, orders, lastOrder }
  },
  {
    persist: true
  }
)
