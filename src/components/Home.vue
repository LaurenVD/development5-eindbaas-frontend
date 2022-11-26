<script setup>

</script>

<template>
  <nav>
    <a class="nav--link" href="/">Home</a>
    <a class="nav--link" href="/">Configurator</a>
    <a class="nav--link" href="/">Gallerij</a>
  </nav>
  <img src="./../assets/donuttello-logo.png" alt="donutello">
  <div>
    <h1>Welkom bij de Donutello configurator!</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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