<template>
  <h1>Bist du bereit für die Session?</h1>
  <div class="user-list">
    <session-card
      v-for="session in sessions"
      :key="session.id"
      :session="session"
    />
  </div>
</template>

<script lang="ts">
import ClubInfoService from '../services/ClubInfoService'
import { defineComponent } from 'vue'
import { Session } from '../models/session'
import SessionCard from '../components/SessionCard.vue'

export default defineComponent({
  components: {
    SessionCard
  },
  data() {
    return {
      sessions: [] as Session[]
    }
  },
  created() {
    ClubInfoService.getSessions()
      .then((response) => {
        this.sessions = response.data
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
