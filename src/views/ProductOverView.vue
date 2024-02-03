<template>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div class="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
        <!-- Image gallery -->
        <TabGroup as="div" class="flex flex-col-reverse">
          <TabPanels class="aspect-h-1 aspect-w-1 w-full">
            <TabPanel>
              <img
                :src="product.imageSrc"
                class="h-full w-full object-cover object-center sm:rounded-lg"
              />
            </TabPanel>
          </TabPanels>
        </TabGroup>

        <!-- Product info -->
        <div class="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
          <h1 class="text-3xl font-bold tracking-tight text-gray-900">{{ product?.name }}</h1>

          <div class="mt-3">
            <h2 class="sr-only">Product information</h2>
            <p class="text-3xl tracking-tight text-gray-900">{{ product?.price }}</p>
          </div>

          <!-- Reviews -->
          <div class="mt-6">
            <h3 class="sr-only">Description</h3>

            <div class="space-y-6 text-base text-gray-700" v-html="product?.description" />
          </div>

          <form class="mt-6">
            <div class="mt-10 flex">
              <button
                @click="addToCart"
                type="button"
                class="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
              >
                Add to bag
              </button>

              <!-- <button
                type="button"
                class="ml-4 flex items-center justify-center rounded-md px-3 py-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
              >
                <HeartIcon class="h-6 w-6 flex-shrink-0" aria-hidden="true" />
                <span class="sr-only">Add to favorites</span>
              </button> -->
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { TabGroup, TabPanel, TabPanels } from '@headlessui/vue'
import { useProductsStore } from '@/stores/product'
import { useRoute } from 'vue-router'

const route = useRoute()
const productStore = useProductsStore()

const product = productStore.products.find((product) => String(product.id) === route.params.id)

const addToCart = () => {
  productStore.addToCart(product)
}
</script>
