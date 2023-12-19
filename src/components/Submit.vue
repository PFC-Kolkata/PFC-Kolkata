<script setup>
import { ref } from 'vue'

</script>

<template>
  <div class="w-screen text-3xl text-center">
    Please wait, while you're redirected to the submissions page ...
  </div>
</template>

<script>
export default {

  created() {
    window.location.href = "https://filmfreeway.com/KolkataPeoplesFilmFestival";
  },

}
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
