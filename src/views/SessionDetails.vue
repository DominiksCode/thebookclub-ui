<template>
  <div v-if="session.id">
    <h1>From {{ startMonth }} to {{ endMonth }}</h1>
    <p>{{ startDate }} - {{ endDate }}</p>
    <router-link
      v-for="(participantId, index) in participantList"
      :key="participantId"
      :to="{ name: 'UserDetails', params: { id: participantId } }"
    >
      <span v-if="index === participantList.length - 1"> and </span>
      {{ participantId
      }}<span
        v-if="
          index !== participantList.length - 1 &&
          index !== participantList.length - 2
        "
        >,</span
      >
    </router-link>
    <span> are joining the game</span>
    <h2>Current matching</h2>
    <ul>
      <li v-for="[giver, receiver] in participantMap" :key="giver">
        {{ giver }} -> {{ receiver }}
      </li>
    </ul>
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
      // for some reason, the string isn't properly deserialized,
      // therefore, we explicitly create a Date out of it
      return new Date(this.session.start)
    },
    startMonth(): string {
      return MONTH_NAMES[this.startDate.getMonth()]
    },
    endDate(): Date {
      // for some reason, the string isn't properly deserialized,
      // therefore, we explicitly create a Date out of it
      return new Date(this.session.end)
    },
    endMonth(): string {
      return MONTH_NAMES[this.endDate.getMonth()]
    },
    participantMap(): Map<string, string> {
      // for some reason, the object isn't properly deserialized,
      // therefore, we explicitly create a map out of it
      return new Map(Object.entries(this.session.participantMap))
    },
    participantList(): string[] {
      return Array.from(this.participantMap.keys())
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
