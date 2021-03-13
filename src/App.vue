<template>
  <header class="top-bar h-20 px-2">
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
            <a href="#" class="flex items-center h-full px-10">
              <span>커뮤니티</span>
            </a>
            <ul class="absolute hidden w-full top-full mt-1 left-0 bg-white border-box">
              <li>
                <a href="#" class="block py-5 text-center hover-menu">
                  <span>공지사항</span>
                </a>
              </li>
              <li>
                <a href="#" class="block py-5 text-center">
                  <span>취업톡톡</span>
                </a>
              </li>
              <li>
                <a href="#" class="block py-5 text-center">
                  <span>개발톡톡</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      <div class="logouted flex items-center font-normal hidden">
        <div>
          <a href="#" class="text-gray-600 hover:text-gray-800 mr-4">로그인</a>
        </div>
        <div>
          <a href="#" class="text-gray-600 hover:text-gray-800">회원가입</a>
        </div>
      </div>

      <div class="logined flex font-normal">
        <ul class="mr-4 h-full">
          <li class="relative h-full">
            <a href="#" class="flex h-full items-center px-2">
              <span class="flex items-center mr-1 text-2xl"><i class="fas fa-user-circle"></i></span>
              <span>김유경 님</span>
            </a>
            <ul class="absolute hidden w-full top-full left-0 bg-white border-box">
              <li>
                <a href="#" class="block py-5 text-center">
                  <span>마이페이지</span>
                </a>
              </li>
              <li>
                <a href="#" class="block py-5 text-center">
                  <span>로그아웃</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>

        <div class="flex items-center">
          <a href="#" class="flex">
            <span class="flex items-center mr-1"><i class="far fa-bell"></i></span>
            <span>알림</span>
          </a>
        </div>
      </div>
    </div>
  </header>

  <main>
    <router-view></router-view>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
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

.top-bar__menu-box-1 ul > li:hover > a,
.logined ul li li:hover > a {
  color:#2E4C92;
}

@media (max-width: 880px){
  .top-bar__menu-box-1 > ul > li > a{
    padding: 0 20px;
  }
}

.top-bar__menu-box-1 > ul > li:hover > ul {
  display:block;
}

.logined > ul > li:hover > ul {
  display:block;
}
</style>

<style scoped>

</style> 