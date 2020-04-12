<template>
  <div class="side-menu" @mouseenter="showMenu = true, showText = false" @mouseleave="showMenu = false">
      <div class="side-menu__items" v-if="showMenu">
          <div class="side-menu__item">акты</div>
          <div class="side-menu__item" @click='changePage("/")'>ТК Лента</div>
      </div>
      <div class="hover-me" v-if="showText">
          <div class="arrow-8"></div>
          <div class="hover-me__text">hover <br> me!!!</div>          
      </div>
  </div>
</template>

<script>

export default {
  name: 'SideMenu',
  components: {
  },
  data: function () {
    return {
      showMenu: false,
      showText: true
    }
  },
  methods:{
      changePage(val){
        this.$router.push(val)
      }
  }
}
</script>

<style>
    .side-menu{
        position: absolute;
        height: 100%;
        width: 10px;
        border-right: 2px solid #0f1179;
        background: #bdbef7;
    }
    .side-menu:hover{
        width: 150px;
    }
    .side-menu__item{
        position: relative;
        font-size: 20px;
        text-transform: uppercase;
        font-weight: 700;
        color: #ffffff;
        padding: 40px 0 0 0;
    }
    .hover-me{
        position: absolute;
        font-family: 'Permanent Marker', cursive;
        font-size: 40px;
        line-height: 40px;
        transform: rotate(-15deg);
        color: #337AB7;
        margin: 20px 0 0 20px;
    }

    .arrow-8 {
        position: relative;
        width: 100px;
        height: 100px;
        transform: rotate(65deg);
    }
    .arrow-8:before {
        content: '';
        position: absolute;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        border-left: 26px solid #337AB7;
        border-bottom: 26px solid #337AB7;
        transform: translate(26px, 106px) rotate(-45deg);
        animation: arrow-8 3s linear infinite;
    }
    .arrow-8:after {
        content: '';
        position: absolute;
        box-sizing: border-box;    
        width: 100%;
        height: 100%;
        border-left: 26px solid #337AB7;
        border-bottom: 26px solid #337AB7;
        transform: translate(53px, 0px) rotate(-45deg);
        animation: arrow-8 3s linear infinite -1.5s;
    }
    
    @keyframes arrow-8 {
        0% {
            opacity: 0;
            transform: translate(-13px, -53px) rotate(-45deg);
        }
        10%, 90% {
            opacity: 0;
        }
        50% {
            opacity: 1;  
            border-left: 26px solid #337AB7;
            border-bottom: 26px solid #337AB7;
            transform: translate(-13px, 0px) rotate(-45deg);
        }
        100% {
            opacity: 0;
            transform: translate(-13px, 53px) rotate(-45deg);
        }
    }
    .hover-me__text{
        margin-top: -50px;
    }
</style>