<script setup>
import { ref, onMounted, reactive } from 'vue'

//when button is clicked, remove token from local storage and redirect to login page
const logout = () => {
    localStorage.removeItem('token')
    window.location.href = '/login'
}

const loggedIn = () => {
    if (localStorage.getItem('token')) {
        return true
    } else {
        return false
    }
}

</script>

<template>
  <nav>
    <img src="./../assets/donuttello-logo.png" alt="donutello">
    <a class="nav--link" href="/">Home</a>
    <a class="nav--link" href="https://development5-eindbaas-three.vercel.app/">Configurator</a>
    <a class="nav--link" href="/gallery">Gallerij</a>
    <a class="nav--link" v-if="loggedIn()" href="/login">Logout</a>
    <a class="nav--link" v-else href="/login" @click="logout">Login</a>

  </nav>
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
    font-size: 1.5rem;
    font-weight: bolder;
  }

  .nav--link:hover {
    color: var(--lemon);
    cursor: pointer;
  }

  img {
    width: 10rem;
    margin-right: 35rem;
    margin-top: -2rem;
  }
  
</style>