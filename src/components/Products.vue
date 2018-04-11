<template>
  <v-carousel :hide-delimiters="true" dark :interval="5000000">
    <Header menuType="sub" />
    <v-carousel-item v-for="(item,i) in items" :src="item.src" :key="i"></v-carousel-item>
  </v-carousel>
</template>

<script>
import Header from './Header'
export default {
  name: 'products',
  components: {
    Header
  },
  data() {
    return {
      items: [
        {
          src: '/static/img/bkwhopper.jpg'
        },
        {
          src: '/static/img/coca.jpg'
        },
        {
          src: '/static/img/bkwhopper.jpg'
        },
        {
          src: '/static/img/coca.jpg'
        },
        {
          src: '/static/img/bkwhopper.jpg'
        },
        {
          src: '/static/img/coca.jpg'
        }
      ]
    }
  }
}
</script>

<style>

</style>
