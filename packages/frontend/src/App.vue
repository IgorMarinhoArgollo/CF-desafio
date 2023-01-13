<template>
  <main>
    <SideMenu />
    <div class="body-part">
      <TopMenu />
      <router-view />
    </div>
  </main>
</template>

<script>
import SideMenu from './components/SideMenu.vue'
import TopMenu from './components/TopMenu.vue'
export default {
  components: {
    SideMenu,
    TopMenu
  }
}

</script>

<style>
* {
  padding: 0;
  margin: 0;
}
main {
  display: flex;
  min-height: 100vh;
}

.body-part {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>