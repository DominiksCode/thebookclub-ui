<template>
  <div v-if="user.name">
    <h1>{{ user.name }}</h1>
    <p>{{ user.email }}</p>
    <p>
      Is{{ user.active ? ' ' : ' NOT' }} participating in the current session
    </p>
    <p>I read {{ user.bookList.join(', ') }}</p>
    <p>I do not like {{ user.antiGenre.join(', ') }}</p>
    <span>Currently ows a book to </span>
    <router-link
      :to="{ name: 'UserDetails', params: { id: user.bookRecipient } }"
      >{{ user.bookRecipient }}</router-link
    >
  </div>
</template>

<script lang="ts">
import UserService from '../services/UserService'
import { defineComponent } from 'vue'
import { User } from '../models/user'

export default defineComponent({
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      user: {} as User
    }
  },
  created() {
    this.getUser()
  },
  updated() {
    this.getUser()
  },
  methods: {
    getUser(): void {
      UserService.getUser(this.id)
        .then((response) => {
          this.user = response.data
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }
})
</script>
