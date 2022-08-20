<template>
  <h1>{{ msg }}</h1>

  <h2>"Hier wird bald viel passieren"</h2>
  <p class="read-the-docs">jeder company twitter account bei creation, ever</p>
</template>

<script lang="ts">
export default {
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.read-the-docs {
  color: #888;
  font-size: small;
}
</style>
