<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Navigation from '../../src/components/Navigation.vue';
import GalleryDetail from '../../src/components/GalleryDetail.vue';
import Home from '../views/Home.vue'

//only show gallery with right token
const token = localStorage.getItem('token')
if (!token) {
  window.location.href = '/login.html'
}

</script>

<template>
  <div>
    <Navigation />
    <GalleryDetail />
  </div>
</template>

<style scoped>

</style>
