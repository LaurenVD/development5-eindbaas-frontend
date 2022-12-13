<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
//import navigation
import Navigation from '../../src/components/Navigation.vue';
import GalleryItem from '../../src/components/GalleryItem.vue';
import Home from '../views/Home.vue'

import { onMounted, reactive, ref } from 'vue'


//log user in with correct credentials
const login = async () => {
  const response = await fetch('https://eindbaas-donutello-node.onrender.com/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: username.value,
      password: password.value
    })
  })
  const data = await response.json()
  console.log(data)
// if user is not false then redirect to gallery
  if (data.data) {
    localStorage.setItem('token', data.data.token)
    window.location.href = '/gallery'
  }
}

</script>

<template>
    <Navigation />
  <div class="signup">
    <div>
      <label for="username">Gebruikersnaam</label>
      <input type="text" class="input--text" name="username" id="username">
    </div>
    
    <div>
      <label for="password">Wachtwoord</label>
      <input type="password" class="input--text" name="password" id="password">
    </div>
    
    <button class="btn" @click="login">Login</button>
  </div>

</template>

<style scoped>

label {
    margin: auto;
    padding: 2rem;
    display: block;
    font-size: 1.5em;
    font-weight: bolder;
    padding-top: 1rem;
  };

input {
    margin: 0;
    padding: 2rem;
    font-size: 1.5em;
    font-weight: bolder;
    display: block;
  };

  .title {
    color: white;
    font-weight: bold;
  }

  .title--highlight {
    color: var(--strawberry);
  }

  .btn {
    background-color: #f7e200;
    color: #E72870;
    font-size: clamp(0.9rem, 1vw + 1rem, 1.5rem);
    font-weight: bolder;
    text-transform: uppercase;
    padding: 1rem 1.5rem;
    border-radius: 3.5rem;
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
    margin-top: 1rem;
  }

  .btn:hover {
    background-color: #E72870;
    color: #f7e200;
    transition: all 0.3s ease-in-out;
  }

  .btn:active {
    transform: translateY(2px);
  }

</style>