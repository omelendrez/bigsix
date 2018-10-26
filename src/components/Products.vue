<template>
  <v-carousel :hide-delimiters="hideDelimiters" :hide-controls="hideControls" :cycle="cycle" style="height: 100%">
    <h1 class="category-title" v-if="name" >{{title}}</h1>
    <Header menuType="product" />
    <v-carousel-item v-for="(item,i) in categoryItems" class="product" :key="i">
      <div class="product-content">
        <img :src="item.image" class="img">
        <v-layout justify-center class="product-name">
          {{item.name}}
        </v-layout>
        <v-layout align-center justify-center class="product-description">
          {{item.description}}
        </v-layout>
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import Header from './Header'
export default {
  name: 'products',
  props: ['categoryItem'],
  components: {
    Header
  },
  data () {
    return {
      hideDelimiters: true,
      hideControls: true,
      cycle: false,
      title: this.categoryItem.title,
      categoryItems: [],
      items: [
        {
          name: 'Big LT',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          image: '/static/img/big lt.png',
          categoryId: 1
        },
        {
          name: 'Big Mila',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          image: '/static/img/big mila.png',
          categoryId: 1
        },
        {
          name: 'Pork de Luxe',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          image: '/static/img/PORKDELUXE.png',
          categoryId: 1
        },
        {
          name: 'Lomo Clásico',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          image: '/static/img/lomo clasico.png',
          categoryId: 2
        },
        {
          name: 'QB',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          image: '/static/img/qb.png',
          categoryId: 1
        },
        {
          name: 'Mila Caprese',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          image: '/static/img/mila caprese.png',
          categoryId: 2
        },
        {
          name: 'Bondiola de Cerdo',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          image: '/static/img/bondiola de cerdo.png',
          categoryId: 2
        },
        {
          name: 'En construcción',
          description: 'Gracias por tu paciencia',
          image: '/static/img/en construccion.png',
          categoryId: 3
        }
      ]
    }
  },
  created () {
    if (this.categoryItems) {
      this.categoryItems = this.items.filter(item => {
        return item.categoryId === this.categoryItem.id
      })
    } else {
      this.$router.push({ name: 'Categories' })
    }
  }
}
</script>

<style scoped>
.category-title {
  text-align: center;
  font-size: 2em;
}

.product {
  top: 16px;
  position: absolute;
}
.product-name {
  font-size: 2.4em;
  font-weight: bold;
}

.img {
  width: 100%;
}

.product-description {
  margin-left: 16px;
  margin-right: 16px;
}
</style>
