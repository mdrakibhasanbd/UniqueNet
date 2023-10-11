<template>
  <!-- <Layout> -->
    <!-- <Navbar/> -->
    <!-- <Navbar> -->
      
      <div>
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
                    consectetur cum quae architecto possimus earum suscipit expedita dolorem, quos voluptatibus itaque
                    enim
                    hic laudantium aliquid sed eum ratione veritatis, in, necessitatibus quaerat voluptates rem sit vel
                    a.
                    Inventore, temporibus eaque. Dolorem error corporis iste? Amet, ab.</p>
                <div class="button">
                    <!-- <a href="#" onclick="toggleVideo()"><i class="fa fa-play-circle" aria-hidden="true"></i> Watch</a> -->
                    <a href="#_" onclick="toggleVideo()"
                        class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group">
                        <span
                            class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                            <span
                                class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                        </span>
                        <span
                            class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0 pt-2"></span>
                        <span
                            class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">Watch</span>
                    </a>
                    <!-- <a href="#"><i class="fa fa-plus" aria-hidden="true"></i> My List</a> -->
                    <a href="#_"
                        class="relative inline-flex items-center justify-start px-1 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group">
                        <span
                            class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                            <span
                                class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                        </span>
                        <span
                            class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                        <span
                            class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">My
                            List</span>
                    </a>
                </div>
            </div>
  
  
            <div class="carousel-box">
                <Slider />
                <!-- <div class="carousel">
  
                    <div class="carousel-item" onclick="changeBg('bg-the-little-mermaid.jpeg', 'bg-mermaid')">
                        <img src="/img/movies/the-little-mermaid.jpeg" alt="">
                    </div>
  
                    <div class="carousel-item" onclick="changeBg('bg-65.jpeg', 'bg-65');">
                        <img src="/img/movies/65.jpg" alt="">
                    </div>
  
                    <div class="carousel-item" onclick="changeBg('bg-the-black-demon.jpeg', 'bg-the-black-demon');">
                        <img src="/img/movies/bg-the-black-demon.jpeg" alt="">
                    </div>
  
                    <div class="carousel-item" onclick="changeBg('bg-the-tank.jpeg', 'bg-the-tank');">
                        <img src="/img/movies/the-tank.jpeg" alt="">
                    </div>
  
                    <div class="carousel-item" onclick="changeBg('bg-the-covenant.jpeg', 'bg-the-covenant');">
                        <img src="/img/movies/the-covenant.jpg" alt="">
                    </div>
  
  
                </div> -->
            </div>
  
            <ul class="sci">
                <li><a href="#"> <i class="fa fa-facebook-square" aria-hidden="true"></i> </a></li>
                <li><a href="#"> <i class="fa fa-twitter" aria-hidden="true"></i> </a></li>
                <li><a href="#"> <i class="fa fa-youtube-play" aria-hidden="true"></i></a></li>
            </ul>
        </div>
    </div>
    <!-- </Navbar> -->
  <!-- </Layout> -->
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Layout from "../components/Layout.vue";
import Slider from "./Slider.vue";

export default {
  components: {
    Navbar,
    Layout,
    Slider,
  },
};
</script>
<style scoped>
/* @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap"); */
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");



.banner {
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 0 100px;
  display: inline-flex;
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

.banner .content .button a {
  position: relative;
  display: inline-block;
  margin-right: 10px;
  /* background: var(--primary); */
  color: #ffffff;
  padding: 8px 20px;
  text-decoration: none;
  font-weight: 500;
  letter-spacing: 1px;
  text-overflow: uppercase;
  cursor: pointer;
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
  width: 100%;
  height: 50px;
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

/*header bar css end  */

/* media query  start   */

@media (max-width: 500px) {
  .content {
    /* margin-top: 600px; */
    margin-top: 600px;
    width: 100%;
  }

  .carousel {
    width: 80%;
    /* margin-bottom: 140px; */
    text-align: center;
    right: 340px;
    margin-right: 110px;
    margin-bottom: 600px;
  }

  .banner .content h4 span {
    font-size: 1rem;
    font-weight: 700;
    margin: 0;
  }

  .banner .content h4 span i {
    margin: 1px;
  }
}

.banner .content p {
  font-size: 15px;
  width: 350px;
}

.trailer {
  margin-top: 50px;
}

/* media query  end   */
</style>
