<template>
  <ion-page>
    <h1>Enter your email address and password:</h1>
    <ion-content>
      <ion-input v-model='user.email' placeholder='Email' type='email'></ion-input>
      <ion-input v-model='user.password' placeholder='Password' type='password'></ion-input>
      <ion-button @click='log'>Login</ion-button>
    </ion-content>
  </ion-page>
</template>

<script>
import {IonPage, IonContent, IonInput, IonLabel, IonButton} from '@ionic/vue'
import {useLoginStore} from '../stores/login.js'
export default {
components: {IonPage, IonContent, IonInput, IonLabel, IonButton},
setup() {
  const store = useLoginStore()
  const { login } = store
  return { login }
},
data(){
  return{
    user: {email: '', password: ''}
  }
},
methods: {
  log() {
    if(this.user.email == 'test@test.com' && this.user.password == '1234') {
      console.log('paso por user')
      this.login({email: this.user.email, permissions: ['buyProducts']})
      this.user = {email: '', password: ''}
      this.$router.push('/products')
    } else if(this.user.email == 'admin@admin.com' && this.user.password == '1111') {
      console.log('paso por admin') 
      this.login({email: this.user.email, permissions: ['addProducts', 'editProducts']})
      this.user = {email: '', password: ''}
      this.$router.push('/editProducts')
    } else {
      alert('Incorrect email or password')
    }
  }
}
}
</script>

<style >
ion-input::placeholder {
  color: red;
}
</style>