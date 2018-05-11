<template>
  <v-carousel :hide-delimiters="hideDelimiters" :interval="interval" :cycle="cycle" style="height: 100%;" class="carousel">
    <Header/>
    <v-carousel-item v-for="(item,i) in items" :key="i">
      <img :src="item.src" class="img">
      <v-layout align-center justify-center class="code-container">
        <h1 class="white--text code">
          <small>Código</small> {{item.code}}
        </h1>
        <v-btn icon dark @click="addFavorite(item)">
          <v-icon>favorite</v-icon>
        </v-btn>
      </v-layout>
    </v-carousel-item>
    <v-snackbar :timeout="timeout" :color="color" :multi-line="mode === 'multi-line'" :vertical="mode === 'vertical'" v-model="snackbar">
      {{ text }} {{ name }}
      <v-btn dark flat @click.native="snackbar = false">Cerrar</v-btn>
    </v-snackbar>
  </v-carousel>
</template>

<script>
import Header from './Header'
import { saveCoupon } from './utils'
export default {
  name: 'coupons',
  components: {
    Header
  },
  data () {
    return {
      color: 'error',
      snackbar: false,
      y: 'top',
      x: null,
      mode: 'vertical',
      timeout: 5000,
      text: 'Felicitaciones! Se ha guardado el cupón',
      logo: './static/img/header.png',
      cycle: false,
      interval: 1,
      hideDelimiters: true,
      name: '',
      items: [
        {
          id: 1,
          src: '/static/img/coupon1.png',
          code: 'QB-01',
          name: 'Combo QB',
          from: '2018-05-01',
          to: '2018-05-05'
        },
        {
          id: 2,
          src: '/static/img/coupon2.png',
          code: 'BH-02',
          name: 'Menú Bahiense',
          from: '2018-05-01',
          to: '2018-05-05'
        }
      ]
    }
  },
  methods: {
    addFavorite (item) {
      this.name = item.name
      const error = saveCoupon(item)
      this.snackbar = !this.snackbar
    }
  }
}
</script>

<style scoped>
.code-container {
  position: absolute;
  width: 100%;
  bottom: 0;
}
.code {
  font-size: 2em;
  margin: 0 auto;
}
.img {
  position: absolute;
  width: 100%;
}
.rojo {
  color: #ee3542;
}
.carousel {
  background-color: #ee3542;
}
</style>
