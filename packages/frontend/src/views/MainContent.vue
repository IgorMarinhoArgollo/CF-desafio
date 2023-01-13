<template>
  <div>
    <div class="main-header">
      <div class="header-title">
        <img
          src="../assets/Vector-darkblue.svg"
          alt="hands logo"
        >
        <h2>Notas Fiscais</h2>
      </div>
      <p class="subtitle">
        Visualize as notas fiscais que você tem.
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "InformationApi",


   data() {
     return {
       info: [],
     };
  },
   
   mounted() {
     this.getInfo();
  },
   
   methods: {
     getInfo() {
       axios
         .get("http://localhost:3000/orders")
         .then((res) => {
           this.InformationApi = res.data;
         }).then(() => console.log(this.InformationApi))
         .catch((error) => {
           console.log(error);
         });
     },
   },
  };
</script>

<style scoped>
.main-header{
  width: 100%;
  color: #021B51;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  padding: 20px 40px;
}
.header-title{
  display: flex;
  height: 40px;
  font-size: 1.6em;
}

.header-title img {
  margin-right: 10px;
}

.subtitle {
  margin: 15px 25px;
  font-size: 1.1em;
  color: #727D94;
}
</style>