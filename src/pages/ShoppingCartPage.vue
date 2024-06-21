<template>
  <h1>Shopping Cart</h1>
  <div v-if="user && cartItems.length > 0">
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
  props: ['user'],
  components: {
    ShoppingCartList
  },
  data() {
    return {
      cartItems: [],
    }
  },
  watch: {
    async user(newUserValue) {
      if (newUserValue) {
        this.getCartItems(newUserValue);
      }
    }
  },
  methods: {
    async removeFromCart(id) {
      await axios.delete(`/api/users/${this.user.uid}/cart/${id}`);
      this.cartItems = this.cartItems.filter(item => item.id !== id);
    },
    async getCartItems(user) {
      const response = await axios.get(`/api/users/${user.uid}/cart/`);
      const cartItems = response.data;
      this.cartItems = cartItems;
    },
  },

  async created() {
    // load cartItems if user is logged in
    if (this.user) {
      this.getCartItems(this.user);
    }
  },
}
</script>

<style lang="scss" scoped></style>