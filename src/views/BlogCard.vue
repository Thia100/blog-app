<script setup>
import { fetchPosts } from "../services/api";
import { ref, onMounted } from "vue";

const posts = ref([]);
const loading = ref(true);

onMounted(async () => {
  try {
    const response = await fetchPosts();
    posts.value = response.data;
    loading.value = false;
  } catch (error) {
    console.log(error)
  }
});
</script>

<template>
  <div class="mb-5">
    <p v-if="loading">loading</p>
    <ul v-else>
      <li
        v-for="post in posts"
        :key="post.id"
        class="mb-5 border bg-gray-200 p-2 rounded-lg"
      >
        <router-link :to="`/blog-card/${post.id}`">
          <h2 class="text-xl mb-4">{{ post.title }}</h2>
          <p>{{ post.excerpt }}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>
