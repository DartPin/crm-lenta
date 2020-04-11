<template>
  <div class="deals-new">
      <div class="deals-new__title">Регистрация нового торгового комплекса</div>

      <div class="retail-centres-new__subtitle">Дивизион</div>
      <select class="retail-centres-new__input-edit" v-model="selected">
              <option v-for="item of divisions" :key='item.id' :value="item.id">{{item.name}}</option>
      </select>

      <div class="retail-centres-new__subtitle">Вид работ</div>
      <select class="retail-centres-new__input-edit">
              <option>Товары недели</option>
      </select>


      <div class="retail-centres-new__block">
        <div class="retail-centres-new__block-item-left">
          <div class="retail-centres-new__bunPlace">
            <div>
              <div class="retail-centres-new__item-new">Название места размещения:  </div> <input type="text" class="retail-centres-new__input-edit">
            </div>
            <div>
              <div class="retail-centres-new__item-new">Ширина: </div> <input type="text" class="retail-centres-new__input-edit">  
            </div>
            <div>
              <div class="retail-centres-new__item-new">Высота: </div> <input type="text" class="retail-centres-new__input-edit">  
            </div>
            <div>
              <div class="retail-centres-new__item-new">Текущий баннер(если есть):  </div> <input type="text" class="retail-centres-new__input-edit"> 
            </div>
          </div>

            <img class="retail-centres-new__img-add" src="../icons/add.png" @click='rc.RC.bunnerPlace.push({})'>
        </div>
      </div>

      <button class="login__btn-confrim" @click="saveChange(rc, selected)">сохранить</button>
  </div>
</template>

<script>
export default {
  name: 'RetailCentresInfo',
  components: {
      
  },
  data: function () {
    return {
      deal: 
        {
          id: 0,
          name: '',
          
        },
        divisions: [],
        selected: ''
    }    
  },
  mounted(){
    let data = this.$store.getters.RETAILCENTRES;
    data.forEach(element => {
      let division = {}
      division.id = element.id
      division.name = element.name
      division.latName = element.latName
      this.divisions.push(division)
    });
  },
  methods:{
     saveChange(val){
       if (this.selected != "Новый дивизион"){
         this.rc.name = this.divisions[this.selected].name
         this.rc.latName = this.divisions[this.selected].latName
         console.log(this.rc)
       } else {
         this.divisions.forEach( el =>{
           console.log (el.id +'='+ this.rc.id)
           if (Number(el.id) === Number(this.rc.id)){
             this.rc.id = el.id + 1;

             console.log(this.rc.id)
           }
         })
         this.$store.dispatch('ADD_RETAILCENTRE', this.rc)
       }
     } 
  },

}
</script>

<style>
    .deals-new__title{
        font-size: 25px;
        color: #ffffff;
        font-weight: 700;
        border: 2px solid #0f1179;
        background: #bdbef7;
        border-radius: 10px;
        margin: 0px 15px 20px 15px;
        padding: 10px 0;
    }
    .deals-new__subtitle{
        width: 30%;
        font-weight: 700;
        text-align: left;
        padding: 0 30px 10px 0;
        margin-left: 15px;
        border-bottom: 1px solid #0f1179;
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