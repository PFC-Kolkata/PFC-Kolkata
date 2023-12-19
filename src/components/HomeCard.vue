<template>
    <div class="pt-0 pb-16 md:py-16" :style="'background: ' + page.bg" v-if="index % 2 == 0">

        <router-link :to="'/' + page.route"
            class="flex flex-col items-center pt-0 border-gray-200 shadow md:flex-row md:max-w-screen-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            :style="'background: ' + page.fg">
            <img class="object-cover pt-0 w-full h-96 md:h-auto md:w-2/5 md:rounded-none" :src="page.img" alt="">
            <div class="flex flex-col justify-between p-4 leading-normal text-justify md:px-24">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:text-4xl dark:text-white">{{ page.title.toUpperCase()
                }}</h5>
                <router-link to="">CLCK TO SEE MORE →</router-link>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ page.about }}</p>
            </div>
        </router-link>

    </div>

    <div class="pt-0 pb-16 md:py-16" :style="'background: ' + page.bg" v-if="index % 2 != 0">

        <router-link :to="'/' + page.route"
            class="flex flex-col items-center pt-0 border-gray-200 shadow md:flex-row md:max-w-screen-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            :style="'background: ' + page.fg">
            <img class="object-cover pt-0 w-full h-96 md:h-auto md:w-2/5 md:rounded-none md:hidden" :src="page.img" alt="">
            <div class="flex flex-col justify-between p-4 leading-normal text-justify md:px-24">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:text-4xl dark:text-white">{{ page.title.toUpperCase()
                }}</h5>
                <router-link to="">CLCK TO SEE MORE →</router-link>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ page.about }}</p>
            </div>
            <img class="hidden object-cover pt-0 m-auto w-full h-96 md:h-auto md:w-2/5 md:rounded-none md:pr-0 md:right-0 md:mr-0 md:flex" :src="page.img" alt="">
        </router-link>

    </div>
</template>

<script>
export default {
    name: 'News_Card',
    data() {
        return {

        }
    },
    props: [
        'page',
        'index'
    ]
}
</script>