<template>
    <div id="ourhome" class="bg-[#FFF]">
        <section class="relative pt-[1rem] pb-[2rem] xl:py-[6.25rem] w-full bg-[#FFF9EA] flex flex-col items-center">
            <div class="relative  container">
                <div class="relative flex flex-col-reverse md:flex-row pt-[0.75rem] justify-between md:gap-[8.25rem] xl:gap-0 items-center px-[1rem] md:px-[2rem] xl:px-[3.125rem]">
                    <div class="xl:w-[30rem] 2xl:w-[40rem] pt-[2rem] md:pt-0">
                        <h1 class="text-[#1D1D1D] font-readex text-[2rem] md:text-[1.5rem] lg:text-[2.5rem] xl:text-[3rem] 2xl:text-[4rem] font-semibold leading-normal">
                            Be The Fastest In Delivery Your <span class="text-[#FFCB45]">Food</span>
                        </h1>
                        <p class="mt-[1.3125rem] xl:w-[23.125rem] 2xl:w-[32rem] text-[#1D1D1DB2] font-readex text-[1rem] md:text-[0.9rem] lg:text-[1rem] xl:text-[1.125rem] 2xl:text-[1.6rem] font-normal leading-normal">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet
                        </p>
                        <div class="hover:outline hover:outline-[1px] hover:outline-black cursor-pointer mt-[1.4375rem] w-[8rem] 2xl:w-[9rem] xl:w-[7.625rem] flex gap-[0.6rem] md:gap-[0.6rem] lg:gap-[0.8rem] xl:gap-[1rem] justify-center items-center bg-[#FFCB45] rounded-[3.125rem] px-[0.2rem] py-[0.5rem] xl:px-[0.3125rem] xl:py-[0.75rem]">
                            <div>
                                <img src="../assets/images/header/sign-in-line-icon.svg" alt="arrow showing to get started">
                            </div>
                            <button class="text-[#1d1d1d] font-readex text-[0.875rem] font-medium xl:font-bold leading-none">
                                Get Started
                            </button>
                        </div>
                    </div>
                    
                    <div class="w-[13.5rem] md:w-auto">
                        <img src="../assets/images/header/home-dishes.svg" alt="food dishes">
                    </div>
                </div>
                <span class="absolute hidden xl:block top-[3.25rem] right-[31.5rem]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none">
                        <circle cx="27" cy="27" r="27" fill="#FFAC4B" />
                    </svg>
                </span>
                <span class="absolute hidden xl:block top-[15.5rem] right-[30.5rem]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                        <circle cx="9.5" cy="9.5" r="9.5" fill="#FFAC4B" />
                    </svg>
                </span>
                <span class="absolute hidden xl:block bottom-[6.5rem] right-[36.5rem]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
                        <circle cx="20.5" cy="20.5" r="20.5" fill="#FFAC4B" />
                    </svg>
                </span>
                <span class="absolute hidden xl:block top-[15.5rem] right-[3.5rem]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="74" height="74" viewBox="0 0 74 74" fill="none">
                        <circle cx="37" cy="37" r="37" fill="#FFAC4B" />
                    </svg>
                </span>
            </div>
            <span class="absolute hidden xl:block left-0 bottom-[3rem]">
                <span v-for="y in 2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="179" height="37" viewBox="0 0 179 37" fill="none">
                        <path d="M0 0.114317C0 0.114317 22.062 17.4303 36.9364 18.9664C59.1594 21.2613 70.9046 -0.782257 93.1999 0.114317C111.874 0.865263 121.363 25.1442 140.015 23.841C154.597 22.8222 171.797 -1.87819 176.092 0.114317C180.387 2.10683 179.528 8.35203 176.092 16.9446C172.656 25.5372 154.319 36.4377 140.015 36.9826C121.521 37.687 111.703 16.8149 93.1999 16.9446C70.7762 17.1018 59.2967 36.1188 36.9364 34.1298C22.0601 32.8065 0 18.9664 0 18.9664V0.114317Z"
                        fill="#FFAC4B" />
                    </svg>
                </span>
            </span >
        </section>

        <HowItWorks />
        <MenuView />
        <TestimonialView />

        <section class=" w-full mt-[2rem] md:mt-[3.5rem] xl:mt-[5rem]">
            <div class="relative container mx-auto h-[11rem] md:h-[15rem] xl:h-auto px-[1rem] md:px-[2rem] xl:px-[3.125rem] flex justify-center bg-cover bg-repeat ">
                <img src="../assets/images/discount.png" class="w-full object-cover rounded-[0.625rem]" alt="background photo of food dishes">
                <div class="absolute top-[30%] w-[14rem] md:w-[15rem] lg:w-[17rem] xl:w-[32.75rem] flex flex-col text-center justify-center items-center">
                    <h2 class="text-[#ffffff] font-readex text-[1rem] md:text-[1.3rem] xl:text-[2rem] font-bold leading-normal">
                        Join our member and get discount up to 50%
                    </h2>
                    <div class="hover:outline hover:outline-[3px] hover:outline-white cursor-pointer xl:w-[8.7rem] flex  gap-[0.7rem] xl:gap-[1rem] justify-center items-center bg-[#FFCB45] rounded-[3.125rem] px-[0.7rem] md:px-[1rem] xl:px-[1.5rem] py-[0.33rem] md:py-[0.44rem] xl:py-[0.55rem] mt-[0.5rem] md:mt-[1rem] xl:mt-[1.875rem]">
                        <div class="xl:w-auto">
                            <img src="../assets/images/header/sign-in-line-icon.svg" alt="arrow to sign up" class="object-cover">
                        </div>
                        <span class=" text-[#1d1d1d] font-readex text-[0.7rem] md:text-[0.76rem] xl:text-[1rem] font-extrabold leading-normal">Sign up</span>
                    </div>
                </div>
            </div>
        </section>

        <FooterComponet />

        <!-- <div>
            <RouterView />
        </div> -->
    </div>
</template>
<script setup>
// import { RouterView } from 'vue-router'
// import HeaderComponet from '../components/HeaderComponet.vue';
import FooterComponet from '../components/FooterComponent.vue';
import HowItWorks from '../views/HowItWorks.vue';
import TestimonialView from './TestimonialView.vue';
import MenuView from './MenuView.vue';

</script>
