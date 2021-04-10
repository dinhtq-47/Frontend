<template>
  <div id="search">
    <div>
        <form action="#">
            <input type="text" placeholder="Tìm kiếm ...">
            <a href="#">
                <fa icon="search"></fa>
            </a>
        </form>
    </div>
    <div>
        <a href="#" @click="showCart()">   
        <svg class="Icon Icon--cart-desktop" role="presentation" viewBox="0 0 17 20" >
        <path d="M0 20V4.995l1 .006v.015l4-.002V4c0-2.484 1.274-4 3.5-4C10.518 0 12 1.48 12 4v1.012l5-.003v.985H1V19h15V6.005h1V20H0zM11 4.49C11 2.267 10.507 1 8.5 1 6.5 1 6 2.27 6 4.49V5l5-.002V4.49z" fill="currentColor"></path>
        </svg>
        <el-badge :value="cartTotal" class="item" type="primary"></el-badge>
        </a>
    </div>
   
    <ul>
        <li>
            <a href="#">
               <img src="@/assets/avata.jpg" alt="">
               
            </a>
        </li>
    </ul> 
</div>
</template>
<script>
    import eventBus from "@/eventBus";
    export default {
        data() {
            return {
                cartTotal: 1
            }
        },
        methods: {
            showCart: function() {
                eventBus.$emit('showCart');
            },
        }
    }
</script>
<style scoped>
    #search {
        width: 226px;
        height: 40px;
        display: flex;
        margin-right: 20px;
    }

    #search form {
        position: relative;
    }

    #search div:nth-child(2) a {
        background-color: white;
        display: block;
        height: 39px;
        color: black;
        width: 39px;
        border-radius: 50%;
        margin-top: 30px;
        position: relative;
        margin-left: 50px;
    }

    #search div:nth-child(2) a:focus {
        border-color: #9ecaed;
        box-shadow: 0 0 10px #9ecaed;
        transform: scale(1.1);
    }

    #search div:nth-child(2) a:hover {
        border-color: #9ecaed;
        box-shadow: 0 0 10px #9ecaed;
        transform: scale(1.1);
    }

    #search form input {
        outline: none;
        height: 40px;
        border-radius: 20px;
        padding-left: 10px;
        border: 1px solid transparent;
        padding-right: 60px;
    }

    #search form input:focus {
        border-color: #9ecaed;
        box-shadow: 0 0 10px #9ecaed;
    }

    #search form input:hover {
        border-color: #9ecaed;
        box-shadow: 0 0 10px #9ecaed;
    }

    #search form > a {
        font-size: 20px;
        position: absolute;
        outline: none;
        right: 15px;

    }

    #search > ul li {
        display: inline-block;
        height: 100%;
    }

    #search > ul li a {
        background-color: white;
        height: 39px;
        color: black;
        width: 39px;
        display: block;
        border-radius: 50%;
        margin-left: 40px;
        margin-top: 15px;
        padding-bottom: 2px;
    }

    #search > ul li a img {
        max-width: 100%;
        display: block;
        background-repeat: no-repeat;
        width: 39px;
        height: 39px;
        border-radius: 50%;
    }

    #search > ul a:hover,
    #search > ul a:focus {
        border-color: #9ecaed;
        border: 0px solid #9ecaed;
        box-shadow: 0 0 5px #9ecaed;
        transform: scale(1.1);
    }

    li {
        list-style-type: none;
    }

    #search > div:nth-child(2) > a > svg {
        font-size: 20px;
        width: 20px;
        position: absolute;
        top: 5px;
        left: 10px; 
    }

    .item {
       margin-left: 22px;
       margin-top: -86px;
    }
 
</style>