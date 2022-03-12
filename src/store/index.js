import { createStore } from 'vuex'

export default createStore({
  state: {
    drinks: [
      {
        name: 'ayran',
        url: require('@/assets/drinks/ayran.png'),
        price: 5
      },
      {
        name: 'coke',
        url: require('@/assets/drinks/coke.png'),
        price: 8
      },
      {
        name: 'ice-tea',
        url: require('@/assets/drinks/ice-tea.png'),
        price: 6
      },
      {
        name: 'sprite',
        url: require('@/assets/drinks/sprite.png'),
        price: 8
      },
      {
        name: 'water',
        url: require('@/assets/drinks/water.png'),
        price: 2
      },

    ],
    ingredients: [
      {
        name: 'cheese',
        url: require('@/assets/ingredients/cheese.png'),
        price: 2
      },
      {
        name: 'chili',
        url: require('@/assets/ingredients/chili.png'),
        price: 1
      },
      {
        name: 'mushroom',
        url: require('@/assets/ingredients/mushroom.png'),
        price: 2
      },
      {
        name: 'olive',
        url: require('@/assets/ingredients/olive.png'),
        price: 1
      },
      {
        name: 'onion',
        url: require('@/assets/ingredients/onion.png'),
        price: 1
      },
      {
        name: 'pea',
        url: require('@/assets/ingredients/pea.png'),
        price: 2
      },
      {
        name: 'pickle',
        url: require('@/assets/ingredients/pickle.png'),
        price: 3
      },
    ],
    pizzaItems:[
     {
      name:'cheese',
      in:'20%;-10%',
      out:'-50%;10%',
      url:require('@/assets/units/cheese.png')
     },
     {
      name:'cheese',
      in:'50%;10%',
      out:'125%;10%',
      url:require('@/assets/units/cheese.png')
     },
     {
      name:'chili',
      in:'20%;10%',
      out:'125%;10%',
      url:require('@/assets/units/chili.png')
     },
     {
      name:'chili',
      in:'50%;-15%',
      out:'-50%;10%',
      url:require('@/assets/units/chili.png')
     },
     {
      name:'mushroom',
      in:'25%;25%',
      out:'125%;10%',
      url:require('@/assets/units/mushroom.png')
     },
     {
      name:'mushroom',
      in:'65%;0%',
      out:'-50%;10%',
      url:require('@/assets/units/mushroom.png')
     },
     {
      name:'olive',
      in:'45%;25%',
      out:'125%;10%',
      url:require('@/assets/units/olive.png')
     },
     {
      name:'olive',
      in:'69%;-10%',
      out:'-50%;10%',
      url:require('@/assets/units/olive.png')
     },
     {
      name:'pea',
      in:'74%;10%',
      out:'125%;10%',
      url:require('@/assets/units/pea.png')
     },
     {
      name:'pea',
      in:'35%;-20%',
      out:'-50%;10%',
      url:require('@/assets/units/pea.png')
     },
     {
      name:'onion',
      in:'64%;24%',
      out:'125%;10%',
      url:require('@/assets/units/onion.png')
     },
     {
      name:'onion',
      in:'35%;0%',
      out:'-50%;10%',
      url:require('@/assets/units/onion.png')
     },
     {
      name:'pickle',
      in:'64%;-24%',
      out:'125%;10%',
      url:require('@/assets/units/pickle.png')
     },
     {
      name:'pickle',
      in:'22%;-30%',
      out:'-50%;10%',
      url:require('@/assets/units/pickle.png')
     }
    ],
    currentBasket:{
      price:30,
      size:{
        size:'S',
        price:2
      },
      selecteds:[]
    },
    basket:[]
  },
  getters:{
    totalPrice: state =>{
      return state.basket.reduce(
        (total,current) => total += current.price, 0 )
    }
  },
  mutations: {
    addToSelecteds(state,payload){
      if (!state.currentBasket.selecteds.includes(payload.name)) {
        state.currentBasket.selecteds.push(payload.name)
        state.currentBasket.price += payload.price
      }
    },
    setSize(state,payload){
     state.currentBasket.price -= state.currentBasket.size.price; 
     state.currentBasket.size = payload
     state.currentBasket.price += state.currentBasket.size.price
  },
  addToBasket(state){
   state.basket.push({type:'pizza', ...state.currentBasket})
   state.currentBasket={
    price:30,
    size:{
      size:'S',
      price:2
    },
    selecteds:[]
   }
  },
  addDrinkToBasket(state,drink){
    state.basket.push({type:'drink',...drink})
  }
},
  actions: {
  },
  modules: {
  }
})
