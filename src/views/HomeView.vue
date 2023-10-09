<script >
import { IonPage, IonContent } from "@ionic/vue";
export default {
  components: { IonPage, IonContent },
};
</script>

<template>
  <ion-page class="home">
    <div class="title-container">
      <h1>SATURN STORE</h1>
    </div>
    <div class="img-container">
    <img
      src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7721ae17-5927-40dc-b262-4566630a072f/d67dtgs-400a072f-f202-4909-9035-308aca73d294.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc3MjFhZTE3LTU5MjctNDBkYy1iMjYyLTQ1NjY2MzBhMDcyZlwvZDY3ZHRncy00MDBhMDcyZi1mMjAyLTQ5MDktOTAzNS0zMDhhY2E3M2QyOTQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.6B-ZXuvDiPpgTEazcpcyQPbUVMbS3RzHajZYrrpSp4s"
      alt="logo of planet saturn"
    />
    </div>
    <!-- <ion-content></ion-content> -->
  </ion-page>
</template>

<style scoped>
.home {
  border: none;
  background-color: white;
  margin: 10px;
  display: flex;
}
.title-container{
  margin: auto;

}
h1 {
  margin: auto;
  color: black;
  font-size: 30px;
}
.img-container{
  display: flex;
  justify-content: center;
  margin: 0;
  height: 70vh;
}
img {
  margin-top: 1em;
  width: 600px;
  height: 300px;
}
</style>
