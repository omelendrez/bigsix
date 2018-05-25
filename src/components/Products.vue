<template>
  <v-card no-body>
    <h1 class="category-title">{{title}}</h1>
    <v-carousel :hide-delimiters="hideDelimiters" :interval="5000000" style="height: 100%">
      <Header menuType="product" />
      <v-carousel-item v-for="(item,i) in categoryItems" :src="item.image" :key="i">
        <v-layout justify-center class="product-name">
          {{item.name}}
        </v-layout>
        <v-layout align-center justify-center class="product-description">
          {{item.description}}
        </v-layout>
      </v-carousel-item>
    </v-carousel>
  </v-card>
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
          categoryId: 1
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
          categoryId: 1
        },
        {
          name: 'Bondiola de Cerdo',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          image: '/static/img/bondiola de cerdo.png',
          categoryId: 1
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

<style>
.category-title {
  width: 100vw;
  height: auto;
  top: 2%;
  text-align: center;
  position: absolute;
  font-size: 2em;
  z-index: 99;
}

.product-name {
  font-size: 2em;
  font-weight: bold;
  margin-top: 86%;
  color: #000;
  margin-bottom: 18px;
}

.product-description {
  margin-left: 18px;
  margin-right: 18px;
  text-align: justify;
  text-justify: inter-word;
}

.img {
  position: absolute;
  width: 100%;
}

.carousel {
  background-color: #ee3542;
}
</style>
