<template>
  <div>
    <v-navigation-drawer temporary app v-model="drawer" dark class="rojo" absolute>
      <v-list class="pa-4">
      </v-list>
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <v-list-tile v-for="item in items" :key="item.title" @click="goTo(item.path)">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark app class="rojo">
      <v-btn icon v-if="isProduct" @click="goBack">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-toolbar-side-icon @click="openMenu" v-if="!isProduct"></v-toolbar-side-icon>
      <v-toolbar-title>
        <img :src="logo" />
      </v-toolbar-title>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  props: ['menuType'],
  data () {
    return {
      logo: './static/img/header.png',
      drawer: false,
      items: [
        { title: 'Home', icon: 'home', path: '/' },
        { title: 'Cupones', icon: 'local_offer', path: 'coupons' },
        { title: 'Guardados', icon: 'favorite', path: 'saved' }
        // { title: 'Sucursales', icon: 'pin_drop', path: 'branches' },
        // { title: 'Productos', icon: 'restaurant', path: 'categories' },
        // { title: 'Mi perfil', icon: 'account_circle', path: 'profile' }
      ]
    }
  },
  computed: {
    isProduct () {
      return this.menuType === 'product'
    }
  },
  methods: {
    goTo (page) {
      this.$router.push({ path: page })
    },
    goBack (e) {
      e.preventDefault()
      this.$router.go(-1)
    },
    openMenu () {
      this.drawer = true
    }
  }
}
</script>

<style scoped>
.rojo {
  background-color: #ee3542 !important;
}
</style>


