<template>
  <ion-page>
    <h1>Products</h1>
    <ion-content>
      <div class="categories">

      <ion-button
        class="clothes-button"
        color="dark"
        fill="outline"
        size="small"
        router-link="/products/pants"
        >Pants</ion-button
      >
      <ion-button
        class="clothes-button"
        color="dark"
        fill="outline"
        size="small"
        router-link="/products/shirts"
        >Shirts</ion-button
      >
      <ion-button
        class="clothes-button"
        color="dark"
        fill="outline"
        size="small"
        router-link="/products/shoes"
        >Shoes</ion-button
      >
      </div>
      <div class="products-container">

      <ion-grid>
        <ion-row>
          <ion-col v-for="e in filteredProducts" :key="e.name">
            <ion-card>
              <img
                alt="Silhouette of mountains"
                src="https://ionicframework.com/docs/img/demos/card-media.png"
              />
              <ion-card-header>
                <ion-card-title>{{ e.name }}</ion-card-title>
                <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
              </ion-card-header>
              <ion-card-content>
                Here's a small text description for the card content. Nothing
                more, nothing less.
              </ion-card-content>
              <ion-button color="dark" fill="clear" @click="chooseProduct(e.name)"
                >Add To Cart</ion-button
              >
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
// import { RouterLink, RouterView } from "vue-router";
import { useCartStore } from "../stores/cart.js";
import configServices from "../services/configServices.js";
import {
  IonPage,
  IonContent,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/vue";
import { storeToRefs } from "pinia";
export default {
  components: {
    IonPage,
    IonContent,
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonGrid,
    IonRow,
    IonCol,
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
      products: [],
      filteredProducts: [],
    };
  },
  async mounted() {
    this.loadProducts();
  },
  methods: {
    async loadProducts() {
      try {
        this.products = await configServices.loadProducts();
        this.filteredProducts = { ...this.products }
      } catch (error) {
        console.log(error);
      }
    },
    chooseProduct(productName) {
      this.addToCart(productName);
      alert(`${productName} added to cart`);
      this.counter++;
    },
  },
  watch: {
    "$route.params.id": function (newId) {
      if (newId) {
        this.filteredProducts = this.products.filter(
          product => product.category === newId
        );
      }
    },
  },
};
</script>

<style scoped>
h1{
  margin: 20px auto;

}
.clothes-button {
  border-radius: 7px;
  margin: 10px;
}
ion-card {
  border-radius: 10px;
  max-width: 300px;
  min-width: 200px;
  padding: 2px;
}

.categories{
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 20px;
}

</style>