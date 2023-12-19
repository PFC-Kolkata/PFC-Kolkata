<script setup>
  import 'vue3-carousel/dist/carousel.css';
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
  import films from '../assets/films/films.json';

  const props = defineProps([
    'component_data'
  ])

</script>

<template>
  <center class="py-16">
    <div class="pt-8 pb-2 max-w-screen-xl text-3xl font-bold">NAME OF THE MOVIE: {{movie_name}}</div>
    <div class="py-2 max-w-screen-xl text-2xl font-bold">DIRECTOR: {{director}}</div>
    <!-- image reel -->
    <carousel :items-to-show="4.5" :initialSlide="1" :wrapAround="true" :transition="300" class="py-4">
      <slide v-for="slide in 6" :key="slide" class="h-48">
        <img :src="'src/assets/films/' +  filmName + '/poster.webp'" class="h-full" v-if="slide == 1" />
        <img :src="'src/assets/films/' +  filmName + '/stills/still_' + (slide -  1) + '.webp'" v-if="slide != 1" class="px-2 h-full" />
      </slide>

      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
    
    <div class="py-6 max-w-screen-xl text-3xl font-bold">SYNOPSIS</div>
    <div class="max-w-screen-xl text-2xl"><span class="text-red-500">DURATION</span> {{ duration }} mins</div>
    <div class="max-w-screen-xl text-2xl"><span class="text-red-500">YEAR</span> {{ year }} </div>
    <div class="max-w-screen-xl text-2xl"><span class="text-red-500">COUNTRY</span> {{ country }} </div>
    <div class="max-w-screen-xl text-2xl"><span class="text-red-500">LANGUAGE</span> {{ language }} <span v-if=subtitles> ({{ subtitles }} Subs)</span></div>
    
    <div class="py-4 max-w-screen-xl text-justify text-1xl">{{ plot }}</div>
    <div class="max-w-screen-xl text-3xl font-bold">ABOUT THE DIRECTOR</div>
    <div class="py-4 max-w-screen-xl text-justify text-1xl">{{ director_info }}</div>

    <div class="py-6 max-w-screen-xl text-3xl font-bold">PERSONEL</div>

    <div class="max-w-screen-xl text-2xl"><span class="text-red-500" v-if="cinematographer">Cinematographer</span> {{ cinematographer }} </div>
    <div class="max-w-screen-xl text-2xl"><span class="text-red-500" v-if="editor">Editor</span> {{ editor }} </div>
    <div class="max-w-screen-xl text-2xl"><span class="text-red-500" v-if="prod_design">Production Designer</span> {{ prod_design }} </div>
    <div class="max-w-screen-xl text-2xl"><span class="text-red-500" v-if="sound_design">Sound Designer</span> {{ sound_design }} </div>
    <div class="max-w-screen-xl text-2xl"><span class="text-red-500" v-if="sound_mix">Sound Mixing</span> {{ sound_mix }} </div>
    <div class="max-w-screen-xl text-2xl"><span class="text-red-500" v-if="bg_score">Background Score</span> {{ bg_score }} </div>
    <div class="max-w-screen-xl text-2xl"><span class="text-red-500" v-if="colorist">Colorist</span> {{ colorist }} </div>
    <div class="max-w-screen-xl text-2xl"><span class="text-red-500" v-if="producer">Producer(s)</span> {{ producer }} </div>
    
  </center>
</template>

<script>
  export default {
    data() {
      const filmName = this.component_data;
      return {
        filmName,
        movie_name: films[filmName].movie.name,
        director: films[filmName].movie.director.name,
        duration: films[filmName].movie.duration.minutes,
        year: films[filmName].movie.year,
        country: films[filmName].movie.country,
        language: films[filmName].movie.language,
        subtitles: films[filmName].movie.subtitles,
        plot: films[filmName].movie.plot,
        director_info: films[filmName].movie.director.about,
        cinematographer: films[filmName].personnel.cinematographer,
        editor: films[filmName].personnel.editor,
        prod_design: films[filmName].personnel.prod_design,
        sound_design: films[filmName].personnel.sound_design,
        sound_mix: films[filmName].personnel.sound_mix,
        bg_score: films[filmName].personnel.bg_score,
        colorist: films[filmName].personnel.colorist,
        producer: films[filmName].personnel.producer,
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
</style>
