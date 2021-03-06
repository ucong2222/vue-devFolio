import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import {IMember} from '../types'

// API 원형
abstract class HttpClient {
  protected readonly instance: AxiosInstance;

  public constructor(instance: AxiosInstance) {
    this.instance = instance;

    this._initializeRequestInterceptor();
    this._initializeResponseInterceptor();
  }

  private _initializeRequestInterceptor() {
    this.instance.interceptors.request.use(
      this._handleRequest,
      this._handleError,
    );
  };

  private _initializeResponseInterceptor() {
    this.instance.interceptors.response.use(
      this._handleResponse,
      this._handleError,
    );
  };

  protected _handleRequest(config:AxiosRequestConfig) : AxiosRequestConfig {
    return config;
  }

  protected _handleResponse(axiosResponse:AxiosResponse) : AxiosResponse {
    return axiosResponse;
  }

  protected _handleError(error: AxiosError) {
    if (error.response) {
      // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
      alert('요청을 처리하는 중에 오류가 발생하였습니다.');
    }
    else if (error.request) {
      // 요청이 이루어 졌으나 응답을 받지 못했습니다.
      // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
      // Node.js의 http.ClientRequest 인스턴스입니다.
      alert('서버 또는 네트워크의 상태가 좋지 않습니다.');
    }
    else {
      // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
      console.log('Error', error.message);
    }

    return Promise.reject(error);
  };

  public postByForm<T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R> {
    const params = new URLSearchParams();

    for ( let key in data ) {
      params.append(key, data[key]);
    }

    config =  {} as AxiosRequestConfig;

    config.headers = {
      'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'Accept': '*/*'
    };

    return this.instance.post(url, params, config);
  }

  public post<T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R> {
    return this.instance.post(url, data, config);
  }

  public get<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.instance.get(url, config);
  }
  
}

// 응답타입1
interface Base__IResponseBodyType1 {
  resultCode:string;
  msg:string;
  fail:boolean;
  success:boolean;
}

export interface MainApi__member_authKey__IResponseBody extends Base__IResponseBodyType1 {
  body:{
    authKey:string,
    member:IMember,
  };
}

export interface MainApi__member_doJoin__IResponseBody extends Base__IResponseBodyType1 {
  body:{
    id: number,
  };
}

// http://localhost:8046/ 와의 통신장치
export class MainApi extends HttpClient {
  public constructor() {
    super(
      axios.create({
        baseURL:'http://localhost:8046/',
      })
    );
  }

  protected _handleRequest(config:AxiosRequestConfig) {
    config.params = {};
    config.params.authKey = localStorage.getItem("authKey");
    return config;
  };

  protected _handleResponse(axiosResponse:AxiosResponse) : AxiosResponse {
    if ( axiosResponse?.data?.resultCode == "F-B" ) {
      alert('로그인 후 이용해주세요.');
      location.replace('/usr/member/login');
    }

    return axiosResponse;
  }

  public member_authKey(loginId:string, loginPw:string) {
    return this.postByForm<MainApi__member_authKey__IResponseBody>(
      `/usr/member/authKey`,
      {
        loginId,
        loginPw
      }
    );
  }

  public member_doJoin(loginId:string, loginPw:string, name:string, nickname:string, cellphoneNo:string, email:string){
    return this.postByForm<MainApi__member_doJoin__IResponseBody>(
      '/usr/member/doJoin',{
        loginId,
        loginPw,
        name,
        nickname,
        cellphoneNo,
        email
      }
    );
  }


}