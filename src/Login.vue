<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Navigation from './components/Navigation.vue';
import GalleryItem from './components/GalleryItem.vue';
import Home from './components/Home.vue'

import { onMounted, reactive, ref } from 'vue'

//login form
let username = ref("");
let password = ref("");

//login function
const login = () => {
    //fetch login from https://donutello-backend.onrender.com/api/v1/login
    const apiUrl = "https://donutello-backend.onrender.com/users/login";
    //if button is clicked and username and password are correct, redirect to gallery.html
    fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: username.value,
            password: password.value,
        }),
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.status === "success") {
                window.location.href = "gallery.html";
            }
        })

};

console.log(username.value, password.value)

</script>

<template>
    <Navigation />
  <div class="signup">
    <div>
      <label for="email">Email</label>
      <input type="text" class="input--text" name="email" id="email">
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