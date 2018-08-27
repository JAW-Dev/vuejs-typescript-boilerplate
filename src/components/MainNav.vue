<template>
  <nav id="header__nav" class="header__nav nav" role="navigation">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'mainNav',
})
</script>
