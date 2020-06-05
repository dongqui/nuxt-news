export const SET_HEADLINES = 'FETCH_HEADLINES';

export const state = () => ({
    headLines: [],
});

export const mutations = {
  SET_HEADLINES(state, params) {
    state.headLines = params;
  }
};

export const actions = {
  async fetchHeadLines({ commit }) {
    const res = await this.$axios.$get('https://newsapi.org/v2/top-headlines?country=us');
    commit('SET_HEADLINES', res.articles);
  }
};