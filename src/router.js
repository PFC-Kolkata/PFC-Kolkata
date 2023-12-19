import { createWebHistory, createRouter } from "vue-router";

import Home from './components/Home.vue'
import News from './components/News.vue'
import Publications from './components/Publications.vue'
import Notices from './components/Notices.vue'
import Support from './components/Support.vue'
import Stories from './components/Stories.vue'
import LC from './components/LC.vue'
import Screenings from './components/Screenings.vue'
import Blog from './components/Blog.vue'
import KPFF from './components/KPFF.vue'



const history = createWebHistory();
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
      path: '/festival',
      name: 'KPFF',
      component: KPFF
    },
    // {
        // path: '/festival/blogs',
        // name: 'KPFFBlogs',
        // component: KPFFBlogs
    // },
    // {
        // path: '/festival/gallery',
        // name: 'KPFFGal',
        // component: KPFFGal
    // },
    // {
        // path: '/festival/schedule',
        // name: 'KPFFSchedule',
        // component: KPFFSchedule
    // },
    // {
        // path: '/fof',
        // name: 'FOF',
        // component: FOF
    // },
    // {
        // path: '/fofblogs',
        // name: 'FOFBlogs',
        // component: FOFBlogs
    // },
    // {
        // path: '/fofgallery',
        // name: 'FOFGal',
        // component: FOFGal
    // },
    // {
        // path: '/fofschedule',
        // name: 'FOFSchedule',
        // component: FOFSchedule
    // },
    {
      path: '/little-cinema',
      name: 'Little Cinema',
      component: LC
    },
    {
      path: '/screenings',
      name: 'Screenings',
      component: Screenings
    },
    {
      path: '/stories',
      name: 'Stories',
      component: Stories
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/pubs',
      name: 'Publications',
      component: Publications
    },
    {
      path: '/notices',
      name: 'Notices',
      component: Notices
    },
    {
      path: '/support',
      name: 'Support',
      component: Support
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    }
];

const router = createRouter({
    history, 
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
            el: to.hash,
            behavior: 'smooth',
            }
        }
        else {
          return { top: 0}
        }
    }
})


export default router;