<template>
  <h1>Products</h1>
  <div class="grid-wrap">
    <div class="product-item" v-for="product in products" :key="product.id">
      <img class="product-image" :src="product.imageName" :alt="product.name" />
      <h3 class="product-name">{{ product.name }}</h3>
      <p class="product-price">{{ product.price }}</p>
      <!-- <router-link class="view-details" :to="{ name: 'ProductDetailPage', params: { 'productId': product.id } }">View
        Details</router-link> -->
      <button>View Details</button>
    </div>
  </div>
</template>

<script>
import { products } from '@/temp-data';

export default {
  name: 'ProductsPage',
  data() {
    return {
      products,
    }
  }
}
</script>

<style lang="scss" scoped></style>