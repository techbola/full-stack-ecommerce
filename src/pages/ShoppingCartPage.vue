<template>
  <h1>Shopping Cart</h1>
  <div v-if="cartItems.length > 0">
    <div class="product-container" v-for="product in cartItems" :key="product.id">
      <img class="product-image" :src="product.imageName" :alt="product.name" />
      <div class="details-wrap">
        <h3 class="product-name">{{ product.name }}</h3>
        <p class="product-price">{{ product.price }}</p>
      </div>
      <button class="remove-button">Remove from Cart</button>
    </div>
    <button class="checkout-button">Proceed to Checkout</button>
  </div>
  <div v-else>
    <p>You currently have no items in your cart!</p>
  </div>
</template>

<script>
import { cartItems } from '@/temp-data';

export default {
  name: 'ShoppingCartPage',
  data() {
    return {
      cartItems,
    }
  }
}
</script>

<style lang="scss" scoped></style>