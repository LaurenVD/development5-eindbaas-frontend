<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
//import navigation
import Navigation from '../src/components/Navigation.vue';
import GalleryItem from '../src/components/GalleryItem.vue';
import Home from '../views/Home.vue'

import { onMounted, reactive, ref } from 'vue'


//log user in with correct credentials
const login = async () => {
  const response = await fetch('https://donutello-backend.onrender.com/users/login', {
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
      <label for="username">username</label>
      <input type="text" class="input--text" name="username" id="username">
    </div>
    
    <div>
      <label for="password">Password</label>
      <input type="password" class="input--text" name="password" id="password">
    </div>
    
    <button class="btn" @click="login">Login</button>
  </div>

</template>

<style scoped>

</style>