<template>
  <section id="ourmenu" class="w-full">
    <div class="container mx-auto px-[1rem] md:px-[2rem] xl:px-[3.125rem] pt-[3rem] md:pt-[4rem] xl:pt-[5rem] ">
      <div class="flex flex-col justify-center items-center text-center ">
        <h2 class="text-[#FFCB45] font-readex text-[1rem] md:text-[1.1rem] xl:text-[1.375rem] font-light md:font-normal xl:font-medium  leading-none xl:leading-normal">Our menu</h2>
        <h1 class="text-[#1D1D1D] font-readex text-[1.5rem] md:text-[1.5rem] xl:text-[2rem] font-medium md:font-semibold xl:font-bold leading-[1.5rem] md:leading-[1.7rem] xl:leading-[2.5rem] mt-[0.2rem] md:mt-[0.3375rem] xl:mt-[0.4375rem]">Our Popular Menu</h1>
        <p class="xl:w-[32.375rem] text-[#1D1D1DB2] font-readex text-[0.8rem] md:text-[1rem] xl:text-[1.375rem] font-light md:font-normal xl:font-medium leading-snug xl:leading-normal mt-[0.8rem] md:mt-[1rem] xl:mt-[1.625rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
        </p>
        <div class="relative flex justify-center items-center mt-[1rem] md:mt-[1.5rem] xl:mt-[2rem] ">
          <Carousel v-bind="settings" :breakpoints="breakpoints" :wrapAround="false" :snapAlign="start" :transition="500" class="w-[17.5rem] sm:w-[37.5rem] md:w-[43.5rem] lg:w-[59.5rem] xl:w-[73.5rem] 2xl:w-[89.5rem] ">
            <Slide v-for="(cat, index) in fetchedProducts.filter((f) => f.id < 16) " :key="index">
              <div class="my-3">
                <div id="shadow" class="md:w-[10.5rem] xl:w-[17.5rem] flex flex-col justify-center items-center bg-[#F1F1F1] rounded-[0.625rem] hover:cursor-pointer" @dblclick="isLikedFunction(cat.id)">
                  <div class=" mt-[0.8125rem] ">
                    <img :src="cat.image" :alt="cat.title" class="object-contain mix-blend-multiply h-[15rem] md:h-[10rem] xl:h-[14.375rem] w-[15rem] md:w-40 xl:w-96">
                  </div>
                  <div class="mt-[5rem] md:mt-[1rem] relative flex justify-end items-end w-full h-[2rem] md:h-[4rem] xl:h-[7rem] ">
                    <div class="w-full z-10 ">
                      <h3 class="text-[#1D1D1D] font-readex text-[1.25rem] md:text-[0.8rem] xl:text-[1.25rem] font-medium  leading-none ">{{ cat.category }}</h3>
                      <p class="text-[#1D1D1DB2] font-readex text-[1.125rem] md:text-[0.7rem] xl:text-[1.125rem] font-normal leading-none md:leading-4 xl:leading-none mt-[0.3125rem] md:mt-0 xl:mt-[0.3125rem]">
                        {{ cat.title.slice(0, 10) }}
                      </p>
                      <div class="flex justify-between items-center my-[0.6125rem] mx-[1.375rem] md:my-[0.4125rem] md:mx-[0.8rem] xl:my-[0.8125rem] xl:mx-[1.375rem] ">
                        <span class="text-[#1D1D1D] font-readex text-[1.175rem] md:text-[1rem] xl:text-[1.375rem] font-medium md:font-normal xl:font-medium leading-none md:leading-4 xl:leading-none">
                          $ {{ cat.price }}
                        </span>
                        <div @click="isLikedFunction(cat.id)">
                          <svg xmlns="http://www.w3.org/2000/svg" class="w-[1.5rem] h-[1.5rem] md:w-[0.95rem] md:h-[0.95rem] xl:w-[1.5rem] xl:h-[1.5rem]" viewBox="0 0 24 24" fill="none">
                            <path d="M11.9646 6.12858C8.29143 0.454864 0.857147 3.54572 0.857147 9.72629C0.857147 14.3674 11.0491 21.6274 11.9646 22.5714C12.8863 21.6274 22.5714 14.3674 22.5714 9.72629C22.5714 3.59258 15.6446 0.454864 11.9646 6.12858Z"
                              :fill="[ cat.isActive ? '#FFCB45' : '#1D1D1DB2']" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div class="absolute md:bottom-0 xl:bottom-0 ">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-[15rem] h-[6rem] md:w-[10.5rem] md:h-[4.3125rem]  xl:w-[17.5rem] xl:h-[7rem]" viewBox="0 0 280 112" fill="none">
                        <path d="M0 27.3992C0 22.7355 3.19831 18.7028 7.75929 17.7296C29.9475 12.9954 94.9568 0 140 0C185.043 0 250.053 12.9954 272.241 17.7296C276.802 18.7028 280 22.7355 280 27.3992V102C280 107.523 275.523 112 270 112H10C4.47715 112 0 107.523 0 102V27.3992Z"
                          fill="white" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Slide>
          </Carousel>
        </div>
        <div class="flex justify-center items-center  xl:mt-[40.59px]">
          <div class="hover:outline hover:outline-[1px] hover:outline-black cursor-pointer w-[8.5rem] flex gap-[1rem] justify-center items-center bg-[#FFCB45] rounded-[3.125rem] px-[1.5rem] py-[0.55rem] mt-[1.875rem]">
            <span class=" text-[#1d1d1d] font-readex text-[0.875rem] font-bold leading-normal">More Menu</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref, } from 'vue';
import axios from "axios";
import { Carousel, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const fetchedProducts = ref([])

const isLikedFunction = (getId) => {
  fetchedProducts.value.filter((x) =>{
      getId === x.id ? x.isActive = !x.isActive : x.isActive;
  })
  console.log("asdsd",fetchedProducts.value )
}

const getProducts = async () => {
  const fetchingProducts = await axios.get(`/`)
  fetchedProducts.value = fetchingProducts.data.map((x) => ({ ...x, isActive: false }))
  console.log(fetchedProducts.value);
}

onMounted(() => {
  getProducts()
})

    // carousel settings
    const settings= {
      itemsToShow: 1,
      snapAlign: 'center',
    }
    // breakpoints are mobile first
    const breakpoints = {
      320:{
        itemsToShow: 1,
      },
      640:{
        itemsToShow: 2,

      },
      768: {
        itemsToShow: 3,
        
      },
      1024: {
        itemsToShow: 4,
        
      },
      1280: {
        itemsToShow: 3,
        
      },
      1535:{
        itemsToShow: 4,

      },
    }

</script>

<style scoped>
#shadow {
  box-shadow: 0px 4px 12px 0px rgba(29, 29, 29, 0.15);
}
* {
  -webkit-tap-highlight-color: transparent;
}

</style>
