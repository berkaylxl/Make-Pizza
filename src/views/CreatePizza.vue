<template>
  <div class="create-pizza-container">
    <div @click="$router.push({name:'basket'})"  class="fab" :data-total="$store.state.basket.length">🍕</div>
    <app-size />
    <div class="make-pizza">
      <div class="pizza">
        <img
          class="pizza-item"
          :src="require('@/assets/ingredients/dish.png')"
        />
        <img
          class="pizza-item"
          :src="require('@/assets/ingredients/pizza-1.png')"
        />
        <img
          v-for="item in $store.state.pizzaItems"
          :key="item"
          class="on-pizza-item"
          :class="item.name"
          :data-out="item.out"
          :style="`left: ${item.out.split(';')[0]}; top: ${
            item.out.split(';')[1]
          }`"
          :src="item.url"
        />
      </div>
    </div>
    <div class="price">
      <app-price />
    </div>
    <div class="ingredients" draggable="true">
      <app-ingredient
        v-for="ingredient in $store.state.ingredients"
        :key="ingredient.name"
        :ingredient="ingredient"
      />
    </div>
  </div>
</template>

<script>
import { computed, onMounted, watch } from "@vue/runtime-core";
import AppIngredient from "../components/AppIngredient.vue";
import { useStore } from "vuex";
import AppPrice from "../components/AppPrice.vue";
import AppSize from "../components/AppSize.vue";
export default {
  components: {
    AppIngredient,
    AppPrice,
    AppSize,
  },
  setup() {
    const store = useStore();
    const basket = computed(() => store.state.basket.length);

    watch(basket, (newValue, oldValue) => {
      //pizza rotation
      document.querySelector('.pizza').classList.add('new-item-added')
      setTimeout(() => {
        document.querySelector('.pizza').classList.remove('new-item-added')
      }, 500);


        store.state.ingredients.forEach((item) => {
        document.querySelectorAll(`.${item.name}`).forEach((x) => {
          const position = x.dataset.out.split(';');
          x.style.left = position[0];
          x.style.top = position[1];
        });
      });
    });

    onMounted(() => {
      const ingredients = document.querySelector(".ingredients");
      const pizzaDropzone = document.querySelector(".pizza");
      ingredients.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("name", e.target.alt);
      });
      pizzaDropzone.addEventListener("dragover", (e) => {
        e.preventDefault();
      });
      pizzaDropzone.addEventListener("drop", (e) => {
        e.preventDefault();
        const ingredientName = e.dataTransfer.getData("name").toLowerCase();
        const item = document.querySelectorAll(`.${ingredientName}`);
        const position = store.state.pizzaItems.filter(
          (item) => item.name == ingredientName
        );
        store.commit(
          "addToSelecteds",
          store.state.ingredients.find((item) => item.name == ingredientName)
        );
        position.forEach((position, index) => {
          const inValue = position.in.split(";");
          item[index].style.left = inValue[0];
          item[index].style.top = inValue[1];
        });
      });
      pizzaDropzone.addEventListener("dragleave", (e) => {
        e.preventDefault();
      });
    });
  },
};
</script>




<style>
.create-pizza-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.fab {
  position: fixed;
  background: rgb(106, 21, 243);
  right: 5%;
  top: 15%;
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  display: grid;
  place-items: center;
  font-size: 1.5rem;
  cursor: pointer;
}
.fab::before {
  content: attr(data-total);
  position: absolute;
  right: 0;
  font-size: 0.8rem;
  background: wheat;
  color: black;
  padding: 0.3rem;
  border-radius: 50%;
  top: -3px;
}
.make-pizza {
  margin-top: 2rem;
  flex: 5;
  display: grid;
  place-items: center;
}
.pizza {
  
  position: relative;
  width: 500px;
  height: 100%;
  overflow: hidden;
}
@keyframes rotatePizza{
  to{
    transform: rotate(360deg);
  }
}
.new-item-added{
animation: rotatePizza 500ms linear;
}
.pizza .pizza-item {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.pizza img:nth-child(2) {
  padding: 0.55rem;
}
.ingredients {
  margin-top: 2rem;
  flex-wrap: wrap;
  display: flex;
  gap: 1rem;
  flex: 1;
  justify-content: center;
  align-items: center;
}
.on-pizza-item {
  position: absolute;
  transition: left 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  width: 5rem;
}
</style>