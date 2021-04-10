<template>
    <div>
        <el-carousel height="700px">
            <el-carousel-item v-for="item in 4" :key="item">
            <h3 class="small">{{ item }}</h3>
            <img :src = "url" >
        </el-carousel-item>
    </el-carousel>
    </div>
</template>

<script>
   
    export default {
    data() {
        return {
           imgSlide: [
             { url: 'avata.jpg' }
           ],

           url: '@/assets/avata.jpg',
        }
    },
    methods: {
      changeItem(val) {
      console.log(('inital change:' + val))
       alert('inital index set:  ' + val);
    }
    }
}
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>