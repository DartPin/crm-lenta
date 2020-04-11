import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [
      {
        id: 0,
        login: "ALyulkov",
        password: "__DartPin13__",
        rights: 0
      }
    ],
    retailCentres: [
      {
        id: 0,
        name: 'Волга',
        latName: 'Volga',
        RC: [
          {
            id: 0,
            number: 30,
            city: 'Самара',
            adress: 'ул. Ленина 1',
            contacts: [
              { 
                id: 0,
                name: 'Егорова Екатерина',
                position: 'Директор',
                phone: '+79061234564',
                mail: 'e.egorova@mail.com'
              },
              {
                id: 1,
                name: 'Иван Иванов',
                position: 'Гл. Инженер',
                phone: '+79061234564',
                mail: 'i.ivanov@mail.com'
              },
            ],
            bunnerPlace: [
              {
                id: 0,
                width: 2,
                height: 3,
                name: "место №1",
                bunner: 'Товар недели 23.03',
              },
              {
                id: 1,
                width: 6,
                height: 3,
                name: "место №1",
                bunner: 'Товары для Пасхи',
              },{
                id: 2,
                width: 2,
                height: 3,
                name: "место №1",
                bunner: '9 мая',
              }
            ]
          },
          {
              id: 1,
              number: 36,
              city: 'Самара',
              adress: 'ул. Ленина 1',
              contacts: [
                { 
                  id: 0,
                  name: 'Егорова Екатерина',
                  position: 'Директор',
                  phone: '+79061234564',
                  mail: 'e.egorova@mail.com'
                },
                {
                  id: 1,
                  name: 'Иван Иванов',
                  position: 'Гл. Инженер',
                  phone: '+79061234564',
                  mail: 'i.ivanov@mail.com'
                },
              ],
              bunnerPlace: [
                {
                  id: 0,
                  width: 2,
                  height: 3,
                  name: "место №1",
                  bunner: 'Товар недели 23.03',
                },
                {
                  id: 1,
                  width: 6,
                  height: 3,
                  name: "место №1",
                  bunner: 'Товары для Пасхи',
                },{
                  id: 2,
                  width: 2,
                  height: 3,
                  name: "место №1",
                  bunner: '9 мая',
                }
              ]
          },
          {
              id: 2,
              number: 37,
              city: 'Самара',
              adress: 'ул. Ленина 1',
              contacts: [
                { 
                  id: 0,
                  name: 'Егорова Екатерина',
                  position: 'Директор',
                  phone: '+79061234564',
                  mail: 'e.egorova@mail.com'
                },
                {
                  id: 1,
                  name: 'Иван Иванов',
                  position: 'Гл. Инженер',
                  phone: '+79061234564',
                  mail: 'i.ivanov@mail.com'
                },
              ],
              bunnerPlace: [
                {
                  id: 0,
                  width: 2,
                  height: 3,
                  name: "место №1",
                  bunner: 'Товар недели 23.03',
                },
                {
                  id: 1,
                  width: 6,
                  height: 3,
                  name: "место №1",
                  bunner: 'Товары для Пасхи',
                },{
                  id: 2,
                  width: 2,
                  height: 3,
                  name: "место №1",
                  bunner: '9 мая',
                }
              ]
          },
          {
              id: 3,
              number: 40,
              city: 'Самара',
              adress: 'ул. Ленина 1',
              contacts: [
                { 
                  id: 0,
                  name: 'Егорова Екатерина',
                  position: 'Директор',
                  phone: '+79061234564',
                  mail: 'e.egorova@mail.com'
                },
                {
                  id: 1,
                  name: 'Иван Иванов',
                  position: 'Гл. Инженер',
                  phone: '+79061234564',
                  mail: 'i.ivanov@mail.com'
                },
              ],
              bunnerPlace: [
                {
                  id: 0,
                  width: 2,
                  height: 3,
                  name: "место №1",
                  bunner: 'Товар недели 23.03',
                },
                {
                  id: 1,
                  width: 6,
                  height: 3,
                  name: "место №1",
                  bunner: 'Товары для Пасхи',
                },{
                  id: 2,
                  width: 2,
                  height: 3,
                  name: "место №1",
                  bunner: '9 мая',
                }
              ]
          },
          {
              id: 4,
              number: 50,
              city: 'Самара',
              adress: 'ул. Ленина 1',
              contacts: [
                { 
                  id: 0,
                  name: 'Егорова Екатерина',
                  position: 'Директор',
                  phone: '+79061234564',
                  mail: 'e.egorova@mail.com'
                },
                {
                  id: 1,
                  name: 'Иван Иванов',
                  position: 'Гл. Инженер',
                  phone: '+79061234564',
                  mail: 'i.ivanov@mail.com'
                },
              ],
              bunnerPlace: [
                {
                  id: 0,
                  width: 2,
                  height: 3,
                  name: "место №1",
                  bunner: 'Товар недели 23.03',
                },
                {
                  id: 1,
                  width: 6,
                  height: 3,
                  name: "место №1",
                  bunner: 'Товары для Пасхи',
                },{
                  id: 2,
                  width: 2,
                  height: 3,
                  name: "место №1",
                  bunner: '9 мая',
                }
              ]
          },
          {
              id: 5,
              number: 55,
              city: 'Самара',
              adress: 'ул. Ленина 1',
              contacts: [
                { 
                  id: 0,
                  name: 'Егорова Екатерина',
                  position: 'Директор',
                  phone: '+79061234564',
                  mail: 'e.egorova@mail.com'
                },
                {
                  id: 1,
                  name: 'Иван Иванов',
                  position: 'Гл. Инженер',
                  phone: '+79061234564',
                  mail: 'i.ivanov@mail.com'
                },
              ],
              bunnerPlace: [
                {
                  id: 0,
                  width: 2,
                  height: 3,
                  name: "место №1",
                  bunner: 'Товар недели 23.03',
                },
                {
                  id: 1,
                  width: 6,
                  height: 3,
                  name: "место №1",
                  bunner: 'Товары для Пасхи',
                },{
                  id: 2,
                  width: 2,
                  height: 3,
                  name: "место №1",
                  bunner: '9 мая',
                }
              ]
          },
          {
              id: 6,
              number: 56,
              city: 'Самара',
              adress: 'ул. Ленина 1',
              contacts: [
                { 
                  id: 0,
                  name: 'Егорова Екатерина',
                  position: 'Директор',
                  phone: '+79061234564',
                  mail: 'e.egorova@mail.com'
                },
                {
                  id: 1,
                  name: 'Иван Иванов',
                  position: 'Гл. Инженер',
                  phone: '+79061234564',
                  mail: 'i.ivanov@mail.com'
                },
              ],
              bunnerPlace: [
                {
                  id: 0,
                  width: 2,
                  height: 3,
                  name: "место №1",
                  bunner: 'Товар недели 23.03',
                },
                {
                  id: 1,
                  width: 6,
                  height: 3,
                  name: "место №1",
                  bunner: 'Товары для Пасхи',
                },{
                  id: 2,
                  width: 2,
                  height: 3,
                  name: "место №1",
                  bunner: '9 мая',
                }
              ]
          },
          {
              id: 7,
              number: 60,
              city: 'Самара',
              adress: 'ул. Ленина 1',
              contacts: [
                { 
                  id: 0,
                  name: 'Егорова Екатерина',
                  position: 'Директор',
                  phone: '+79061234564',
                  mail: 'e.egorova@mail.com'
                },
                {
                  id: 1,
                  name: 'Иван Иванов',
                  position: 'Гл. Инженер',
                  phone: '+79061234564',
                  mail: 'i.ivanov@mail.com'
                },
              ],
              bunnerPlace: [
                {
                  id: 0,
                  width: 2,
                  height: 3,
                  name: "место №1",
                  bunner: 'Товар недели 23.03',
                },
                {
                  id: 1,
                  width: 6,
                  height: 3,
                  name: "место №1",
                  bunner: 'Товары для Пасхи',
                },{
                  id: 2,
                  width: 2,
                  height: 3,
                  name: "место №1",
                  bunner: '9 мая',
                }
              ]
          },
        ]
      },
      {
        id: 1,
        name: 'Центр',
        latName: 'Centr',
        RC:[
          {
            id: 0,
            number: 130,
            city: 'Самара',
            adress: 'ул. Ленина 1'
          },
          {
              id: 1,
              number: 136,
              city: 'Самара',
              adress: 'ул. Ленина 1'
          },
          {
              id: 2,
              number: 137,
              city: 'Самара',
              adress: 'ул. Ленина 1'
          },
          {
              id: 3,
              number: 140,
              city: 'Самара',
              adress: 'ул. Ленина 1'
          },
          {
              id: 4,
              number: 150,
              city: 'Самара',
              adress: 'ул. Ленина 1'
          },
          {
              id: 5,
              number: 155,
              city: 'Самара',
              adress: 'ул. Ленина 1'
          },
          {
              id: 6,
              number: 156,
              city: 'Самара',
              adress: 'ул. Ленина 1'
          },
          {
              id: 7,
              number: 160,
              city: 'Самара',
              adress: 'ул. Ленина 1'
          },
        ]
      }
    ],
    deals:[
      {
        id: 0,
        name: 'Волга',
        latName: 'Volga',
        RCDeals: [
          {
              id: 0,
              title: 'Товары недели 01.04.20г',
              RC: [30, 36, 50, 55],
              manager: 'Усова Наталья',
              comment: 'Отправлено монтажникам'
          },
          {
              id: 1,
              title: 'Товары недели 01.04.20г',
              RC: [30, 36, 50, 55],
              manager: 'Усова Наталья',
              comment: 'Отправлено монтажникам'
          },
          {
              id: 2,
              title: 'Товары недели 01.04.20г',
              RC: [30, 36, 50, 55],
              manager: 'Усова Наталья',
              comment: 'Отправлено монтажникам'
          },
          {
              id: 3,
              title: 'Товары недели 01.04.20г',
              RC: [30, 36, 50, 55],
              manager: 'Усова Наталья',
              comment: 'Отправлено монтажникам'
          },
          {
              id: 4,
              title: 'Товары недели 01.04.20г',
              RC: [30, 50, 55],
              manager: 'Усова Наталья',
              comment: 'Отправлено монтажникам'
          },
          {
              id: 5,
              title: 'Товары недели 01.04.20г',
              RC: [30, 36, 50, 55],
              manager: 'Усова Наталья',
              comment: 'Отправлено монтажникам'
          }
        ]
      },
      {
        id: 1,
        name: 'Центр',
        latName: 'Centr',
        RCDeals: [
          {
              id: 0,
              title: 'Товары недели 01.04.20г',
              RC: [30, 36, 50, 55],
              manager: 'Усова Наталья',
              comment: 'Отправлено монтажникам'
          },
          {
              id: 1,
              title: 'Товары недели 01.04.20г',
              RC: [30, 36, 50, 55],
              manager: 'Усова Наталья',
              comment: 'Отправлено монтажникам'
          },
          {
              id: 2,
              title: 'Товары недели 01.04.20г',
              RC: [30, 36, 50, 55],
              manager: 'Усова Наталья',
              comment: 'Отправлено монтажникам'
          },
          {
              id: 3,
              title: 'Товары недели 01.04.20г',
              RC: [30, 36, 50, 55],
              manager: 'Усова Наталья',
              comment: 'Отправлено монтажникам'
          },
          {
              id: 4,
              title: 'Товары недели 01.04.20г',
              RC: [30, 36, 50, 55],
              manager: 'Усова Наталья',
              comment: 'Отправлено монтажникам'
          },
          {
              id: 5,
              title: 'Товары недели 01.04.20г',
              RC: [30, 36, 50, 55],
              manager: 'Усова Наталья',
              comment: 'Отправлено монтажникам'
          }
        ]
      }
    ],
  },
  getters: {
    USERS: state => {
      return state.users;
    },
    RETAILCENTRES: state => {
      return state.retailCentres;
    },
    DEALS: state => {
      return state.deals;
    },
  },
  mutations: {
    CHANGE_RETAILCENTRE(state, val){
      state.retailCentres.forEach(el => {
        el.RC.forEach(element =>{
          if(element.number === val.number){
            element = val
          } else {
            console.log("не найдено совпадений")
          }
        })
      });
      console.log(state.retailCentresVolga)
    },
    NEW_RETAILCENTRE(state, val){
      let status = false
      state.retailCentres.forEach(element => {
        if (element.id === val.id){
          console.log('covpalo')
          status = true
        } 
      })

      if (status === false){
        let rc = {}
        rc.id = val.id
        rc.name = val.name
        rc.latName = val.latName
        rc.RC = []
        rc.RC.push(val.RC)
        state.retailCentres.push(rc)
        let deal={}
        deal.id = val.id
        deal.name = val.name
        deal.latName = val.latName
        deal.RCDeals = []
        state.deals.push(deal) 
      }
      console.log(state.retailCentres)
    }
  },
  actions: {
    EDIT_RETAILCENTRES:async (context, val) => {
      context.commit('CHANGE_RETAILCENTRES', val)
    },
    ADD_RETAILCENTRE: async (context, val) => {
      context.commit('NEW_RETAILCENTRE', val)
      
    }
  },
  modules: {
  }
})
