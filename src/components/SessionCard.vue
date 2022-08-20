<template>
  <router-link
    class="user-link"
    :to="{ name: 'SessionDetails', params: { id: session.id } }"
  >
    <div class="session-card">
      <h4>From {{ startMonth }} to {{ endMonth }}</h4>
    </div>
  </router-link>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Session } from '../models/session'
import MONTH_NAMES from '../util/constants'

export default defineComponent({
  props: {
    session: {
      type: Object as PropType<Session>,
      required: true
    }
  },
  computed: {
    startMonth(): string {
      const validDate = new Date(this.session.start)
      return MONTH_NAMES[validDate.getMonth()]
    },
    endMonth(): string {
      const validDate = new Date(this.session.end)
      return MONTH_NAMES[validDate.getMonth()]
    }
  }
})
</script>

<style scoped>
.session-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #213547;
  margin-bottom: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.session-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
