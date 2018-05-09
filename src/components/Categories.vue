<template>
  <v-list>
    <Header menuType="cat" />
    <template v-for="(item, index) in items">
      <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>
      <v-divider v-else-if="item.divider" :inset="item.inset" :key="index"></v-divider>
      <v-list-tile avatar v-else :key="item.title" @click="goTo(item)">
        <v-list-tile-avatar>
          <img :src="item.avatar">
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title v-html="item.title"></v-list-tile-title>
        </v-list-tile-content>
        <v-list-tile-action>
          <v-btn icon ripple>
            <v-icon color="grey lighten-1">keyboard_arrow_right</v-icon>
          </v-btn>
        </v-list-tile-action>
      </v-list-tile>
    </template>
  </v-list>
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
          avatar: '/static/img/cat-image4.png',
          title: 'Hamburguesas',
          id: 1
        },
        { divider: true, inset: true },
        {
          avatar: '/static/img/cat-image7.png',
          title: 'Bebidas',
          id: 2
        },
        { divider: true, inset: true },
        {
          avatar: '/static/img/cat-image8.png',
          title: 'Ensaladas',
          id: 3
        },
        { divider: true, inset: true },
        {
          avatar: '/static/img/cat-image9.png',
          title: 'Dulces',
          id: 4
        },
        {
          divider: true,
          inset: true
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

<style>

</style>
