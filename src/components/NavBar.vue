<template>
  <div class="nav-bar">
    <router-link to="/products" class="products-link">
      <div class="logo-wrap">
        <img :src="logo" alt="Logo">
      </div>
    </router-link>
    <div class="nav-buttons-wrap">
      <router-link to="/cart">
        <button>Shopping Cart</button>
      </router-link>
      <button v-if="user" @click="signOut">Sign Out</button>
    </div>
  </div>
</template>

<script>
import { getAuth, signOut } from 'firebase/auth';
import logo from '@/assets/logo-hexagon.svg';

export default {
  name: 'NavBar',
  props: ['user'],
  data() {
    return {
      logo
    }
  },
  methods: {
    async signOut() {
      const auth = getAuth();
      await signOut(auth);
    }
  }
}
</script>

<style lang="scss" scoped></style>