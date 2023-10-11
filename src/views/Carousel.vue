<template>
    <div class="carousel-container">
        <vue-carousel-3d :items="items" :display="display" :duration="duration" ref="carousel">
            <slide v-for="(item, index) in items" :key="index" :slot="index"
                :class="['carousel-item', { 'active': index === currentIndex }]">
                {{ item }}
            </slide>
        </vue-carousel-3d>

        <button @click="prev">Previous</button>
        <button @click="next">Next</button>
    </div>
</template>
  
<script>
import VueCarousel3D from 'vue-carousel-3d';

export default {
    components: {
        'vue-carousel-3d': VueCarousel3D,
    },
    data() {
        return {
            items: [
                { src: '/image/5gzzkR7y3hnY8AD1wXjCnVlHba5.jpg' },
                { src: '/image/8Im6DknDVxRiGXc5t8rVOJyzuNx.jpg' },
                { src: '/image/52YBwGJ3cJs54fpBzwnT1lnqgTo.jpg' },
                { src: '/image/b0Ej6fnXAP8fK75hlyi2jKqdhHz.jpg' },
                { src: '/image/h6Z2oogE4mJk2uffdtIlLhb0EHx.jpg' },
                { src: '/image/voHUmluYmKyleFkTu3lOXQG702u.jpg' },
            ],
            display: 3, // Number of items to display at once
            duration: 300, // Transition duration in milliseconds
            currentIndex: 0,
        };
    },
    methods: {
        prev() {
            this.$refs.carousel.prev();
            this.currentIndex = this.$refs.carousel.index;
        },
        next() {
            this.$refs.carousel.next();
            this.currentIndex = this.$refs.carousel.index;
        },
    },
};
</script>
  
<style scoped>
.carousel-container {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
}

.carousel-item {
    width: 100px;
    height: 100px;
    border: 2px solid #333;
    border-radius: 10px;
    background-color: #f2f2f2;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
}

.active {
    background-color: #3498db;
    color: white;
}
</style>
  