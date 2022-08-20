<template>
  <div v-if="user">
    <h1>{{ user.name }}</h1>
    <p>{{ user.email }}</p>
    <p>
      Is{{ user.active ? ' ' : ' NOT' }} participating in the current session
    </p>
    <p>I read {{ user.bookList.join(', ') }}</p>
    <p>I do not like {{ user.antiGenre.join(', ') }}</p>
    <p>Currently ows a book to {{ user.bookRecipient }}</p>
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
    UserService.getUser(this.id)
      .then((response) => {
        this.user = response.data
      })
      .catch((error) => {
        console.error(error)
      })
  }
})
</script>
