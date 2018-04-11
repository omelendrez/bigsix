<template>
  <v-list>
    <template v-for="(item, index) in items">
      <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>
      <v-divider v-else-if="item.divider" :inset="item.inset" :key="index"></v-divider>
      <v-list-tile avatar v-else :key="item.title" @click="goTo">
        <v-list-tile-avatar>
          <img :src="item.avatar">
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title v-html="item.title"></v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </template>
  </v-list>
</template>

<script>
export default {
  name: 'categories',
  data() {
    return {
      items: [
        {
          avatar: '/static/img/bkwhopper.jpg',
          title: 'Combos'
        },
        { divider: true, inset: true },
        {
          avatar: '/static/img/coca.jpg',
          title: 'Bebidas'
        },
        { divider: true, inset: true },
        {
          avatar: '/static/img/patitas.PNG',
          title: 'Ensaladas'
        },
        { divider: true, inset: true },
        {
          avatar: '/static/img/sandwich.PNG',
          title: 'Sandwiches'
        },
        { divider: true, inset: true }
      ]
    }
  },
  methods: {
    goTo(e) {
      e.preventDefault()
      this.$router.push({ path: '/products' })
    }
  }
}
</script>

<style>

</style>
