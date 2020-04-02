<template>
  <div class="retail-centres-info">
      <div class="retail-centres-info__title">Торговые комплексы Лента ТК-{{rc.number}}</div>

      <div class="retail-centres-info__subtitle">Контакты ТК-{{rc.number}}</div>

      <div class="retail-centres-info__block">
        <div class="retail-centres-info__block-item-left">
          <img class="retail-centres-info__img-edit" src="../icons/edit.png">
          <div class="retail-centres-info__block-item-adress">Адрес: {{rc.city}}, {{rc.adress}}</div>
          <div class="retail-centres-info__block-item-contacts" v-for="item of rc.contacts" :key="item.id">
            <div class="retail-centres-info__block-item-contacts-position">Должность: {{item.position}}</div>
            <div class="retail-centres-info__block-item-contacts-name">Фамилия, Имя: {{item.name}}</div>
            <div class="retail-centres-info__block-item-contacts-phone">Телефон:{{item.phone}}</div>
            <div class="retail-centres-info__block-item-contacts-mail">e-mail: {{item.mail}}</div>
          </div>
        </div>
        <div class="retail-centres-info__block-item-right">
          
        </div>
      </div>

      <div class="retail-centres-info__subtitle">Фасадные места ТК-{{rc.number}}</div>

      <div class="retail-centres-info__block">
        <div class="retail-centres-info__block-item-left">
          <img class="retail-centres-info__img-edit" src="../icons/edit.png">
          <div class="retail-centres-info__block-place">
            <div class="retail-centres-info__subtitle2">Место</div>
              <div class="retail-centres-info__block-place-size"> 2х3</div>
              <div class="retail-centres-info__block-place-bunner"> Товар недели</div>
          </div>
        </div>
        <div class="retail-centres-info__block-item-right">
          
        </div>
      </div>

      <div class="retail-centres-info__subtitle">Текущие работы в ТК-{{rc.number}}</div>
        
      <div class="retail-centres-info__block">
        <div class="retail-centres-info__block-deal" v-for="item of deals" :key="item.id">
          <div class="retail-centres-info__block-deal-left">
            <div class="retail-centres-info__block-deal-title">{{item.title}}</div>
            <div class="retail-centres-info__block-deal-manager">{{item.manager}}:</div>
            <div class="retail-centres-info__block-deal-comment">{{item.comment}}</div>
          </div>
          <div class="retail-centres-info__block__img">
            <img class="retail-centres-info__block__img-edit" src="../icons/edit.png">
          </div>
          
        </div>
      </div>

  </div>
</template>

<script>
export default {
  name: 'RetailCentresInfo',
  components: {
      
  },
  data: function () {
    return {
      rc: [],
      deals: []
    }
  },
  mounted(){
    let RC = this.$store.getters.RETAILCENTRESVOLGA;
    let index = this.$route.params.numRC
    RC.forEach(element => {
      if (Number(element.number) ===Number(index) ){
        this.rc = element
        console.log(this.rc)
      }
    });

    let RCdeal = this.$store.getters.RETAILDEALVOLGA;
    RCdeal.forEach(el => {
      el.RC.forEach(item =>{
        if (Number(item) === Number(index)){
          this.deals.push(el)
        }
      })
    });
  },
  methods:{
      
  },

}
</script>

<style lang="scss">
    .retail-centres-info__title{
        font-size: 25px;
        color: #ffffff;
        font-weight: 700;
        border: 2px solid #0f1179;
        background: #bdbef7;
        border-radius: 10px;
        margin: 0px 15px 20px 15px;
        padding: 10px 0;
    }
    .retail-centres-info__subtitle{
        width: 30%;
        font-weight: 700;
        text-align: left;
        padding: 0 30px 10px 0;
        margin-left: 15px;
        border-bottom: 1px solid #0f1179;
    }
    .retail-centres-info__block{
      width: 100%;
      text-align: left;
      margin: 0 0 0 15px;
    }
    .retail-centres-info__block-item-left{
        display: inline-block;
        width: 48%;
        position: relative;
        left: 0;
        margin: 10px 10px 15px 0;
        border: 1px solid #0f1179;
        border-radius: 5px;
        padding: 5px 0 5px 15px;
        text-align: left;
    }
    .retail-centres-info__block-item-adress{
      font-size: 18px;
      font-weight: 700;
    }     
    .retail-centres-info__block-item-contacts{
      margin: 10px 0 0 10px;
    }
    .retail-centres-info__img-edit{
      position: absolute;
      top: 0;
      right: 0;
      margin: 10px 10px 0 0;
      width: 40px;
      height: 40px; 
    }
    .retail-centres-info__block-deal{
        width: 95%;
        margin: 10px 10px 0 30px;
        border: 1px solid #0f1179;
        border-radius: 5px;
        padding: 5px 0 5px 15px;
        text-align: left;
    }
    .retail-centres-info__block-deal:hover{
        cursor: pointer;
        color: #ffffff;
        background: #bdbef7;
    }
    .retail-centres-info__block-deal-title{
        font-weight: 700;
        font-size: 18px;
    }
    .retail-centres-info__block-deal-manager{
        display:inline-block;
        font-weight: 500;
        font-size: 12px;
    }
    .retail-centres-info__block-deal-comment{
        display:inline-block;
        font-weight: 300;
        font-size: 12px;
    }
    .retail-centres-info__block-deal-left{
      display: inline-block;
      width: 95%;
    }
    .retail-centres-info__block__img{
      display:inline-block;
      width: 5%;
      text-align: right;
    }
    .retail-centres-info__block__img-edit{
      margin-right: 10px;
      width: 30px;
      height: 30px;
    }
    .retail-centres-info__subtitle2{
        width: 25%;
        font-size: 15px;
        font-weight: 700;
        text-align: left;
        padding: 10px 30px 10px 0;
        margin-left: 25px;
        border-bottom: 1px solid #0f1179;
    }
</style>