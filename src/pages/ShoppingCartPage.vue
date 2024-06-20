<template>
  <h1>Shopping Cart</h1>
  <div v-if="cartItems.length > 0">
    <ShoppingCartList :products="cartItems" @remove-from-cart="removeFromCart" />
    <button class="checkout-button">Proceed to Checkout</button>
  </div>
  <div v-else>
    <p>You currently have no items in your cart!</p>
  </div>
</template>

<script>
import axios from 'axios';
import ShoppingCartList from '@/components/ShoppingCartList.vue';

export default {
  name: 'ShoppingCartPage',
  components: {
    ShoppingCartList
  },
  data() {
    return {
      cartItems: [],
    }
  },
  methods: {
    async removeFromCart(id) {
      await axios.delete(`/api/users/12345/cart/${id}`);
      this.cartItems = this.cartItems.filter(item => item.id !== id);
    }
  },
  async created() {
    const response = await axios.get('/api/users/12345/cart/');
    const cartItems = response.data;
    this.cartItems = cartItems;
  },
}
</script>

<style lang="scss" scoped></style>