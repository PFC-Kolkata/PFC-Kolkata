<script setup>

  import { ref } from 'vue'
  import Publication_Card from './Publication_Card.vue';
  import pubs from '../assets/our_cinema/publications/pubs.json'
</script>

<template>


<div class="items-center w-screen text-center align-top">
    <div class="grid grid-cols-1 gap-20 py-12 m-auto max-w-screen-xl text-justify md:py-16">
      <Publication_Card v-for="pub in pubs" :data="pub" />
    </div>
  </div>

</template>

<script>
  export default {   
    data() {
      return {
        
      }
    }
  }
</script>

<style scoped>
</style>
