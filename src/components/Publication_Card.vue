<template>

      <div class="flex flex-col md:flex-row">
        <div>
        <img
          :src="pub.image"
          alt="Image representing publication"
          class="my-4 w-fill aspect-video"
        />
        </div>
        <div class="m-4 space-y-3">
          <p>{{ pub.author }}</p>
          <p class="text-4xl font-bold">{{ pub.title }}</p>
          <hr />
          <p class="text-gray-500">{{ pub.date }}</p>
          <p>
            {{ pub.description }}
          </p>
          <p class="font-semibold text-red-600">
            <router-link to="">READ MORE</router-link>
          </p>
        </div>

  </div>
</template>

<script>
  export default {   
    data() {
      return {
        
      }
    },
    components: [
      'pub'
    ]
  }
</script>

<style scoped>
</style>
