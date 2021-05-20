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

// MainApi 불러오기
import { MainApi } from './apis/'

// MainApi 객체 생성
const mainApi = new MainApi();


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


// 앱 생성
const app = createApp(App)

// 전력 라이브러리 등록
app.config.globalProperties.$mainApi = mainApi;

// 전역 컴포넌트 등록
app.component('font-awesome-icon', FontAwesomeIcon);

// 앱에 라우터 적용
app.use(router)

// 앱 표시
app.mount('#app')
