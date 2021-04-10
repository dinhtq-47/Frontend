<template>
    <div id="slide-header" @mouseover="mouseOver()" @mouseout="mouseout()">
        <div id="slide-image" >
                <img :src="image2" alt="Slide-Akana01">
                <img :src="image1" alt="Slide-Akana02">
        </div>
                     <div :class="{mask:showMask}"></div>
                     <div :class="{mask:showMask}"></div>
        <div>
            <a href="#" id="prev" @click.prevent="incremental()" >
                <fa icon="arrow-right" id="left"></fa>
            </a>
            <a href="#" id="next" @click.prevent="decrement()">
                <fa icon="arrow-left" id="right"></fa>
            </a>
        </div>
        
    </div>
</template>

<script>
    export default {
        data() {
            return {
                showMask: true,
                currentImage: 1,
                img1: 'slide02',
                image1: require('@/assets/slide/slide01.jpg'),
                image2: require('@/assets/slide/slide05.jpg'),
            }
        },
        methods: {
            incremental: function() {
                if(this.currentImage < 5) {
                     this.currentImage++;
                      console.log(this.currentImage);
                      console.log(this.imageSlideData.image1);
                } else this.currentImage = 4;
                
            },
            decrement: function() {
                if(this.currentImage > 0) {
                     this.currentImage--;
                      console.log(this.currentImage);
                } else this.currentImage = 0;
            },
            mouseOver: function() {
                this.showMask = false;
            },
            mouseout: function() {
                this.showMask = true;
            }
        }
    }
</script>

<style scoped>
    #slide-header {
        max-width: 1100px;
        height:700px;
        background-repeat: no-repeat;
        background-position: center;
        position: relative;
        background-color: white;
        background-size: contain;
    }

    #slide-header img {
        width: 100%;
        height: 50%;
        background-repeat: no-repeat;
        background-size: cover;
    }

    #slide-header div a:first-child {
        width: 50px;
        height: 50px;
        display: block;
        background-color:rgba(223, 184, 255, 0.2);
        border-radius: 50%;
        position: absolute;
        bottom: 20px;
        right: 20px;
    }

    #slide-header div a:hover:first-child,
    #slide-header div a:hover:last-child
    {
        background-color: #773B9E;
        opacity: 1;
        box-shadow: 0 0 10px #9ecaed;
        transform: scale(1.1);
    }

    #slide-header div a:last-child {
        width: 50px;
        height: 50px;
        display: block;
        background-color: rgba(223, 184, 255, 0.2);
        border-radius: 50%;
        position: absolute;
        bottom: 80px;
        right: 20px;
    }
    #slide-image {
        display: flex;
        justify-content: space-between;
        height: 100%;
    }

    #slide-image > a {
        display: block;
    }

    #slide-image > img {
        height: 100%;
        display: block;
        object-fit: cover;
    }

    #slide-image > img:last-child {
        padding: 50px
    }
    
    #left {
        color: white;
        margin-top: 8px;
        margin-left: 10px;
        font-size: 34px;
    }

    #right {
        color: white;
        margin-top: 8px;
        margin-left: 10px;
        font-size: 34px;
    }

    .mask {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: rgba(35, 31, 35, 0.3);
        transition: ease-out 0.5s;
        color: red;
    }
</style>