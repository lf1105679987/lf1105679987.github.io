<template>
  <div class="wrap">
    <div class="box">
      <div class="inner">
        <!-- <el-input placeholder="请输入用户名" v-model="userName" clearable> </el-input> -->
        <el-input type="password" placeholder="请输入新密码" v-model="userPwd" clearable></el-input>
        <el-input type="password" placeholder="请再次输入新密码" v-model="userPwds" clearable></el-input>
        <el-input placeholder="请输入邮箱" v-model="userEmail" clearable> </el-input>
        <el-button @click="submit" type="primary">提交修改</el-button>
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
import {instance, API} from '../../api/api';
import { setTimeout } from 'timers';
import { getUserInfo } from '../../utils/utils';
Vue.use(Input);
Vue.use(Button);
export default {
  name: 'Main',
  data () {
    return {
      // userName: '',
      userPwd: '',
      userPwds: '',
      userEmail: '',
      userinfo: {}
    };
  },
  created () {
    this.userinfo = getUserInfo();
  },
  methods: {
    submit () {
      const me = this;
      // if (!me.userName.trim()) {
      //   return Message.error('请输入用户名！');
      // }
      if (!me.userPwd.trim()) {
        return Message.error('请输入密码！');
      }
      if (!me.userPwds.trim()) {
        return Message.error('请再次输入密码！');
      }
      if (me.userPwd !== me.userPwds) {
        return Message.error('两次输入密码不一致！');
      }
      if (!me.userEmail.trim()) {
        return Message.error('请输入邮箱！');
      }
      instance.post(API.updateUser, {
        userId: me.userinfo.userId,
        // userName: me.userName,
        password: me.userPwd,
        email: me.userEmail
      }).then(({data = {}}) => {
        if (data.success === 'true') {
          Message.success('Successful !');
          const newUserinfo = {
            userId: me.userinfo.userId,
            userName: me.userinfo.userName,
            token: me.userinfo.token,
            email: me.userEmail
          };
          localStorage.setItem('userinfo', JSON.stringify(newUserinfo));
          setTimeout(() => {
            window.history.back();
          }, 1000);
        } else {
          Message.error(data.msg || 'Failed !');
        }
      }).catch(() => {
        Message.error('System error, Please try again later!');
      });
    }
  }
};
</script>
<style lang="scss">
.wrap{
  width: 100%;
  height: 100%;
  position: relative;
  background: #f9f9f9;
  .box{
    width: 400px;
    height: 270px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 5px 10px #c5cbd5;
    .inner{
      padding: 10px 20px;
      position: relative;
      .el-input__inner{
        margin-bottom: 10px !important;
      }
      .el-button{
        width: 100%;
      }
    }
  }
}
</style>
