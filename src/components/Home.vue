<script setup>
  import 'vue3-carousel/dist/carousel.css';
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
  import pages from '../assets/sites.json';

  import HomeCard from './HomeCard.vue';

  import { computed } from 'vue';

  const props = defineProps([
    'component_data'
  ])

  const mobile = computed(() => {
    return screen.width < 768;
  });



</script>

<template>

  <center class="pt-8 md:pt-4">

    <!-- image reel -->
    <carousel :items-to-show="mobile? 2 : 4.5" :initialSlide="1" :wrapAround="true" :transition="300" class="pt-4 pb-12 max-w-screen-xl">
      <slide v-for="(page, index) in pages" :key="page" class="px-8">
        <router-link :to="'/' + page.route">
          <img :src="page.img" class="object-cover px-2 w-auto h-full md:w-36" />
          <h2 class="absolute top-1/2 left-1/2 font-bold text-white -translate-x-1/2 -translate-y-1/2 text-1xl">{{ page.title.toUpperCase() }}</h2>
        </router-link>
      </slide>

    </carousel>

    <template v-for="(page, index) in pages" :key="page" >
      <HomeCard :page="page" :index="index"/>
    </template>
    
  </center>
</template>

<script>

  export default {
    data() {
      return {
        
      }
    },
    name: 'Home',
    components: {
      Carousel,
      Slide,
      Pagination,
      Navigation,
    },
    props: [
      'component_data'
    ],
    methods: {

    }
  }

</script>

<style scoped>
</style>
