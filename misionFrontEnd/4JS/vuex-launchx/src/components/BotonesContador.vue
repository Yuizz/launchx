<template>
  <div class="buttons">
    <button class="counter-button" @click="$store.commit('bajarCounter')"> - </button>
    <button class="counter-button" @click="$store.commit('subirCounter')"> + </button>
  </div>
  <div class="buttons">
    <button class="counter-button" @click="$store.dispatch('RestarRandomNumber')">Random - </button>
    <button class="counter-button" @click="$store.dispatch('SumarRandomNumber')">Random + </button>
  </div>
</template>

<script>
  export default {
    name: 'BotonesContador'
  }
</script>