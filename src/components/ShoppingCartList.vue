<template>
  <div class="product-container" v-for="product in products" :key="product.id">
    <img class="product-image" :src="product.imageUrl" :alt="product.name" />
    <div class="details-wrap">
      <h3 class="product-name">{{ product.name }}</h3>
      <p class="product-price">{{ product.price }}</p>
    </div>
    <button @click="$emit('remove-from-cart', product.id)" class="remove-button">Remove from Cart</button>
  </div>
</template>

<script>
export default {
  name: 'ShoppingCartList',
  props: {
    products: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped></style>