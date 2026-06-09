<template>
  <div class="p-4">
    <Navigation />
    <p v-if="loading">Loading...</p>
    <div v-else class="bg-gray-300 p-4 rounded-2xl">
       <h2 class="text-2xl mb-4"> {{ getPost.title }}</h2>
       <p> {{ getPost.content }}</p>
    </div>
  </div>
</template>

<script setup>
import { fetchPost } from "../services/api";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import Navigation from "../components/Navigation.vue";

const loading = ref(true);
const getPost = ref(null);
const route = useRoute();

onMounted(async () => {
  try {
    const response = await fetchPost(route.params.id);
    getPost.value = response;
    loading.value = false;
  } catch (error) {
    console.log(`ERROR: ${error}`);
  }
});
</script>
