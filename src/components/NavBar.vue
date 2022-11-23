<template>
  <nav class="bg-transparent fixed left-0 right-0 z-10 transition-all duration-200 ease-in-out" id="nav">
    <div class="max-w-[1140px] flex mx-auto justify-between items-center p-5 transition-all duration-200 ease-in-out text-white" id="bar">
      <figure class="">
        <img src="" alt="LOGO" />
      </figure>
      <ul class="flex justify-between w-[300px] items-center">
        <li>
          <a
            @click="gotosection('demos')"
            class="hover:bg-[lightgray] px-4 py-2 rounded-full cursor-pointer"
            >Demos</a
          >
        </li>
        <li>
          <a
            @click="gotosection('pricing')"
            class="hover:bg-[lightgray] px-4 py-2 rounded-full cursor-pointer"
            >Pricing</a
          >
        </li>
        <li>
          <a
            @click="gotosection('contact')"
            class="hover:bg-[lightgray] px-4 py-2 rounded-full cursor-pointer"
            >Contact</a
          >
        </li>
      </ul>
      <ul class="flex space-x-4 items-center">
        <li>
          <router-link
            to="/login"
            class="hover:bg-[lightgray] px-4 py-2 rounded-full"
            >Log In</router-link
          >
        </li>
        <li>
          <button class="bg-[#242424] px-4 py-2 text-white">
            <router-link to="/register">Register for Free</router-link>
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
window.addEventListener('scroll', handleScroll)

function handleScroll() {
  let navEl = document.getElementById('nav')
  let barEl = document.getElementById('bar')
  if (window.scrollY > 90) {
    navEl?.classList.add('navScrolled')
    barEl?.classList.add('barScrolled')
  }
  else {
    navEl?.classList.remove('navScrolled')
    barEl?.classList.remove('barScrolled')
  }
}

const props = defineProps<{
  gotosection: Function;
}>();





</script>

<style scoped>

.navScrolled {
  background-color: white !important;
  color: black !important;
  height: 60px !important;
}

.barScrolled {
  padding-top: 10px;
  color:black;
}

</style>
