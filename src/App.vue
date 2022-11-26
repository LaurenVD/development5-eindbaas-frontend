<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Home from './components/Home.vue'
</script>

<template>
  <div>
    <Home />
  </div>
</template>

<style scoped>
nav {
    margin: 0;
    display: flex;
    padding: 2rem;
    justify-content: right;
    align-items: center;
    background-color: #E72C70;
  }

  .nav--link {
    margin-right: 2rem;
    color: #fff;
  }

  img {
    margin-top: -3rem;
  }

  p {
    margin: 0;
    padding: 2rem;
  };
</style>
