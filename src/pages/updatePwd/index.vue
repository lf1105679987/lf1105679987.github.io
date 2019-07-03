<template>
  <div class="wrap">
    <div class="box">
      <div class="inner">
        <el-input type="password" placeholder="请输入新密码" v-model="userPwd" clearable></el-input>
        <el-input type="password" placeholder="请再次输入新密码" v-model="userPwds" clearable></el-input>
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
import {getUrlParams} from '../../utils/utils';
import { setTimeout } from 'timers';
Vue.use(Input);
Vue.use(Button);
export default {
  name: 'Main',
  data () {
    return {
      userPwd: '',
      userPwds: '',
      option: {}
    };
  },
  created () {
    this.option = getUrlParams();
  },
  methods: {
    submit () {
      const me = this;
      if (!me.userPwd.trim()) {
        return Message.error('请输入新密码！');
      }
      if (!me.userPwds.trim()) {
        return Message.error('请再次输入新密码！');
      }
      if (me.userPwd !== me.userPwds) {
        return Message.error('两次输入密码不一致！');
      }
      instance.post(API.updatePwd, {
        userId: me.option.userId,
        password: me.userPwd,
        identifier: me.option.identifier
      }).then(({data = {}}) => {
        if (data.success === 'true') {
          Message.success('修改成功！');
          setTimeout(() => {
            window.close();
          }, 1000);
        } else {
          Message.error(data.msg || '修改失败！');
        }
      }).catch(() => {
        Message.error('异常错误，请稍后重试！');
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
    height: 170px;
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
