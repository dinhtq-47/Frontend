import HomePage from './components/pages/home'
import Dashboard from './components/admin/dashboard'
import Login from './components/admin/login'
import Register from './components/admin/register'
import Cart from './components/pages/cart'
const routes = [
	{
		path: '/',
		component: HomePage,
		name: 'home'
	},
	{
		path: '/dashboard',
		component: Dashboard,
		name: 'dashboard'
	},
	{
		path: '/login',
		component: Login,
		name: 'login'
	},
	{
		path: '/register',
		component: Register,
		name: 'register'
	},
	{
		path: '/admin',
		component: Dashboard,
		name: 'dashboard'
	},
	{
		path: '/checkout',
		component: Cart,
		name: 'cart'
	}
]

export default routes