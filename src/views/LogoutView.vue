<template>
  <ion-page>
    <ion-content>
      <div class="container">
        <h1>Are you sure you want to logout?</h1>
        <ion-button color="dark" @click="log">Logout</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent, IonButton } from "@ionic/vue";
import { useLoginStore } from "../stores/login.js";
export default {
  components: { IonPage, IonContent, IonButton },
  setup() {
    const store = useLoginStore();
    const { logout } = store;
    return { logout };
  },
  data() {
    return {
      user: { email: "", password: "" },
    };
  },
  methods: {
    log() {
      this.logout();
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.container {
  margin: 50px auto;
  max-width: 70vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}
h1{
  margin-bottom: 50px;
}
</style>