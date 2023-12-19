<script setup>

  import { ref } from 'vue'
  import notices from '../assets/our_cinema/notices.json'

</script>

<template>
   
  <div class="flex isolate overflow-hidden relative gap-x-6 items-center px-6 py-2.5 text-center bg-gray-50 sm:px-3.5 sm:before:flex-1" ref="banner" v-show="bannerHidden != 0">
    
    <div class="gap-x-4 gap-y-4 items-center">
      <ul v-for="notice in notices" class="max-w-screen-xl">
        <li v-if="notice.priority == 1 && notice.time > notified && ++bannerHidden" class="p-4 m-4 max-w-screen-xl text-center bg-white border-gray-200 shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          {{ notice.bulletin }}
        </li>
      </ul>
    </div>
    <div class="flex flex-1 justify-end mt-0 mb-auto">
      <button type="button" class="-m-3 p-3 md:p-6 focus-visible:outline-offset-[-4px]" @click="set_notified()">
        <span class="sr-only">Dismiss</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    
  </div>

</template>

<script>
    export default {
    name: 'Form',
    data() {
        return {
           bannerHidden: 0,
           notified: localStorage.getItem('notified')
        }
    },
    mounted() {
      if(!(localStorage.notified))
        this.notified = 0;
      // return notified;
    },
    watch: {
    },
    methods: {
      set_notified() {
        this.$refs.banner.classList.add('hidden');
        localStorage.setItem('notified', Date.now());
        }
    }
}
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
