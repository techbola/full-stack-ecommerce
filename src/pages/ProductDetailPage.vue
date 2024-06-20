<template>
  <div v-if="product">
    <div class="img-wrap">
      <img :src="product.imageUrl" :alt="product.name" />
    </div>
    <div class="product-details">
      <h1>{{ product.name }}</h1>
      <h3 class="price">{{ product.price }}</h3>
      <button @click="addToCart()" :class="itemIsInCart ? 'grey-button' : 'add-to-cart'"
        :disabled="itemIsInCart ? true : false">Add
        to
        cart</button>
    </div>
  </div>
  <div v-else>
    <NotFoundPage />
  </div>
</template>

<script>
import axios from 'axios';
import NotFoundPage from './NotFoundPage.vue';

export default {
  name: 'ProductDetailPage',
  components: {
    NotFoundPage,
  },
  data() {
    return {
      product: {},
      cartItems: [],
    }
  },
  methods: {
    async addToCart() {
      await axios.post('/api/users/12345/cart', { id: this.$route.params.productId });
      alert('Product added to cart!');
    },
    async getCartItems() {
      const response = await axios.get('/api/users/12345/cart/');
      const cartItems = response.data;
      this.cartItems = cartItems;
    }
  },
  computed: {
    itemIsInCart() {
      return this.cartItems.some(item => item.id === this.$route.params.productId);
    }
  },
  async created() {
    const response = await axios.get(`/api/products/${this.$route.params.productId}`);
    const product = response.data;
    this.product = product;

    this.getCartItems();
  },
}
</script>

<style lang="scss" scoped></style>