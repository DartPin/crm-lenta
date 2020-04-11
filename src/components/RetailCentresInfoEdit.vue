<template>
  <div class="retail-centres-edit-info">
      <div class="retail-centres-info-edit__title">Торговые комплексы Лента ТК-{{rc.number}}</div>

      <div class="retail-centres-info-edit__subtitle">Контакты ТК-{{rc.number}}</div>

      <div class="retail-centres-info-edit__block">
        <div class="retail-centres-info-edit__block-item-left">
          <img class="retail-centres-info-edit__img-edit" src="../icons/edit.png">
          <div class="retail-centres-info-edit__block-item-adress">Адрес: <input class="retail-centres-info__input-edit" type="text" v-model="rc.city"> , <input class="retail-centres-info__input-edit" type="text" v-model="rc.adress"></div>
          <div class="retail-centres-info-edit__block-item-contacts" v-for="item of rc.contacts" :key="item.id">
            <div class="retail-centres-info-edit__block-item-contacts-position">Должность: <input class="retail-centres-info__input-edit" type="text" v-model="item.position"></div>
            <div class="retail-centres-info-edit__block-item-contacts-name">Фамилия, Имя: <input class="retail-centres-info__input-edit" type="text" v-model="item.name"></div>
            <div class="retail-centres-info-edit__block-item-contacts-phone">Телефон:<input class="retail-centres-info__input-edit" type="text" v-model="item.phone"></div>
            <div class="retail-centres-info-edit__block-item-contacts-mail">e-mail:<input class="retail-centres-info__input-edit" type="text" v-model="item.mail"></div>
          </div>
        </div>
        <div class="retail-centres-info__block-item-right">
          
        </div>
      </div>

      <div class="retail-centres-info-edit__subtitle">Фасадные места ТК-{{rc.number}}</div>

      <div class="retail-centres-info-edit__block">
        <div class="retail-centres-info-edit__block-item-left">
          <img class="retail-centres-info-edit__img-edit" src="../icons/edit.png">
          <div class="retail-centres-info-edit__block-place" v-for="item of rc.bunnerPlace" :key="item.id">
            <div class="retail-centres-info-edit__subtitle2"><input class="retail-centres-info__input-edit" type="text" v-model="item.name"></div>
              <div class="retail-centres-info-edit__block-place-size"><input class="retail-centres-info__input-edit" type="text" v-model="item.width">x<input class="retail-centres-info__input-edit" type="text" v-model="item.height"></div>-
              <div class="retail-centres-info-edit__block-place-bunner"><input class="retail-centres-info__input-edit" type="text" v-model="item.bunner"></div>
          </div>
        </div>
        <div class="retail-centres-info-edit__block-item-right">
          
        </div>
      </div>

      <button class="login__btn-confrim" @click="saveChange(rc)">сохранить</button>
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
    }
  },
  mounted(){
    
    let data = this.$store.getters.RETAILCENTRES;
    let index = this.$route.params.numRC

    data.forEach(el => {
      el.RC.forEach(element =>{
        if (Number(element.number) ===Number(index) ){
          this.rc = element
        }
      })
    })
  },
  methods:{
     saveChange(val){
       this.$store.dispatch('EDIT_RETAILCENTRES', val)
       this.$router.push('/RetailCentres/rc'+val.number)
     } 
  },

}
</script>

<style>
    .retail-centres-info-edit__title{
        font-size: 25px;
        color: #ffffff;
        font-weight: 700;
        border: 2px solid #0f1179;
        background: #bdbef7;
        border-radius: 10px;
        margin: 0px 15px 20px 15px;
        padding: 10px 0;
    }
    .retail-centres-info-edit__subtitle{
        width: 30%;
        font-weight: 700;
        text-align: left;
        padding: 0 30px 10px 0;
        margin-left: 15px;
        border-bottom: 1px solid #0f1179;
    }
    .retail-centres-info-edit__block{
      width: 100%;
      text-align: left;
      margin: 0 0 0 15px;
    }
    .retail-centres-info-edit__block-item-left{
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
    .retail-centres-info-edit__block-item-adress{
      font-size: 18px;
      font-weight: 700;
    }     
    .retail-centres-info-edit__block-item-contacts{
      margin: 10px 0 0 10px;
    }
    .retail-centres-info-edit__img-edit{
      position: absolute;
      top: 0;
      right: 0;
      margin: 10px 10px 0 0;
      width: 40px;
      height: 40px; 
    }
    .retail-centres-info-edit__block__img{
      display:inline-block;
      width: 5%;
      text-align: right;
    }
    .retail-centres-info-edit__block__img-edit{
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
    .retail-centres-info-edit__block-place{
      display: inline-block;
      width: 45%;
    }
    .retail-centres-info-edit__block-place-size{
      display: inline-block;
      font-size: 15px;
      font-weight: 500;
      margin: 10px 5px 0 25px;
    }
    .retail-centres-info-edit__block-place-bunner{
      display: inline-block;
      font-size: 15px;
      font-weight: 500;
      margin: 5px 0 0 15px;
    }
    .retail-centres-info__input-edit{
      height: 25px;
      border-radius: 5px;
      padding: 0 0 0 10px;
    }
    .login__btn-confrim {
        display: inline-block;
        width: 15em;
        font-size: 80%;
        color: rgba(255,255,255,.9);
        text-shadow: #2e7ebd 0 1px 2px;
        text-decoration: none;
        text-align: center;
        line-height: 1.1;
        white-space: pre-line;
        padding: .7em 0;
        border: 1px solid;
        border-color: #60a3d8 #2970a9 #2970a9 #60a3d8;
        border-radius: 6px;
        outline: none;
        background: #60a3d8 linear-gradient(#89bbe2, #60a3d8 50%, #378bce);
        box-shadow: inset rgba(255,255,255,.5) 1px 1px;
    }
    .login__btn-confrim:first-line{
        font-size: 170%;
        font-weight: 700;
    }
    .login__btn-confrim:hover {
        color: rgb(255,255,255);
        background-image: linear-gradient(#9dc7e7, #74afdd 50%, #378bce);
    }
    .login__btn-confrim:active {
        color: rgb(255,255,255);
        border-color: #2970a9;
        background-image: linear-gradient(#5796c8, #6aa2ce);
        box-shadow: none;
    }
</style>