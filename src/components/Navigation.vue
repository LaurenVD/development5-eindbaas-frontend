<script setup>
import { ref, onMounted, reactive } from 'vue'

//when button is clicked, remove token from local storage and redirect to login page
const logout = () => {
    localStorage.removeItem('token')
    window.location.href = '/login'
}

</script>

<template>
  <nav>
    <a class="nav--link" href="/">Home</a>
    <a class="nav--link" href="/">Configurator</a>
    <a class="nav--link" href="/gallery">Gallerij</a>
    <a class="nav--link" href="/login">Login</a>
    <a class="nav--link" @click="logout">Logout</a>
  </nav>
  <img src="./../assets/donuttello-logo.png" alt="donutello">
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
    margin-right: auto;
  }
  
</style>