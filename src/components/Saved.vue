<template>
  <v-carousel :hide-delimiters="hideDelimiters" :interval="interval" :cycle="cycle" style="height: 100%">
    <Header />
    <v-carousel-item v-for="(item,i) in items" :src="item.src" :key="i">
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
    <v-snackbar :timeout="timeout" color="error" :top="y === 'top'" :bottom="y === 'bottom'" :right="x === 'right'" :left="x === 'left'" v-model="snackbar">
      Cupón {{ name }} {{ text }}
    </v-snackbar>
  </v-carousel>
</template>

<script>
import Header from './Header'
import { getCoupons, removeCoupon } from './utils'
export default {
  name: 'coupons',
  components: {
    Header
  },
  data () {
    return {
      snackbar: false,
      y: 'top',
      x: null,
      mode: 'vertical',
      timeout: 3000,
      text: 'ha sido eliminado!!',
      name: null,
      empty: false,
      interval: 1,
      cycle: false,
      hideDelimiters: false,
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
    }
  }
}
</script>

<style>
.code-container {
  position: absolute;
  bottom: 64dp;
  width: 100%;
  background-color: #ee3542;
}
.code {
  font-size: 3em;
  margin: 0 auto;
}
.jumbotron__image {
  top: 250dp;
  width: 100%;
}
.rojo {
  color: #ee3542;
}
</style>
