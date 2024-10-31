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

  <div class="footer">
    <div class="content">
      <a href="/">Hayashi</a>
      <div class="links">
        <a href="/menu">Menu</a>
        <a href="/order#mapTag">Location</a>
        <a href="/order#ordersTag">Contact</a>
        <a href="/order#hoursTag">Hours</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import border from '@/assets/borders.svg'

const onScroll = () => {
  const wrapper = document.querySelector('.wrapper');
  if (window.scrollY > 0) {
    wrapper.classList.add('scrolled');
  } else {
    wrapper.classList.remove('scrolled');
  }
};

onMounted(() => {
  window.addEventListener('scroll', onScroll);
})
</script>

<style scoped>
.scrolled{
  background-color: rgb(18, 52, 97, 1) !important;
}

header{
  position: fixed;
  width: 100%;
  z-index: 999;
}

.wrapper{
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: rgb(18, 52, 97, 0.6);
  padding: 10px;
  transition: background-color 0.2s ease-in-out;
}

.contact{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: #f5f3ec;

  a{
    font-size: clamp(12px, 1em, 32px);
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
  font-size: clamp(16px, 1.5em, 32px);
}

a:hover{
  background-size: 100% 0.1em;
}

.footer{
  display: flex;
  justify-content: center;
  align-items: center;

  .content{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 95%;

    .links{
      display: flex;
      gap: 20px;
    }
  }
  
  p{
    font-size: clamp(16px, 1.5em, 32px);
  }
}

.footer::before{
  content: '';
  background-image: url('assets/borders.svg');
  transform: rotate(180deg);
  background-size: cover;
  position: absolute;
  width: 100%;
  height: 100px;
  z-index: -1;
  pointer-events: none;
}
</style>
