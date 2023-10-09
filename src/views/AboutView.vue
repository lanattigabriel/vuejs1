<template>
  <ion-page>
    <h1>This is an about page</h1>
    <ion-content></ion-content>
  </ion-page>
</template>

<style scoped>
  h1{
    align-self: center;
  }
</style>

<script>
import {IonPage, IonContent} from '@ionic/vue'
export default {
components: {IonPage, IonContent}
}
</script>

