<template>
  <div class="lg:flex justify-center">
    <div class="lg:w-1/2 xl:max-w-screen-sm">
      <div class="flex-col flex items-center">
        <div class="w-2/3 justify-center">
          <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FkJZ61%2Fbtq1I7ynpus%2FO6pHkATGkQwvCw6qfbtiG0%2Fimg.png" alt="">
        </div>
        <div class="text-center font-bold text-4xl">
          DevFolio에 오신걸 환영합니다.
        </div>
      </div>
      <div class="mt-8 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-8 xl:px-24 xl:max-w-2xl">
        <h2 class="text-center text-3xl text-color-1 font-display font-semibold lg:text-left xl:text-3xl xl:text-bold">INFORMATION</h2>
        <div class="mt-12">
          <form>
            <div class="info-preferArea mb-8">
              <div class="font-bold text-xl mb-2">
                <h1>선호지역</h1>
              </div>
              <div class="grid grid-cols-3 gap-2">
                <select name="addressRegion" id="addressRegion1" class="w-full text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500">
                </select>
                
                <select name="addressDo" id="addressDo1" class="w-full text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500">
                </select>
                
                <select name="addressSiGunGu" id="addressSiGunGu1" class="w-full text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500">
                </select>
                
              </div>
            </div>
            <div class="info-technology mb-8">
              <div class="font-bold text-xl mb-2">
                <h1>기술</h1>
              </div>
              <div class="text-xl grid grid-cols-4">
              <label class="inline-flex items-center mt-3">
                  <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600"><span class="ml-2 text-gray-700">HTML</span>
              </label>
                <label class="inline-flex items-center mt-3">
                  <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600"><span class="ml-2 text-gray-700">CSS</span>
              </label>
                <label class="inline-flex items-center mt-3">
                  <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600"><span class="ml-2 text-gray-700">Python</span>
              </label>
                <label class="inline-flex items-center mt-3">
                  <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600"><span class="ml-2 text-gray-700">C</span>
              </label>
                <label class="inline-flex items-center mt-3">
                  <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600"><span class="ml-2 text-gray-700">C++</span>
              </label>
                <label class="inline-flex items-center mt-3">
                  <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600"><span class="ml-2 text-gray-700">JAVA</span>
              </label>
                <label class="inline-flex items-center mt-3">
                  <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600"><span class="ml-2 text-gray-700">리눅스</span>
              </label>
                <label class="inline-flex items-center mt-3">
                  <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600"><span class="ml-2 text-gray-700">VUE</span>
              </label>
                <label class="inline-flex items-center mt-3">
                  <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600"><span class="ml-2 text-gray-700">리엑트</span>
              </label>
                
              </div>
              <div class="text-xl">
                <label class="inline-block items-center mt-3">
                  <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600"><span class="ml-2 text-gray-700">기타</span>
              </label>
                <textarea class="mt-2 border border-gray-500 w-full" placeholder=" ex) JAVA, C, 리엑트"></textarea>
                </div>
            </div>
            <div class="info-employstatus mb-8">
              <div class="font-bold text-xl">
                <h1>취업상태</h1>
              </div>
              <div class="mt-2 text-xl">
                <label class="inline-flex items-center">
                  <input type="radio" class="form-radio text-green-500" name="radio" value="1" checked>
                  <span class="ml-2">미취업</span>
                </label>
                <label class="inline-flex items-center ml-2">
                  <input type="radio" class="form-radio" name="radio" value="1">
                  <span class="ml-2">취업</span>
                </label>
              </div>
            </div>
            <div class="info-career">
              <div class="font-bold text-xl">
                <h1>경력</h1>
              </div>
              <div class="mt-2">
                <select class="block lg:w-48 w-32 text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="animals">
                  <option value="front-end">
                    신입
                  </option>
                  <option value="back-end">
                    1년
                  </option>
                  <option value="back-end">
                    2년
                  </option>
                  <option value="back-end">
                    3년
                  </option>
                  <option value="back-end">
                    4년
                  </option>
                  <option value="back-end">
                    5년 이상
                  </option>
                </select>
              </div>

            </div>

            <div class="mt-10">
              <button class="login-btn bg-main text-gray-100 p-4 w-full rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline shadow-lg">등록
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'RecruitPage',
})
</script>

<style>

</style>