<template>
  <div class="min-h-screen bg-gray-50">
    <Navigation />

    <div v-if="loading">
      <Spinner />
    </div>

    <div
      v-else
      class="max-w-4xl mx-auto px-6 py-12"
    >
      <article class="bg-white rounded-3xl shadow-sm p-8 md:p-12">
        
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8">
          {{ getPost.title }}
        </h1>
      
        <div class="flex items-center gap-4 border-b border-gray-200 pb-6 mb-8">
          <img
            src="/profile-avatar.svg"
            alt="Profile"
            class="w-12 h-12 rounded-full"
          />

          <div>
            <p class="font-medium text-gray-800">
              {{ formatDate(getPost.createdAt) }}
            </p>

            <p class="text-sm text-gray-500">
              {{ getPost.viewCount }} reads
            </p>
          </div>
        </div>

        
        <div class="prose prose-lg max-w-none">
          <p class="text-gray-700 leading-8 whitespace-pre-line">
            {{ getPost.content }}
          </p>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup>
import { fetchPost } from "../services/api";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import Navigation from "../components/Navigation.vue";

import Spinner from "../components/ui/Spinner.vue";

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

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
</script>
