<template>
  <div class="retail-centres-volga">
      <div class="retail-centres-volga__title">Торговые комплексы Лента(Регион {{retailCentresReg.name}})</div> 

      <div class="retail-centres-volga__img-block">
        <img class="retail-centres-volga__img-add" src="../icons/add.png" @click="changePage('/RetailCentres/newRC')"> 
      </div>      

      <div class="retail-centres-volga__block">
          <div class="retail-centres-volga__block-item" v-for="item of retailCentresReg.RC" :key="item.id" @click="changePage('/RetailCentres/rc'+item.number)">
            <div class="retail-centres-volga__block-item-left">
              <div class="retail-centres-volga__block-item-number">ТК-{{item.number}},</div>
              <div class="retail-centres-volga__block-item-city">{{item.city}}</div>
              <div class="retail-centres-volga__block-item-adress">{{item.adress}}</div>
            </div>
            <div class="retail-centres-volga__block-item-right">
              <img class="retail-centres-volga__img-edit" src="../icons/edit.png"> 
            </div>      
          </div>
      </div>

  </div>
</template>

<script>
export default {
  name: 'RetailCentresVolga',
  components: {
      
  },
  data: function () {
    return {
      retailCentresReg: []
    }
  },
  mounted(){
    let data = this.$store.getters.RETAILCENTRES;
    let index = this.$route.params.region
    data.forEach(element => {
      if (element.latName === index){
        this.retailCentresReg = element;
        console.log(element)
      }
    });
  },
  methods:{
    changePage(val){
      this.$router.push(val)
    }
  }
}
</script>

<style>
    .retail-centres-volga__title{
        font-size: 25px;
        color: #ffffff;
        font-weight: 700;
        border: 2px solid #0f1179;
        background: #bdbef7;
        border-radius: 10px;
        margin: 0px 15px 20px 15px;
        padding: 10px 0;
    }    
    .retail-centres-volga__block{
        width: 100%;
        margin: 0px 10px 0 15px;
    }
    .retail-centres-volga__block-item{
        width: 97%;
        margin: 10px 10px 0 0;
        border: 1px solid #0f1179;
        border-radius: 5px;
        padding: 5px 0 5px 15px;
        text-align: left;
    }
    .retail-centres-volga__block-item:hover{
        cursor: pointer;
        color: #ffffff;
        background: #bdbef7;
    }
    .retail-centres-volga__block-item-number{
        display: inline-block;
        font-weight: 700;
        font-size: 18px;
    }
    .retail-centres-volga__block-item-city{
        display: inline-block;
        font-weight: 500;
        font-size: 15px;
    }

    .retail-centres-volga__block-item-adress{
        font-weight: 300;
        font-size: 12px;
    }
    .retail-centres-volga__block-item-left{
      display: inline-block;
      width: 90%;
    }
    .retail-centres-volga__block-item-right{
      display: inline-block;
      width: 10%;
      text-align: right;
    }
    .retail-centres-volga__img-edit{
      width: 30px;
      height: 30px;
      padding-right: 15px;
    }
    .retail-centres-volga__img-add{
      width: 40px;
      height: 40px;
      padding-right: 15px;
    }
    .retail-centres-volga__img-block{
      text-align: right;
      width: 100%;
      padding-right: 15px;
    }
</style>