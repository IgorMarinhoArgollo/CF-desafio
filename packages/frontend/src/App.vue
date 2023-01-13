<template>
  <main>
    <SideMenu />
    <div class="body-part">
      <router-view />
    </div>
  </main>
</template>

<script>
import SideMenu from './components/SideMenu.vue'

export default {
  components: {
    SideMenu
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
}
</style>