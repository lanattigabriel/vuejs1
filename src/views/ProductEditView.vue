<template>
  <ion-page>
    <h1>Edit Product {{product.id}}</h1>
    <ion-content>
      <ion-input label="Name" v-model="product.name"></ion-input>
      <ion-input label="Category" v-model="product.category"></ion-input>
      <ion-input label="Description" v-model="product.description"></ion-input>
      <ion-button @click="editProduct"> EDIT </ion-button>
    </ion-content>
  </ion-page>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import { useCartStore } from "../stores/cart.js";
import configServices from "../services/configServices.js";
import { IonPage, IonContent, IonInput, IonButton } from "@ionic/vue";
import { storeToRefs } from "pinia";
export default {
  components: {
    IonPage,
    IonContent,
    IonInput,
    IonButton,
  },
  setup() {
    // Cart
    const cartStore = useCartStore();
    const { productsInCart, counter } = storeToRefs(cartStore);
    const { addToCart } = cartStore;
    return { productsInCart, addToCart, counter };
  },
  data() {
    return {
      product: {
        id: "",
        name: "",
        category: "",
        description: "",
      },
    };
  },
  mounted() {
    this.getProductFromState()
  },
  methods: {
    getProductFromState() {
      const { product } = this.$route.query;
      if(product) {
        this.product = JSON.parse(product)
      }
    },
    async editProduct() {
      try {
        await configServices.updateProduct(this.product.id, this.product)
        alert('Product updated correctly')
        this.$router.push('/editProducts')
      } catch (error) {
        console.log(error)
        alert('Error updating the product')
      }
    }
  },
};
</script>

<style>
.clothes-button {
  --border-radius: 7px;
}
ion-card {
  border-radius: 10px;
  max-width: 300px;
  min-width: 200px;
}
</style>