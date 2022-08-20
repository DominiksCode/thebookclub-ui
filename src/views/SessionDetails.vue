<template>
  <div v-if="session.id">
    <h1>From {{ startMonth }} to {{ endMonth }}</h1>
    <p>{{ startDate }} - {{ endDate }}</p>
    <router-link
      v-for="(participantId, index) in session.participantList"
      :key="participantId"
      :to="{ name: 'UserDetails', params: { id: participantId } }"
    >
      <span v-if="index === session.participantList.length - 1"> and </span>
      {{ participantId
      }}<span v-if="index !== session.participantList.length - 1">,</span>
    </router-link>
    <span> are joining the game</span>
  </div>
</template>

<script lang="ts">
import UserService from '../services/ClubInfoService'
import { defineComponent } from 'vue'
import { Session } from '../models/session'
import MONTH_NAMES from '../util/constants'

export default defineComponent({
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      session: {} as Session
    }
  },
  computed: {
    startDate(): Date {
      return new Date(this.session.start)
    },
    startMonth(): string {
      return MONTH_NAMES[this.startDate.getMonth()]
    },
    endDate(): Date {
      return new Date(this.session.end)
    },
    endMonth(): string {
      return MONTH_NAMES[this.endDate.getMonth()]
    }
  },
  created() {
    this.getSession()
  },
  updated() {
    this.getSession()
  },
  methods: {
    getSession(): void {
      UserService.getSession(this.id)
        .then((response) => {
          this.session = response.data
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }
})
</script>
