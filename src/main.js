import { createApp } from "vue";
import App from "./App.vue";
import "./main.css";

import router from "./router";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC9AKhnu-Ap08gWyE3KY0vtbDuWUiXgwX0",
  authDomain: "ecommerce-site-d4aa5.firebaseapp.com",
  projectId: "ecommerce-site-d4aa5",
  storageBucket: "ecommerce-site-d4aa5.appspot.com",
  messagingSenderId: "887046047339",
  appId: "1:887046047339:web:9b3336523a99687a85532e",
};

initializeApp(firebaseConfig);

createApp(App).use(router).mount("#app");
