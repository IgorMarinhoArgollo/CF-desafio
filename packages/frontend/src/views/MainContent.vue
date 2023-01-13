<template>
  <div>
    <h1>Maincontent</h1>
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