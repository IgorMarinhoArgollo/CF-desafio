<template>
  <div class="menu">
    <div
      class="div-logo"
    >
      <a
        href="#"
      >
        <img
          class="logo"
          src="../assets/logo-cashforce.svg"
          alt="cashforce logo"
        >
      </a>
    </div>
    <ul class="menu-list">
      <li class="menu-item">
        <a
          href="notFound"
          class="list-item-link"
        >
          <img
            src="../assets/Vector.svg"
            alt="notas logo"
            class="li-image"
          >
          Notas Fiscais
        </a>
      </li>
    </ul>
  </div>  
</template>

<script>

</script>

<style lang="css" scoped>
.menu {
  min-height: 100vh;
  width: 250px;
  background-color: #FBFDFE;
  text-align: center;

}

.logo {
  align-self: center;
  margin-top: 25px;
  width: 150px;
  height: 60px;
}

.div-logo {
  height: 130px;
}

.list-item-link {
  text-decoration: none;
  color: #00AD8C;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 1.2em;
}

.li-image {
  margin-right: 10px;
}

@media screen and (max-width: 450px){
  .menu {
    width: 150px;
  }

  .logo {
    width: 75px;
    margin-top: 0;
  }
  .div-logo {
    height: 60px;
  }
}
</style>