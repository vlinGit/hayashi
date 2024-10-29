<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <div class="contact">
        <a href="https://www.google.com/maps?cid=10444526778448258265" target="_blank" id="address">
          2901 Ocean Ave, Brooklyn, NY 11235
        </a>
        |
        <a href="tel:718-368-3669" id="phoneNumber">
          718-368-3669
        </a>
      </div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/menu">Menu</RouterLink>
        <RouterLink to="/order">Order</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header{
  position: fixed;
  width: 100%;
}

.wrapper{
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: rgb(18, 52, 97, 0.6);
  padding: 10px;
}

.contact{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: #f5f3ec;

  a{
    font-size: 1em;
    text-shadow: none;
    margin: 0;
    text-decoration: none;
  }
}

nav{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
}

a {
  color: #f5f3ec;
  text-decoration: none;
  background-image: linear-gradient(#ffffff, #ffffff);
  background-size: 0% 0.1em;
  background-position-y: 100%;
  background-position-x: 0%;
  background-repeat: no-repeat;
  transition: background-size 0.2s ease-in-out;
  text-transform: uppercase;
  text-shadow: 0 4px 0px rgba(0, 0, 0, 0.45);
  font-size: 1.5em;
}

a:hover{
  background-size: 100% 0.1em;
}
</style>
