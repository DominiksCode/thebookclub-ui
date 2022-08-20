<template>
  <router-link
    class="user-link"
    :to="{ name: 'UserDetails', params: { id: user.id } }"
  >
    <div class="user-card">
      <h4>{{ user.name }}</h4>
      <span>I read {{ user.bookList.join(', ') }}</span>
      <span>I do not like {{ user.antiGenre.join(', ') }}</span>
    </div>
  </router-link>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { User } from '../models/user'

export default defineComponent({
  props: {
    user: {
      type: Object as PropType<User>,
      required: true
    }
  }
})
</script>

<style scoped>
.user-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #213547;
  margin-bottom: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.user-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

span {
  color: #888;
  font-size: small;
}
</style>
