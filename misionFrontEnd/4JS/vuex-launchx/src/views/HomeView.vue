<template>
<!-- eslint-disable-->
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />

    <Contador/>
    <ContadorCuadrado/>
    <BotonesContador/>
  </div>
</template>

<script>
  import Contador from '@/components/Contador.vue';
  import BotonesContador from '@/components/BotonesContador';
  import ContadorCuadrado from '@/components/ContadorCuadrado';

  export default {
    name: "HomeView",
    components:{
      Contador,
      BotonesContador,
      ContadorCuadrado
    }
  };
</script>

<style>
  .counter{
    font-size: 60px;
    font-weight: 700;
  }

  .buttons .counter-button{
    height: 40px;
    min-width: 60px;
    margin: 10px;
    font-size: 34px;
    font-weight: 300;
  }

  .square-container{
    font-size: 20px;

  }
</style>
