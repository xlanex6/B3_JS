<template>
  <div class="group relative">
    <div
      class="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
      <img :src="product.images[0]" :alt="product.description"
        class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
    </div>
    <div class="mt-4 flex justify-between">
      <div>
        <h3 class="text-sm text-gray-700">
          <router-link :to="`products/${product.id}`">
            <span aria-hidden="true" class="absolute inset-0" />
            {{ product.title }}
          </router-link>
        </h3>
        <p class="mt-1 text-sm text-gray-500">{{ product.category }}</p>
      </div>
      <p class="text-sm font-medium text-gray-900">{{ product.brand }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required:true
    }
  }
}
</script>
