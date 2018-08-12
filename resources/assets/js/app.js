import Vue          from 'vue'
import VueRouter    from 'vue-router'

Vue.use(VueRouter)

Vue.component('calendar', require('./components/EventCalendar/Calendar'));
Vue.component('new-event', require('./components/EventCalendar/NewEvent'));

import App          from './views/App'
import Dashboard    from './views/Board'
import Login        from './views/Login'
import Register     from './views/Register'
import Home         from './views/Welcome'
import Events       from './components/EventCalendar/Calendar'

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', name: 'home', component: Home },
        { path: '/login', name: 'login', component: Login, },
        { path: '/register', name: 'register', component: Register, },
        { path: '/board', name: 'board', component: Dashboard, },
        { path: '/events', name: 'events', component: Events, },
    ],
});

const app = new Vue({
    el: '#app',
    components: { App },
    router,
});