<template>
  <header class="w-full top-0 left-0 z-[100] bg-[#FFF9EA]">
    <nav class="container mx-auto px-[1rem] md:px-[2rem] pt-[1rem] xl:px-[3.4375rem] xl:py-[1.875rem] flex flex-row justify-between items-center">
      <div class="flex cursor-pointer">
        <div class="flex items-end">
          <h1 class="font-readex text-[#1d1d1d] text-[1.5rem] md:text-[1.15rem] xl:text-[1.5rem] font-semibold leading-normal">
            Fresh Bite
          </h1>
        </div>
        <div class="w-auto md:w-[2.5rem] xl:w-auto">
          <img src="../assets/images/header/mainIcon.svg" alt="Freshbite Logo" />
        </div>
      </div>
      <div class="flex flex-col items-center text-white md:hidden" @click="showMenu">
        <span v-for="i in 3" class="sm:h-1 h-[3px] w-6 bg-[black] rounded-md my-[2px]"></span>
      </div>
      <Transition>
        <div class="absolute z-10 bg-black bg-opacity-100 h-screen top-0 left-0 w-full md:w-auto flex flex-col justify-center items-center gap-5 md:bg-none md:bg-opacity-0 md:h-[3.5rem] md:static md:flex md:flex-row md:items-center md:gap-4 lg:gap-[3.125rem] transform origin-left duration-500"
          v-show="showNav">
          <div class="bg-white absolute flex justify-center items-center right-[3%] top-[3%] w-[30px] h-[30px] rounded-lg capitalize font-Montserrat font-semibold text-center md:hidden"
            @click="hideMenu">X</div>
          <div class="flex justify-center items-center flex-col md:flex-row gap-6 xl:gap-[4.625rem]">
            <div class="w-[100vw] md:w-auto xl:w-[35.3125rem] text-[white] md:text-[#1D1D1DB2] font-readex text-[1rem] md:text-[0.8rem] lg:text-[1rem] xl:text-[1.375rem] font-medium leading-none xl:leading-normal flex flex-col md:flex-row gap-4 md:gap-3 lg:gap-[1.875rem] items-center justify-between">
              <p v-for="(navName, index) in info" :key="index" @click="callFunction(navName.href)"
                class="border-b-[0.0625rem] border-b-[#ffffff8e] md:border-b-0 w-full md:w-auto pb-[0.625rem] text-center md:hover:text-[#1D1D1D] hover:underline-offset-[0.375rem] hover:underline hover:decoration-[#FFCB45] hover:decoration-4 cursor-pointer">
                {{ navName.name }}
              </p>
            </div>
            <div class="flex gap-[2.03rem] justify-center items-center">
              <div class="w-[1rem] h-[1rem] xl:w-[1.5rem] xl:h-[1.5rem] cursor-pointer md:block hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none"
                  class="fill-none hover:fill-[#ffcb45] hover:animate-[wiggle_1s_ease-in-out_infinite]">
                  <path d="M25 25L19.3335 19.3234L25 25ZM22.4737 11.7368C22.4737 14.5844 21.3425 17.3154 19.3289 19.3289C17.3154 21.3425 14.5844 22.4737 11.7368 22.4737C8.88925 22.4737 6.1583 21.3425 4.14475 19.3289C2.1312 17.3154 1 14.5844 1 11.7368C1 8.88925 2.1312 6.1583 4.14475 4.14475C6.1583 2.1312 8.88925 1 11.7368 1C14.5844 1 17.3154 2.1312 19.3289 4.14475C21.3425 6.1583 22.4737 8.88925 22.4737 11.7368V11.7368Z"
                    stroke="#1D1D1D" stroke-width="2" stroke-linecap="round" />
                </svg>
              </div>
              <div class="w-[1rem] h-[1rem] xl:w-[1.5rem] xl:h-[1.5rem] cursor-pointer md:block hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M1.92001 0.232788C1.5381 0.232788 1.17183 0.379953 0.901777 0.641909C0.631725 0.903864 0.480011 1.25915 0.480011 1.62961C0.480011 2.00007 0.631725 2.35536 0.901777 2.61732C1.17183 2.87927 1.5381 3.02644 1.92001 3.02644H3.67681L4.11601 4.73336C4.12037 4.75301 4.12517 4.77257 4.13041 4.79203L6.08593 12.3768L4.80001 13.6228C2.98561 15.3828 4.27009 18.3915 6.83617 18.3915H19.2C19.5819 18.3915 19.9482 18.2444 20.2182 17.9824C20.4883 17.7204 20.64 17.3652 20.64 16.9947C20.64 16.6242 20.4883 16.2689 20.2182 16.007C19.9482 15.745 19.5819 15.5979 19.2 15.5979H6.83617L8.27617 14.201H17.76C18.0274 14.2009 18.2894 14.1286 18.5168 13.9921C18.7441 13.8557 18.9279 13.6606 19.0474 13.4286L23.3674 5.04765C23.477 4.83474 23.5288 4.59818 23.5178 4.36042C23.5067 4.12265 23.4333 3.89156 23.3043 3.68909C23.1753 3.48661 22.9952 3.31945 22.7809 3.20348C22.5666 3.08751 22.3254 3.02657 22.08 3.02644H6.64321L6.19681 1.29018C6.1188 0.988126 5.93898 0.720013 5.68591 0.528434C5.43284 0.336855 5.12103 0.232796 4.80001 0.232788H1.92001Z"
                    fill="#1D1D1D" class="fill-[#1D1D1D]  hover:fill-[#ffcb45]" />
                  <path
                    d="M20.64 21.8836C20.64 22.4393 20.4124 22.9722 20.0074 23.3651C19.6023 23.7581 19.0529 23.9788 18.48 23.9788C17.9071 23.9788 17.3577 23.7581 16.9527 23.3651C16.5476 22.9722 16.32 22.4393 16.32 21.8836C16.32 21.3279 16.5476 20.7949 16.9527 20.402C17.3577 20.0091 17.9071 19.7883 18.48 19.7883C19.0529 19.7883 19.6023 20.0091 20.0074 20.402C20.4124 20.7949 20.64 21.3279 20.64 21.8836Z"
                    fill="#1D1D1D" />
                  <path
                    d="M6.96002 23.9788C7.53289 23.9788 8.08229 23.7581 8.48737 23.3651C8.89245 22.9722 9.12002 22.4393 9.12002 21.8836C9.12002 21.3279 8.89245 20.7949 8.48737 20.402C8.08229 20.0091 7.53289 19.7883 6.96002 19.7883C6.38715 19.7883 5.83775 20.0091 5.43267 20.402C5.02759 20.7949 4.80002 21.3279 4.80002 21.8836C4.80002 22.4393 5.02759 22.9722 5.43267 23.3651C5.83775 23.7581 6.38715 23.9788 6.96002 23.9788Z"
                    fill="#1D1D1D" />
                </svg>
              </div>
              <div class="hover:outline hover:outline-[1px] hover:outline-black flex gap-[1rem] justify-center items-center bg-[#FFCB45] rounded-[3.125rem] px-[1rem] xl:px-[1.5rem] py-[0.5rem] xl:py-[0.75rem] cursor-pointer">
                <div>
                  <img src="../assets/images/header/sign-in-line-icon.svg" alt="arrow showing to signin" />
                </div>
                <button class="text-[#1d1d1d] font-readex text-[0.625rem] xl:text-[0.875rem] font-bold leading-normal">
                  Sign in
                </button>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </nav>
  </header>
</template>

<script setup>
import { ref, watch, } from 'vue';

const callFunction = (targetId) => {
  const element = document.getElementById(targetId);
  element.scrollIntoView({ behavior: "smooth" });
  hideMenu();
}

const info = ref([
  {
    name: "Home",
    href: "ourhome",
  },
  {
    name: "Menu",
    href: "ourmenu",
  },
  {
    name: "How it Works",
    href: "howitworks",
  },
  {
    name: "About",
    href: "",
  },
  {
    name: "Contact",
    href: "",
  },
]);

const showNav = ref(true);
const windowWidth = ref(window.innerWidth);

function showMenu() {
  if (windowWidth.value < 768) {
    showNav.value = true;
    document.body.style.overflow = "hidden";
  }
}
function hideMenu() {
  if (windowWidth.value < 768) {
    showNav.value = false;
    document.body.style.overflow = "auto";
  }
  console.log("helo");
}



watch(windowWidth, (newWidth) => {
  if (newWidth > 768) {
    showNav.value = true;
  }
  else if (newWidth < 768) {
    showNav.value = false;
    document.body.style.overflow = "auto";
  }
});
// Listen for window resize events
window.addEventListener("resize", () => {
  windowWidth.value = window.innerWidth;
});
</script>

<style scoped>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}</style>