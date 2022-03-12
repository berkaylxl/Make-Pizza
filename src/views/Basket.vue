<template>
  <div class="basket-container">
    <table>
      <tr class="th-border">
        <th>Product</th>
        <th>Ingredients</th>
        <th>Size</th>
        <th>Price</th>
      </tr>
      <tr v-for="item in $store.state.basket" :key="item">
        <td>{{ item.type }}</td>
        <td v-if="item.type=='drink'">{{item.name}}</td>
        <td v-if="item.type == 'pizza'">{{ item.selecteds.join(" , ") }}</td>
        <td v-if="item.type == 'pizza'">{{ item.size.size }}</td>
        <td 
        :colspan="item.type=='pizza' ? '1' : '2'"
        >{{ item.price +' ₺' }}</td>
      </tr>
    </table>
    <div class="drinks">
      <div class="drink-item" 
      @click="$store.commit('addDrinkToBasket',drink)"
      v-for="drink in $store.state.drinks" 
      :key="drink">
        <img :src="drink.url" :title="drink.name" alt="" />
        <span class="badge badge-warning">{{drink.price}} ₺</span>
      </div>
    </div>
    <p>Total price {{$store.getters.totalPrice}} ₺</p>
    <button id="btn" class="btn btn-success btn-lg">Purchase</button>
  </div>
</template>

<script>
export default {};
</script>

<style>
p{
    margin-top: 2rem;
    font-size: 1.8rem;
}
table {
  width: 80%;
  padding: 1rem;
  border: 1px solid lightseagreen;
}
td,
th {
  text-align: center;
}
.basket-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  flex-direction: column;
}
.drinks {
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  justify-content: center;
  gap: 1rem;
  row-gap: 3rem;
  min-height: 5em;
}
.drink-item {
  cursor: pointer;
  height: 5rem;
  width: 5rem;
}
.drink-item img {
  height: 100%;
  width: 100%;
  object-fit: contain;
}
@keyframes rotateDrink{
  to{
    transform: rotatey(180deg);
  }
}
.drink-item img:hover{
    animation: rotateDrink 500ms linear;
}
.th-border th{
    border-bottom: 2px solid lightseagreen;
    padding-bottom: 0.5rem;
}
#btn {
    width: 25%;
}
</style>