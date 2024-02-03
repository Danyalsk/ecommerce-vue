<template>
  <div class="bg-gray-50">
    <div class="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
      <form class="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
        <div>
          <div class="border-gray-200">
            <h2 class="text-lg font-medium text-gray-900">Shipping information</h2>

            <div class="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
              <div>
                <label for="first-name" class="block text-sm font-medium text-gray-700"
                  >First name</label
                >
                <div class="mt-1">
                  <input
                    type="text"
                    id="first-name"
                    name="first-name"
                    autocomplete="given-name"
                    class="p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label for="last-name" class="block text-sm font-medium text-gray-700"
                  >Last name</label
                >
                <div class="mt-1">
                  <input
                    type="text"
                    id="last-name"
                    name="last-name"
                    autocomplete="family-name"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div class="sm:col-span-2">
                <label for="company" class="block text-sm font-medium text-gray-700">Company</label>
                <div class="mt-1">
                  <input
                    type="text"
                    name="company"
                    id="company"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div class="sm:col-span-2">
                <label for="address" class="block text-sm font-medium text-gray-700">Address</label>
                <div class="mt-1">
                  <input
                    type="text"
                    name="address"
                    id="address"
                    autocomplete="street-address"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div class="sm:col-span-2">
                <label for="apartment" class="block text-sm font-medium text-gray-700"
                  >Apartment, suite, etc.</label
                >
                <div class="mt-1">
                  <input
                    type="text"
                    name="apartment"
                    id="apartment"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label for="region" class="block text-sm font-medium text-gray-700">Country</label>
                <div class="mt-1">
                  <input
                    type="text"
                    name="region"
                    id="region"
                    autocomplete="address-level1"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label for="postal-code" class="block text-sm font-medium text-gray-700"
                  >Postal code</label
                >
                <div class="mt-1">
                  <input
                    type="text"
                    name="postal-code"
                    id="postal-code"
                    autocomplete="postal-code"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div class="sm:col-span-2">
                <label for="phone" class="block text-sm font-medium text-gray-700">Phone</label>
                <div class="mt-1">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    autocomplete="tel"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- Payment -->
        </div>

        <!-- Order summary -->
        <div class="mt-10 lg:mt-0">
          <h2 class="text-lg font-medium text-gray-900">Order summary</h2>

          <div class="mt-4 rounded-lg border border-gray-200 bg-white shadow-sm">
            <h3 class="sr-only">Items in your cart</h3>
            <ul role="list" class="divide-y divide-gray-200">
              <li
                v-for="product in productStore.cart"
                :key="product.id"
                class="flex px-4 py-6 sm:px-6"
              >
                <div class="flex-shrink-0">
                  <img :src="product.imageSrc" :alt="product.imageAlt" class="w-20 rounded-md" />
                </div>

                <div class="ml-6 flex flex-1 flex-col">
                  <div class="flex">
                    <div class="min-w-0 flex-1">
                      <h4 class="text-sm">
                        <a
                          :href="product.href"
                          class="font-medium text-gray-700 hover:text-gray-800"
                          >{{ product.name }}</a
                        >
                      </h4>
                      <p class="mt-1 text-sm text-gray-500">{{ color }}</p>
                      <p class="mt-1 text-sm text-gray-500">{{ size }}</p>
                    </div>

                    <div class="ml-4 flow-root flex-shrink-0">
                      <button
                        @click="deleteItem(index)"
                        type="button"
                        class="-m-2.5 flex items-center justify-center bg-white p-2.5 text-gray-400 hover:text-gray-500"
                      >
                        <span class="sr-only">Remove</span>
                        <TrashIcon class="h-5 w-5" aria-hidden="true" />
                      </button>
                    </div>
                  </div>

                  <div class="flex flex-1 items-end justify-between pt-2">
                    <p class="mt-1 text-sm font-medium text-gray-900">
                      {{ product.price * product.quantity }}
                    </p>

                    <div class="ml-4">
                      <label for="quantity" class="sr-only">Quantity</label>
                      <select
                        id="quantity"
                        name="quantity"
                        v-model="product.quantity"
                        class="rounded-md border border-gray-300 text-left text-base font-medium text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                      </select>
                    </div>
                  </div>
                </div>
              </li>
            </ul>

            <dl class="space-y-6 border-t border-gray-200 px-4 py-6 sm:px-6">
              <div class="flex items-center justify-between">
                <dt class="text-sm">Subtotal</dt>
                <dd class="text-sm font-medium text-gray-900">{{ productStore.cartTotal }}</dd>
              </div>

              <div class="flex items-center justify-between border-t border-gray-200 pt-6">
                <dt class="text-base font-medium">Total</dt>
                <dd class="text-base font-medium text-gray-900">{{ productStore.cartTotal }}</dd>
              </div>
            </dl>

            <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
              <button
                @click="placeOrder"
                type="button"
                class="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                Confirm order
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  RadioGroup,
  RadioGroupDescription,
  RadioGroupLabel,
  RadioGroupOption
} from '@headlessui/vue'
import { CheckCircleIcon, TrashIcon } from '@heroicons/vue/20/solid'
import { useProductsStore } from '@/stores/product'
import { useRouter } from 'vue-router'

// const products = [
//   {
//     id: 1,
//     title: 'Basic Tee',
//     href: '#',
//     price: '$32.00',
//     color: 'Black',
//     size: 'Large',
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/checkout-page-02-product-01.jpg',
//     imageAlt: "Front of men's Basic Tee in black."
//   }
//   // More products...
// ]

const deleteItem = (index) => {
  productStore.cart.splice(index, 1)
}
const color = 'Black'

const size = 'Large'

const productStore = useProductsStore()

const deliveryMethods = [
  { id: 1, title: 'Standard', turnaround: '4–10 business days', price: '$5.00' },
  { id: 2, title: 'Express', turnaround: '2–5 business days', price: '$16.00' }
]
const paymentMethods = [
  { id: 'credit-card', title: 'Credit card' },
  { id: 'paypal', title: 'PayPal' },
  { id: 'etransfer', title: 'eTransfer' }
]

const router = useRouter()

const placeOrder = () => {
  productStore.orders.push({
    products: { ...productStore.cart },
    id: Math.floor(Math.random() * 10000)
  })
  productStore.cart = []
  router.push({ name: 'yourOrder' })
}

const selectedDeliveryMethod = ref(deliveryMethods[0])
</script>
