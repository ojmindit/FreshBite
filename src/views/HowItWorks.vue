<template>
  <section class="w-full">
    <div id="howitworks" class="container mx-auto px-[1rem] md:px-[2rem] xl:px-[3.125rem] pt-[2rem] md:pt-[3.5rem] xl:pt-[5rem]">
      <div class="flex flex-col justify-center items-center text-center ">
        <h2 class="text-[#FFCB45] font-readex text-[1rem] md:text-[1.1rem] xl:text-[1.375rem] font-light md:font-normal xl:font-medium leading-none">How it works</h2>
        <h1 class="text-[#1D1D1D] font-readex text-[1.5rem] md:text-[1.5rem] xl:text-[2rem] font-medium md:font-semibold xl:font-bold leading-[1.5rem] md:leading-[1.7rem] xl:leading-[2.5rem] mt-[0.2rem] md:mt-[0.3375rem] xl:mt-[0.4375rem]">What We Serve</h1>
        <p class="w-full px-[1rem] xl:px-0 md:w-[30rem] xl:w-[38.1875rem] text-[#1D1D1DB2] font-readex text-[0.8rem] md:text-[1rem] xl:text-[1.375rem] font-light md:font-normal xl:font-medium leading-snug xl:leading-normal mt-[0.8rem] md:mt-[1rem] xl:mt-[1.625rem]">
          Product Quality Is Our Priority, And Always Guarantees Halal And Safety Until It Is In Your Hands.
        </p>
        <div class="flex flex-col md:flex-row justify-center mt-[2rem] gap-[1rem] md:gap-[5rem] xl:gap-[9.8125rem] ">
          <div class="w-full md:w-[10rem] xl:w-[15.0625rem] flex flex-col items-center px-[1rem]" v-for="(details, index) in info" :key="index">
            <div class="w-[6.5rem] h-[6.5rem] md:w-[9.25rem] md:h-[9.25rem] xl:w-[11.25rem] xl:h-[11.25rem]">
              <img :src="details.image" :alt="details.alt">
            </div>
            <h3 class="text-[#1D1D1D] font-readex text-[0.8rem] md:text-[1.5rem] xl:text-[1.65rem] font-normal md:font-medium xl:font-semibold leading-4 md:leading-snug xl:leading-normal mt-[0.7rem] md:mt-[1rem] xl:mt-[1.5rem]">{{ details.name }}</h3>
            <p class="text-[#1D1D1DB2] font-readex text-[0.7rem] md:text-[1rem] xl:text-[1.25rem] font-light md:font-normal xl:font-medium leading-4 md:leading-5 xl:leading-normal mt-[0.3rem] md:mt-[0.6rem] xl:mt-[0.9375rem]">{{ details.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const info = ref([
  {
    image: "/src/assets/images/hiw-order.svg",
    name: "Easy To Order",
    title: "You only order through the app",
    alt: "a phone image showing its easy to order",
  },
  {
    image: "/src/assets/images/hiw-delivery.svg",
    name: "Fastest Delivery",
    title: "Delivery will be on time",
    alt: "a delivery boy image riding on scooter delivering his order fast ",
  },
  {
    image: "/src/assets/images/hiw-courier.svg",
    name: "Best Quality",
    title: "You only order through the app",
    alt: "a smile face guy giving quatlity product",
  },

]);
</script>

<style scoped></style>
