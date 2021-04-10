import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
	faUserSecret,
	faAngleLeft,
	faSearch,
	faArrowLeft,
	faArrowRight
 
} from '@fortawesome/free-solid-svg-icons'
library.add(
	faUserSecret,
	faAngleLeft,
	faSearch,
	faArrowLeft,
	faArrowRight
	)
Vue.component('fa', FontAwesomeIcon)