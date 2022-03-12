<template>
  <div class="ingredient-item">
    <img :src="ingredient.url" 
    :alt="ingredient.name" 
    :title="ingredient.name"/>
    <span class="badge badge-warning">{{ingredient.price}}₺</span>
    
  </div>
</template>

<script>
export default {
  props:{
    ingredient:{
      type:Object,
      required:true
    }
  },

};
</script>

<style>
.ingredient-item{
    width: 6rem;
    height: 6rem;
    box-shadow: 0 0 20px rgba(148, 142, 137, 0.5);
    border-radius: 0.5rem;
    padding:0.5rem ;
    cursor: grab;
}
img{
  width:100%;
  height: 100%;
  object-fit: contain;
}
</style>