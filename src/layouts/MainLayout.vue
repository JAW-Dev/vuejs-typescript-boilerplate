<template>
  <div>
    <slot name="header"><p>Header</p></slot>
    <slot name="main"><p>Main</p></slot>
    <slot name="footer"><p>Footer</p></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'mainLayout',
})
</script>
