<script setup>
import Spinner from "../components/ui/Spinner.vue";
import { fetchPosts } from "../services/api";
import { ref, onMounted } from "vue";

const posts = ref([]);
const loading = ref(true);
const currentPage = ref(1);
const totalPages = ref(1);

async function loadPosts(page = 1) {
  loading.value = true;
  try {
    const response = await fetchPosts(page);
    posts.value = response.data;

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
  <div class="max-w-4xl mx-auto my-10 px-4">
    <div v-if="loading">
      <Spinner />
    </div>

    <div v-else class="space-y-6">
      <router-link
        v-for="post in posts"
        :key="post.id"
        :to="`/blog-card/${post.id}`"
        class="block"
      >
        <article
          class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
        >
          <h2
            class="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors"
          >
            {{ post.title }}
          </h2>

          <p class="text-gray-600 leading-7">
            {{ post.excerpt }}
          </p>

          <div class="mt-4 text-blue-600 font-medium">
            Read more →
          </div>
        </article>
      </router-link>
    </div>

    <!-- Pagination -->
    <div
      v-if="!loading"
      class="flex items-center justify-center gap-4 mt-10"
    >
      <button
        @click="loadPosts(currentPage - 1)"
        :disabled="currentPage === 1"
        class="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition"
      >
        <font-awesome-icon icon="arrow-left" />
      </button>

      <div
        class="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium"
      >
        Page {{ currentPage }} of {{ totalPages }}
      </div>

      <button
        @click="loadPosts(currentPage + 1)"
        :disabled="currentPage === totalPages"
        class="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition"
      >
        <font-awesome-icon icon="arrow-right" />
      </button>
    </div>
  </div>
</template>
