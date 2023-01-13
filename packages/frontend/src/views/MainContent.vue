<template>
  <div>
    <div class="main-header">
      <div class="header-title">
        <img
          src="../assets/Vector-darkblue.svg"
          alt="hands logo"
        >
        <h2 class="title">Notas Fiscais</h2>
      </div>
      <p class="subtitle">
        Visualize as notas fiscais que você tem.
      </p>
    </div>
    <table class="orders-table">
      <thead>
        <tr>
          <th>NOTA FISCAL</th>
          <th>SACADO</th>
          <th>CEDENTE</th>
          <th>EMISSÃO</th>
          <th>VALOR</th>
          <th>STATUS</th>
          <th />
        </tr>
      </thead>
      <tbody>
        <OrderItem nota="123" sacado="sacado1" cedente="cedente1" emissao="emissão" valor="123,23" status="1" />
        <OrderItem nota="123" sacado="sacado1" cedente="cedente1" emissao="emissão" valor="123,23" status="1" />
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import OrderItem from '../components/OrderItem.vue'

export default {
  name: "InformationApi",
  components: {
    OrderItem
  },

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
  color: #021B51;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  padding: 20px 40px;
}
.header-title{
  display: flex;
  font-size: 1.6em;
}

.header-title img {
  margin-right: 10px;
}

.subtitle {
  margin: 15px 0;
  font-size: 1.1em;
  color: #727D94;
}

.orders-table {
  width: 1000px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  margin-left: 15px;
}

thead {
  color: #A1A8B8;
}

th {
  min-width: 90px;
}

@media screen and (max-width: 450px){
.header-title{
font-size: 0.65em;
}

.header-title img {
  width: 35px;
  align-items: center;
  height: auto;
}

.subtitle {
  font-size: 0.5em;
  margin: 7px 10px;
}

thead {
  font-size: 0.6em;
}

.orders-table {
  width: auto;
}
}


@media screen and (min-width: 450px){
.header-title{
  height: 40px;
}
}
</style>