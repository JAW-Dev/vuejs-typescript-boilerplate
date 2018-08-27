<template>
  <section :id="setID" :class="setClass" v-bind="setAttr">
    <slot><p>Main</p></slot>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'mainLayoutMain',
  props: {
    setID: {
      type: String,
      default: 'main',
    },
    setClass: {
      type: String,
      default: 'main',
    },
    setAttr: {
      type: Object,
      default: () => {
        return { role: 'main' }
      },
    },
  },
})
</script>
