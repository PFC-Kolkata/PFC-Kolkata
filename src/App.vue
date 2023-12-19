<script setup>
import Navbar from './components/Navbar.vue';
import Notice_Nav from './components/Notice_Nav.vue'
import Footer2 from './components/Footer2.vue';
import Footer1 from './components/Footer1.vue';


import nav_items from './assets/pfc_navbar.json';
import kpff_nav from './assets/kpff_nav.json';
import fof_nav from './assets/fof_nav.json';

import { computed } from 'vue';


</script>

<template>
  <Notice_Nav />

  <Navbar :menu_items="menu_items" :navbar_active="navbar_active" class="sticky top-0 z-20" :key="menu_items"/>

  <router-view />

  <component :is="footer"></component>
</template>

<script>
export default {
  components: {
    Navbar,
    // Home,
    // Footer1,
    // Footer2,
    // Publications,
    // Movie_Page,
    // KPFF_Mozaic,
    // Gallery
  },
  props: [
  ],
  data() {
    return {
      footer: Footer1,
      menu_items: nav_items,
      navbar_active: computed(() => this.$route.path),
      lastPath: '/'
    }
  },
  created() {
    this.$watch(
      () => this.$route.path,
      path => {
        if(String(path).match('/festival') && !String(this.lastPath).match('/festival')){
          this.footer = Footer1
          this.menu_items = kpff_nav
        } else if(String(path).match('/fof') && !String(this.lastPath).match('/fof')){
          this.footer = Footer1
          this.menu_items = fof_nav
        } else {
          this.footer = Footer2
          this.menu_items = nav_items
        }
      }
    )
  },

}
</script>

<style scoped>
/* .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
} */
</style>
