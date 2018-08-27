<template>
  <footer :id="setID" :class="setClass" v-bind="setAttr">
    <slot><p>Footer</p></slot>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'mainLayoutFooter',
  props: {
    setID: {
      type: String,
      default: 'footer',
    },
    setClass: {
      type: String,
      default: 'footer',
    },
    setAttr: {
      type: Object,
      default: () => {
        return { role: 'contentinfo' }
      },
    },
  },
})
</script>
