<script setup>
import { ref } from 'vue'
import Story from './Screenings_Card.vue'
import links from '../assets/stories/stories.json'
// '../assets/screenings/screenings.json'

</script>

<template>
  
  
  <div class="items-center w-screen text-center align-top">
    <div class="grid grid-cols-1 gap-8 py-12 m-auto max-w-screen-xl md:grid-cols-3 md:py-16">
      <Story v-for="link in links" :data="link" />
    </div>
  </div>
  
  </template>

<script>
    export default {
      name: 'Screenings',
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