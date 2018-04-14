<template>
  <v-carousel :hide-delimiters="hideDelimiters" :interval="5000000"  style="height: 100vh">
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
      hideDelimiters: false,
      items: [
        {
          src: '/static/img/image2.png',
          code: '123456'
        },
        {
          src: '/static/img/image3.png',
          code: '234567'
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
  top: 160px;
  width: 100%;
}

</style>
