<script>
import { RouterLink, RouterView } from "vue-router";
import { IonApp, IonHeader, IonButton, IonItem } from "@ionic/vue";
import { storeToRefs } from "pinia";
import { useLoginStore } from "./stores/login.js";
import { useCartStore } from "./stores/cart.js";
export default {
  components: { IonApp, IonHeader, IonButton, IonItem },
  setup() {
    // Login
    const loginStore = useLoginStore();
    const { isLogin, user } = storeToRefs(loginStore);
    const { hasPermission } = loginStore;
    // Cart
    const cartStore = useCartStore();
    const { productsInCart, counter } = storeToRefs(cartStore);

    return { isLogin, user, hasPermission, productsInCart, counter };
  },
};
</script>

<template>
  <ion-app>
    <ion-header class="header">
      <div class="nav-btns">
        <ion-button fill="clear" color="dark" router-link="/">Home</ion-button>
        <ion-button fill="clear" color="dark" router-link="/about"
          >About</ion-button
        >
        <ion-button
          v-if="isLogin && hasPermission('buyProducts')"
          fill="clear"
          color="dark"
          router-link="/products"
          >Products</ion-button
        >
        <ion-button
          v-if="isLogin && hasPermission('editProducts')"
          fill="clear"
          color="dark"
          router-link="/editProducts"
          >Edit Products</ion-button
        >
        <ion-button
          v-if="isLogin && hasPermission('addProducts')"
          fill="clear"
          color="dark"
          router-link="/addProduct"
          >Add Product</ion-button
        >
        <ion-button
          v-if="!isLogin"
          fill="clear"
          color="dark"
          router-link="/login"
          >Login</ion-button
        >
        <ion-button
          v-if="isLogin"
          fill="clear"
          color="dark"
          router-link="/logout"
          >Logout</ion-button
        >
        <ion-button v-if="isLogin" fill="clear" color="dark" router-link="/cart"
          >Cart {{ counter }}</ion-button
        >
      </div>
      <div class="userbox">
        <ion-item class="user-email" v-if="isLogin"
          >Welcome {{ user.email }}</ion-item
        >
      </div>
    </ion-header>
    <ion-content>
      <RouterView />
    </ion-content>
  </ion-app>
</template>

<style>
:root {
  --ion-background-color: white;
}

.user-email {
  border: 1px, solid, black;
  padding: 0 15px;
}

.header {
  display: flex;
  justify-content: space-between;
  padding: auto;
}
</style>