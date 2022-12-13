<script setup>
import { ref, onMounted, reactive } from 'vue'
import Navigation from '../../src/components/Navigation.vue';

</script>

<template>
    <Navigation />
    <div class="image">
    <h1 class="title">De <span class="title title--highlight">donut</span> configurator!</h1>
    <p>Wil jij ook je werknemers graag eens verrassen met een donut? Via onze 3D donut configurator kan je je eigen donut maken!</p>
    <a class="btn" href="https://development5-eindbaas-three.vercel.app/">creeër donut</a>
  </div>
</template>

<style scoped>
  p {
    margin: 0;
    padding: 2rem;
    font-size: 1.5em;
    color: white;
    font-weight: bolder;
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
  }

  .image {
    background-image:linear-gradient(rgba(231, 44, 112, 0.5), rgba(130, 209, 228, 0.645)), url(../../src/assets/sint_2022.jpg);
    background-size: cover;
    height: 81vh;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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