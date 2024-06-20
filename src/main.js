import { createApp } from "vue";
import App from "./App.vue";
import "./main.css";

import router from "./router";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: "ecommerce-site-d4aa5.firebaseapp.com",
  projectId: "ecommerce-site-d4aa5",
  storageBucket: "ecommerce-site-d4aa5.appspot.com",
  messagingSenderId: "887046047339",
  appId: process.env.VUE_APP_FIREBASE_APP_ID,
};

initializeApp(firebaseConfig);

createApp(App).use(router).mount("#app");
