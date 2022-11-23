<template>
  <nav class="bg-transparent fixed left-0 right-0 z-10">
    <div class="max-w-[1140px] flex mx-auto justify-between items-center p-5">
      <figure class="">
        <img src="" alt="LOGO" />
      </figure> 
      <ul class="flex justify-between w-[300px] items-center">
        <li >
          <a class="hover:bg-[lightgray] px-4 py-2 rounded-full" href="#demos">Demos</a>
        </li>
        <li >
          <a class="hover:bg-[lightgray] px-4 py-2 rounded-full" href="#pricing">Pricing</a>
        </li>
        <li >
          <a class="hover:bg-[lightgray] px-4 py-2 rounded-full" href="#contact">Contact</a>
        </li>
      </ul>
      <ul class="flex space-x-4 items-center">
        <li >
          <router-link to="/login" class="hover:bg-[lightgray] px-4 py-2 rounded-full" href="">Log In</router-link>
        </li>
        <li>
          <button class="bg-[#242424] px-4 py-2 text-white"><router-link to="/register" href="">Register for Free</router-link></button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped></style>
