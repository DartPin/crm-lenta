<template>
  <div class="retail-centres-new">
      <div class="retail-centres-new__title">Регистрация нового торгового комплекса</div>

      <div class="retail-centres-new__subtitle">Контакты ТК-{{rc.name}}</div>

      <div class="retail-centres-new__block">
        <div class="retail-centres-new__block-item-left">
          <div>
            <div class="retail-centres-new__item-new">Дивизион:  </div><select class="retail-centres-new__input-edit" v-model="selected">
              <option v-for="item of divisions" :key='item.id' :value="item.id">{{item.name}}</option>
              <option>Новый дивизион</option>
            </select>
            <div v-if="selected === 'Новый дивизион'">
              <div class="retail-centres-new__item-new">Название: </div><input type="text" class="retail-centres-new__input-edit" v-model="rc.name">
              <div class="retail-centres-new__item-new">Название(латиница): </div><input type="text" class="retail-centres-new__input-edit" v-model="rc.latName">
            </div>
          </div>
          <div>
            <div class="retail-centres-new__item-new">Номер ТК: </div><input type="text" class="retail-centres-new__input-edit" v-model='rc.RC.number'> 
          </div>
          <div>
            <div class="retail-centres-new__item-new">Город: </div><input type="text" class="retail-centres-new__input-edit" v-model='rc.RC.city'>   
          </div>
          <div>
            <div class="retail-centres-new__item-new">Адрес: </div><input type="text" class="retail-centres-new__input-edit" v-model='rc.RC.adress'>   
          </div>
        </div>
      </div>
      <div class="retail-centres-new__block-item-right"></div>
      
      <div class="retail-centres-new__block">
        <div class="retail-centres-new__block-item-left">
          <div class="retail-centres-new__contacts" v-for='(item, index) of rc.RC.contacts' :key='index' >
            
            <div>
              <div class="retail-centres-new__item-new">Должность: </div> <input type="text" class="retail-centres-new__input-edit" v-model="item.position"> 
            </div>
            <div>
              <div class="retail-centres-new__item-new">Фамилия, Имя:  </div> <input type="text" class="retail-centres-new__input-edit" v-model="item.name">
            </div>
            <div>
              <div class="retail-centres-new__item-new">Телефон: </div> <input type="text" class="retail-centres-new__input-edit" v-model="item.phone"> 
            </div>
            <div>
              <div class="retail-centres-new__item-new">E-mail: </div> <input type="text" class="retail-centres-new__input-edit" v-model="item.mail"> 
            </div>
          </div>

            <img class="retail-centres-new__img-add" src="../icons/add.png" @click='rc.RC.contacts.push({})'>
        </div>
      </div>
      <div class="retail-centres-new__block-item-right"></div>

      <div class="retail-centres-new__block">
        <div class="retail-centres-new__block-item-left">
          <div class="retail-centres-new__bunPlace"  v-for='(item, index) of rc.RC.bunnerPlace' :key='index' >
            <div>
              <div class="retail-centres-new__item-new">Название места размещения:  </div> <input type="text" class="retail-centres-new__input-edit" v-model='item.name'>
            </div>
            <div>
              <div class="retail-centres-new__item-new">Ширина: </div> <input type="text" class="retail-centres-new__input-edit" v-model='item.width'>  
            </div>
            <div>
              <div class="retail-centres-new__item-new">Высота: </div> <input type="text" class="retail-centres-new__input-edit" v-model='item.height'>  
            </div>
            <div>
              <div class="retail-centres-new__item-new">Текущий баннер(если есть):  </div> <input type="text" class="retail-centres-new__input-edit" v-model='item.bunner'> 
            </div>
          </div>

            <img class="retail-centres-new__img-add" src="../icons/add.png" @click='rc.RC.bunnerPlace.push({})'>
        </div>
      </div>
      <div class="retail-centres-new__block-item-right"></div>

      {{rc}}
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
      rc: 
        {
          id: 0,
          name: '',
          latName: '',
          RC: {
                id: 0,
                number: null,
                city: '',
                adress: '',
                contacts: [
                  { 
                    id: 0,
                    name: '',
                    position: '',
                    phone: '',
                    mail: ''
                  },
                ],
                bunnerPlace: [
                  {
                    id: 0,
                    width: 0,
                    height: 0,
                    name: "",
                    bunner: '',
                  },  
                ]
              },
          
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
    .retail-centres-new__title{
        font-size: 25px;
        color: #ffffff;
        font-weight: 700;
        border: 2px solid #0f1179;
        background: #bdbef7;
        border-radius: 10px;
        margin: 0px 15px 20px 15px;
        padding: 10px 0;
    }
    .retail-centres-new__subtitle{
        width: 30%;
        font-weight: 700;
        text-align: left;
        padding: 0 30px 10px 0;
        margin-left: 15px;
        border-bottom: 1px solid #0f1179;
    }
    .retail-centres-new__block{
      width: 100%;
      text-align: left;
      margin: 0 0 0 15px;
    }
    .retail-centres-new__block-item-left{
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
    .retail-centres-new__item-new{
      display: inline-block;
      width: 250px;
    }
    .retail-centres-new__input-edit{
      display: inline-block;
      height: 25px;
      border-radius: 5px;
      padding: 0 0 0 10px;
    }
    .retail-centres-new__contacts, .retail-centres-new__bunPlace{
      margin: 20px 0 20px 0;
    }
    .retail-centres-new__img-add{
      margin: 20px 0 0  230px;
      width: 40px;
      height: 40px;
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