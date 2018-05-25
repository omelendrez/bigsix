<template>
  <v-carousel :hide-delimiters="hideDelimiters" :interval="interval" :cycle="cycle" style="height: 100%;" class="carousel">
    <Header />
    <v-carousel-item v-for="(item,i) in items" :key="i">
      <img :src="item.src" class="img">
      <v-layout align-center justify-center class="code-container">
        <h1 class="white--text code">
          <small>Código</small> {{item.code}}
        </h1>
        <v-btn icon dark @click="deleteCoupon(item)">
          <v-icon>cancel</v-icon>
        </v-btn>
      </v-layout>
    </v-carousel-item>
    <v-alert :value="empty" type="error">
      No tenés cupones guardados
    </v-alert>
    <v-snackbar :timeout="timeout" :color="color" :multi-line="mode === 'multi-line'" :vertical="mode === 'vertical'" v-model="snackbar">
      Cupón {{ name }} {{ text }}
      <v-btn dark flat @click.native="snackbar = false">Cerrar</v-btn>
    </v-snackbar>
  </v-carousel>
</template>

<script>
import Header from './Header'
import { getCoupons, removeCoupon, sendVibration } from './utils'
export default {
  name: 'coupons',
  components: {
    Header
  },
  data () {
    return {
      snackbar: false,
      color: 'error',
      y: 'top',
      x: null,
      mode: 'vertical',
      timeout: 3000,
      text: 'ha sido eliminado!!',
      name: null,
      empty: false,
      interval: 1,
      cycle: false,
      hideDelimiters: true,
      items: []
    }
  },
  created () {
    const coupons = getCoupons()
    this.items = coupons
    this.empty = coupons.length === 0
  },
  methods: {
    deleteCoupon (item) {
      this.name = item.name
      const error = removeCoupon(item)
      const coupons = getCoupons()
      this.items = coupons
      this.empty = coupons.length === 0
      this.snackbar = !this.snackbar
      sendVibration()
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
