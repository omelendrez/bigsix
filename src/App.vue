<template>

  <div id="app">

    <v-app>
      <v-navigation-drawer temporary app v-model="drawer" dark absolute>
        <v-list class="pa-1">
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

      <v-toolbar dark app color="pink">
        <v-toolbar-side-icon @click="openMenu"></v-toolbar-side-icon>
        <v-toolbar-title class="white--text">Big Six</v-toolbar-title>
      </v-toolbar>

      <v-content>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-content>
    </v-app>

  </div>

</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      drawer: false,
      items: [
        { title: 'Home', icon: 'home', path: '/' },
        { title: 'Cupones', icon: 'local_offer', path: 'coupons' },
        { title: 'Sucursales', icon: 'pin_drop', path: 'map' },
        { title: 'Productos', icon: 'restaurant', path: 'categories' },
        { title: 'Mi perfil', icon: 'account_circle', path: 'profile' }
      ]
    }
  },
  methods: {
    goTo(page) {
      this.$router.push({ path: page })
    },
    openMenu() {
      this.drawer = true
    }
  }
}
</script>

<style>

</style>
