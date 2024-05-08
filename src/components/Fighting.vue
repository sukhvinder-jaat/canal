<script setup>
import Cash from "./icons/Cash.vue";
import { fightingCurrent } from "./common/Helper.vue";
</script>
<template>
  <div class="bg-lightBlue lg:py-[163px] py-20">
    <div class="max-w-[1316px] mx-auto 2xl:px-0 px-3">
      <div class="flex items-center lg:flex-row flex-col-reverse flex-wrap">
        <div
          class="lg:w-6/12 lg:text-start text-center flex flex-col lg:items-start items-center w-full lg:pe-[49px]"
        >
          <p
            class="text-lightBlack font-bold xl:text-5xl md:text-[40px] text-4xl leading-[140%] max-w-[570px] mb-5"
          >
            Fighting the Current with your Finances?
          </p>
          <p
            class="font-normal lg:text-lg text-base tracking-[0.2px] text-lightBlack max-w-[580px] mb-[50px]"
          >
            You could be paying separate fees for each financial product you
            use.
          </p>
          <div class="flex flex-col md:gap-[30px] gap-5 lg:w-full">
            <div
              v-for="(content, index) in fightingCurrent"
              :key="index"
              class="shadow-[0px_10px_50px_0px_#00000012] md:py-[25px] py-5 sm:max-w-[600px] md:px-[30px] px-5 flex items-center justify-between"
            >
              <div class="flex items-center md:gap-5 gap-2">
                <span class="md:max-w-[51px] max-w-[30px]">
                  <component :is="content.icon"
                /></span>
                <p class="font-bold md:text-2xl sm:text-xl text-lg text-black">
                  {{ content.title }}
                </p>
              </div>
              <p class="font-bold md:text-2xl sm:text-xl text-lg text-darkPink md:PS-0 ps-1" >
                {{ content.fee }}
              </p>
            </div>
          </div>
        </div>
        <div class="lg:w-6/12 sm:w-10/12 w-full lg:ps-[49px]">
          <img
            src="../assets/images/fighting/girl.webp"
            alt="girl"
            class="max-w-[618px] w-full lg:mx-0 mx-auto"
          />
        </div>
      </div>
    </div>
  </div>
</template>
