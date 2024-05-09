<script setup>
import Email from "./icons/Email.vue";
import ButtonGreen from "./common/ButtonGreen.vue";
import NavBar from "./NavBar.vue";
</script>
<template>
  <div class="flex flex-col min-h-screen relative overflow-hidden">
    <img
      src="/src/assets/images/hero/yellow-layer.webp"
      class="max-w-[600px] max-h-[600px] absolute start-[20%] top-0 pointer-events-none"
      alt="yellow"
    />
    <img
      src="/src/assets/images/hero/green-layer.webp"
      class="max-w-[600px] max-h-[600px] absolute start-0 top-0 pointer-events-none"
      alt="yellow"
    />
    <NavBar />
    <div
      class="max-w-[1330px] mx-auto 2xl:px-0 px-3 flex-grow-[1] flex py-10 relative z-10"
    >
      <div class="flex items-center flex-wrap lg:flex-row flex-col-reverse">
        <div class="lg:w-6/12 w-full lg:text-start text-center">
          <p
            class="font-Urbanist font-bold xl:text-6xl lg:text-5xl text-4xl text-lightBlack leading-[140%] md:mb-[30px] mb-6"
          >
            The Route to Upward Financial Mobility is Open
          </p>
          <p
            class="font-bold md:text-2xl text-xl text-greyScale max-w-[530px] md:mb-[50px] mb-7 lg:mx-0 mx-auto"
          >
            Turn fees of check cashing and remittances into increased saving and
            spending.
          </p>
          <p class="font-bold md:text-2xl text-xl text-green mb-[15px]">
            Join the Waitlist
          </p>
          <form
            class="flex items-center gap-[15px] lg:justify-start justify-center"
          >
            <div
              class="bg-softPeach flex items-center ps-5 border border-lavenderPeach xl:min-w-[391px]"
            >
              <Email />
              <input
                required
                type="email"
                class="bg-softPeach py-[17px] px-[10px] w-full placeholder:text-greyScale text-greyScale font-normal md:text-lg text-base focus-visible:outline-none leading-[normal]"
                placeholder="Enter Your Email Address"
              />
            </div>
            <ButtonGreen buttonText="Join Now" />
          </form>
        </div>
        <div
          class="lg:w-6/12 sm:w-8/12 w-full flex lg:justify-end justify-center lg:ps-5 lg:mb-0 mb-5"
        >
          <img
            src="/src/assets/images/hero/mobile.webp"
            class="max-w-[546px] max-h-[657px] w-full h-full"
            alt="mobile"
          />
        </div>
      </div>
    </div>
  </div>
</template>
