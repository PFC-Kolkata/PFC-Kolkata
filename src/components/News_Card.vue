<template>
    <a :href="data.url" target="_blank">
        <div class="grid overflow-hidden h-full bg-gray-100 shadow-sm">
            <div>
                <img class="object-scale-down pb-4 w-fill aspect-video" :src="'/src/assets/our_cinema/news/' + data.image" :alt="data.sl">
            </div>

            <div class="px-6 py-4 text-justify">
                <div class="py-1 mb-2 text-4xl font-bold">{{ data.title }}:</div>
                <hr class="py-1 w-1/3" />
                <p class="py-1 text-red-500">{{ data.date }}</p>
                <p class="text-sm font-normal text-gray-700">
                    {{ data.description }}
                </p>
            </div>
            <div class="px-6 pt-2 pb-4 text-justify">
                <span class="inline-block py-1 mr-2 mb-2 text-sm font-semibold text-red-500">Read More →</span>
            </div>
        </div>
    </a>

</template>

<script>
    export default {
    name: 'News_Card',
    data() {
        return {
           
        }
    },
    props: [
        'data'
    ]
}
</script>