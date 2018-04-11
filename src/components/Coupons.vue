<template>
  <v-carousel :hide-delimiters="hideDelimiters" dark :interval="5000000">
    <Header />
    <v-carousel-item v-for="(item,i) in items" :src="item.src" :key="i">
      <v-layout align-center justify-center class="my">
        <v-layout align-center justify-center>
          <h1 class="white--text">
            <small>Código</small> {{item.code}}</h1>
        </v-layout>
        <v-layout align-center justify-center>
          <v-btn>Usar cupón</v-btn>
        </v-layout>
      </v-layout>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import Header from './Header'
export default {
  name: 'coupons',
  components: {
    Header
  },
  data() {
    return {
      hideDelimiters: true,
      items: [
        {
          src: '/static/img/0.jpg',
          code: '52636'
        },
        {
          src: '/static/img/patitas.PNG',
          code: '75462'
        },
        {
          src: '/static/img/sandwich.PNG',
          code: '11748'
        }
      ]
    }
  }
}
</script>

<style>
.my {
  background: #37474f;
}
</style>
