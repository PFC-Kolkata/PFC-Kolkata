<script setup>
  import 'vue3-carousel/dist/carousel.css';
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
  import films from '../assets/films/films.json';

  const props = defineProps([
    'component_data',
    'component_type'
  ])
//   const images = import.meta.glob('/src/assets/kpff/gallery/2022/*.webp');

</script>

<template>
  <center class="py-12">
    <!-- image reel -->
    <carousel ref="years" :items-to-show="5" :initialSlide="(year - 2014)" :wrapAround="false" :transition="300" :snap-align="center" class="max-w-screen-xl" :mouse-drag="false" :touch-drag="false">
      <slide v-for="slide in 10" :key="slide" class="">
        <div class="text-red-500" v-if="currentSlide == slide">
            {{ (slide + 2013) }}
        </div>
        <div v-else>
            {{ (slide + 2013) }}
        </div>
      </slide>

      <template #addons="{currentSlide}" >
        <navigation />
      </template>
    </carousel>




<div class="mb-4 border-b border-gray-200 dark:border-gray-700">
    <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
        <li class="me-2" role="presentation">
            <button class="inline-block p-4 rounded-t-lg border-b-2" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
        </li>
        <li class="me-2" role="presentation">
            <button class="inline-block p-4 rounded-t-lg border-b-2 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Dashboard</button>
        </li>
        <li class="me-2" role="presentation">
            <button class="inline-block p-4 rounded-t-lg border-b-2 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Settings</button>
        </li>
        <li role="presentation">
            <button class="inline-block p-4 rounded-t-lg border-b-2 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="contacts-tab" data-tabs-target="#contacts" type="button" role="tab" aria-controls="contacts" aria-selected="false">Contacts</button>
        </li>
    </ul>
</div>
<div id="default-tab-content">
    <div class="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800" id="profile" role="tabpanel" aria-labelledby="profile-tab">
        <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Profile tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
    </div>
    <div class="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
        <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
    </div>
    <div class="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800" id="settings" role="tabpanel" aria-labelledby="settings-tab">
        <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Settings tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
    </div>
    <div class="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800" id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
        <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Contacts tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
    </div>
</div>


    

<div class="grid grid-cols-2 gap-4 py-12 max-w-screen-xl md:py-16 md:grid-cols-4">
    <div class="grid gap-4" v-for="(image, index) in images">
        <div>
            <img class="max-w-full h-auto" :src="image">
        </div>
    </div>
</div>


    
    
  </center>
</template>

<script>

  // import { ref } from 'vue';
  // const years = ref(null);
  // console.log(years.data.currentSlide)
  // years.slideTo(this.component_data - 2013);

  
  export default {
    data() {
        const year = this.component_data;
        let getImages = () => {
            switch(this.component_type) {
            case "kpff_gal":
              switch(year) {
                case "2023":
                  return Object.keys(import.meta.glob('/src/assets/kpff/gallery/2023/*.webp'), { eager: true, as: 'url' });
                case "2022":
                  return Object.keys(import.meta.glob('/src/assets/kpff/gallery/2022/*.webp'), { eager: true, as: 'url' });
                case "2021":
                  return Object.keys(import.meta.glob('/src/assets/kpff/gallery/2021/*.webp'), { eager: true, as: 'url' });
                case "2020":
                  return Object.keys(import.meta.glob('/src/assets/kpff/gallery/2020/*.webp'), { eager: true, as: 'url' });
                case "2019":
                  return Object.keys(import.meta.glob('/src/assets/kpff/gallery/2019/*.webp'), { eager: true, as: 'url' });
                case "2018":
                  return Object.keys(import.meta.glob('/src/assets/kpff/gallery/2018/*.webp'), { eager: true, as: 'url' });
                case "2017":
                  return Object.keys(import.meta.glob('/src/assets/kpff/gallery/2017/*.webp'), { eager: true, as: 'url' });
                case "2016":
                  return Object.keys(import.meta.glob('/src/assets/kpff/gallery/2016/*.webp'), { eager: true, as: 'url' });
                case "2015":
                  return Object.keys(import.meta.glob('/src/assets/kpff/gallery/2015/*.webp'), { eager: true, as: 'url' });
                case "2014":
                  return Object.keys(import.meta.glob('/src/assets/kpff/gallery/2014/*.webp'), { eager: true, as: 'url' });
              }
            }
            return null
        }


        const images = getImages() 
        return {
            images,
            year,
        }
    },
    name: 'Movie_Page',
    components: {
      Carousel,
      Slide,
      Pagination,
      Navigation,
    },
    props: ['component_data', 'component_type'],
    methods: {
        
    }
  }

</script>

<style scoped>
</style>