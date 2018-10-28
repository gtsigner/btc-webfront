import axios from 'axios';
import qs from 'qs';
import Config from '../config';
import router from '../router';
import Cookie from 'js-cookie';
import store from '../store/index';

const ACCESS_TOKEN_COOKIE_NAME = 'access_token';
const configs = {
  baseURL: Config.API_HOST + Config.API_BASE,
  version: 'v1',
  uploadURL: Config.API_HOST + 'uploads'
};

const instance = axios.create({
  baseURL: configs.baseURL,
  timeout: 5000,
  withCredentials: false,
  /*Http Header*/
  headers: {}
});

//加入Token在Request拦截器中
instance.interceptors.request.use(config => {
  const accessToken = Cookie.get('access_token') || store.state.accessToken;
  if (null !== accessToken) {
    config.headers['Authorization'] = 'Bearer ' + localStorage.getItem(ACCESS_TOKEN_COOKIE_NAME);
  }
  return config;
});

// http response 拦截器,标准的restful请求
instance.interceptors.response.use(
  response => {
    const res = {
      data: response.data,
      status: 200
    };
    res.ok = response.data.code !== codes.Fail;
    return res;
  },
  error => {
    const res = {
      ...error.response.data,
      ok: false,
      error_msg: '访问服务器失败',
      status: 500
    };
    if (!error.response) {
      res.status = 500;
      res.error_msg = 'API服务器访问失败';
    } else {
      const data = error.response.data;
      res.status = error.response.status;
      res.error_msg = data.message || 'API服务器访问失败';
    }
    switch (res.status) {
      case 401:
        //如果不是首页等页面，就需要直接跳转到授权页面
        const name = router.currentRoute.name;
        console.log(name, name.indexOf('passport'));
        if (name.indexOf('passport') === -1) {
          router.push({ name: 'passport-login' });
        }
        break;
      case 400:
        //错误
        break;
    }
    return Promise.resolve(res);
  }
);

export const http = instance;
export const QueryString = qs;
export const codes = {
  Success: 1001,
  Fail: 1004
};

export const config = configs;
