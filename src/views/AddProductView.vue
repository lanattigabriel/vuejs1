<template>
  <ion-page>
    <h1>Add new product</h1>
    <ion-content>
      <ion-input label='Name' v-model='product.name'></ion-input>
      <ion-input label='Category' v-model='product.category'></ion-input>
      <ion-input label='Description' v-model='product.description'></ion-input>
      <ion-button @click='addProduct'> ADD </ion-button>
    </ion-content>
  </ion-page>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import { useCartStore } from '../stores/cart.js';
import configServices from '../services/configServices.js'
import {
  IonPage,
  IonContent,
  IonInput,
  IonButton,
} from "@ionic/vue";
import { storeToRefs } from 'pinia';
export default {
  components: {
    IonPage,
    IonContent,
    IonInput,
    IonButton
  },
  setup() {
    // Cart
    const cartStore = useCartStore();
    const { productsInCart, counter } = storeToRefs(cartStore)
    const { addToCart } = cartStore
    return { productsInCart, addToCart, counter };
  },
  data() {
    return {
      product: {},
      id: this.$route.params.id
    };
  },
  methods: {
    async addProduct() {
      try {
        const newProduct = {...this.product}
        configServices.addProduct(newProduct)
        alert('Product Added correctly')
        this.product = {};
      } catch (error) {
        console.log(error)
      }
    }
  }
};
</script>

<style>
.clothes-button {
  --border-radius: 7px;
}
ion-card{
  border-radius: 10px;
  max-width: 300px;
  min-width: 200px;
}
</style>