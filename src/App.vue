<template>
  <div id="app">
    <SideMenu></SideMenu>
    <router-view/>
  </div>
</template>

<script>
import SideMenu from './components/SideMenu.vue'

export default {
  name: 'App',
  components: {
      SideMenu
  },
  data: function () {
    return {
      
    }
  },
  methods:{
    
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Permanent+Marker&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
html, body{
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}

</style>
