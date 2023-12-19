<script setup>
import { ref } from 'vue'
import notices from '../assets/our_cinema/notices.json'


</script>

<template>

  <div class="items-center w-screen text-center align-top">
    <div class="grid gap-4 py-12 m-auto max-w-screen-xl md:py-16">
      <div class="grid gap-4 p-10 font-bold bg-gray-50 border-gray-200 shadow" v-for="(notice, index) in notices.reverse()">
        <div :class="{'text-red-500':(notice.priority == 1)}">
          {{ notice.bulletin }}
        </div>
      </div>
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
