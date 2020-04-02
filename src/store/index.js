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
    retailCentresVolga: [
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
              bunner: 'Товар недели 23.03',
            },
            {
              id: 1,
              width: 6,
              height: 3,
              bunner: 'Товары для Пасхи',
            },{
              id: 2,
              width: 2,
              height: 3,
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
          ]
      },
    ],
    retailDealVolga: [
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
    ],
    retailCentresCentr: [
      {
          id: 0,
          number: 30,
          city: 'Самара',
          adress: 'ул. Ленина 1'
      },
      {
          id: 1,
          number: 36,
          city: 'Самара',
          adress: 'ул. Ленина 1'
      },
      {
          id: 2,
          number: 37,
          city: 'Самара',
          adress: 'ул. Ленина 1'
      },
      {
          id: 3,
          number: 40,
          city: 'Самара',
          adress: 'ул. Ленина 1'
      },
      {
          id: 4,
          number: 50,
          city: 'Самара',
          adress: 'ул. Ленина 1'
      },
      {
          id: 5,
          number: 55,
          city: 'Самара',
          adress: 'ул. Ленина 1'
      },
      {
          id: 6,
          number: 56,
          city: 'Самара',
          adress: 'ул. Ленина 1'
      },
      {
          id: 7,
          number: 60,
          city: 'Самара',
          adress: 'ул. Ленина 1'
      },
    ],
    retailDealCentr: [
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
    ],
  },
  getters: {
    USERS: state => {
      return state.users;
    },
    RETAILCENTRESVOLGA: state => {
      return state.retailCentresVolga;
    },
    RETAILCENTRESCENTR: state => {
      return state.retailCentresCentr;
    },
    RETAILDEALVOLGA: state => {
      return state.retailDealVolga;
    },
    RETAILDEALCENTR: state => {
      return state.retailDealCentr;
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
