<template>
  <div class="text-center my-6 flex justify-center gap-2">
    <button @click="redirect" class="mr-4 text-2xl cursor-pointer">Home</button>

    <div class="flex gap-2">
      <button @click="back" class="cursor-pointer text-2xl">
        <FontAwesomeIcon icon="arrow-left" />
      </button>
      <button @click="forward" class="cursor-pointer text-2xl">
        <font-awesome-icon icon="arrow-right" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { useRouter } from "vue-router";
const router = useRouter();

function redirect() {
  router.push({ name: "Home" });
}
function back() {
  router.go(-1);
}
function forward() {
  router.go(1);
}
</script>
