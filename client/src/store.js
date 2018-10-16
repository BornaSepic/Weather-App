import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    weatherCards: {
      maximumCards: 3,
      activeCards: 0,
      nextCard: 0,
      cardContent: [
      ]
    }
  },
  mutations: {
    createNewCard (state, payload) {
      Vue.set(this.state.weatherCards.cardContent, this.state.weatherCards.nextCard, payload)
      state.weatherCards.nextCard++;
      state.weatherCards.activeCards++;
      if (state.weatherCards.nextCard === state.weatherCards.maximumCards) {
        state.weatherCards.nextCard = 0;
      }
      if (state.weatherCards.activeCards > 3) {
        state.weatherCards.activeCards = 3;
      }
    }
  },
  actions: {}
});
