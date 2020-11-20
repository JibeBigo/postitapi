import Vue from "vue";
import Vuex from "vuex";
import Note from "./modules/notes";

Vue.use(Vuex);

export default new Vuex.Store({
  name: "store",
  modules: {
    Note,
  },
  mutations: {
    initialiseStore(state) {
      if (localStorage.getItem("store")) {
        this.replaceState(
          Object.assign(state, JSON.parse(localStorage.getItem("store"))),
        );
      }
    },
  },
});
