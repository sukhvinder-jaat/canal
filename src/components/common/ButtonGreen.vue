<template>
  <button
    class="bg-green px-[25px] py-[17px] text-white font-normal md:text-lg text-base tracking-[02px] leading-[normal] text-nowrap transition-all ease-in-out duration-300 hover:bg-transparent border border-transparent hover:border-green hover:text-green"
  >
    {{ buttonText }}
  </button>
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String,
    },
  },
};
</script>
