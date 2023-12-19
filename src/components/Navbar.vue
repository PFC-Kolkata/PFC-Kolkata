<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-900">
      <div class="flex flex-wrap justify-between items-center p-4 mx-auto max-w-screen-xl">
          <router-link :to="menu_items[0].title == 'Home'? menu_items[0].route : '/'"
          class="flex items-center self-center"
          @click="navbar_active = menu_items[0].route ; this.$refs.navbar.classList.add('hidden')">
              <img src="/src/assets/pfc-logo.svg" class="self-stretch mr-3 h-8" alt="People's Film Collective Logo" />
              <span class="self-center font-semibold whitespace-nowrap text-2xl/4 dark:text-white">
                  <table class="align-items-start">
                      <thead>
                          <tr>
                              <th class="block text-left">OUR CINEMA</th>
                          </tr>
                          <tr class="text-[0.5rem]">
                              <th class="block font-normal text-left">PEOPLE'S CINEMA WITH PEOPLE'S SUPPORT</th>
                          </tr>
                      </thead>
                  </table>
              </span>
          </router-link>
          <button 
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex justify-center items-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
            @click="nav_closed = !nav_closed">
              <span class="sr-only">Open main menu</span>
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
          </button>
          <div :class="{'hidden':nav_closed, 'w-full md:block md:w-auto':true}"
            id="navbar-default"
            ref="mainNav">
              <ul class="flex flex-col p-4 mt-4 font-medium bg-gray-50 rounded-lg border border-gray-100 md:p-0 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                  <li v-for="menu_item in menu_items">
                      <router-link
                      :to="menu_item.route"
                      :class="{'cursor-pointer py-1': true,
                      'font-bold block rounded text-red-500 md:bg-transparent md:text-red-500 md:p-0 dark:text-white md:dark:text-red-500':(navbar_active==menu_item.route)}"
                      aria-current="page"
                      v-show="menu_item.title != 'Home'"
                      @click="navbar_active = menu_item.route ; this.$refs.navbar.classList.add('hidden')">
                        {{ menu_item.title.toUpperCase() }}
                      </router-link>
                  </li>
              </ul>
          </div>
      </div>
  </nav>

</template>

<script>
    import { onMounted } from 'vue';
    import { computed } from "vue";
    import { ref } from 'vue';

    import { 
    initAccordions, 
    initCarousels, 
    initCollapses, 
    initDials, 
    initDismisses, 
    initDrawers, 
    initDropdowns, 
    initModals, 
    initPopovers, 
    initTabs, 
    initTooltips } from 'flowbite';

    // initialize components based on data attribute selectors
    onMounted(() => {
    initAccordions();
    initCarousels();
    initCollapses();
    initDials();
    initDismisses();
    initDrawers();
    initDropdowns();
    initModals();
    initPopovers();
    initTabs();
    initTooltips();
})


    export default {
      name: 'Navbar',
      data() {
        return {
            nav_closed: true
        }
      },
      props: [
        'navbar_active',
        'menu_items'
        ],
      methods: {
        
      }

    }
</script>

<style scoped>

</style>
