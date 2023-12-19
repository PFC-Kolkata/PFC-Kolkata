<script setup>
import { ref } from 'vue'
import LC_Card from './LC_Card.vue'
import LC_Card_Alt from './LC_Card_Alt.vue'
import stories from '../assets/stories/stories.json'

</script>

<template>

    <div class="-z-20 overflow-hidden fixed p-12 w-screen h-[80vh] text-center bg-no-repeat bg-cover transition-all transform"
      style="background-image: url('src/assets/little_cinema/lc_banner.webp'); background-position-y: center"
      :style="{
        'opacity': opacity,
        'filter':  blur_amt,
        }"
        >
      <div class="overflow-hidden absolute top-0 right-0 bottom-0 left-0 w-full h-full bg-fixed transition-all duration-500 ease-in-out transform"
        style="background-color: rgba(0, 0, 0, 0.6)">
        <div class="flex justify-center items-center pb-60 h-full">
          <div class="text-white">
            <h2 class="mb-4 text-4xl font-semibold">LITTLE <span class="text-red-500">CINEMA</span></h2>
            <h4 class="mb-6 text-xl font-normal">A collection of stories of People's Film Collective, gathered along the way.</h4>
          </div>
        </div>
      </div>
    </div>


    <div class="block relative items-center translate-y-[60vh] h-full text-center align-top w-fill mb-[60vh] z-10 bg-white"
    ref="story_board">
    <div class="pt-20 pb-6 m-auto md:max-w-screen-xl">
        <div class="py-3 mx-8 text-3xl font-bold text-left md:max-w-screen-xl">RELATED <span class="text-red-500">ARTICLES</span></div>
        <div class="grid grid-cols-1 grid-rows-1 md:grid-cols-[14fr_7fr_10fr] md:grid-rows-[9fr_9fr] grid-flow-row-dense ">
          <template v-for="(story, index) in stories">

            <LC_Card_Alt class="md:col-start-1 md:row-span-2 md:col-span-2" :data="story" width="md:w-full" height="md:h-[66vh]" v-if="index % 6 == 0 && (stories.length - index) != 1"/>
            <LC_Card_Alt class="md:col-span-3 md:col-start-1 md:row-span-2" :data="story" width="md:w-full" height="md:h-[66vh]" v-if="index % 6 == 0 && (stories.length - index) == 1"/>
            
            <LC_Card class="md:col-start-3 md:row-span-2" :data="story" width="md:w-full" height="md:h-[66vh]" v-if="index % 6 == 1" />
            
            <LC_Card class="md:col-start-1 md:row-span-1 md:col-span-3" :data="story" width="md:w-full" height="md:h-[33vh]" v-if="index % 6 == 2" />
            
            <LC_Card class="md:col-start-1 md:row-span-2 md:col-span-1" :data="story" width="md:w-full" height="md:h-[66vh]" v-if="index % 6 == 3 && (stories.length - index) != 1" />
            <LC_Card class="md:col-start-1 md:row-span-1 md:col-span-3" :data="story" width="md:w-full" height="md:h-[66vh]" v-else-if="index % 6 == 3 && (stories.length - index) == 1" />
            
            <LC_Card class="md:col-start-2 md:col-span-2 md:row-span-1" :data="story" width="md:w-full" height="md:h-[33vh]" v-if="index % 6 == 4 && (stories.length - index) != 1" />
            <LC_Card class="md:col-start-2 md:row-span-2 md:col-span-2" :data="story" width="md:w-full" height="md:h-[66vh]" v-else-if="index % 6 == 4 && (stories.length - index) == 1" />
            
            <LC_Card class="md:col-start-2 md:col-span-2 md:row-span-1" :data="story" width="md:w-full" height="md:h-[33vh]" v-if="index % 6 == 5" />
            
          </template>
        </div>
      </div>
    </div>

</template>

<script>
export default {
  name: 'Form',
  data() {
    return {
      opacity: 1,
      blur_amt: 'blur(0)'
    }
  },
  created () {
    window.addEventListener('scroll', this.setOpacity);
  },
  destroyed () {
    window.removeEventListener('scroll', this.setOpacity);
  },
  methods: {
    setOpacity (event) {
      this.opacity = Math.max((this.$refs.story_board.getBoundingClientRect().top / window.innerHeight - .3)/.37, 0)
      this.blur_amt = 'blur(' + Math.max(1 - this.opacity, 0) * 5 + 'px)'
    }

  }

}
</script>

<style scoped>
.read-the-docs {
  color: #888;
}

</style>