<template>
  <v-carousel :hide-delimiters="hideDelimiters" :hide-controls="hideControls" :interval="interval" style="height: 100%;">
    <Header />
    <v-carousel-item v-for="(item,i) in items" :src="item.src" :key="i"></v-carousel-item>
    <v-alert :value="true" type="success">
      This is a success alert.
    </v-alert>
    <v-snackbar :timeout="timeout" :color="color" :multi-line="mode === 'multi-line'" :vertical="mode === 'vertical'" v-model="snackbar">
      {{ text }}
      <v-btn dark flat @click.native="snackbar = false">Cerrar</v-btn>
    </v-snackbar>
  </v-carousel>
</template>

<script>
import Header from './Header'
import { getCoupons } from './utils'
export default {
  name: 'home',
  components: {
    Header
  },
  data () {
    return {
      color: 'error',
      hideDelimiters: true,
      hideControls: true,
      interval: 3 * 1000,
      timeout: 3000,
      mode: 'horizontal',
      snackbar: false,
      text: '',
      items: [
        {
          src: '/static/img/new-home1.png'
        },
        {
          src: '/static/img/new-home2.png'
        },
        {
          src: '/static/img/new-home3.png'
        },
        {
          src: '/static/img/new-home4.png'
        }
      ]
    }
  },
  created () {
    const coupons = getCoupons()
    if (coupons.length) {
      this.text = `Tenés ${coupons.length} cupones guardados`
      this.snackbar = true
    }
  }
}
</script>

<style>
.jumbotron__image {
  height: 100%;
  width: 100%;
}
</style>
