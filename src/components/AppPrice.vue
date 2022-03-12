<template>
  <p class="price">{{$store.state.currentBasket.price}} ₺</p>
  <button @click="$store.commit('addToBasket')">Add To Basket</button>
</template>

<script>
import { computed, watch } from 'vue'
import { useStore } from 'vuex'
export default {
    setup(){
        const store =useStore()
        const price =computed(() => store.state.currentBasket.price)
        watch(price,(newValue,oldValue) => {
        const price= document.querySelector(".price")   
        price.classList.add('priceChanged')
        setTimeout(() => {
            price.classList.remove("priceChanged")
        }, 250);
        })
    }
}
</script>

<style>
.price{
     color: white;
    text-align: center;
    transform: translateY(50%);
    font-size: 1.5rem;
    margin: 0.7rem;
   
}
.priceChanged p{
    color:rgb(248, 245, 36);
}
.priceChanged{
    
     animation: priceScale 250ms cubic-bezier(0.1, -0.28, 0.735, 0.005);
     
}
button{

    color:black;
    background: rgb(250, 207, 18);
    border:0 ;
    border-radius:0.5rem ;
    margin: 8px;
}
button:hover{
   opacity: 0.8;
}
@keyframes priceScale{
    0%{
        transform: scale(1);
    }
     50%{
        transform: scale(1.2);
    }
     100%{
        transform: scale(1);
    }
    }

</style>