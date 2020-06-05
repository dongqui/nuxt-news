<template>
  <div>
    <h2>{{headLine.title}}</h2>
    <p>{{headLine.content}}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState({
      headLine: state => state.headLines.headLine,
    })
  }
}
</script>

<style>

</style>