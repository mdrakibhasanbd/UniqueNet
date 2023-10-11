<template>
  <div class="banner">
    <div class="content active">
      <img src="/img/the-little-mermaid-title.png" alt="" class="movie-title">
      <h4>
        <span>2023</span>
        <span><i>12+</i></span>
        <span>2h 14min</span>
        <span>Romance</span>
      </h4>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam vitae unde voluptatibus? Distinctio
        consectetur cum quae architecto possimus earum suscipit expedita dolorem, quos voluptatibus itaque enim
        hic laudantium aliquid sed eum ratione veritatis, in, necessitatibus quaerat voluptates rem sit vel a.
        Inventore, temporibus eaque. Dolorem error corporis iste? Amet, ab.</p>
      <div class="button">
        <a href="#"><i class="fa fa-play" aria-hidden="true"></i> Watch</a>
        <a href="#"><i class="fa fa-plus" aria-hidden="true"></i> My List</a>
      </div>
    </div>

    <div class="carousel-box">
      <!-- <carousel :items-to-show="1.5">

        <slide v-for="(item, index) in carouselItems" :key="index">
          <img :src="item.src" alt="">
        </slide>

        <template #addons>
          <navigation />
          <pagination />
        </template>
      </carousel> -->
      

      <!-- <Carousel :autoplay="2000" :wrap-around="true"> -->
        <Carousel :itemsToShow="2.95" :autoplay="3000" :wrapAround="true" :transition="500">

        <slide v-for="(item, index) in carouselItems" :key="index">
          <img :src="item.src" alt="">
        </slide>
        <template #addons>
          <!-- <Pagination /> -->
        </template>
      </Carousel>
    </div>

    <a href="#" class="play" @click="toggleVideo()"><i class="fa fa-play-circle" aria-hidden="true"></i> Watch
      Trailer</a>
    <ul class="sci">
      <li><a href="#"> <i class="fa fa-facebook-square" aria-hidden="true"></i> </a></li>
      <li><a href="#"> <i class="fa fa-twitter" aria-hidden="true"></i> </a></li>
      <li><a href="#"> <i class="fa fa-youtube-play" aria-hidden="true"></i></a></li>
    </ul>
  </div>
</template>

<script>

import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'



export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation
  },
  data() {
    return {
      carouselItems: [
        { src: '/image/5gzzkR7y3hnY8AD1wXjCnVlHba5.jpg' },
        { src: '/image/8Im6DknDVxRiGXc5t8rVOJyzuNx.jpg' },
        { src: '/image/52YBwGJ3cJs54fpBzwnT1lnqgTo.jpg' },
        { src: '/image/b0Ej6fnXAP8fK75hlyi2jKqdhHz.jpg' },
        { src: '/image/h6Z2oogE4mJk2uffdtIlLhb0EHx.jpg' },
        { src: '/image/voHUmluYmKyleFkTu3lOXQG702u.jpg' },
      ],
    };
  },
  methods: {
    toggleVideo() {
      const trailer = document.querySelector('.trailer');
      const video = document.querySelector('video');
      video.pause();
      trailer.classList.toggle('active');
    },
    changeBg(bg, title) {
      const banner = document.querySelector('.banner');
      const contents = document.querySelectorAll('.content');

      banner.style.background = `url(../img/movies/${bg})`;
      banner.style.backgroundSize = 'cover';
      banner.style.backgroundPosition = 'center';

      contents.forEach(content => {
        content.classList.remove('active');
        if (content.classList.contains(title)) {
          content.classList.add('active');
        }
      });
    },
  },
};
</script>


<!-- <script>
jQuery(document).ready(function () {
  jQuery('.carousel').carousel();
});





export default {
  methods: {
    toggleVideo() {
      const trailer = document.querySelector('.trailer');
      const video = document.querySelector('video');
      video.pause();
      trailer.classList.toggle('active');
    },

    changeBg(bg, title) {
  const banner = document.querySelector('.banner');
  const contents = document.querySelectorAll('.content'); // Use querySelectorAll

  banner.style.background = `url(../img/movies/${bg})`;
  banner.style.backgroundSize = 'cover';
  banner.style.backgroundPosition = 'center';

  contents.forEach(content => {
    content.classList.remove('active');
    if (content.classList.contains(title)) {
      content.classList.add('active');
    }
  });
}

  },

  mounted() {
    // Initialize the carousel when the component is mounted
    jQuery('.carousel').carousel();

    // Set an interval to advance the carousel every 3 seconds
    setInterval(() => {
      jQuery('.carousel').carousel('next');
    }, 3000);
  },

}
</script> -->

<style scoped>

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

.carousel__slide--active ~ .carousel__slide {
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
  background: url(/img/movies/bg-little-mermaid.jpg) no-repeat;
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
  min-width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: rgba(0, 0, 0, 0.2); */

}

.carousel {
  position: relative;
  width: 85%;
  height: 397px;
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