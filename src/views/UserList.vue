<template>
  <h1>Choose your character!</h1>
  <div class="user-list">
    <user-card v-for="user in users" :key="user.id" :user="user" />
  </div>
</template>

<script lang="ts">
import UserCard from '../components/UserCard.vue'
import ClubInfoService from '../services/ClubInfoService'
import { User } from '../models/user'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    UserCard
  },
  data() {
    return {
      users: [] as User[]
    }
  },
  created() {
    ClubInfoService.getUsers()
      .then((response) => {
        this.users = response.data
      })
      .catch((error) => {
        console.error(error)
      })
  }
})
</script>

<style scoped>
.user-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
