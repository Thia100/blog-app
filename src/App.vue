<script setup>
import { ref, onErrorCaptured } from "vue";
import Spinner from "./components/ui/Spinner.vue";

const hasError = ref(false);

onErrorCaptured(() => {
  hasError.value = true;
  return false;
});
</script>

<template>
  <div v-if="hasError">
    <h1>Something went wrong.</h1>
  </div>
  <Suspense v-else>
    <router-view />
    <template #fallback>
      <Spinner />
    </template>
  </Suspense>
</template>
