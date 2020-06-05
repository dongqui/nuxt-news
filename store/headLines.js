export const SET_HEADLINES = 'SET_HEADLINES';
export const SET_HEADLINE = 'SET_HEADLINE'

export const state = () => ({
    headLines: [],
    headLine: null,
});

export const mutations = {
  [SET_HEADLINES](state, headLines) {
    state.headLines = headLines;
  },
  [SET_HEADLINE](state, headLine) {
    state.headLine = headLine;
  }
};

export const actions = {
  async fetchHeadLines({ commit }) {
    const res = await this.$axios.$get('https://newsapi.org/v2/top-headlines?country=us');
    commit(SET_HEADLINES, res.articles);
  }
};