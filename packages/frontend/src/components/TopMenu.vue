<template>
  <div class="top-menu">
    <h3 class="client-name">
      Fulano da Silva
    </h3>
  </div>  
</template>

<script>

</script>

<style lang="css" scoped>
.top-menu {
  height: 60px;
  width: 100%;
  box-shadow: 0 4px 6px -6px #222;
}
.client-name {
  display: flex;
  justify-content: flex-end;
  color: #021B51;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  align-self: auto;
  margin-top: 25px;
  margin-right: 15px
}


@media screen and (max-width: 450px){
  .top-menu {
    height: 30px;
  }
  .client-name {
    font-size: 10px;
    margin-top: 15px;
    margin-right: 5px
  }
}
</style>