<template>
    <router-link :to="{ 'path': '/blog', 'query': { filename: url } }" class="hover:cursor-pointer">

        <!-- Profile Card -->
        <div :class="'flex flex-row flex-wrap px-8 md:py-4 md:px-1' + width + ' ' + height">

            <div :class="'flex flex-row flex-wrap m-auto antialiased bg-gray-600 rounded-3xl shadow-lg w-full my-3 p-3'"
                :style="`background-image: url('` + data.image + `');
        background-repeat: no-repeat;
        background-size: cover;
        background-blend-mode: multiply;`
                    ">
                <div class="flex right-0 items-end pt-0 mx-auto my-auto ml-0 w-full h-1/6 text-right transition-opacity px-auto md:pt-4 sm:pr-0 md:items-start md:align-top md:pb-60 md:h-2/3 md:opacity-0 hover:opacity-100 transition-smooth md:text-center">
                    <div class="right-0 pt-0 m-auto mx-auto mt-0 ml-4 text-justify text-white md:text-center sm:mr-0">
                        <p class="pb-2 pl-1 my-auto text-xs font-normal text-justify text-white">
                            {{ data.description }}
                        </p>
                    </div>
                </div>


                <div class="bottom-0 left-0 invisible flex-row flex-wrap items-start my-auto w-1/3 align-bottom md:flex md:visible h-fit md:items-end md:bottom-0 md:h-1/3">
                    <div class="relative items-end pt-3 w-full font-semibold text-left text-gray-700 align-bottom md:pt-0">

                        <div
                            class="bottom-0 left-0 pb-3 pl-4 text-xs font-semibold leading-tight text-white">
                            An article by <span class="text-red-500">{{
                                data.author }}</span></div>
                    </div>
                </div>
                <div class="flex right-0 flex-row flex-wrap items-end self-end px-3 mx-auto mr-0 w-full text-right md:w-2/3">
                    <div class="relative right-0 bottom-0 pt-3 mx-auto w-full font-semibold text-right text-gray-700 md:pt-0 align-sub">
                        <div
                            class="right-0 bottom-0 pt-3 text-sm text-gray-300 cursor-pointer hover:text-gray-400 md:absolute md:pt-0">
                            <div class="text-right">
                                <div class="pl-1 mb-2 text-4xl font-bold text-white md:text-8xl">{{ data.title.toUpperCase() }} {{ index }} </div>
                            </div>
                            <div
                            class="bottom-0 left-0 visible pb-3 pl-4 text-xs font-semibold leading-tight text-white md:hidden">
                            An article by <span class="text-red-500">{{
                                data.author }}</span></div>
                        </div>
                    </div>
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