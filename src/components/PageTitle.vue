<template>
  <header class="h-[100vh] relative">
    <img
      src="../assets/landingBG.jpg"
      alt=""
      class="object-cover w-[100%] h-[100%] brightness-50"
    />
    <div
      class="absolute top-[50%] left-[50%] text-white translate-x-[-50%] translate-y-[-50%] flex w-[60%] justify-center items-center"
    >
      <div class="flex flex-col">
        <h1 class="text-4xl font-extrabold mb-10">Start your journey now!</h1>
        <h2 class="text-2xl font-bold mb-5">
          Make a website for your business here, we have the best features and
          24/7 support everyday
        </h2>
        <h3 class="text-[20px] text">
          You can also ask us to make your SQL, noSQL Database; and even make a
          mobile app for you!
        </h3>
        <button
          class="mx-auto mt-2 px-8 py-2 rounded-full bg-[white] text-black hover:bg-[black] hover:text-white transition-all duration-200 ease-in"
        >
          <a @click="gotosection('pricing')">Go to Pricing</a>
        </button>
      </div>
      <figure>
        <img
          src="../assets/Pagetitle-img1.png"
          alt=""
          class="mx-10 brightness-90"
        />
      </figure>
    </div>
  </header>
</template>

<script setup>
const props = defineProps({
  gotosection: Function,
});

</script>

<style lang="scss" scoped></style>
