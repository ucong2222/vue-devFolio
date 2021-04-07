<template>
  <div class="lg:flex">
    <div class="lg:w-1/2 xl:max-w-screen-sm">
      <div class="py-12 bg-white lg:bg-white flex justify-center lg:justify-start lg:px-12">
          <div class="cursor-pointer flex items-center">
            <a href="../" class="lg:hidden block logo h-full w-66">
              <div class="text-7xl text-color-1 font-semibold">DevFolio</div>
            </a>
            <div class="lg:block hidden text-xl tracking-wide ml-2 font-semibold">
              <a href="../" class="text-6xl text-color-1">DevFolio</a>
            </div>
        </div>
      </div>
      <div class="mt-8 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-8 xl:px-24 xl:max-w-2xl">
        <h2 class="text-center text-3xl text-color-1 font-display font-semibold lg:text-left xl:text-3xl xl:text-bold">JOIN</h2>
        <div class="mt-12">
          <form>
            <div>
              <div class="text-sm font-bold text-gray-700 tracking-wide">ID</div>
              <input class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-blue-900" type="text" placeholder="Enter your ID">
            </div>
            <div class="mt-8">
              <div class="text-sm font-bold text-gray-700 tracking-wide">password</div>
              <input class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-blue-900" type="password" placeholder="Enter your password">
            </div>
            <div class="mt-8">
              <div class="text-sm font-bold text-gray-700 tracking-wide">passwordConfirm</div>
              <input class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-blue-900" type="password" placeholder="Enter your passwordConfirm">
            </div>
            <div class="mt-8">
              <div class="text-sm font-bold text-gray-700 tracking-wide">name</div>
              <input class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-blue-900" type="text" placeholder="Enter your name">
            </div>
            <div class="mt-8">
              <div class="text-sm font-bold text-gray-700 tracking-wide">nickname</div>
              <input class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-blue-900" type="text" placeholder="Enter your nickname">
            </div>
            <div class="mt-8">
              <div class="text-sm font-bold text-gray-700 tracking-wide">Email Address</div>
              <input class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-blue-900" type="email" placeholder="Enter your Email Address">
            </div>
            <div class="mt-8">
              <div class="text-sm font-bold text-gray-700 tracking-wide">cellphoneNo</div>
              <input class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-blue-900" type="tel" placeholder="Enter your cellphoneNo">
            </div>

            <div class="mt-10">
              <button class="login-btn bg-main text-gray-100 p-4 w-full rounded-full tracking-wide
                                  font-semibold font-display focus:outline-none focus:shadow-outline
                                  shadow-lg">
                join
              </button>
            </div>
          </form>

          <div class="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
            SNS로 계정으로 간편하게 가입하세요..
            <div class="icon-block flex justify-center mt-8 text-4xl">
              <div class="mr-8"><a href="#" class="hover:bg-opacity-80 bg-yellow-200 w-20 h-20 block rounded-full flex justify-center items-center"><i class="fas fa-comment"></i></a></div>
              <div><a href="#" class="hover:bg-opacity-80 bg-green-600 text-white w-20 h-20 block rounded-full flex justify-center items-center"><span>N</span></a></div>
            </div>

          </div>

        </div>
      </div>
    </div>
    <div class="hidden lg:flex items-center justify-center bg-blue-100 flex-1 h-screen sticky top-0 left-0">
      <div class="max-w-md transform duration-200 hover:scale-110 cursor-pointer">
        <div class="">
          <img class="" src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FSo8Ix%2Fbtq1FA0n54L%2FeKnOyBlr436oPK3p8w9fs0%2Fimg.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MemberJoinPage',
})
</script>

<style>

</style>