<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
//import navigation
import Navigation from '../../src/components/Navigation.vue';
import GalleryItem from '../../src/components/GalleryItem.vue';
import Home from '../views/Home.vue'

import { onMounted, reactive, ref } from 'vue'

const error = ref('')

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
  else {
    error.value = 'Gebruikersnaam of wachtwoord zijn incorrect'
  }
}

</script>

<template>
    <Navigation />
  <div class="signup">
    <div>
      <label for="username">Gebruikersnaam</label>
      <input type="text" class="input--text" name="username" id="username" placeholder="Vul je gebruikersnaam in">
    </div>
    
    <div>
      <label for="password">Wachtwoord</label>
      <input type="password" class="input--text" name="password" id="password" placeholder="Vul je wachtwoord in">
    </div>
    
    <button class="btn" @click="login">Login</button>
  </div>

  <p v-if="error" class="error">Gebruikersnaam of wachtwoord zijn incorrect</p>

</template>

<style scoped>

label {
    margin-top: 1rem;
    margin-right: 2rem;
    font-weight : bold;
  }

  .input--text {
    padding: 1rem 1.5rem;
    border-bottom: 2px solid #E72870;
    border-top: none;
    border-left: none;
    border-right: none;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .input--text:focus {
    outline: none;
  }
  .input--text::placeholder {
    color: lightgray;
    font-family: 'Dosis', sans-serif;
  }

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

  .error {
    color: red;
    font-weight: bolder;
    margin-top: 1rem;
  }


</style>