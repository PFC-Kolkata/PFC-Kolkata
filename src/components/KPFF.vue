<script setup>
  import 'vue3-carousel/dist/carousel.css';
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
  import films from '../assets/films/films.json';

  const props = defineProps([
    'component_data'
  ])

</script>

<template>
  <div  class="px-40 max-w-screen-xl">
    <div class="grid grid-cols-2 gap-4 py-12 md:py-16 md:grid-cols-4">
      <div class="grid gap-4" v-for="(image, index) in images">
        <div>
          
          <img src="/src/assets/roundel.webp" class="w-32 h-32"  v-if="index == 0"/>
          <img class="w-32 h-auto" :src="image" v-if="index%8 == 0"/>
          <img class="w-40 h-auto" :src="image" v-if="index%8 == 1"/>
          <img class="w-48 h-{108rem}" :src="image" v-if="index%8 == 2"/>
          <img class="w-32 h-auto" :src="image" v-if="index%8 == 3"/>
          <img class="w-32 h-auto" :src="image" v-if="index%8 == 4"/>
          <img class="w-32 h-auto" :src="image" v-if="index%8 == 5"/>
          <img class="w-32 h-auto" :src="image" v-if="index%8 == 6"/>
          <img class="w-32 h-auto" :src="image" v-if="index%8 == 7"/>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      let year = this.component_data;
      const images = Object.keys(import.meta.glob('/src/assets/kpff/gallery/2022/*.webp'), { eager: true, as: 'url' });
      return {
        year,
        images,
        // producer: films[filmName].personnel.producer,
      }
    },
    name: 'Movie_Page',
    components: {
      Carousel,
      Slide,
      Pagination,
      Navigation,
    },
    props: ['component_data'],
    methods: {

    }
  }

</script>

<style scoped>
  .roundel {
    width: 9%;
    height: 9%;
  }
</style>
