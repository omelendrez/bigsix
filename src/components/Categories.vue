<template>
  <v-container grid-list-md text-xs-center class="grid-list">
    <Header menuType="cat" />
    <v-layout row wrap>
      <v-flex v-for='item in items' :key='item.id' xs6>
        <img :src="item.avatar" class="image" @click="goTo(item)" ripple>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Header from './Header'

export default {
  name: 'categories',
  components: {
    Header
  },
  data () {
    return {
      items: [
        {
          avatar: '/static/img/hambur.png',
          title: 'Hamburguesas',
          id: 1
        },
        {
          avatar: '/static/img/carnes.png',
          title: 'Carnes',
          id: 2
        },
        {
          avatar: '/static/img/frias.png',
          title: 'Opciones Frías',
          id: 3
        }
      ]
    }
  },
  methods: {
    goTo (categoryItem) {
      this.$router.push({ name: 'Products', params: { categoryItem: categoryItem } })
    }
  }
}
</script>

<style scoped>
.grid-list {
  background-color: #eaeaea;
  height: 100%;
}
.image {
  width: 90%;
}
</style>
