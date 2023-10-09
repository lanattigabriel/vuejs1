<template>
  <ion-page>
      <h1>Login</h1>
    <ion-content>
      <div class="container">
        <ion-input class="element"
          v-model="user.email"
          fill="outline"
          placeholder="Email"
          type="email"
        ></ion-input>
        <ion-input class="element"
          v-model="user.password"
          fill="outline"
          placeholder="Password"
          type="password"
        ></ion-input>
        <ion-button color="dark" class="element" @click="log">Login</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent, IonInput, IonLabel, IonButton } from "@ionic/vue";
import { useLoginStore } from "../stores/login.js";
export default {
  components: { IonPage, IonContent, IonInput, IonLabel, IonButton },
  setup() {
    const store = useLoginStore();
    const { login } = store;
    return { login };
  },
  data() {
    return {
      user: { email: "", password: "" },
    };
  },
  methods: {
    log() {
      if (this.user.email == "test@test.com" && this.user.password == "1234") {
        console.log("paso por user");
        this.login({ email: this.user.email, permissions: ["buyProducts"] });
        this.user = { email: "", password: "" };
        this.$router.push("/products");
      } else if (
        this.user.email == "admin@admin.com" &&
        this.user.password == "1111"
      ) {
        console.log("paso por admin");
        this.login({
          email: this.user.email,
          permissions: ["addProducts", "editProducts"],
        });
        this.user = { email: "", password: "" };
        this.$router.push("/editProducts");
      } else {
        alert("Incorrect email or password");
      }
    },
  },
};
</script>

<style scoped>
ion-input::placeholder {
  color: red;
}
h1{
  padding-top: 50px;
  align-self: center; 
}
.container{
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin: 100px; */
  padding: 10px;
}

.element{
  margin-top: 40px;
  width: 70vh;
  min-height: 55px;
  box-shadow: 1px 1px 5px black;
}
</style>