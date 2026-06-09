<script setup>
import { fetchPosts } from "../services/api";
import { ref, onMounted } from "vue";

const posts = ref([]);
const loading = ref(true);
const currentPage = ref(1);
const totalPages = ref(1);

async function loadPosts(page = 1) {
  try {
    const response = await fetchPosts(page);
    posts.value = response.data;
    loading.value = true;

    totalPages.value = response.meta.totalPages;
    currentPage.value = response.meta.page;
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
}

onMounted(async () => {
  loadPosts();
});
</script>

<template>
  <div class="my-8">
    <p v-if="loading">loading</p>
    <ul v-else>
      <li v-for="post in posts" :key="post.id" class="mb-12 py-4 px-2 border-b">
        <router-link :to="`/blog-card/${post.id}`">
          <h2 class="text-xl mb-2">{{ post.title }}</h2>
          <p>{{ post.excerpt }}</p>
        </router-link>
      </li>
    </ul>
    <div>
      <button
        @click="loadPosts(currentPage - 1)"
        :disabled="currentPage === 1"
        class="px-4 py-2 bg-gray-200 rounded disabled:opacity-50 cursor-pointer"
      >
        <font-awesome-icon icon="arrow-left" />
      </button>
      <span>{{ currentPage }} of {{ totalPages }}</span>
      <button
        @click="loadPosts(currentPage + 1)"
        :disabled="currentPage === totalPages"
        class="px-4 py-2 bg-gray-200 rounded disabled:opacity-50 cursor-pointer"
      >
        <font-awesome-icon icon="arrow-right" />
      </button>
    </div>
  </div>
</template>
