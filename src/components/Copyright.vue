<template>
  <div id="copyright" class="copyright">{{ siteName() }} &copy; {{ currentYear() }}</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'copyright',
  data() {
    return {}
  },
  methods: {
    siteName(): string | undefined {
      return process.env.VUE_APP_TITLE
    },
    currentYear(): number {
      return new Date().getFullYear()
    },
  },
})
</script>
