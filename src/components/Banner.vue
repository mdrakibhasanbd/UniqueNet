<template>
    <Nav />
    <div class="banner" :style="{ backgroundImage: `url(${backgroundImage})` }">
        <!-- Banner content -->
        <div class="content active">
            <img :src="getLogoSrc(currentSlide)" class="movie-title max-[500px]:mb-[15px]" />

            <h4>
                <span>2023</span>
                <span><i>12+</i></span>
                <span>2h 14min</span>
                <span>Romance</span>
            </h4>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam vitae
                unde voluptatibus? Distinctio consectetur cum quae architecto possimus
                earum suscipit expedita dolorem, quos voluptatibus itaque enim hic
                laudantium aliquid sed eum ratione veritatis, in, necessitatibus quaerat
                voluptates rem sit vel a. Inventore, temporibus eaque. Dolorem error
                corporis iste? Amet, ab.
            </p>
            <div class="">
                <!-- <a href="#"><i class="fa fa-play" aria-hidden="true"></i> Watch</a> -->
                <a
                    class="btn font-medium text-gray-100 bg-transparent whitespace-nowrap hover:bg-red-600 hover:text-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500 focus:outline-none max-[1024px]:hidden">Watch</a>
            </div>
        </div>

        <!-- Main Carousel -->
        <div class="py-3 max-[500px]:hidden w-1/2">
            <div class="carousel-box">
                <Carousel v-bind="settings" :autoplay="5000" :wrapAround="true" :breakpoints="breakpoints" :transition="500"
                    v-model="currentSlide">
                    <Slide v-for="(item, index) in carouselItems" :key="index">
                        <img :src="item.src" alt="" class="carousel__item mt-10 mb-10 rounded-2xl" />
                    </Slide>
                </Carousel>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Slide } from "vue3-carousel";
import Nav from "./Nav.vue";
import "vue3-carousel/dist/carousel.css";

export default defineComponent({
    name: "Gallery",
    components: {
        Carousel,
        Slide,
        Nav,
    },

    data() {
        return {
            movieTitle: "Carousel",
            settings: {
                itemsToShow: 2.55,
                snapAlign: "center",
            },
            // breakpoints are mobile first
            // any settings not specified will fallback to the carousel settings
            breakpoints: {
                // 700px and up
                500: {
                    itemsToShow: 2.55,
                    snapAlign: "center",
                    // style:"width: 200px; height: 300px;"
                },
                // 1024 and up
                1024: {
                    itemsToShow: 2.55,
                    snapAlign: "center",
                },
                1350: {
                    itemsToShow: 2.55,
                    snapAlign: "center",
                },
            },
            carouselItems: [
                { src: "/image/5gzzkR7y3hnY8AD1wXjCnVlHba5.jpg" },
                { src: "/image/8Im6DknDVxRiGXc5t8rVOJyzuNx.jpg" },
                { src: "/image/52YBwGJ3cJs54fpBzwnT1lnqgTo.jpg" },
                { src: "/image/b0Ej6fnXAP8fK75hlyi2jKqdhHz.jpg" },
                { src: "/image/h6Z2oogE4mJk2uffdtIlLhb0EHx.jpg" },
                { src: "/image/voHUmluYmKyleFkTu3lOXQG702u.jpg" },
            ],
            backdropImage: [
                { src: "/backdrop/53z2fXEKfnNg2uSOPss2unPBGX1.jpg" },
                { src: "/backdrop/mzlZAMjE2yk2sW3f9HTeBM3B3jw.jpg" },
                { src: "/backdrop/qjMDwBWbG5hAP43q3meplZFreFQ.jpg" },
                { src: "/backdrop/lNxR7SmtFxFUfA7n9qtzuaIYvoM.jpg" },
                { src: "/backdrop/dovlWfwsmdfEg8CJqCfA6MpN7ws.jpg" },
                { src: "/backdrop/Afp8OhiO0Ajb3NPoCBvfu2pqaeO.jpg" },
            ],
            logo: [
                { src: "/logo/k8RauXaOjYiO7UNTFpAWgkTV4tD.png" },
                { src: "/logo/th3ju1FzqfZV6ePXR6CM7P72LLS.png" },
                { src: "/logo/gO6Gouo9N2eoSwFJARI8HqYKaum.png" },
                { src: "/logo/pX0jtutyXGF5EzluOJ6F6zPvFM.png" },
                { src: "/logo/1JrVoNHy7VTJCKV60sDJGCcBL1H.png" },
                { src: "/logo/zzjG9U2fDOiHudgqUysbKW58hLp.png" },
            ],
            currentSlide: 0,
            backgroundImage: "/backdrop/53z2fXEKfnNg2uSOPss2unPBGX1.jpg", // Initialize with an empty string
        };
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
                this.backgroundImage = ""; // Reset to empty if no valid image is found
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
            return "";
        },
    },
    mounted() {
        // console.log('mounted');
    },
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&family=Young+Serif&display=swap");

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

.banner {
    position: relative;
    width: 100%;
    min-height: 100vh;
    padding: 0 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-size: cover;
    background-position: center;
    overflow: hidden;
    transition: 0.5s;
}

.banner::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
}

.content {
    position: relative;
    max-width: 550px;
    display: none;
    visibility: hidden;
    transform: scale(0);
    transition: 0.5s;
}

.content.active {
    display: block;
    visibility: visible;
    transform: scale(1);
    transition: 0.5s;
}

.movie-title {
    max-width: 250px;
}

.banner .content h4 {
    color: rgb(255, 255, 255, 0.5);
    font-weight: 400;
    font-size: 30px;
}

.banner .content h4 span {
    padding: 0 10px;
    border-right: 1px solid rgba(255, 255, 255, 0.5);
}

.banner .content h4 span:first-child {
    padding-left: 0;
}

.banner .content h4 span:last-child {
    border-right: none;
}

.banner .content h4 span i {
    background: var(--primary);
    color: #ffffff;
    padding: 0 8px;
    display: inline-block;
    border-radius: 2px;
}

.banner .content p {
    font-size: 1em;
    font-weight: 300;
    line-height: 1.5em;
    color: #ffffff;
    margin: 10px 0 20px;
    font-family: "";
}

.banner .content .button {
    position: relative;
}

.banner .content .button a {
    position: relative;
    display: inline-block;
    margin-right: 10px;
    background: var(--primary);
    color: #ffffff;
    padding: 6px 20px;
    text-decoration: none;
    font-weight: 500;
    letter-spacing: 1px;
    text-overflow: uppercase;
    transition: 0.5s;
    cursor: pointer;
}

.banner .content .button a:nth-child(2) {
    background: rgb(0, 0, 0, 0.5);
    border: 1px solid rgb(255, 255, 255, 0.2);
}

.banner .content .button a:hover:nth-child(2) {
    background: var(--primary);
}

.banner .carousel-box {
    position: relative;
    min-width: 300px;
    margin-top: 20%;
    display: flex;
    justify-content: right;
    align-items: center;
    /* background: rgba(0, 0, 0, 0.2); */
}

.carousel {
    position: relative;
    width: 85%;
    height: 450px;
}

.carousel .carousel-item {
    width: 250px;
    cursor: pointer;
}

.carousel .carousel-item img {
    margin-top: 50px;
    max-width: 235px;
    border-radius: 10px;
    transform: translateX(8px) translateY(-100px);
    object-fit: cover;
    object-position: center;
}

.play {
    position: absolute;
    bottom: 50px;
    left: 100px;
    display: inline-flex;
    justify-content: flex-start;
    align-items: center;
    color: #ffffff;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 1px;
    font-size: 1.2em;
    cursor: pointer !important;
    transition: 0.3s;
}

.play i {
    margin-right: 10px;
    font-size: 40px;
    cursor: pointer !important;
}

.play:hover {
    color: var(--primary);
}

.sci {
    position: absolute;
    bottom: 50px;
    right: 30px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 25px;
}

.sci a {
    color: #ffffff;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 1px;
    font-size: 25px;
    transition: 0.3s;
    cursor: pointer;
}

.sci a:hover {
    color: var(--primary);
}

.trailer {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
    width: 100%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(20px);
    visibility: hidden;
    opacity: 0;
    transition: 0.5s;
}

.trailer.active {
    visibility: visible;
    opacity: 1;
}

.trailer video {
    max-width: 900px;
    outline: none;
}

.close {
    position: absolute;
    top: 30px;
    right: 30px;
    cursor: pointer;
    filter: invert(1);
    max-width: 30px;
}
</style>
