<template>
  <div class="mt-6 mb-12">
    <h1 class="mb-4 text-gray-700">Hi, Good day!</h1>
    <div
      class="bg-gray-100 rounded-2xl max-w-5xl w-full overflow-hidden shadow-lg"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 p-4">
        <img
          :src="randomImage"
          alt="header image"
          class="w-full h-full object-cover rounded-2xl"
        />
        <div
          class="p-6 flex flex-col justify-center space-y-3 text-center md:text-left"
        >
          <p class="text-2xl font-bold text-gray-900">
            Welcome to <span class="text-black">Blogilates</span>
          </p>
          <p class="text-gray-600">Changing narratives one story at a time</p>
        </div>
      </div>
    </div>
    <Navigation />
  </div>  
</template>

<script setup>
const imagesArray = [
  "/header-image-1.webp",
  "/header-image-2.webp",
  "/header-image-3.webp",
];
const randomIndex = Math.floor(Math.random() * imagesArray.length);
const randomImage = imagesArray[randomIndex];
import Navigation from "./Navigation.vue";
</script>
