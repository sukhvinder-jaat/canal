<template>
  <button
    class="bg-green px-[25px] py-[17px] text-white font-normal md:text-lg text-base tracking-[02px] leading-[normal] text-nowrap"
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
