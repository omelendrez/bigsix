<template>
  <v-card no-body>
    <h1 class="category-title">{{title}}</h1>
    <v-carousel :hide-delimiters="hideDelimiters" :interval="5000000" style="height: 90vh">
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
          image: '/static/img/image4.png',
          categoryId: 1
        },
        {
          name: 'Big Triple',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          image: '/static/img/image5.png',
          categoryId: 1
        },
        {
          name: 'Coca Cola s/azúcar',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          image: '/static/img/image6.png',
          categoryId: 2
        },
        {
          name: 'Coca Cola normal',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          image: '/static/img/image7.png',
          categoryId: 2
        },
        {
          name: 'De la huerta',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          image: '/static/img/image8.png',
          categoryId: 3
        },
        {
          name: 'Flan casero',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          image: '/static/img/image9.png',
          categoryId: 4
        },
        {
          name: 'Sprite lata',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          image: '/static/img/image10.png',
          categoryId: 2
        },
        {
          name: 'Sprite botella',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          image: '/static/img/image11.png',
          categoryId: 2
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

.jumbotron__image {
  top: 200px;
  width: 100vw;
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

</style>
