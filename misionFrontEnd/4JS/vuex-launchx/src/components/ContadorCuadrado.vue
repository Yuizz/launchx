<template>
  <div class="square-container">
    {{ $store.state.counter }} <sup>2</sup> = {{ $store.getters.squareCounter }}
  </div>
</template>

<script>
export default {
  name: 'ContadorCuadrado'
}
</script>