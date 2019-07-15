<template>
  <div class="header-wrap">
    <div class="logo"></div>
    <div class="login-box">
      <a href="./user_center.html" v-show="userinfo.userName" style="text-decoration:underline;">User Information</a>
      <a href="javascript:;" v-show="userinfo.userName">Hello, {{userinfo.userName}}!</a>
      <a href="javascript:;" v-show="userinfo.userName" @click="loginout">Sign out</a>
      <a href="javascript:;" v-show="!userinfo.userName" @click="toLogin">Sign in</a>
      <a href="javascript:;" v-show="!userinfo.userName" @click="toRegister">Register</a>
    </div>
    <div class="login-shadow" v-show="showModal">
      <div class="login-container" :class="{max: type === 'register',min: type === 'forgetPwd'}">
        <div class="login-wrap">
          <div class="title">
            {{type === 'login' ? 'Sign in' : type === 'register' ? 'Register' : 'Send Email'}}
            <div class="close" @click="close"></div>
          </div>
          <div class="login-inner">
            <template v-if="type === 'login'">
              <el-input placeholder="Enter user name" v-model="userName" clearable> </el-input>
              <el-input type="password" placeholder="Enter user password" v-model="userPwd" clearable></el-input>
            </template>
            <template  v-if="type === 'register'">
              <el-input placeholder="Enter user name" v-model="userName" clearable> </el-input>
              <el-input type="password" placeholder="Enter user password" v-model="userPwd" clearable></el-input>
              <el-input type="password" placeholder="Enter user password again" v-model="userPwds" clearable></el-input>
              <el-input placeholder="Enter email" v-model="userEmail" clearable> </el-input>
            </template>
            <template v-if="type === 'forgetPwd'">
              <el-input placeholder="Enter email" v-model="userEmail" clearable> </el-input>
            </template>
            <div class="footer-wrap">
              <span @click="changeType">{{type === 'login' ? 'Register' : 'Sign in'}}</span>
              <span v-if="type === 'login'" @click="forgetPwd">Forget password ?</span>
            </div>
            <el-button @click="submit" type="primary">{{type === 'login' ? 'Sign in' : type === 'register' ? 'Register' : 'Send'}}</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import {
  Input,
  Button,
  Message
} from 'element-ui';
import {instance, API} from '../../../api/api';
import { CookieUtil, getUserInfo } from '../../../utils/utils';
Vue.use(Input);
Vue.use(Button);
export default {
  name: 'Header',
  data () {
    return {
      userinfo: {},
      type: 'login',
      showModal: false,
      userName: '',
      userPwd: '',
      userPwds: '',
      userEmail: ''
    };
  },
  created () {
    const me = this;
    me.$bus.$on('openLogin', (res) => {
      me.toLogin();
    });
  },
  mounted () {
    const me = this;
    const userinfo = getUserInfo();
    this.userinfo = userinfo;
    me.$nextTick(function () {
      document.addEventListener('keyup', function (e) {
        if (e.keyCode == 27) {
          me.close();
        }
      });
    });
  },
  methods: {
    forgetPwd () {
      this.type = 'forgetPwd';
    },
    loginout () {
      localStorage.removeItem('userinfo');
      CookieUtil.unset('my_token');
      CookieUtil.unset('userinfo');
      this.userinfo = {};
    },
    toRegister () {
      this.showModal = true;
      this.type = 'register';
    },
    toLogin () {
      this.showModal = true;
      this.type = 'login';
    },
    close () {
      this.userName = '';
      this.userPwd = '';
      this.userEmail = '';
      this.showModal = false;
    },
    changeType () {
      this.userName = '';
      this.userPwd = '';
      this.type = this.type === 'login' ? 'register' : 'login';
    },
    submit () {
      const me = this;
      let params = {
        userName: me.userName || '',
        password: me.userPwd || ''
      };
      if (me.type !== 'forgetPwd') {
        if (!params.userName.trim()) {
          return Message.error('Please enter user name');
        }
        if (!params.password.trim()) {
          return Message.error('Please enter user password');
        }
      }
      if (me.type === 'login') {
        // 登录
        instance.post(API.login, params).then(({data = {}}) => {
          const result = data.data || {};
          if (data.success === 'true') {
            const userinfo = {
              userName: params.userName,
              userId: result.userId,
              my_token: result.token
            };
            CookieUtil.set('my_token', result.token, result.valid - 3600 * 1000);
            CookieUtil.set('userinfo', JSON.stringify(userinfo));
            localStorage.setItem('userinfo', JSON.stringify(userinfo));
            me.userinfo = userinfo;
            me.close();
            window.location.reload();
          } else {
            Message.error(data.msg || 'failed !');
          }
        }).catch(() => {
          Message.error('System error, Please try again later!');
        });
      } else if (me.type === 'register') {
        // 注册
        params.email = me.userEmail || '';
        if (me.userPwd !== me.userPwds) {
          return Message.error('The passwords are inconsistent twice, please re-enter!');
        }
        if (!params.email.trim()) {
          return Message.error('Please enter your email address');
        }
        instance.post(API.register, params).then(({data = {}}) => {
          if (data.success === 'true') {
            Message.success('Successful !');
            me.changeType();
          } else {
            Message.error(data.msg || 'failed !');
          }
        }).catch(() => {
          Message.error('System error, Please try again later!');
        });
      } else if (me.type === 'forgetPwd') {
        const email = me.userEmail || '';
        if (!email.trim()) {
          return Message.error('Please enter your email address');
        }
        instance.post(API.forgetPwd, {email}).then(({data = {}}) => {
          if (data.success === 'true') {
            Message.success('Successful !');
            me.changeType();
          } else {
            Message.error(data.msg || 'failed !');
          }
        }).catch(() => {
          Message.error('System error, Please try again later!');
        });
      }
    }
  }
};
</script>
<style lang="scss">
  .header-wrap{
    width: 100%;
    height: 58px;
    background: #fff;
    overflow: hidden;
    .logo{
      height: 58px;
      width: 380px;
      background: url(../../../static/images/logo.jpg) no-repeat center;
      background-size: 380px 58px;
      float: left;
    }
    .login-box{
      width: 400px;
      height: 58px;
      float: right;
      line-height: 58px;
      text-align: right;
      a{
        margin-right: 10px;
        cursor: pointer;
        text-decoration: none;
      }
    }
    .login-shadow{
      width: 100%;
      height: 100%;
      position: fixed;
      background: rgba(0, 0, 0, 0.3);
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 1111;
      .login-container.max{
        height: 350px;
      }
      .login-container.min{
        height: 200px;
      }
      .login-container{
        width: 400px;
        height: 250px;
        background: #fff;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        margin: auto;
        .login-wrap{
          width: 100%;
          height: 100%;
          position: relative;
          .title{
            height: 40px;
            line-height: 40px;
            text-align: center;
            font-size: 18px;
            padding-top: 10px;
            background: #f9f9f9;
            position: relative;
            .close{
              position: absolute;
              right: 10px;
              top: 20px;
              background: url(../../../static/images/close.png) no-repeat center;
              background-size: 20px 20px;
              width: 20px;
              height: 20px;
              cursor: pointer;
            }
          }
          .login-inner{
            padding: 10px 20px;
            input{
              margin-bottom: 10px !important;
            }
            .el-button.el-button--primary{
              width: 100%;
            }
            .footer-wrap{
              padding-top: 10px;
              color: #999;
              display: flex;
              justify-content: space-between;
              line-height: 20px;
              cursor: pointer;
              span:hover{
                color: #409eff;
              }
            }
          }
        }
      }
    }
  }
</style>
