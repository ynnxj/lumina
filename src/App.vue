<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <RouterLink to="/home"></RouterLink>
  <RouterLink to="/book"></RouterLink>
  <RouterLink to="/menu"></RouterLink>

  <RouterView />

</template>

<style scoped>

</style>
