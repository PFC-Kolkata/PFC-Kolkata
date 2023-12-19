<script setup>
import { ref } from 'vue'
import News_Card from './News_Card.vue'
import links from '../assets/our_cinema/news/links.json'

</script>

<template>
  
  
  <div class="items-center w-screen text-center align-top">
    <div class="grid grid-cols-1 gap-20 py-12 m-auto max-w-screen-xl md:grid-cols-2 md:py-16">
      <News_Card v-for="link in links" :data="link" />
    </div>
  </div>
  
  </template>

<script>
    export default {
      name: 'Form',
    data() {
        return {
           
        }
    }
}
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>