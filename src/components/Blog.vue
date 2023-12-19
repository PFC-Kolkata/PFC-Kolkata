<script setup>
import { ref } from 'vue'

</script>

<template>

  <div class="items-center w-screen align-top">
    <div class="grid gap-4 py-12 m-auto max-w-screen-xl md:py-16">
      <div class="grid gap-4 p-10 bg-gray-50 border-gray-200 shadow">
        <div v-html="page_content" class="blog"></div>
      </div>
    </div>
  </div>
   
</template>

<script>
    export default {
    name: 'Form',
    data() {
        return {
           page_content: '<b>404:</b> Page is Israeli Evidence'
        }
    },
    created() {
      let path = '/src/assets/' + this.$route.query.filename + '.html'
      fetch(path)
      // .then(response => response.text())
      // .then(response => this.page_content = response )
      // .then(data => (this.totalVuePackages = data.total));

      .then(async response => {
      const data = await response.text();

      // check for error response
      if (!response.ok) {
        // get error message from body or default to response statusText
        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
      }

      this.page_content = data;
    })
    .catch(error => {
      this.errorMessage = error;
      console.error("There was an error!", error);
    });


    },
    methods: {
      
  }
}
</script>

<style scoped>
.read-the-docs {
  color: #888;
}

.blog >>> h1 {
  font-size: larger;
}
</style>
