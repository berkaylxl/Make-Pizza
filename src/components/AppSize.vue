<template>
  <div class="size">
    <button
    class="btn"
    v-for="size in sizes" 
    :key="size" 
    :class="size.size == $store.state.currentBasket.size.size ? 'active' :''"
    @click="$store.commit('setSize',size)"
    >
    
    {{size.size}}
    </button>
    
  </div>
</template>

<script>
export default {
  setup() {
    const sizes = [
      {
        size: "S",
        price: 2,
      },
      {
        size: "M",
        price: 10,
      },
      {
        size: "L",
        price: 21,
      },
    ];
    return {
      sizes,
    };
  },
};
</script>

<style>
.size {
  padding: 1rem;
  display: flex;
  align-content: center;
  justify-content: space-around;
}
.size button {
  background: rgb(106, 21, 243);
  padding: 0.8rem;
  color: white;
  border-radius: 0.5rem;
  transition: 250ms linear;
  box-shadow:1px 1px 20px 1px rgb(99, 41, 153);
}
.size button.active {
  background: rgb(248, 245, 36);
  color: black;
}
.size button:hover{
transform:scale(1.2) translateY(5px);

}
</style>