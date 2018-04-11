<template>
  <v-carousel :hide-delimiters="true" dark :interval="5000000">

    <v-carousel-item v-for="(item,i) in items" :src="item.src" :key="i">
      <v-layout align-center justify-center>
        <h2 class="info--text">Código</h2>
        <h1 class="info--text">{{item.code}}</h1>
      </v-layout>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: 'coupons',
  data() {
    return {
      items: [
        {
          src: '/static/img/macpromo.jpg',
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
h1 {
  font-size: 42pt;
}
h2 {
  font-size: 26pt;
}
</style>
