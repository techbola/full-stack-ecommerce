<template>
  <div class="grid-wrap">
    <div class="product-item" v-for="product in products" :key="product.id">
      <img class="product-image" :src="product.imageUrl" :alt="product.name" />
      <h3 class="product-name">{{ product.name }}</h3>
      <p class="product-price">{{ product.price }}</p>
      <router-link :to="/products/ + product.id">
        <button>View Details</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductsList',
  props: {
    products: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped></style>