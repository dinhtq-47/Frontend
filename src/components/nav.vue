<template>
	<div id="menu">
		<ul id="menu-left">
			<li>
				<a href="#"  :class="{scroll: scrollActive, main:scroll}" >trang chủ</a>
				<a href="#"  :class="{scroll: scrollActive, main:scroll}" >cửa hàng</a>
				<a href="#"  :class="{scroll: scrollActive, main:scroll}" >giỏ hàng</a>
				<a href="#"  :class="{scroll: scrollActive, main:scroll}" >liên hệ</a>
			</li>
		</ul>
		
		<div id="menu-right">
			<Search></Search>
		</div>
	</div>
</template>

<script>
	import Search from './search'
    import eventBus from "@/eventBus";
	export default {
        props: [
          'scrollActive'
        ],
		data() {
			return {
              scroll: true,
			}
		},
		components: {
			Search,
		},
        methods: {
        },
        created() {
            eventBus.$on('scroll', data => {
                this.scroll = data;
            })
        },
        
	}
</script>

<style scoped>
	#menu {
        width: 100%;
        display: flex;
        height: 100px;
        line-height: 100px;
        justify-content: space-between;
        position: relative;
    }

    #menu-left {
        flex-grow: 1;
        display: flex;
        flex-basis: calc(100% / 3);
        justify-content: flex-start;
    }

    #menu-left li a {
        display: inline-block;
        padding: 0px 20px;
        font-size: 20px;
        text-transform: uppercase;
        border: 2px solid transparent;
    }

    #menu-left li a:hover {
        text-shadow: 0 0 10px #8A41B3;
        transform: scale(1.02);
    }
    
    #menu-right {
        flex-basis: calc(100% / 3);
        display: flex;
        justify-content: space-around;
        margin-right: 20px;
    }
    .scroll {
        color:rgba(109, 37, 131, 0.7);
    }

    .main {
        color: white;
    }
</style>