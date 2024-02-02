<template>
  <div class="bg-white">
    <!-- Mobile menu -->

    <header class="relative z-10">
      <nav aria-label="Top">
        <!-- Top navigation -->
        <div class="bg-gray-900">
          <div
            class="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
          >
            <!-- Currency selector -->
            <form class="hidden lg:block lg:flex-1">
              <div class="flex">
                <label for="desktop-currency" class="sr-only">Currency</label>
                <div
                  class="group relative -ml-2 rounded-md border-transparent bg-gray-900 focus-within:ring-2 focus-within:ring-white"
                >
                  <select
                    id="desktop-currency"
                    name="currency"
                    class="flex items-center rounded-md border-transparent bg-gray-900 bg-none py-0.5 pl-2 pr-5 text-sm font-medium text-white focus:border-transparent focus:outline-none focus:ring-0 group-hover:text-gray-100"
                  >
                    <option v-for="currency in currencies" :key="currency">{{ currency }}</option>
                  </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                    <ChevronDownIcon class="h-5 w-5 text-gray-300" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </form>

            <p class="flex-1 text-center text-sm font-medium text-white lg:flex-none">
              Get free delivery on orders over $100
            </p>

            <div class="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
              <a href="#" class="text-sm font-medium text-white hover:text-gray-100"
                >Create an account</a
              >
              <span class="h-6 w-px bg-gray-600" aria-hidden="true" />
              <a href="#" class="text-sm font-medium text-white hover:text-gray-100">Sign in</a>
            </div>
          </div>
        </div>

        <!-- Secondary navigation -->
        <div class="bg-white">
          <div class="border-b border-gray-200">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div class="flex h-16 items-center justify-between">
                <!-- Logo (lg+) -->
                <div class="hidden lg:flex lg:items-center">
                  <a href="#">
                    <span class="sr-only">Your Company</span>
                    <img
                      class="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                      alt=""
                    />
                  </a>
                </div>

                <div class="hidden h-full lg:flex">
                  <!-- Mega menus -->
                  <PopoverGroup class="ml-8">
                    <div class="flex h-full justify-center space-x-8">
                      <Popover
                        v-for="(category, categoryIdx) in navigation.categories"
                        :key="category.name"
                        class="flex"
                        v-slot="{ open }"
                      >
                        <div class="relative flex">
                          <PopoverButton
                            :class="[
                              open
                                ? 'border-indigo-600 text-indigo-600'
                                : 'border-transparent text-gray-700 hover:text-gray-800',
                              'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out'
                            ]"
                            >{{ category.name }}</PopoverButton
                          >
                        </div>

                        <transition
                          enter-active-class="transition ease-out duration-200"
                          enter-from-class="opacity-0"
                          enter-to-class="opacity-100"
                          leave-active-class="transition ease-in duration-150"
                          leave-from-class="opacity-100"
                          leave-to-class="opacity-0"
                        >
                          <PopoverPanel
                            class="absolute inset-x-0 top-full text-gray-500 sm:text-sm"
                          >
                            <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow -->
                            <div
                              class="absolute inset-0 top-1/2 bg-white shadow"
                              aria-hidden="true"
                            />

                            <div class="relative bg-white">
                              <div class="mx-auto max-w-7xl px-8">
                                <div
                                  class="grid grid-cols-2 items-start gap-x-8 gap-y-10 pb-12 pt-10"
                                >
                                  <div class="grid grid-cols-2 gap-x-8 gap-y-10">
                                    <div>
                                      <p
                                        :id="`desktop-featured-heading-${categoryIdx}`"
                                        class="font-medium text-gray-900"
                                      >
                                        Featured
                                      </p>
                                      <ul
                                        role="list"
                                        :aria-labelledby="`desktop-featured-heading-${categoryIdx}`"
                                        class="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                      >
                                        <li
                                          v-for="item in category.featured"
                                          :key="item.name"
                                          class="flex"
                                        >
                                          <a :href="item.href" class="hover:text-gray-800">{{
                                            item.name
                                          }}</a>
                                        </li>
                                      </ul>
                                    </div>
                                    <div>
                                      <p
                                        id="desktop-categories-heading"
                                        class="font-medium text-gray-900"
                                      >
                                        Categories
                                      </p>
                                      <ul
                                        role="list"
                                        aria-labelledby="desktop-categories-heading"
                                        class="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                      >
                                        <li
                                          v-for="item in category.categories"
                                          :key="item.name"
                                          class="flex"
                                        >
                                          <a :href="item.href" class="hover:text-gray-800">{{
                                            item.name
                                          }}</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div class="grid grid-cols-2 gap-x-8 gap-y-10">
                                    <div>
                                      <p
                                        id="desktop-collection-heading"
                                        class="font-medium text-gray-900"
                                      >
                                        Collection
                                      </p>
                                      <ul
                                        role="list"
                                        aria-labelledby="desktop-collection-heading"
                                        class="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                      >
                                        <li
                                          v-for="item in category.collection"
                                          :key="item.name"
                                          class="flex"
                                        >
                                          <a :href="item.href" class="hover:text-gray-800">{{
                                            item.name
                                          }}</a>
                                        </li>
                                      </ul>
                                    </div>

                                    <div>
                                      <p
                                        id="desktop-brand-heading"
                                        class="font-medium text-gray-900"
                                      >
                                        Brands
                                      </p>
                                      <ul
                                        role="list"
                                        aria-labelledby="desktop-brand-heading"
                                        class="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                      >
                                        <li
                                          v-for="item in category.brands"
                                          :key="item.name"
                                          class="flex"
                                        >
                                          <a :href="item.href" class="hover:text-gray-800">{{
                                            item.name
                                          }}</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </PopoverPanel>
                        </transition>
                      </Popover>

                      <a
                        v-for="page in navigation.pages"
                        :key="page.name"
                        :href="page.href"
                        class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                        >{{ page.name }}</a
                      >
                    </div>
                  </PopoverGroup>
                </div>

                <!-- Mobile menu and search (lg-) -->
                <div class="flex flex-1 items-center lg:hidden">
                  <button
                    type="button"
                    class="-ml-2 rounded-md bg-white p-2 text-gray-400"
                    @click="mobileMenuOpen = true"
                  >
                    <span class="sr-only">Open menu</span>
                    <Bars3Icon class="h-6 w-6" aria-hidden="true" />
                  </button>

                  <!-- Search -->
                  <a href="#" class="ml-2 p-2 text-gray-400 hover:text-gray-500">
                    <span class="sr-only">Search</span>
                    <MagnifyingGlassIcon class="h-6 w-6" aria-hidden="true" />
                  </a>
                </div>

                <!-- Logo (lg-) -->
                <a href="#" class="lg:hidden">
                  <span class="sr-only">Your Company</span>
                  <img
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt=""
                    class="h-8 w-auto"
                  />
                </a>

                <div class="flex flex-1 items-center justify-end">
                  <div class="flex items-center lg:ml-8">
                    <div class="flex space-x-8">
                      <div class="hidden lg:flex">
                        <a href="#" class="-m-2 p-2 text-gray-400 hover:text-gray-500">
                          <span class="sr-only">Search</span>
                          <MagnifyingGlassIcon class="h-6 w-6" aria-hidden="true" />
                        </a>
                      </div>

                      <div class="flex">
                        <a href="#" class="-m-2 p-2 text-gray-400 hover:text-gray-500">
                          <span class="sr-only">Account</span>
                          <UserIcon class="h-6 w-6" aria-hidden="true" />
                        </a>
                      </div>
                    </div>

                    <span class="mx-4 h-6 w-px bg-gray-200 lg:mx-6" aria-hidden="true" />

                    <div class="flow-root">
                      <a @click="MenuOpen = true" class="group -m-2 flex items-center p-2">
                        <ShoppingCartIcon
                          class="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                          aria-hidden="true"
                        />
                        <span
                          class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800"
                          >0</span
                        >
                        <span class="sr-only">items in cart, view bag</span>
                      </a>
                    </div>
                    <div class="mx-10 flex">
                      <button
                        @click="$router.push('/add-product')"
                        type="button"
                        class="my-4 mx-4 rounded-md bg-blue-800 px-3.5 py-3 text-sm font-semibold text-white shadow-sm"
                      >
                        Add Product
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>

    <main>
      <!-- Hero -->
      <div class="flex flex-col border-b border-gray-200 lg:border-0">
        <div class="relative">
          <div aria-hidden="true" class="absolute hidden h-full w-1/2 bg-gray-100 lg:block" />
          <div class="relative bg-gray-100 lg:bg-transparent">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:px-8">
              <div class="mx-auto max-w-2xl py-24 lg:max-w-none lg:py-64">
                <div class="lg:pr-16">
                  <h1
                    class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl"
                  >
                    Focus on what matters
                  </h1>
                  <p class="mt-4 text-xl text-gray-600">
                    All the charts, datepickers, and notifications in the world can't beat checking
                    off some items on a paper card.
                  </p>
                  <div class="mt-6">
                    <a
                      href="#"
                      class="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 font-medium text-white hover:bg-indigo-700"
                      >Shop Productivity</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="h-48 w-full sm:h-64 lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-1/2">
            <img
              src="https://tailwindui.com/img/ecommerce-images/home-page-02-hero-half-width.jpg"
              alt=""
              class="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>

      <!-- Trending products -->
      <section aria-labelledby="trending-heading" class="bg-white">
        <div class="py-16 sm:py-24 lg:mx-auto lg:max-w-7xl lg:px-8 lg:py-32">
          <div class="flex items-center justify-between px-4 sm:px-6 lg:px-0">
            <h2 id="trending-heading" class="text-2xl font-bold tracking-tight text-gray-900">
              Trending products
            </h2>
            <a
              href="#"
              class="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
            >
              See everything
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>

          <div class="relative mt-8">
            <div class="relative w-full overflow-x-auto">
              <ul
                role="list"
                class="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-x-0"
              >
                <li
                  v-for="product in productStore.products"
                  @click="$router.push({ name: 'productOverview', params: { id: product.id } })"
                  :key="product.id"
                  class="inline-flex w-64 flex-col text-center lg:w-auto"
                >
                  <div class="group relative">
                    <div
                      class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200"
                    >
                      <img
                        :src="product.imageSrc"
                        class="h-full w-full object-cover object-center group-hover:opacity-75"
                      />
                    </div>
                    <div class="mt-6">
                      <p class="text-sm text-gray-500">{{ product.color }}</p>
                      <h3 class="mt-1 font-semibold text-gray-900">
                        <a :href="product.href">
                          <span class="absolute inset-0" />
                          {{ product.name }}
                        </a>
                      </h3>
                      <p class="mt-1 text-gray-900">{{ product.price }}</p>
                    </div>
                  </div>

                  <h4 class="sr-only">Available colors</h4>
                  <ul role="list" class="mt-auto flex items-center justify-center space-x-3 pt-6">
                    <li
                      v-for="color in product.availableColors"
                      :key="color.name"
                      class="h-4 w-4 rounded-full border border-black border-opacity-10"
                      :style="{ backgroundColor: color.colorBg }"
                    >
                      <span class="sr-only">{{ color.name }}</span>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <div class="mt-12 px-4 sm:hidden">
            <a href="#" class="text-sm font-semibold text-indigo-600 hover:text-indigo-500">
              See everything
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  </div>

  <SideDrawer v-model="MenuOpen" />
</template>

<script setup>
import { ref } from 'vue'
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon
} from '@heroicons/vue/24/outline'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import SideDrawer from '@/components/SideDrawer.vue'
import { useProductsStore } from '@/stores/product'

const MenuOpen = ref(false)

const currencies = ['CAD', 'USD', 'AUD', 'EUR', 'GBP']
const navigation = {
  categories: [
    {
      name: 'Women',
      featured: [
        { name: 'Sleep', href: '#' },
        { name: 'Swimwear', href: '#' },
        { name: 'Underwear', href: '#' }
      ],
      collection: [
        { name: 'Everything', href: '#' },
        { name: 'Core', href: '#' },
        { name: 'New Arrivals', href: '#' },
        { name: 'Sale', href: '#' }
      ],
      categories: [
        { name: 'Basic Tees', href: '#' },
        { name: 'Artwork Tees', href: '#' },
        { name: 'Bottoms', href: '#' },
        { name: 'Underwear', href: '#' },
        { name: 'Accessories', href: '#' }
      ],
      brands: [
        { name: 'Full Nelson', href: '#' },
        { name: 'My Way', href: '#' },
        { name: 'Re-Arranged', href: '#' },
        { name: 'Counterfeit', href: '#' },
        { name: 'Significant Other', href: '#' }
      ]
    },
    {
      name: 'Men',
      featured: [
        { name: 'Casual', href: '#' },
        { name: 'Boxers', href: '#' },
        { name: 'Outdoor', href: '#' }
      ],
      collection: [
        { name: 'Everything', href: '#' },
        { name: 'Core', href: '#' },
        { name: 'New Arrivals', href: '#' },
        { name: 'Sale', href: '#' }
      ],
      categories: [
        { name: 'Artwork Tees', href: '#' },
        { name: 'Pants', href: '#' },
        { name: 'Accessories', href: '#' },
        { name: 'Boxers', href: '#' },
        { name: 'Basic Tees', href: '#' }
      ],
      brands: [
        { name: 'Significant Other', href: '#' },
        { name: 'My Way', href: '#' },
        { name: 'Counterfeit', href: '#' },
        { name: 'Re-Arranged', href: '#' },
        { name: 'Full Nelson', href: '#' }
      ]
    }
  ],
  pages: [
    { name: 'Company', href: '#' },
    { name: 'Stores', href: '#' }
  ]
}

const productStore = useProductsStore()
</script>
