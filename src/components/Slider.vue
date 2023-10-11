<!-- <template>
        <div class=" h-screen bg-slate-600">
            <div class="px-3 py-16 h-full">
                <Carousel :itemsToShow="2.55" :autoplay="3000" :wrapAround="true" :breakpoints="breakpoints" :transition="500"
                    v-model="currentSlide">
                    <Slide v-for="(item, index) in carouselItems" :key="index">
    
                        <img :src="item.src" alt="" class="carousel__item">
                    </Slide>
                </Carousel>
            </div>

        </div>




</template>
  
<script>
import { defineComponent } from 'vue'
import { Carousel, Slide } from 'vue3-carousel'
import Navbar from '../components/Navbar.vue'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
    name: 'Gallery',
    components: {
        Carousel,
        Slide,
        Navbar
    },




    data() {
        return {
            movieTitle: "Carousel",
            breakpoints: {
                700: {
                    itemsToShow: 2.55,
                },
                1024: {
                    itemsToShow: 2.55,
                },
                1400: {
                    itemsToShow: 3.55,

                },
            },
            carouselItems: [
                { src: '/image/5gzzkR7y3hnY8AD1wXjCnVlHba5.jpg' },
                { src: '/image/8Im6DknDVxRiGXc5t8rVOJyzuNx.jpg' },
                { src: '/image/52YBwGJ3cJs54fpBzwnT1lnqgTo.jpg' },
                { src: '/image/b0Ej6fnXAP8fK75hlyi2jKqdhHz.jpg' },
                { src: '/image/h6Z2oogE4mJk2uffdtIlLhb0EHx.jpg' },
                { src: '/image/voHUmluYmKyleFkTu3lOXQG702u.jpg' },
            ],
            backdropImage: [
                { src: '/backdrop/53z2fXEKfnNg2uSOPss2unPBGX1.jpg' },
                { src: '/backdrop/mzlZAMjE2yk2sW3f9HTeBM3B3jw.jpg' },
                { src: '/backdrop/qjMDwBWbG5hAP43q3meplZFreFQ.jpg' },
                { src: '/backdrop/lNxR7SmtFxFUfA7n9qtzuaIYvoM.jpg' },
                { src: '/backdrop/dovlWfwsmdfEg8CJqCfA6MpN7ws.jpg' },
                { src: '/backdrop/Afp8OhiO0Ajb3NPoCBvfu2pqaeO.jpg' },


            ], logo: [
                { src: '/logo/k8RauXaOjYiO7UNTFpAWgkTV4tD.png' },
                { src: '/logo/th3ju1FzqfZV6ePXR6CM7P72LLS.png' },
                { src: '/logo/gO6Gouo9N2eoSwFJARI8HqYKaum.png' },
                { src: '/logo/pX0jtutyXGF5EzluOJ6F6zPvFM.png' },
                { src: '/logo/1JrVoNHy7VTJCKV60sDJGCcBL1H.png' },
                { src: '/logo/zzjG9U2fDOiHudgqUysbKW58hLp.png' },


            ],
            currentSlide: 0,
            backgroundImage: '/backdrop/53z2fXEKfnNg2uSOPss2unPBGX1.jpg', // Initialize with an empty string

        }
    },
    watch: {
        currentSlide(newSlide) {
            console.log(newSlide);
            // Update the background image when the current slide changes
            if (this.backdropImage[newSlide] && this.backdropImage[newSlide].src) {
                this.backgroundImage = this.backdropImage[newSlide].src;
                // this.logo = this.logo[newSlide].src;

                console.log(this.backgroundImage);
            } else {
                this.backgroundImage = ''; // Reset to empty if no valid image is found
            }
        },
    },


    methods: {
        getLogoSrc(index) {
            // Ensure the index is within bounds
            if (index >= 0 && index < this.logo.length) {
                return this.logo[index].src;
            }
            // Return a default logo or empty string if index is out of bounds
            return '';
        },
    },
    mounted() {
        console.log('mounted');
    },
},
)
</script>

<style >
.carousel__slide {
    padding: 5px;
}

.carousel__viewport {
    perspective: 2000px;
}

.carousel__track {
    transform-style: preserve-3d;
}

.carousel__slide--sliding {
    transition: 0.5s;
}

.carousel__slide {
    opacity: 0.9;
    transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active~.carousel__slide {
    transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
    opacity: 1;
    transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
    opacity: 1;
    transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
    opacity: 1;
    transform: rotateY(0) scale(1.1);
}
</style> -->

<template>
    <!-- <div class="h-full  bg-slate-600 flex gap-4"> -->
        <!-- <div class="  py-3 w-1/2 bg-green-400">
                <Carousel v-bind="settings" :autoplay="3000" :wrapAround="true" :breakpoints="breakpoints" :transition="500"
                v-model="currentSlide">
                <Slide v-for="(item, index) in carouselItems" :key="index">

                    <img :src="item.src" alt="" class="carousel__item rounded-2xl">
                </Slide>
                <template #addons>
                    <Navigation />
                </template>
            </Carousel>
        </div> -->
        <div class="h-full">

        </div>
        <div class="py-3 w-1/2">
            <Carousel v-bind="settings" :autoplay="3000" :wrapAround="true" :breakpoints="breakpoints" :transition="500"
            v-model="currentSlide">
            <Slide v-for="(item, index) in carouselItems" :key="index" class="">
                <!-- <div class="carousel__item">{{ item }}</div> -->

                <img :src="item.src" alt="" class="carousel__item mt-10 mb-10 rounded-2xl" >
            </Slide>
        </Carousel>
        <!-- <p>Current Slide Index Slider: {{ currentSlide }}</p> -->
        <!-- <LandingPage1 :slideIndex="currentSlide" /> -->
        <!-- <Banner :slideIndex="currentSlide" /> -->


        </div>


    <!-- </div> -->
</template>
  
<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import Navbar from '../components/Navbar.vue';
// import Banner from './Banner.vue';
// import LandingPage1 from './LandingPage1.vue'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
    name: 'Breakpoints',
    components: {
        Carousel,
        Slide,
    },
    data: () => ({
        currentSlide: 0,
        // carousel settings
        settings: {
            itemsToShow: 2.55,
            snapAlign: 'center',
        },
        // breakpoints are mobile first
        // any settings not specified will fallback to the carousel settings
        breakpoints: {
            // 700px and up
            500: {
                itemsToShow: 2.55,
                snapAlign: 'center',
                // style:"width: 200px; height: 300px;"

            },
            // 1024 and up
            1024: {
                itemsToShow: 2.55,
                snapAlign: 'center',
            }, 
            1350: {
                itemsToShow: 2.55,
                snapAlign: 'center',
            },
        },
        carouselItems: [
            { src: '/image/5gzzkR7y3hnY8AD1wXjCnVlHba5.jpg' },
            { src: '/image/8Im6DknDVxRiGXc5t8rVOJyzuNx.jpg' },
            { src: '/image/52YBwGJ3cJs54fpBzwnT1lnqgTo.jpg' },
            { src: '/image/b0Ej6fnXAP8fK75hlyi2jKqdhHz.jpg' },
            { src: '/image/h6Z2oogE4mJk2uffdtIlLhb0EHx.jpg' },
            { src: '/image/voHUmluYmKyleFkTu3lOXQG702u.jpg' },
        ],
    }),
})
</script>

<style >
.carousel__item {
    min-height: 200px;
    width: 100%;
    background-color: var(--vc-clr-primary);
    color: var(--vc-clr-white);
    font-size: 20px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
.carousel__slide {
    padding: 5px;
}

.carousel__viewport {
    perspective: 3000px;
}

.carousel__track {
    transform-style: preserve-3d;
}

.carousel__slide--sliding {
    transition: 0.5s;
}

.carousel__slide {
    opacity: 0.9;
    transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active~.carousel__slide {
    transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
    opacity: 1;
    transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
    opacity: 1;
    transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
    opacity: 1;
    transform: rotateY(0) scale(1.1);
}
</style> 