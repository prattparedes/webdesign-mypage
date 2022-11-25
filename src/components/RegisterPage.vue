<template>
  <div
    id="register"
    class="h-[100vh] bg-gradient-to-b from-black via-gray-600 to-gray-400"
  >
    <div
      class="w-[80%] h-[80%] bg-[white] relative left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] rounded-[40px] flex overflow-hidden"
    >
      <div
        v-if="!submitted"
        class="w-[50%] bg-[lightgray] flex flex-col justify-center items-center text-center"
      >
        <h1 class="text-3xl font-bold max-w-[80%]">
          Register now to get the best discounts for your Page!
        </h1>
        <div class="flex flex-col items-center w-[50%]">
          <label for="name" class="mt-4 mb-2 font-medium">Name</label>
          <input
            type="text"
            v-model="user.name"
            required
            placeholder="Your name..."
            class="w-[100%] border-b-2 px-4 py-2 outline-none focus:border-b-black focus:border-b-2"
          />
          <label for="email" class="mt-4 mb-2 font-medium">Email</label>
          <input
            type="email"
            v-model="user.email"
            required
            placeholder="someone@example.com"
            class="w-[100%] border-b-2 px-4 py-2 outline-none focus:border-b-black focus:border-b-2"
          />
          <label for="password" class="mt-4 mb-2 font-medium">Password</label>
          <input
            type="text"
            v-model="user.password"
            required
            placeholder="Password..."
            class="w-[100%] border-b-2 px-4 py-2 outline-none focus:border-b-black focus:border-b-2"
          />
          <button
            @click="saveUser"
            class="bg-gradient-to-b from-black via-gray-600 to-gray-400 mt-6 rounded-full text-white py-2 px-8 hover:bg-none hover:bg-white hover:text-black font-bold tracking-widest transition-all duration-300 ease"
          >
            SUBMIT
          </button>
        </div>
      </div>
      <div v-else class="w-[50%] bg-[#0acf1b] flex flex-col justify-center items-center text-center">
        <h1 class="text-white font-bold text-4xl">Thanks for registering!</h1>
        <button class="mt-4 py-2 px-6 bg-white text-black rounded-full hover:bg-[lightgray] font-semibold"><router-link to="/">Go back to Home</router-link></button>
      </div>
      <figure class="w-[50%] h-[100%] overflow-hidden">
        <img
          src="../assets/RegisterPageImg.jpg"
          alt=""
          class="object-cover w-[100%] h-[100%]"
        />
      </figure>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import UserDataService from "../services/UserDataService";

let submitted = ref(false);
let user = {
  id: null,
  name: "",
  email: "",
  password: "",
  subscribed: false,
};

function saveUser() {
  var data = {
    name: user.name,
    email: user.email,
    password: user.password,
  };

  console.log(data);

  UserDataService.create(data)
    .then((response) => {
      user.id = response.data.id;
      console.log(response.data);
      submitted.value = true;
    })
    .catch((e) => {
      console.log(e);
    });
}
</script>

<style lang="scss" scoped></style>
