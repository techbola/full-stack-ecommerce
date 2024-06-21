<template>
  <div v-if="product">
    <div class="img-wrap">
      <img :src="product.imageUrl" :alt="product.name" />
    </div>
    <div class="product-details">
      <h1>{{ product.name }}</h1>
      <h3 class="price">{{ product.price }}</h3>
      <button v-if="user" @click="addToCart()" :class="itemIsInCart ? 'grey-button' : 'add-to-cart'"
        :disabled="itemIsInCart ? true : false">Add
        to
        cart</button>
      <button v-else class="sign-in" @click="signIn">Sign in to add to cart</button>
    </div>
  </div>
  <div v-else>
    <NotFoundPage />
  </div>
</template>

<script>
import { getAuth, sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth';
import axios from 'axios';
import NotFoundPage from './NotFoundPage.vue';

export default {
  name: 'ProductDetailPage',
  props: ['user'],
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
      await axios.post(`/api/users/${this.user.uid}/cart`, { id: this.$route.params.productId });
      alert('Product added to cart!');
    },
    async getCartItems(user) {
      const response = await axios.get(`/api/users/${user.uid}/cart/`);
      const cartItems = response.data;
      this.cartItems = cartItems;
    },
    async signIn() {
      const email = prompt('Please enter your email to sign in:');
      const auth = getAuth();
      const actionCodeSettings = {
        url: `http://localhost:8080/products/${this.$route.params.productId}`,
        handleCodeInApp: true
      };

      if (email) {
        await sendSignInLinkToEmail(auth, email, actionCodeSettings);
        alert('Sign-in link sent to ' + email);
        window.localStorage.setItem('emailForSignIn', email);
      }
    }
  },
  computed: {
    itemIsInCart() {
      return this.cartItems.some(item => item.id === this.$route.params.productId);
    }
  },
  watch: {
    async user(newUserValue) {
      if (newUserValue) {
        this.getCartItems(newUserValue);
      }
    }
  },
  async created() {
    const auth = getAuth();
    if (isSignInWithEmailLink(auth, window.location.href)) {
      const email = window.localStorage.getItem('emailForSignIn');
      await signInWithEmailLink(auth, email, window.location.href);
      alert('Successfully signed in!');
      window.localStorage.removeItem('emailForSignIn');
    }

    const response = await axios.get(`/api/products/${this.$route.params.productId}`);
    const product = response.data;
    this.product = product;

    if (this.user) {
      this.getCartItems(this.user);
    }
  },
}
</script>

<style lang="scss" scoped></style>