<template>
    <div id="home">
        <div id="header">
            <div id="bgImage" data-aos="fade-down"
             data-aos-duration="2000"
            ></div>           
            <div id="mask"></div>
            <div id="menu-slide"  data-aos='zoom-out-left' data-aos-duration="1500" v-if="showSlide">
                <Slide></Slide>
            </div>
        </div>
        
        <div id="content" v-if="showContent">
            <h4 data-aos="fade-up" data-aos-duration="2000"> Sự lựa chọn cho mọi sở thích </h4>
        </div>
        <div id="logo">
            <a href="#" >
                <img src="@/assets/logo-akana.png" alt="">
            </a>             
        </div> 
        <div id="menu"><Nav :scrollActive = "scrollActive" :class="{scroll:scrollActive}"></Nav></div>
        <div id="drawer">
        <el-drawer
        title="Giỏ Hàng"
        :visible.sync="drawer"
        :with-header="false"
        :wrapperClosable="true"
        :modal="false"
        :modal-append-to-body="false"
        >
        <Cart></Cart>
        </el-drawer>
        </div>

                          
        <div>
            <ul class="list-inline float-right mb-0">
                  <li class="list-inline-item dropdown notification-list">
                                    <a class="nav-link dropdown-toggle arrow-none waves-effect nav-user" data-toggle="dropdown" href="#" role="button"
                                       aria-haspopup="false" aria-expanded="false">
                                        <img src="avata.jpg" alt="user" class="rounded-circle">
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-right profile-dropdown ">
                                        <!-- item-->
                                        <div class="dropdown-item noti-title">
                                            <h5>Welcome</h5>
                                        </div>
                                        <a class="dropdown-item" href="#"><i class="mdi mdi-account-circle m-r-5 text-muted"></i> Profile</a>                                  
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="#"><i class="mdi mdi-logout m-r-5 text-muted"></i> Logout</a>
                                    </div>
                     </li>
            </ul>
        </div>
        
          
  </div>
</template>

<script>
        import Slide from '../slide-header.vue';
        import Nav from '../nav.vue';
        import Cart from './cart.vue';
        import eventBus from "@/eventBus";
        export default {
        data() {
            return {
               showSlide: false,
               showContent: false,
               scrollActive: false,
               drawer: false,
            }
        },
        mounted() {
            setTimeout(this.loadSlide, 2500);
            setTimeout(this.loadContent, 1500);
            document.addEventListener('scroll', this.scroll );
            this.showCart();
        },
        components: {
            Slide,
            Nav, 
            Cart 
        },
        methods: {
            loadSlide: function() {
                this.showSlide = true;
            },

            loadContent: function() {
                this.showContent = true;
            },
            scroll: function() {
                let height = self.pageYOffset;
                let maxHeight = screen.height;
                // console.log(height);
                if (height > ( maxHeight - 500)) {
                    eventBus.$emit('scroll', false );
                    this.scrollActive = true;
                }  else {
                    this.scrollActive = false;
                    eventBus.$emit('scroll', true );
                } 
            },
            showCart: function() {
                eventBus.$on('showCart', () => {
                   this.drawer = !this.drawer;
                })
            }
        },
        computed: {
            
        },
        watch: {

        }
    }
</script>

<style scoped>
    #header {
        height: 100vh;
        width: 100%;
        display: inline-block;
        background-color: #585862;
        background-repeat: no-repeat;
        background-size: 50%;
        position: relative;
    }

    #menu {     
        top: 0;
        left: 0;
        position: fixed;
    }

    a {
        text-decoration: none;
    }

    #menu-slide {
        position: absolute;
        bottom: 0;
        right: 0;
    }

    #logo {
        transform: rotate(-90deg);
        position: absolute;
        bottom: 20%;
        width: 200px;
    }

    h4 {
        color: white;
        position: absolute;
        top: 30%;
        font-size: 120px;
        max-width: 900px;
        margin-left: 80px;
        font-family: 'Open Sans', sans-serif;
        text-shadow: 0 0 5px #8A41B3;
    }

    #mask {
        position: absolute;
        width: 100%;
        height: 100%;

        background-color: rgba(0, 0, 0, 0.46);
    }

    #bgImage {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-image: url('../../assets/style02.jpg');
        background-repeat: no-repeat;
        display: block;
        background-size: contain;
    }

    .scroll {
        background-color: rgba(237, 236, 238, 0.9);
        transition: ease-out 3s;
        color: red;
    }

    #products {
        width: 1100px;
    }
</style>