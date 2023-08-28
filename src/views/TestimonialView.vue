<script setup>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
</script>
<template>
    <section class="relative w-full overflow-hidden">
        <div class=" container mx-auto px-[1rem] md:px-[2rem] xl:px-[3.125rem] flex flex-col md:flex-row justify-center items-center md:justify-start md:items-start mt-[2rem] md:mt-[3.5rem] xl:mt-[5rem] ">
            <div class="flex justify-center items-center xl:ml-[0] 2xl:ml-[7.5125rem] w-full ">
                <img src="../assets/images/testimonial.png" alt="" class="h-auto md:h-auto lg:h-[19.6875rem] xl:h-auto">
            </div>
            <div class="w-full xl:mr-[1.5rem] 2xl:mr-[9.6875rem]">
                <h3 class="text-[#FFCB45] font-readex text-[1rem] md:text-[1.1rem] xl:text-[1.375rem] font-light md:font-normal xl:font-medium leading-none mt-[0.4375rem] xl:mt-[2rem]">
                    What they say
                </h3>
                <h2 class="text-[#1D1D1D] font-readex text-[1.4rem] md:text-[1.5rem] xl:text-[2rem] font-medium md:font-semibold xl:font-bold leading-[1.5rem] md:leading-[1.7rem] xl:leading-[2.5rem] mt-[0.2rem] md:mt-[0.4] xl:mt-[0.5625rem] ">
                    What Our Customers Say <br> About Us
                </h2>
                <div class="static h-[11rem] md:h-[10rem] md:absolute xl:bottom-[100px] mb-[0.125rem]  w-full md:w-[50vw]  mt-[2rem] ">
                    <vueper-slides class="no-shadow widthofcarosel" :visible-slides="1.535" :breakpoints="{ 768: { visibleSlides: 1, } }" :arrows="false" :gap="3"
                        :dragging-distance="10">
                        <vueper-slide v-for="i in 5" :key="i">
                            <template #content>
                                <div class="w-full bg-[#F1F1F1] rounded-[0.625rem] px-[0.8rem] py-[1.2rem] xl:px-[1.25rem] xl:py-[1.8125rem] flex flex-col gap-3 xl:gap-[1.5rem] ">
                                    <div class="flex gap-4 xl:gap-[1.1875rem]">
                                        <div class="w-12 md:w-8 xl:w-auto">
                                            <img src="../assets/images/user-icon.png" alt="">
                                        </div>
                                        <div class="flex flex-col gap-2 xl:gap-[0.6875rem]">
                                            <h4 class="text-[#1D1D1D] font-readex text-[1.2rem] md:text-[1rem] xl:text-[1.25rem] font-light md:font-normal xl:font-medium leading-none">
                                                Naura Silvana
                                            </h4>
                                            <div class="flex gap-[0.125rem] xl:gap-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 20 20" fill="none" v-for="i in 4">
                                                    <path d="M19.2836 6.81802L13.3328 5.95317L10.6727 0.560202C10.6 0.412545 10.4805 0.293014 10.3328 0.220358C9.9625 0.0375452 9.5125 0.189889 9.32734 0.560202L6.66719 5.95317L0.716405 6.81802C0.552342 6.84145 0.402342 6.9188 0.287498 7.03599C0.148658 7.17869 0.0721514 7.37067 0.0747883 7.56976C0.0774251 7.76884 0.15899 7.95873 0.301561 8.09771L4.60703 12.2954L3.58984 18.2227C3.56599 18.3606 3.58125 18.5024 3.63389 18.6321C3.68653 18.7617 3.77444 18.874 3.88766 18.9562C4.00088 19.0385 4.13487 19.0873 4.27445 19.0973C4.41403 19.1072 4.5536 19.0779 4.67734 19.0126L10 16.2141L15.3227 19.0126C15.468 19.0899 15.6367 19.1157 15.7984 19.0876C16.2063 19.0172 16.4805 18.6305 16.4102 18.2227L15.393 12.2954L19.6984 8.09771C19.8156 7.98286 19.893 7.83286 19.9164 7.6688C19.9797 7.25864 19.6938 6.87895 19.2836 6.81802Z" fill="#FFCB45" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 24 25" fill="none">
                                                    <path d="M5.025 21.3173C4.99074 21.4639 4.99012 21.6165 5.02319 21.7634C5.05627 21.9104 5.12218 22.0479 5.21598 22.1658C5.30978 22.2836 5.42904 22.3787 5.56482 22.4439C5.7006 22.5091 5.84937 22.5427 6 22.5423C6.19753 22.5423 6.39065 22.4838 6.555 22.3743L12 18.7443L17.445 22.3743C17.6153 22.4873 17.8162 22.5456 18.0206 22.5411C18.225 22.5366 18.4232 22.4696 18.5884 22.3492C18.7536 22.2287 18.878 22.0606 18.9448 21.8673C19.0116 21.6741 19.0176 21.465 18.962 21.2683L17.133 14.8683L21.669 10.7863C21.8143 10.6554 21.918 10.4849 21.9674 10.2958C22.0168 10.1066 22.0097 9.90713 21.9469 9.72199C21.8841 9.53685 21.7684 9.37417 21.6142 9.25408C21.4599 9.13398 21.2739 9.06172 21.079 9.04625L15.378 8.59225L12.911 3.13125C12.8324 2.95536 12.7046 2.80597 12.543 2.70111C12.3814 2.59624 12.193 2.54039 12.0003 2.54028C11.8077 2.54018 11.6191 2.59583 11.4574 2.70051C11.2957 2.8052 11.1678 2.95445 11.089 3.13025L8.622 8.59225L2.921 9.04525C2.72945 9.06043 2.54633 9.13046 2.39355 9.24698C2.24077 9.3635 2.12479 9.52157 2.05949 9.70228C1.99419 9.88299 1.98233 10.0787 2.02534 10.266C2.06835 10.4532 2.1644 10.6241 2.302 10.7583L6.516 14.8653L5.025 21.3173ZM12 5.97125L14.042 10.4923L14.63 10.5393H14.631L18.603 10.8543L15.332 13.7983L15.331 13.8003L14.868 14.2163L15.039 14.8133V14.8163L16.292 19.2013L12 16.3403V5.97125Z" fill="#FFCB45" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <p class="text-[#1D1D1Db2] text-left font-readex text-[0.85rem] xl:text-[1.125rem] font-extralight md:font-light xl:font-normal leading-4 xl:leading-tight">
                                            “Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.”
                                        </p>
                                    </div>
                                </div>
                            </template>
                        </vueper-slide>
                    </vueper-slides>
                </div>
            </div>
        </div>
    </section>
</template>

<style >
/* .widthof{

    width: 100rem;
} */
.widthofcarosel {

    width: 100%;
}

.vueperslides__inner {
    position: relative;
    width: 100%;
    height: 9.125rem;
}

@media (min-width: 768px) {
    .vueperslides__inner {
        height: 9.525rem;
    }
}

@media (min-width: 1280px) {
    .vueperslides__inner {
        height: 13.125rem;
    }
}

.vueperslides__parallax-wrapper {
    height: 161px;
}

/* @media (min-width: 768px) {
    .vueperslides__parallax-wrapper {
        height: auto;
    }
} */


.vueperslides__bullet .default {
    background-color: #FFF9EA;
    border: none;
    box-shadow: none;
    transition: 0.3s;
    width: 6px;
    height: 6px;
}

@media (min-width: 768px) {
    .vueperslides__bullet .default {
        width: 7px;
        height: 7px;
    }
}

@media (min-width: 1280px) {
    .vueperslides__bullet .default {
        width: 8px;
        height: 8px;
    }
}

.vueperslides__bullets {
    bottom: -34px;
    height: 15px;
}

.vueperslides__bullet {
    margin: 2px;
}



@media (min-width: 768px) {
    .vueperslides__bullet {
    margin: 4px;
}
}

@media (min-width: 768px) {
    .vueperslides__bullets {
        bottom: -10px;
    }
}

/* @media (min-width: 852px) {
    .vueperslides__bullets {
        bottom: -20px;
    }
} */

/* @media (min-width: 1024px) {
    .vueperslides__bullets {
        bottom: -80px;
    }
} */

@media (min-width: 1280px) {
    .vueperslides__bullets {
        top: 0;
    }

    .vueperslides__bullet {
        margin: 1.5em 0.6em;
    }
}

.vueperslides__bullet--active .default {
    background-color: #FFCB45;
}

.vueperslides__bullet span {
    display: block;
    color: #fff;
    font-size: 10px;
    opacity: 0.8;
}
</style>
