<script setup>
import FooterLogo from "./icons/FooterLogo.vue";
import FaceBook from "./icons/FaceBook.vue";
import instagram from "./icons/Instagram.vue";
import linkedIn from "./icons/linkedIn.vue";
import ButtonGreen from "./common/ButtonGreen.vue";
import Tweeter from "./icons/Tweeter.vue";
const footerSocial = [
  { icon: FaceBook, path: "https://www.facebook.com/" },
  { icon: Tweeter, path: "https://twitter.com/" },
  { icon: instagram, path: "https://www.instagram.com/" },
  { icon: linkedIn, path: "https://www.linkedin.com/" },
];
const footerLink = [
  {
    title: "Links",
    links: [
      { link: "Home", path: "#" },
      { link: "About us", path: "#" },
      { link: "Bookings", path: "#" },
      { link: "Blog", path: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { link: "Terms of use", path: "#" },
      { link: "Privacy policy", path: "#" },
      { link: "Bookings", path: "#" },
    ],
  },
  {
    title: "Product",
    links: [
      { link: "Take tour", path: "#" },
      { link: "Live chat", path: "#" },
      { link: "Reveiws", path: "#" },
    ],
  },
];
</script>
<template>
  <div class="bg-black">
    <div class="max-w-[1320px] mx-auto 2xl:px-0 px-3 pt-[104px] pb-[91px]">
      <div class="flex flex-wrap">
        <div class="lg:w-3/12 md:w-5/12 w-full lg:mb-0 mb-5">
          <span class="max-w-[122px]"><FooterLogo /></span>
          <p
            class="text-xxl text-white font-semibold tracking-[-0.5%] mt-[50px] mb-5"
          >
            Follow Us
          </p>
          <div class="flex items-center gap-3">
            <a
              v-for="(links, index) in footerSocial"
              :key="index"
              :href="links.path"
              target="_blank"
              class="bg-green w-[44px] h-[44px] flex items-center justify-center transition-all ease-in-out duration-300 hover:bg-yellow rounded-full"
            >
              <component :is="links.icon"
            /></a>
          </div>
        </div>
        <div
          class="lg:w-[14%] md:w-2/12 w-4/12"
          v-for="(content, index) in footerLink"
          :key="index"
        >
          <ul class="flex flex-col gap-[23px]">
            <li
              class="font-bold md:text-2xl sm:text-xl text-lg text-white mb-[6px]"
            >
              {{ content.title }}
            </li>
            <li v-for="(option, i) in content.links" :key="i">
              <a
                class="font-normal lg:text-lg text-base text-white transition-all ease-in-out duration-300 hover:text-green"
                :href="option.path"
                >{{ option.link }}</a
              >
            </li>
          </ul>
        </div>
        <div class="lg:w-[31%] md:w-6/12 w-full lg:pt-0 pt-5">
          <p
            class="font-bold md:text-2xl sm:text-xl text-lg text-white mb-[10px]"
          >
            Subscribe to Our Newsletter
          </p>
          <p class="font-normal lg:text-lg text-base text-white mb-[36px]">
            Stay up to date
          </p>
          <div class="bg-white max-w-[419px] flex items-center w-full pe-[5px]">
            <input
              required
              type="email"
              class="bg-softPeach py-[22px] pe-[10px] ps-[30px] w-full placeholder:text-greyScale text-greyScale font-normal md:text-lg text-base focus-visible:outline-none leading-[normal]"
              placeholder="Your email"
            />
            <ButtonGreen buttonText="Subscribe" />
          </div>
        </div>
      </div>
    </div>
    <div class="w-full h-[1px] bg-white"></div>
    <p class="py-5 font-normal lg:text-lg text-base text-white text-center">
      Copyright {{ new Date().getFullYear() }} uifry.com all rights reserved
    </p>
  </div>
</template>
