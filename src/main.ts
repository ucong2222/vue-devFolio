import { createApp, reactive, computed } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import PortFolioPage from './pages/PortFolioPage.vue'
import RecruitPage from './pages/RecruitPage.vue'
import MemberLoginPage from './pages/MemberLoginPage.vue'
import MemberJoinPage from './pages/MemberJoinPage.vue'
import './index.css'

// 전역 컴포넌트 불러오기
// font-awesome과 관련된 import를 정의 
import { library } from '@fortawesome/fontawesome-svg-core' 
import { faUserSecret } from '@fortawesome/free-solid-svg-icons' 
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome' 
library.add(faUserSecret)

import * as Util from './utils/';

// 전역상태 만들기
const authKey = localStorage.getItem("authKey")
const loginedMemberId = Util.toIntOrNull(localStorage.getItem("loginedMemberId"))
const loginedMemberName = Util.toStringOrNull(localStorage.getItem("loginedMemberName"))
const loginedMemberNickname = Util.toStringOrNull(localStorage.getItem("loginedMemberNickname"))

const globalShare:any = reactive({
  loginedMember:{
    authKey,
    id:loginedMemberId,
    name:loginedMemberName,
    nicknam:loginedMemberNickname,
  },
  isLogined: computed(() => globalShare.loginedMember.id !== null ),
  logout: () => {
    localStorage.removeItem("authKey");
    localStorage.removeItem("loginedMemberId");
    localStorage.removeItem("loginedMemberName");
    localStorage.removeItem("loginedMemberNickname");

    location.replace('/member/login')
  }
});

// MainApi 불러오기
import { MainApi } from './apis/'

// MainApi 객체 생성
const mainApi = new MainApi();


const routes = [
  { path: '/', component: PortFolioPage ,props: (route:any) => ({globalShare}) },
  { path: '/article/list', component: RecruitPage },
  {
     path : '/member/login',
     component : MemberLoginPage,
     props: (route:any) => ({globalShare}) 
  },
  { path : '/member/join', component : MemberJoinPage },
]

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
})


// 앱 생성
const app = createApp(App, {
  globalShare
});

// 전력 라이브러리 등록
app.config.globalProperties.$mainApi = mainApi;

// 전역 컴포넌트 등록
app.component('font-awesome-icon', FontAwesomeIcon);

// 앱에 라우터 적용
app.use(router)

// 앱 표시
app.mount('#app')
