import { createStore } from "vuex";

export default createStore({
  state: {
    counter: 0
  }, //El estado como tal
  getters: {
    squareCounter(state) {
      return state.counter * state.counter
    }
  }, //Para poder consultar el estado
  mutations: {
    bajarCounter(state){
      state.counter--;
    },
    subirCounter(state){
      state.counter++;
    },
    SumarRandomNumber(state, random) {
      state.counter += random
    },
    RestarRandomNumber(state, random) {
      state.counter -= random
    }
  }, //Para modificar el estado | No soporta codigo asincrono | No deberia usarse fuera de aquí, solo internamente
  actions: {
    async SumarRandomNumber({ commit }) {
      const res = await fetch('https://www.random.org/integers/?num=1&min=1&max=16&col=1&base=10&format=plain&rnd=new')
      const data = await res.json()
      commit("SumarRandomNumber", data)
    },
    async RestarRandomNumber({ commit }) {
      const res = await fetch('https://www.random.org/integers/?num=1&min=1&max=16&col=1&base=10&format=plain&rnd=new')
      const data = await res.json()
      commit("RestarRandomNumber", data)
    },
  }, //Parecido a mutations pero aqui se puede tener codigo asincrono | Buena practica: llamar una accion y desde la accion llamar una mutation
  modules: {}, //Si se requiere que algun estado, mutation, action sea solo para cierto modulo, aqui se declara esto
});
