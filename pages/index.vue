<template>
  <md-content class="md-layout md-alignment-top-center md-size-95">
    <md-card class="md-layout-item md-large-size-25 md-medium-size-33 md-small-size-50 md-xsmall-size-100" 
    v-for='headLine in headLines' :key='headLine.id' style="padding: 1.2em; background-color: #007998; margin: 20px 20px"
     md-with-hover>      
      <div @click='onClickHeadLine(headLine)'>
        <md-ripple>
          <md-card-media md-ratio="16:9">
            <img :src="headLine.urlToImage" :alt="headLine.title">
          </md-card-media>
          <div class="md-subhead" v-if="headLine.source.name">
            {{headLine.source.name}}
            <md-icon class="small-icon">book</md-icon> 
          </div>
          <div class="md-subhead" v-if="headLine.author">
            {{headLine.author}}
            <md-icon class="small-icon">face</md-icon> 
          </div>
          <div class="md-subhead" v-if="headLine.publishedAt">
            {{headLine.publishedAt}}
            <md-icon class="small-icon">schedule</md-icon> 
          </div>
          <md-card-header>
            <h3>{{headLine.title}}</h3>
          </md-card-header>
          <md-card-content>
            <p>{{headLine.description}}</p>
          </md-card-content>
          <md-card-actions>
            <md-button class="md-icon-button md-right">
              <md-icon>bookmark</md-icon>
            </md-button>
            <md-button class="md-icon-button md-right">
              <md-icon>comment</md-icon>
            </md-button>
          </md-card-actions>
        </md-ripple>
      </div>
    </md-card>
  </md-content>
</template>

<script>
import { mapMutations, mapActions, mapState } from 'vuex';

export default {
  created() {
    this.fetchHeadLines();
  },
  computed: {
    ...mapState({
      headLines: state => state.headLines.headLines,
    })
  },
  methods: {
    ...mapActions({
      fetchHeadLines: 'headLines/fetchHeadLines'
    }),
    ...mapMutations({
      setHeadLine: 'headLines/SET_HEADLINE'
    }),
    onClickHeadLine(headLine) {
      console.log('dd')
      this.setHeadLine(headLine);
      this.$router.push(`/headLines/${headLine.title}`)
    }
  }
}
</script>

<style scoped>
  .small-icon {
    font-size: 18px !important;
  }
</style>