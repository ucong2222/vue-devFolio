import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import PortFolioPage from './pages/PortFolioPage.vue'
import RecruitPage from './pages/RecruitPage.vue'
import MemberLoginPage from './pages/MemberLoginPage.vue'
import MemberJoinPage from './pages/MemberJoinPage.vue'
import './index.css'

//font-awesome과 관련된 import를 정의 
import { library } from '@fortawesome/fontawesome-svg-core' 
import { faUserSecret } from '@fortawesome/free-solid-svg-icons' 
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome' 
library.add(faUserSecret)


const routes = [
  { path: '/', component: PortFolioPage },
  { path: '/article/list', component: RecruitPage },
  { path : '/member/login', component : MemberLoginPage },
  { path : '/member/join', component : MemberJoinPage },
]

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
})


createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')