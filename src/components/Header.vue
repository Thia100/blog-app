<template>
  <div class="mt-10 mb-16 flex flex-col items-center">
    <h1 class="mb-6 text-2xl md:text-3xl font-semibold text-gray-700">
      Hi, Good day!
    </h1>

    <div
      class="bg-white rounded-3xl max-w-5xl w-full overflow-hidden shadow-md border border-gray-100"
    >
      <div class="grid grid-cols-1 md:grid-cols-2">
        <div class="h-64 md:h-auto">
          <img
            :src="randomImage"
            alt="header image"
            class="w-full h-full object-cover"
          />
        </div>

        <div
          class="p-8 flex flex-col justify-center text-center md:text-left space-y-4"
        >
          <h2
            class="text-3xl md:text-4xl font-bold text-gray-900 leading-tight"
          >
            Welcome to <span class="text-indigo-600">Blogilates</span>
          </h2>

          <p class="text-gray-600 text-base md:text-lg">
            Changing narratives one story at a time
          </p>

          <button
            class="mt-4 px-5 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition w-fit mx-auto md:mx-0"
          >
            Explore Posts
          </button>
        </div>
      </div>
    </div>

    <div class="mt-8">
      <Navigation />
    </div>
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
