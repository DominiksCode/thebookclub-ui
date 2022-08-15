<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <h2>
    "Hier wird bald viel passieren"
  </h2>
  <p class="read-the-docs">jeder company twitter account bei creation, ever</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
  font-size: small;
}
</style>
