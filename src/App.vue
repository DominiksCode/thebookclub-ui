<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'UserList' }">User List</router-link> |
      <router-link :to="{ name: 'About' }">About</router-link>
    </div>
    <div>
      <img src="./assets/book-club-dark.png" class="logo" alt="Vite logo" />
    </div>
    <router-view />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: coral;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em coral);
}
</style>
