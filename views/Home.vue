<script setup>
import { ref, onMounted, reactive } from 'vue'
import Navigation from '../src/components/Navigation.vue';

</script>

<template>
  <div>
    <Navigation />
    <h1>Home</h1>
    <p>Welkom op de homepagina van Donutello</p>
  </div>
</template>

<style scoped>
  p {
    margin: 0;
    padding: 2rem;
  };
</style>