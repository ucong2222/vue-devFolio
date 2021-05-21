<template>
  <header v-if="!isChecked" class="top-bar h-20 px-2 md:block hidden">
    <div class="lg:container mx-auto h-full flex font-bold text-xl">
      <router-link to="/" class="logo h-full border-red-500">
        <img class="h-16" src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FlrGO7%2FbtqZMohoycN%2FzyK8QDrHR2ZZGXj0wpby51%2Fimg.png" alt="">
      </router-link>

      <nav class="top-bar__menu-box-1 flex-grow">
        <ul class="flex h-full justify-center">
          <li class="border-b-4 border-transparent hover:border-gray-300">
            <router-link to="/" class="flex items-center h-full px-10">
              <span>포트폴리오</span>
            </router-link>
          </li>
          <li class="border-b-4 border-transparent hover:border-gray-300">
            <router-link to="/article/list" class="flex items-center h-full px-10">
              <span>채용공고</span>
            </router-link>
          </li>
          <li class="relative border-b-4 border-transparent hover:border-gray-300">
            <div class="flex items-center h-full px-10">
              <span>커뮤니티</span>
            </div>
            <ul class="absolute hidden w-full top-full mt-1 left-0 bg-white border-box">
              <li>
                <router-link to="#" class="block py-5 text-center hover-menu">
                  <span>공지사항</span>
                </router-link>
              </li>
              <li>
                <router-link to="#" class="block py-5 text-center">
                  <span>취업톡톡</span>
                </router-link>
              </li>
              <li>
                <router-link to="#" class="block py-5 text-center">
                  <span>개발톡톡</span>
                </router-link>
              </li>
              <li>
                <router-link to="#" class="block py-5 text-center">
                  <span>Q&A</span>
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      <div v-if="globalShare.isLogined == false" class="logouted flex items-center font-normal ">
        <div>
          <a href="/member/login" class="text-gray-600 hover:text-gray-800 mr-4">로그인</a>
        </div>
        <div>
          <a href="/member/join" class="text-gray-600 hover:text-gray-800">회원가입</a>
        </div>
      </div>

      <div v-if="globalShare.isLogined" class="logined flex font-normal">
      <ul class="mr-4 h-full">
        <li class="relative h-full">
          <div class="flex h-full items-center px-2">
            <span class="flex items-center mr-1 text-2xl"><i class="fas fa-user-circle"></i></span>
            <span>김유경 님</span>
          </div>
          <ul class="absolute hidden w-full top-full left-0 bg-white border-box">
            <li>
              <router-link to="#" class="block py-5 text-center">
                <span>마이페이지</span>
              </router-link>
            </li>
            <li>
              <a v-on:click="globalShare.logout" class="block py-5 text-center cursor-pointer">
                <span>로그아웃</span>
              </a>
            </li>
          </ul>
        </li>
      </ul>

      <div class="flex items-center">
        <router-link to="#" class="flex">
          <span class="flex items-center mr-1"><i class="far fa-bell"></i></span>
          <span>알림</span>
        </router-link>
      </div>
    </div>

    </div>
  </header>

  <!-- 모바일 버전 -->

  <!-- 모바일 탑바 시작 -->
  <div @click="close_side_bar" :class="mobile_menu_block_active" class="mobile-menu-block md:hidden h-screen w-full absolute top-0 left-0 bg-black bg-opacity-50">
  </div>
  <header class="flex md:hidden py-2">
    <div class="flex-1 flex items-center">
      <div @click="open_side_bar" class="mobile-top-bar__btn-toggle-side-bar w-6 h-6 relative ml-3 cursor-pointer">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>

    <div class="h-full flex">
      <router-link to="/" class="logo h-full border-red-500">
        <img class="h-14" src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FlrGO7%2FbtqZMohoycN%2FzyK8QDrHR2ZZGXj0wpby51%2Fimg.png" alt="">
      </router-link>
    </div>

    <div class="flex-1 flex items-center justify-end">
      <router-link to="#" class="text-2xl mr-3">
        <i class="fas fa-search"></i>
      </router-link>
    </div>
  </header>

  <!-- 모바일 탑바 끝-->

  <!-- 모바일 사이드 바 시작-->
  <aside :class="mobile_side_bar_active" class="mobile-side-bar md:hidden flex-col">
    <div class="logo mt-2">
      <img class="h-16" src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FlrGO7%2FbtqZMohoycN%2FzyK8QDrHR2ZZGXj0wpby51%2Fimg.png" alt="">
    </div>
    <nav class="mobile-side-bar__menu-box-1 w-full mt-2">
      <ul class="text-gray-600 text-lg">
        <li v-if="globalShare.isLogined == false">
          <router-link @click="close_side_bar" to="/member/login" class="block border-t border-gray-200 p-2">
            <span class="w-6 inline-block"><i class="fas fa-sign-in-alt"></i></span>
            <span>로그인</span>
          </router-link>
        </li>
        <li v-if="globalShare.isLogined == false">
          <router-link @click="close_side_bar" to="/member/join" class="block border-t border-gray-200 p-2">
            <span class="w-6 inline-block"><i class="fas fa-user-plus"></i></span>
            <span>회원가입</span>
          </router-link>
        </li>
        <li v-if="globalShare.isLogined">
          <router-link @click="close_side_bar" to="#" class="block border-t border-gray-200 p-2">
            <span class="w-6 inline-block"><i class="fas fa-user-circle"></i></span>
            <span>마이페이지</span>
          </router-link>
        </li>
        <li v-if="globalShare.isLogined">
          <router-link @click="close_side_bar" to="#" class="block border-t border-gray-200 p-2">
            <span class="w-6 inline-block"><i class="far fa-bell"></i></span>
            <span>알림</span>
          </router-link>
        </li>
        <li class="border-t-8 border-gray-200">
          <router-link @click="close_side_bar" to="/" class="block border-b p-2 delay-75">
            <span class="w-6 inline-block"><i class="fas fa-border-all"></i></span>
            <span>포트폴리오</span>
          </router-link>
        </li>
      <li class="border-t-8 border-gray-200">
          <router-link @click="close_side_bar" to="/article/list" class="block border-b p-2">
            <span class="w-6 inline-block"><i class="far fa-building"></i></span>
            <span>채용공고</span>
          </router-link>
        </li>
        <li class="border-t-8 border-gray-200">
          <router-link @click="close_side_bar" to="#" class="block border-b p-2">
            <span class="w-6 inline-block"><i class="fas fa-bullhorn"></i></span>
            <span>공지사항</span>
          </router-link>
        </li>
        <li>
          <router-link @click="close_side_bar" to="#" class="block border-gray-200 p-2">
            <span class="w-6 inline-block"><i class="fas fa-users"></i></span>
            <span>취업톡톡</span>
          </router-link>
        </li>
        <li>
          <router-link @click="close_side_bar" to="#" class="block border-t border-gray-200 p-2">
            <span class="w-6 inline-block"><i class="fas fa-chalkboard-teacher"></i></span>
            <span>개발톡톡</span>
          </router-link>
        </li>
        <li>
          <router-link @click="close_side_bar" to="#" class="block border-t border-gray-200 p-2">
            <span class="w-6 inline-block"><i class="fas fa-question-circle"></i></span>
            <span>Q&A</span>
          </router-link>
        </li>
        <li v-if="globalShare.isLogined" class="border-t-8 border-gray-200">
          <a @click="close_side_bar" v-on:click="globalShare.logout" class="block border-b p-2 cursor-pointer">
            <span class="w-6 inline-block"><i class="fas fa-sign-out-alt"></i></span>
            <span>로그아웃</span>
          </a>
        </li>
      </ul>
    </nav>
  </aside>

  <!-- 모바일 사이드 바 끝-->

  <main>
    <router-view>
    </router-view>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'App',
  props: {
    globalShare: {
      type: Object,
      required: true
    },
  },
  setup(){
    const mobile_menu_block_active = ref();
    const mobile_side_bar_active = ref();

    mobile_menu_block_active.value ={
      hidden : true,
      'z-10' : true,
      active : false,
      block : false,
    };

    mobile_side_bar_active.value ={
      active:false,
      'z-20':true,
    };

    const open_side_bar = () => {
      mobile_side_bar_active.value.active = true;
      mobile_menu_block_active.value.hidden = false;
      mobile_menu_block_active.value.active = true;
      mobile_menu_block_active.value.block = true;
    };

    const close_side_bar = () => {
      mobile_side_bar_active.value.active = false;
      mobile_menu_block_active.value.hidden = true;
      mobile_menu_block_active.value.active = false;
      mobile_menu_block_active.value.block = false;
    };

    var isChecked:boolean  = false;

    return {
      mobile_menu_block_active,
      mobile_side_bar_active,
      open_side_bar,
      close_side_bar,
      isChecked,
    };
  },
  created(){

    if(document.location.pathname === '/member/login'){
      this.isChecked = true; 
    } else if (document.location.pathname === '/member/join'){
      this.isChecked = true;
    } else if (document.location.pathname === '/member/detail'){
      this.isChecked = true;
    } else {
      this.isChecked = false;
    }
  }
})
</script>

<style>
html, body {
  margin:0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.text-main {
  color: #2e4c92;
}

.bg-main{
  background-color:#2E4C92;
}

.text-color-1{
  color:#233e7d;
}

.login-btn:hover {
  background-color: #233e7d;
}

/* 메뉴바 - pc 시작 */
.top-bar__menu-box-1 ul > li:hover > a,
.logined ul li li:hover > a {
  color:#2E4C92;
}

@media (max-width: 915px){
  .top-bar__menu-box-1 > ul > li > *{
    padding: 0 20px;
  }
}

@media (max-width: 795px){
  .top-bar__menu-box-1 > ul > li > * ,
  .logined ,
  .logouted {
    font-size:18px;
  }
  
}

.top-bar__menu-box-1 > ul > li:hover > ul {
  display:block;
}

.logined > ul > li:hover > ul {
  display:block;
}
/* 메뉴바 - pc 끝 */


/* 모바일 탑바 시작*/
.mobile-top-bar__btn-toggle-side-bar > div {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 20%;
  background-color: #333;
  transition: top var(--mobile-top-bar__btn-toggle-side-bar__dur),
    transform var(--mobile-top-bar__btn-toggle-side-bar__dur),
    opacity var(--mobile-top-bar__btn-toggle-side-bar__dur);
  border-radius: 2px;
}

.mobile-top-bar__btn-toggle-side-bar > div:nth-child(2) {
  top: 40%;
}

.mobile-top-bar__btn-toggle-side-bar > div:nth-child(3) {
  top: 80%;
}

/* 모바일 탑바 끝*/

/* 모바일 사이드 바 시작 */
.mobile-side-bar{
  position:fixed;
  top:0;
  left:-100%;
  width:70%;
  bottom:0%;
  background-color:white;
  transition:left .3s;
  display:flex;
  padding-bottom:56px;
}

.mobile-side-bar.active{
  left:0;
}
</style>

<style scoped>

</style> 