<template>
  <v-carousel :hide-delimiters="hideDelimiters" dark :interval="5000000" style="height:100%">
    <Header />
    <v-carousel-item v-for="(item,i) in items" :src="item.src" :key="i">
      <v-layout align-center justify-center class="code">
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
          src: '/static/img/mac.png',
          code: '414x676 png'
        },
        {
          src: '/static/img/mac2.png',
          code: '414x736 png'
        },
        {
          src: '/static/img/mac3.png',
          code: '320x497 png'
        },
        {
          src: '/static/img/mac4.png',
          code: '1440x2240 png'
        },
        {
          src: '/static/img/mac5.jpg',
          code: '1440x2240 jpg'
        }
      ]
    }
  }
}
</script>

<style>
.code {
  background: #37474f;
  opacity: 0.8;
}
.jumbotron__image {
  height: 100%;
  width: 100%;
}
</style>
