<script setup>

</script>

<template>
  <nav>
    <a class="nav--link" href="/">Home</a>
    <a class="nav--link" href="/">Configurator</a>
    <a class="nav--link" href="/gallery.html">Gallerij</a>
    <a class="nav--link" href="/login.html">Login</a>
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