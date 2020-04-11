<template>
  <div class="login">
    <div class="login__window">
        <div class="login__window-title">LogIn</div>
        <div class="login__window-formline">
            <div class="login__window-formline-text">логин</div>
            <div class="login__window-formline-form"> <input type="text" class="login__window-formline-form-input" v-model="user.login"> </div>
        </div>
        <div class="login__window-formline">
            <div class="login__window-formline-text">пароль</div>
            <div class="login__window-formline-form"><input type="password" class="login__window-formline-form-input" v-model="user.pass"> </div>
        </div>
        <div class="login__alert" v-if="isActive">Логин или пароль введены неверно</div>
        <button class="login__btn-confrim" @click="checkUser(user)">войти</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
  data: function () {
    return {
      user: {
          login: null,
          pass: null
      },
      isActive: false
    }
  },
  methods:{
      checkUser(val){
          let users = this.$store.getters.USERS;
          users.forEach(el => {
              if (el.login === val.login){
                  if (el.password === val.pass){
                      this.isActive = false
                      this.$router.push('Main')
                  } else {
                      this.isActive = true
                  }
              }else {
                this.isActive = true
              }
          });
      }
  }
}
</script>

<style>
    
    
    .login{
        text-align: center;
        width: 100%;
        height: 100%;
        color: #FFFFFF;
    }
    .login__window{    
        position: relative;
        width: 30%;
        border: 2px solid #0f1179;
        background: #bdbef7;
        border-radius: 10px;
        padding: 10px;
    }
    .login__window-title{
        font-family: 'Permanent Marker', cursive;
        font-size: 40px;
    }
    .login__window-formline{
        margin: 20px 0;
        font-size: 20px;
        text-transform: uppercase;
        font-weight: 700;
    }
    .login__window-formline-text{
        width: 40%;
        text-align: right;
        display: inline-block;
    }
    .login__window-formline-form{
        display: inline-block;
        width: 60%;
        text-align: left;
    }
    .login__window-formline-form-input{
        position: relative;
        width: 80%;
        height: 30px;
        border-radius: 5px;
        border: 1px solid #0f1179;
        padding-left: 10px;
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
    .login__alert{
        color: red;
        height: 30px;
        font-weight: 700;
        font-size: 15px;
    }
</style>