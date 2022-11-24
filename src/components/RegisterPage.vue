<template>
  <div id="register" class="h-[100vh] bg-gradient-to-b from-black via-gray-600 to-gray-400">
    <div class="w-[80%] h-[80%] bg-[white] relative left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] rounded-[40px] flex overflow-hidden">
        <div v-if="!submitted" class="w-[50%] bg-[lightgray] flex  flex-col justify-center items-center">
            <h1>Register now to get the best discounts for your Page!</h1>
            <div class="flex flex-col">
                <label for="name" class="mt-4">Name</label>
                <input type="text" v-model="user.name" required>
                <label for="email" class="mt-4">Email</label>
                <input type="email" v-model="user.email" required>
                <label for="password" class="mt-4">Password</label>
                <input type="text" v-model="user.password" required>
                <button @click="saveUser" class="bg-gradient-to-b from-black via-gray-600 to-gray-400 mt-4 rounded-full text-white">SUBMIT</button>
            </div>
        </div>
        <div  v-else class="w-[50%]">
            Thanks for registering!
        </div>
        <figure class="w-[50%] h-[100%] overflow-hidden">
            <img src="../assets/RegisterPageImg.jpg" alt="" class="object-cover w-[100%] h-[100%]">
        </figure>
    </div>
  </div>
</template>

<script setup>
import UserDataService from "../services/UserDataService";

let submitted = false;
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
  
  console.log(data)

  UserDataService.create(data)
    .then((response) => {
      user.id = response.data.id;
      console.log(response.data);
      // user.submitted = true;
    })
    .catch((e) => {
      console.log(e);
    });
}

</script>

<style lang="scss" scoped></style>
