<template>
  <div class="retail-centres">
      <div class="retail-centres__title">Торговые комплексы Лента</div>
      <div  v-for="element of retailCentres" :key="element.id">
        
        <div class="retail-centres__subtitle" @click='changePage("/RetailCentres/reg/"+element.latName)'>Торговые комплексы {{element.name}}</div>

        <div class="retail-centres__block">
            <div class="retail-centres__block-item" v-for="item of element.RC" :key="item.id" @click="changePage('/RetailCentres/rc'+item.number)">
                <div class="retail-centres__block-item-number">ТК-{{item.number}},</div>
                <div class="retail-centres__block-item-city">{{item.city}}</div>
                <div class="retail-centres__block-item-adress">{{item.adress}}</div>      
            </div>
        </div>

        <div class="retail-centres__subtitle2">Заказы в работе</div>

        <div class="retail-centres__block">
            
            <div class="retail-centres__deal-item" v-for="deal of deals[element.id].RCDeals" :key="deal.id">
                 
                <div class="retail-centres__deal-item-title">{{deal.title}}</div>
                <div class="retail-centres__deal-item-RC" v-for="el of deal.RC" :key="el">ТК-{{el}}, </div>
                <div class="retail-centres__deal-item-comment">{{deal.manager}}: {{deal.comment}}</div>      
            </div>
        </div>

        <div class="retail-centres__subtitle3">Другие заказы...</div>
      
      </div>
      {{retailCentres}}
  </div>
</template>

<script>
export default {
  name: 'RetailCentres',
  components: {
  },
  data: function () {
    return {
      retailCentres: null,
      deals: null
    }
  },
  mounted(){
      this.retailCentres = this.$store.getters.RETAILCENTRES;
      this.deals = this.$store.getters.DEALS;
      console.log(this.deals)
  },
  methods:{
    changePage(val){
      this.$router.push(val)
    } 
  }
}
</script>

<style>
    .retail-centres{
        padding: 5px 0 0 10px;
    }
    .retail-centres__title{
        font-size: 25px;
        color: #ffffff;
        font-weight: 700;
        border: 2px solid #0f1179;
        background: #bdbef7;
        border-radius: 10px;
        margin: 0px 15px 20px 15px;
        padding: 10px 0;
    }
    .retail-centres__subtitle{
        width: 30%;
        font-weight: 700;
        text-align: left;
        padding: 0 30px 10px 0;
        margin-left: 15px;
        border-bottom: 1px solid #0f1179;
    }
    .retail-centres__subtitle2{
        width: 25%;
        font-size: 15px;
        font-weight: 700;
        text-align: left;
        padding: 10px 30px 10px 0;
        margin-left: 25px;
        border-bottom: 1px solid #0f1179;
    }
    .retail-centres__subtitle3{
        font-size: 18px;
        font-weight: 700;
        padding: 10px 30px 40px 0;
    }
    .retail-centres__block{
        width: 100%;
        margin: 0px 10px 0 10px;
    }
    .retail-centres__block-item{
        display: inline-block;
        width: 22.5%;
        margin: 10px 10px 0 0;
        border: 1px solid #0f1179;
        border-radius: 5px;
        padding: 5px 0 5px 15px;
        text-align: left;
    }
    .retail-centres__block-item:hover{
        cursor: pointer;
        color: #ffffff;
        background: #bdbef7;
    }
    .retail-centres__block-item-number{
        display: inline-block;
        font-weight: 700;
        font-size: 18px;
    }
    .retail-centres__block-item-city{
        display: inline-block;
        font-weight: 500;
        font-size: 15px;
    }

    .retail-centres__block-item-adress{
        font-weight: 300;
        font-size: 12px;
    }
    .retail-centres__deal-item{
        width: 95%;
        margin: 10px 10px 0 30px;
        border: 1px solid #0f1179;
        border-radius: 5px;
        padding: 5px 0 5px 15px;
        text-align: left;
    }
    .retail-centres__deal-item:hover{
        cursor: pointer;
        color: #ffffff;
        background: #bdbef7;
    }
    .retail-centres__deal-item-title{
        font-weight: 700;
        font-size: 18px;
    }
    .retail-centres__deal-item-comment{
        font-weight: 300;
        font-size: 12px;
    }
    .retail-centres__deal-item-RC{
        display: inline-block;
        font-weight: 500;
        font-size: 15px;
    }
</style>