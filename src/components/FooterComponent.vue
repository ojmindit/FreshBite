<script setup>
const classForIcon = "rounded-[1.9375rem] bg-[#fff] hover:bg-[#FFCB45] w-[1.8125rem] h-[2rem] p-[0.525rem] xl:w-[2.8125rem] xl:h-[3rem] xl:p-[0.625rem] flex justify-center items-center"
</script>
<template>
    <section class="w-full">
        <div class="bg-[rgb(255,249,234)] pt-[1.6rem] md:pt-[3rem] xl:pt-[6.1875rem] mt-[2rem] md:mt-[3.5rem] xl:mt-[5rem]">
            <div class="container mx-auto px-[1rem] md:px-[2rem] xl:px-[3.125rem] ">
                <div class="flex flex-col-reverse md:flex-row gap-[1.25rem]">
                    <div class="flex flex-col  ">
                        <a href="#ourhome" class="flex cursor-pointer">
                            <div class="flex items-end">
                                <h1 class="font-readex text-[#1d1d1d] text-[0.8rem] md:text-[1rem] xl:text-[1.5rem] font-semibold leading-normal ">
                                    Fresh Bite
                                </h1>
                            </div>
                            <div class="w-[1.9rem] md:w-[2.5rem] xl:w-auto">
                                <img src="../assets/images/header/mainIcon.svg" alt="FreshBite Logo">
                            </div>
                        </a>
                        <a href="https://goo.gl/maps/FZfvRYHAVnVbEgdA6" target="_blank"
                            class="text-[#1D1D1DB2] font-readex hover:text-black text-[0.7rem] md:text-[0.9rem] lg:text-[1.25rem] font-normal leading-normal mt-[0.6rem] md:mt-[1rem] xl:mt-[1.5962rem] w-auto md:w-[17rem] xl:w-[23.75rem]">
                            Teen imli, Shani Mandir,<br> Palda, Indore MP 452001
                        </a>
                        <div class="mt-[0.8rem] md:mt-[1rem] xl:mt-[2rem] flex gap-[0.8rem] md:gap-[1rem] xl:gap-[1.5rem]">
                            <a id="shadow" href="https://www.instagram.com/mindinventory/" target="_blank" :class=classForIcon>
                                <img src="../assets/images/footer/insta.svg" alt="instagram logo">
                            </a>
                            <a id="shadow" href="https://www.facebook.com/Mindiventory/" target="_blank" :class=classForIcon>
                                <img src="../assets/images/footer/facebook.svg" alt="facebook logo" class="h-3 xl:h-auto">
                            </a>
                            <a id="shadow" href="https://www.twitter.com/mindinventory/" target="_blank" :class=classForIcon>
                                <img src="../assets/images/footer/x.svg" alt="twitter logo">
                            </a>
                        </div>
                    </div>
                    <div class="relative  flex flex-wrap md:flex-row justify-between w-full gap-6 md:gap-0 md:pr-[5rem] xl:pr-[7.4375rem]">
                        <div class="z-[20]  flex flex-col gap-[0.7rem] md:gap-[1rem] xl:gap-[1.9375rem]">
                            <h3 class=" text-[#1D1D1D] font-readex text-[1rem] md:text-[0.95rem] lg:text-[1.25rem] font-normal md:font-normal xl:font-medium leading-4 md:leading-5 xl:leading-normal">
                                Company
                            </h3>
                            <div class="flex flex-col  text-[#1D1D1DB2] font-readex text-[0.7rem] md:text-[0.8rem] lg:text-[1.125rem] font-normal md:font-normal xl:font-medium leading-4 md:leading-5 xl:leading-normal gap-[0.3rem] md:gap-[0.8rem] xl:gap-[1rem]">
                                <p class="cursor-pointer hover:text-black">About Us</p>
                                <p class="cursor-pointer hover:text-black">Career</p>
                                <a class="cursor-pointer hover:text-black" href="#howitworks">How It Work</a>
                            </div>
                        </div>
                        <div class="z-[20] w-[50%] min-[410px]:w-auto flex flex-col gap-[0.7rem] md:gap-[1rem] xl:gap-[1.9375rem]">
                            <h3 class=" text-[#1D1D1D] font-readex text-[1rem] md:text-[0.95rem] lg:text-[1.25rem] font-light md:font-normal xl:font-medium leading-4 md:leading-5 xl:leading-normal">
                                Policy
                            </h3>
                            <div class="flex flex-col text-[#1D1D1DB2] font-readex text-[0.7rem] md:text-[0.8rem] lg:text-[1.125rem] font-normal md:font-normal xl:font-medium leading-4 md:leading-5 xl:leading-normal gap-[0.3rem] md:gap-[0.8rem] xl:gap-[1rem]">
                                <p class="cursor-pointer hover:text-black">FAQ</p>
                                <p class="cursor-pointer hover:text-black">Privacy</p>
                                <p class="cursor-pointer hover:text-black">Shipping</p>
                            </div>
                        </div>
                        <div class="z-[20] flex flex-col gap-[0.7rem] md:gap-[1rem] xl:gap-[1.9375rem]">
                            <h3 class=" text-[#1D1D1D] font-readex text-[1rem] md:text-[0.95rem] lg:text-[1.25rem] font-light md:font-normal xl:font-medium leading-4 md:leading-5 xl:leading-normal">
                                Get In Touch
                            </h3>
                            <div class="flex flex-col text-[#1D1D1DB2] font-readex text-[0.7rem] md:text-[0.8rem] lg:text-[1.125rem] font-normal md:font-normal xl:font-medium leading-4 md:leading-5 xl:leading-normal gap-[0.3rem] md:gap-[0.8rem] xl:gap-[1rem]">
                                <a class="cursor-pointer hover:text-black" href="tel:+91 123 4567 8900" target="_blank">+91 123 4567 8900</a>
                                <a class="cursor-pointer hover:text-black" href="mailto:food@example.com" target="_blank">food@example.com</a>
                            </div>
                        </div>
                        <div class="hidden xl:block absolute z-[10] top-[-1.2rem] left-[-1.2rem]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="39" viewBox="0 0 38 39" fill="none">
                                <circle cx="19" cy="19.5422" r="19" fill="#FFAC4B" />
                            </svg>
                        </div>
                        <div class="hidden xl:block absolute z-[10] top-[7.2rem] left-[13.7rem] 2xl:left-[22.2rem]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="66" height="67" viewBox="0 0 66 67" fill="none">
                                <circle cx="33" cy="33.5422" r="33" fill="#FFAC4B" />
                            </svg>
                        </div>
                        <div class="hidden xl:block absolute z-[10] top-[-4.2rem] right-[6.2rem]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="99" height="100" viewBox="0 0 99 100" fill="none">
                                <circle cx="49.5" cy="50.0422" r="49.5" fill="#FFAC4B" />
                            </svg>
                        </div>
                    </div>
                </div>
                <hr class=" md:mt-[4.6rem] md:mb-[1.2rem] xl:mt-[5.6875rem] xl:mb-[2.8725rem] h-px my-4 bg-[#1D1D1D80] border-0">
                <p class="text-center text-[0.7rem] md:text-[0.95rem] xl:text-[1.1rem] pb-[1rem] md:pb-[1.2rem] xl:pb-[2.9375rem]">
                    &copy; {{ new Date().getFullYear() }} Fresh Bite. ALL RIGHT RESERVED.
                </p>
            </div>
        </div>
    </section>
</template>
<style scoped>
#shadow {
    box-shadow: 0px 4px 12px 0px rgba(29, 29, 29, 0.15);
}
</style>