<script setup>
import Logo from "./icons/Logo.vue";
import { navOptions } from "./common/Helper.vue";
import Globe from "./icons/Globe.vue";
import GreenPlus from "./icons/GreenPlus.vue";
import { ref } from "vue";

const isOpen = ref(false);

const toggleSidebar = () => {
  isOpen.value = !isOpen.value;
  // Toggle body scrolling
  if (isOpen.value) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
};
</script>

<template>
  <div class="max-w-[1296px] mx-auto 2xl:px-0 px-3 pt-[30px] w-full">
    <div class="flex items-center justify-between">
      <span class="max-w-[129px] max-h-[50px] relative z-50">
        <!-- <Logo /> -->
        <img src="/src/assets/images/hero/logo.gif" alt="logo"
      /></span>
      <button
        @click="toggleSidebar"
        class="z-50 bg-green md:hidden text-white p-2 rounded-md"
      >
        <svg
          v-if="isOpen"
          class="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
        <svg
          v-else
          class="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>
      <div class="md:flex hidden items-center">
        <div class="flex items-center gap-[30px] md:me-[100px] me-5">
          <a
            v-for="(options, index) in navOptions"
            :key="index"
            :href="options.path"
            class="md:text-lg text-base font-semibold leading-[normal] tracking-[0.2px] text-lightBlack hover:text-green transition-all ease-in-out duration-300"
            >{{ options.link }}</a
          >
        </div>
        <a href="#" class="max-w-6 max-h-6 group me-[32px]"><Globe /></a>
        <button
          @click="toggleSidebar"
          class="flex items-center justify-center gap-[5px] border-[1.5px] border-green py-[13px] px-[18px] md:text-lg text-base font-semibold leading-[normal] tracking-[0.2px] text-green transition-all ease-in-out duration-300 hover:bg-green hover:text-white group"
        >
          <GreenPlus /> Join
        </button>
      </div>
    </div> 
    <!-- Sidebar toggle button -->

    <!-- Sidebar -->
    <div
      class="fixed top-0 transition-all w-full ease-in-out duration-300 left-[-100%] h-full bg-white overflow-y-auto z-40"
      :class="isOpen && '!left-0'"
    >
      <!-- Sidebar content -->
      <div class="flex ps-4 w-full flex-col h-screen pt-[100px]">
        <div
          class="flex flex-col items-start gap-5 h-full text-white text-xl font-semibold"
        >
          <a
            v-for="(options, index) in navOptions"
            :key="index"
            :href="options.path"
            @click="toggleSidebar"
            class="md:text-lg text-base font-semibold leading-[normal] tracking-[0.2px] text-lightBlack hover:text-green transition-all ease-in-out duration-300"
            >{{ options.link }}</a
          >
          <a href="#" class="max-w-6 max-h-6 group me-[32px]"><Globe /></a>
          <button
            @click="toggleSidebar"
            class="flex items-center justify-center gap-[5px] border-[1.5px] border-green py-[13px] px-[18px] md:text-lg text-base font-semibold leading-[normal] tracking-[0.2px] text-green transition-all ease-in-out duration-300 hover:bg-green hover:text-white group"
          >
            <GreenPlus /> Join
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
