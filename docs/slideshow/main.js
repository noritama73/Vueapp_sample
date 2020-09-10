Vue.component('carousel', {
    template: `
        <div class="carousel">
            <div class="btn_left">
                <button type="button" class="button button-clear" @click="prev">
                    <i class="fas fa-angle-left"></i>
                </button>
            </div>
            <div class="slider">
            <transition-group tag="div" class="slider" :name="style">
                <div v-for="number in [displayImg]" :key="number">
                    <img :src="imgList[number]">
                </div>
            </transition-group>
            </div>
            <div class="btn_right">
                <button type="button" class="button button-clear" @click="next">
                    <i class="fas fa-angle-right"></i>
                </button>
            </div>
            <div class="footer">
                <div class="center">
                    <span class="point" v-for="(number, index) in imgList.length"
                    :key="index" :class="{'active':index===displayImg}" @click="switchImg(index)">●</span>
                </div>
            </div>
                <div class="stop-btn">
                    <button type="button" class="button-outline" @click="reset">Stop</button>
                </div>
            </div>
        </div>
    `,
    props: {
        imgList: Array
    },
    data() {
        return {
            displayImg: 0,
            style: '',
            timerId: undefined,
        }
    },
    methods: {
        next() {
            if (this.displayImg >= this.imgList.length - 1) {
                this.displayImg = 0;
            } else {
                this.displayImg++;
            }
            this.style = "slide-right"
        },
        prev() {
            if (this.next.displayImg == 0) {
                this.displayImg = this.imgList.length - 1;
            } else {
                this.displayImg--;
            }
            this.style = "slide-left"
        },
        switchImg(index) {
            this.displayImg = index;
            this.style = "slide-right";
        },
        reset() {
            clearInterval(this.timerId);
        }
    },
    mounted () {
        var timerId = setInterval(this.next, 3000);
    }
})

new Vue({
    el: '#app',
    data: {
        images: [
            "./pic/furen1.png",
            "./pic/furen2.png",
            "./pic/furen_ssr.png",
            "./pic/hayasaka.png",
            "./pic/i's.png",
            "./pic/sora.jpg",
        ]
    },
});