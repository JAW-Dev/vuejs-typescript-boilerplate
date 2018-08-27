<template>
  <header :id="attr.id" :class="attr.class" v-bind="attr.attrs">
    <slot><p>Header</p></slot>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'mainLayoutHeader',
  props: {
    attr: {
      type: Object,
      default: () => {
        return {
          id: 'header',
          class: 'header',
          attrs: { role: 'banner' },
        }
      },
    },
  },
})
</script>
