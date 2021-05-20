<template>
  <div class="lg:flex">
    <div class="lg:w-1/2 xl:max-w-screen-sm">
      <div class="py-12 bg-white lg:bg-white flex justify-center lg:justify-start lg:px-12">
        <div class="cursor-pointer flex items-center">
          <a href="../" class="lg:hidden block logo h-full w-66">
            <div class="text-7xl text-color-1 font-semibold">DevFolio</div>
          </a>
          <div class="lg:block hidden text-xl tracking-wide ml-2 font-semibold">
            <div>개발자들을 위한</div>
            <div>개발자들에 의한</div>
            <a href="../" class="text-6xl text-color-1">DevFolio</a>
          </div>
        </div>
      </div>
      <div class="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
        <h2 class="text-center text-3xl text-color-1 font-display font-semibold lg:text-left xl:text-3xl
                      xl:text-bold">LOGIN</h2>
        <div class="mt-12">
          <form v-on:submit.prevent="checkAndLogin">
            <div>
              <div class="text-sm font-bold text-gray-700 tracking-wide">ID</div>
              <input ref="loginIdElRef" class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-blue-900" type="text" placeholder="Enter your ID">
            </div>
            <div class="mt-8">
              <div class="flex justify-between items-center">
                <div class="text-sm font-bold text-gray-700 tracking-wide">
                  Password
                </div>
                <div>
                  <a class="text-xs font-display font-semibold text-main hover:text-blue-800
                                          cursor-pointer">
                    Forgot Password?
                  </a>
                </div>
              </div>
              <input ref="loginPwElRef" class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-blue-900" type="password" placeholder="Enter your password">
            </div>
            <div class="mt-10">
              <button type="submit" class="login-btn bg-main text-gray-100 p-4 w-full rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline shadow-lg">
                LOGIN
              </button>
            </div>
          </form>

          <div class="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
            SNS로 계정으로 간편하게 시작하세요.
            <div class="icon-block flex justify-center mt-8 text-4xl">
              <div class="mr-8"><a href="#" class="hover:bg-opacity-80 bg-yellow-200 w-20 h-20 block rounded-full flex justify-center items-center"><i class="fas fa-comment"></i></a></div>
              <div><a href="#" class="hover:bg-opacity-80 bg-green-600 text-white w-20 h-20 block rounded-full flex justify-center items-center"><span>N</span></a></div>
            </div>

          </div>

          <div class="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
            Don't have an account ? <a class="cursor-pointer text-main hover:text-bleu-900">Sign up</a>
          </div>
        </div>
      </div>
    </div>

    <div class="hidden lg:flex items-center justify-center bg-blue-100  flex-1 h-screen sticky top-0 left-0">
      <div class="max-w-md transform duration-200 hover:scale-110 cursor-pointer">
        <div class="">
          <img class="" src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FzteFU%2Fbtq1C0Z4ssZ%2FvuQHfBIUbpQEJMQJDWkZ51%2Fimg.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, getCurrentInstance } from 'vue'
import { MainApi } from '../apis/'
import { Router } from 'vue-router';

export default defineComponent({
  name: 'MemberLoginPage',
  props: {
    globalShare:{
      type: Object,
      required: true
    },
  },
  setup(props){
    const router:Router = getCurrentInstance()?.appContext.config.globalProperties.$router;
    const mainApi:MainApi = getCurrentInstance()?.appContext.config.globalProperties.$mainApi;
    const loginIdElRef = ref<HTMLInputElement>();
    const loginPwElRef = ref<HTMLInputElement>();

    function checkAndLogin(){
      if (loginIdElRef.value == null){
        return;
      }

      const loginIdEl = loginIdElRef.value;

      loginIdEl.value = loginIdEl.value.trim();

      if ( loginIdEl.value.length == 0 ){
        alert('로그인 아이디를 입력해주세요.');
        loginIdEl.focus();

        return;
      }

      if (loginPwElRef.value == null){
        return;
      }

      const loginPwEl = loginPwElRef.value;
      
      loginPwEl.value = loginPwEl.value.trim();
      
        if ( loginPwEl.value.length == 0 ) {
          alert('로그인 비번을 입력해주세요.');
          loginPwEl.focus();

          return;
        }

        login(loginIdEl.value, loginPwEl.value);
      }

    function login(loginId:string, loginPw:string){
      mainApi.member_authKey(loginId, loginPw)
      .then(axiosResponse => {

        alert(axiosResponse.data.msg);
        
        if ( axiosResponse.data.fail ) {
          return;
        }

        const authKey = axiosResponse.data.body.authKey;
        const loginedMember = axiosResponse.data.body.member;

        localStorage.setItem("authKey", authKey);
        localStorage.setItem("loginedMemberId", loginedMember.id + "");
        localStorage.setItem("loginedMemberName", loginedMember.name);
        localStorage.setItem("loginedMemberNickname", loginedMember.nickname);
        
        props.globalShare.loginedMember = {
          authKey,
          id:loginedMember.id,
          name:loginedMember.name,
          nicknam:loginedMember.nickname,
        };

        location.replace('/');

      });
    }

    return {
      checkAndLogin,
      loginIdElRef,
      loginPwElRef
    }   

  }
})
</script>

<style>

</style>