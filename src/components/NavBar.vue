<template>
  <nav class="bg-transparent fixed left-0 right-0 z-10">
    <div class="max-w-[1140px] flex mx-auto justify-between items-center p-5">
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
const props = defineProps<{
  gotosection: Function;
}>();
</script>

<style scoped></style>
