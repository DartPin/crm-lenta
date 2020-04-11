<template>
  <div class="main">
      <input type="file" @change="sync">
      <img id="output"/>
  </div>
</template>

<script>
import SideMenu from './SideMenu.vue'

export default {
  name: 'Main',
  components: {
      SideMenu
  },
  data: function () {
    return {
      
    }
  },
  methods:{
      sync (e) {
        e.preventDefault();
        console.log(e)
        this.image = e.target.files[0];
        console.log(this.image)
        var output = document.getElementById('output');
        output.src = URL.createObjectURL(this.image)
        console.log(output)
    }
  }
}
</script>

<style>
    .main{
        height: 100%;
    }
</style>