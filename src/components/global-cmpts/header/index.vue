<template>
  <div class="header-wrap">
    <div class="logo"></div>
    <div class="login-box">
      <a href="javascript:;" v-show="userinfo.userName">您好，{{userinfo.userName}}!</a>
      <a href="javascript:;" v-show="userinfo.userName" @click="loginout">退出登录</a>
      <a href="javascript:;" v-show="!userinfo.userName" @click="toLogin">请登录</a>
      <a href="javascript:;" v-show="!userinfo.userName" @click="toRegister">请注册</a>
    </div>
    <div class="login-shadow" v-show="showModal" @click.self="close">
      <div class="login-container" :class="{max: !type}">
        <div class="login-wrap">
          <div class="title">
            {{ type ? '请登录' : '请注册'}}
            <div class="close" @click="close"></div>
          </div>
          <div class="login-inner">
            <el-input placeholder="请输入用户名" v-model="userName" clearable> </el-input>
            <el-input type="password" placeholder="请输入密码" v-model="userPwd" clearable></el-input>
            <el-input v-if="!type" placeholder="请输入邮箱" v-model="userEmail" clearable> </el-input>
            <el-button type="primary" @click="submit">{{ type ? '登录' : '注册'}}</el-button>
            <div class="footer-wrap">
              <span @click="changeType">{{type ? '立即注册' : '返回登录'}}</span>
              <!-- <span>忘记密码?</span> -->
            </div>
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
      showModal: false,
      type: true,
      userName: '',
      userPwd: '',
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
    loginout () {
      localStorage.removeItem('userinfo');
      this.userinfo = {};
    },
    toRegister () {
      this.showModal = true;
      this.type = false;
    },
    toLogin () {
      this.showModal = true;
      this.type = true;
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
      this.type = !this.type;
    },
    submit () {
      var me = this;
      let params = {
        userName: me.userName || '',
        password: me.userPwd || ''
      };
      if (!params.userName.trim()) {
        return Message.error('请输入用户名');
      }
      if (!params.password.trim()) {
        return Message.error('请输入密码');
      }
      if (me.type) {
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
      } else {
        // 注册
        params.email = me.userEmail || '';
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
        height: 300px;
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
