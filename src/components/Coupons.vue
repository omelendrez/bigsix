<template>
  <v-carousel :hide-delimiters="true" dark :interval="5000000">
    <v-carousel-item v-for="(item,i) in items" :src="item.src" :key="i"></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: 'coupons',
  data() {
    return {
      items: [
        {
          src: '/static/img/macpromo.jpg'
        },
        {
          src: '/static/img/patitas.png'
        },
        {
          src: '/static/img/sandwich.png'
        }
      ]
    }
  }
}
</script>

<style>

</style>
