<template>
    <router-link :to="{'path':'/blog','query':{filename:url}}" class="hover:cursor-pointer">

        <!-- Profile Card -->
        <div :class="'flex flex-row flex-wrap px-8 md:py-4 md:px-1' + width + ' ' + height">

            <div :class="'flex flex-row flex-wrap m-auto antialiased bg-gray-600 rounded-3xl shadow-lg w-full my-3 p-3'"
                :style="`background-image: url('` + data.image + `');
        background-repeat: no-repeat;
        background-size: cover;
        background-blend-mode: multiply;`
                    ">
                <div class="flex flex-row flex-wrap px-3 w-full md:w-2/3">
                    <div class="relative pt-3 w-full font-semibold text-left text-gray-700 md:pt-0">
                        <div class="pt-3 pl-1 text-xs leading-tight text-white">An article by <span class="text-red-500">{{
                            data.author }}</span></div>
                        <div
                            class="left-0 bottom-2 pt-3 text-sm text-gray-300 cursor-pointer hover:text-gray-400 md:absolute md:pt-0">
                            <div class="text-justify">
                                <div class="pl-1 mb-2 text-4xl font-bold text-white">{{ data.title.toUpperCase() }} {{ index }} </div>
                                <hr class="py-1 mx-1 w-1/3" />
                                <p class="pb-2 pl-1 text-xs font-normal text-white">
                                    {{ data.description }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="block md:w-1/3">
                </div>
            </div>
            <!-- End Profile Card -->
        </div>
    </router-link>
</template>

<script>
export default {
    name: 'News_Card',
    data() {
        return {
            url: 'stories/' + this.data.filename
        }
    },
    props: [
        'data',
        'width',
        'height'
    ]
}
</script>