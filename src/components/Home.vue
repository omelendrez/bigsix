<template>
  <v-parallax src="/static/img/bigsix-portrait.jpg" style="height:100%">
    <Header />
    <v-layout column align-center justify-center>

    </v-layout>
  </v-parallax>
</template>

<script>
import Header from './Header'
export default {
  name: 'home',
  components: {
    Header
  },
  data() {
    return {}
  }
}
</script>

<style>

</style>
