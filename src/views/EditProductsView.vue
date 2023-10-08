<template>
  <ion-page>
    <h1>Edit or Delete Products.</h1>
    <ion-content>
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
              <ion-button @click='editProduct(e.id)'>Edit</ion-button>
              <ion-button @click='deleteProduct(e.id)'>Delete</ion-button>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
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
    async deleteProduct(id){
      try {
        await configServices.deleteProduct(id)
        alert(`Product number ${id} deleted`)
        await this.loadProducts()
      } catch (error) {
        console.log(error)
        alert(error.message)
      }
    },
    async editProduct(id) {
      try {
        this.product = await configServices.getProductById(id)
        console.log(this.product)
        this.$router.push({ path: '/editProduct', query: { product: JSON.stringify(this.product) }})
        this.product = {
          id: '',
          name: '',
          category: '',
          description: ''
        }
      } catch (error) {
        console.log(error)
      }
    }
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