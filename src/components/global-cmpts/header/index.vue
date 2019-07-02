<template>
  <div class="header-wrap">
    <div class="logo"></div>
    <div class="login-box">
      <a href="./user_center.html" v-show="userinfo.userName">用户中心</a>
      <a href="javascript:;" v-show="userinfo.userName">您好，{{userinfo.userName}}!</a>
      <a href="javascript:;" v-show="userinfo.userName" @click="loginout">退出登录</a>
      <a href="javascript:;" v-show="!userinfo.userName" @click="toLogin">请登录</a>
      <a href="javascript:;" v-show="!userinfo.userName" @click="toRegister">请注册</a>
    </div>
    <div class="login-shadow" v-show="showModal" @click.self="close">
      <div class="login-container" :class="{max: type === 'register',min: type === 'forgetPwd'}">
        <div class="login-wrap">
          <div class="title">
            {{type === 'login' ? '请登录' : type === 'register' ? '请注册' : '发送电子邮件'}}
            <div class="close" @click="close"></div>
          </div>
          <div class="login-inner">
            <template v-if="type === 'login'">
              <el-input placeholder="请输入用户名" v-model="userName" clearable> </el-input>
              <el-input type="password" placeholder="请输入密码" v-model="userPwd" clearable></el-input>
            </template>
            <template  v-if="type === 'register'">
              <el-input placeholder="请输入用户名" v-model="userName" clearable> </el-input>
              <el-input type="password" placeholder="请输入密码" v-model="userPwd" clearable></el-input>
              <el-input type="password" placeholder="请再次输入密码" v-model="userPwds" clearable></el-input>
              <el-input placeholder="请输入邮箱" v-model="userEmail" clearable> </el-input>
            </template>
            <template v-if="type === 'forgetPwd'">
              <el-input placeholder="请输入邮箱" v-model="userEmail" clearable> </el-input>
            </template>
            <div class="footer-wrap">
              <span @click="changeType">{{type === 'login' ? '立即注册' : '返回登录'}}</span>
              <span v-if="type === 'login'" @click="forgetPwd">忘记密码?</span>
            </div>
            <el-button @click="submit" type="primary">{{type === 'login' ? '登录' : type === 'register' ? '注册' : '发送'}}</el-button>
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
    const userinfo = JSON.parse(localStorage.getItem('userinfo')) || {};
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
      var me = this;
      let params = {
        userName: me.userName || '',
        password: me.userPwd || ''
      };
      if (me.type !== 'forgetPwd') {
        if (!params.userName.trim()) {
          return Message.error('请输入用户名');
        }
        if (!params.password.trim()) {
          return Message.error('请输入密码');
        }
      }
      if (me.type === 'login') {
        // 登录
        instance.post(API.login, params).then(({data = {}}) => {
          const result = data.data || {};
          if (data.success === 'true') {
            const userinfo = {
              userName: params.userName,
              token: result.token,
              userId: result.userId
            };
            localStorage.setItem('userinfo', JSON.stringify(userinfo));
            localStorage.setItem('token', result.token);
            me.userinfo = userinfo;
            me.close();
          } else {
            Message.error(data.msg || '注册失败！');
          }
        }).catch(() => {
          Message.error('异常错误，请稍后重试！');
        });
      } else if (me.type === 'register') {
        // 注册
        params.email = me.userEmail || '';
        if (me.userPwd !== me.userPwds) {
          return Message.error('两次密码不一致，请重新输入！');
        }
        if (!params.email.trim()) {
          return Message.error('请输入注册邮箱');
        }
        instance.post(API.register, params).then(({data = {}}) => {
          if (data.success === 'true') {
            Message.success('注册成功，请登录');
            me.changeType();
          } else {
            Message.error(data.msg || '注册失败！');
          }
        }).catch(() => {
          Message.error('异常错误，请稍后重试！');
        });
      } else if (me.type === 'forgetPwd') {
        const email = me.userEmail || '';
        if (!email.trim()) {
          return Message.error('请输入邮箱');
        }
        instance.post(API.forgetPwd, {email}).then(({data = {}}) => {
          if (data.success === 'true') {
            Message.success('发送成功');
            me.changeType();
          } else {
            Message.error(data.msg || '发送失败');
          }
        }).catch(() => {
          Message.error('异常错误，请稍后重试！');
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
      width: 200px;
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
