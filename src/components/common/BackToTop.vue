<template>
  <div>
    <!-- Your page content goes here -->

    <button
      @click="scrollToTop"
      class=" bg-green rounded-full h-10 w-10 flex items-center justify-center fixed end-[-15%] bottom-5 z-[100] transition-all ease-in-out duration-300 hover:scale-90"
      :class="showButton && ' !end-5'"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="white"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
        />
      </svg>
    </button>
  </div>
</template>
<script setup>
import { ref } from "vue";

const showButton = ref(false);

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// Show back-to-top button when user scrolls down
window.addEventListener("scroll", () => {
  showButton.value = window.scrollY > 100;
});
</script>
