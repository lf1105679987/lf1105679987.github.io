<template>
  <div class="root">
    <div class="home">
      <div class="main">
        <Header></Header>
        <Menu :data="menu"></Menu>
        <div class="container">
          <div class="module">
            <div class="module-title" id="EPIC">
              <div class="line"></div>
              <div class="title">{{onLine.module}}</div>
            </div>
            <div class="module-content pdlr">
              <div class="online" v-html="onLine.context"></div>
            </div>
          </div>
          <div class="module">
            <div class="module-title" id="Submission">
              <div class="line"></div>
              <div class="title">Submission:</div>
            </div>
            <div class="module-content pdlr">
              <div class="form-wrap">
                <div class="textarea-item">
                  <TextareaForDropTxt :change="changeText1" :tips="tips_1" :placeholder="placeholder_1"></TextareaForDropTxt>
                </div>
                <div class="textarea-item">
                  <TextareaForDropTxt :change="changeText2" :tips="tips_2" :placeholder="placeholder_2"></TextareaForDropTxt>
                </div>
              </div>
              <div class="select-wrap">
                <div class="select-all-ele">Select allele and peptide length</div>
                <div class="m-select m-select_1">
                  <el-select v-model="value_1" placeholder="Please Select" @change="changeAllele">
                    <el-option
                      v-for="item in options_1"
                      :key="item.val"
                      :label="item.label"
                      :value="item.val">
                    </el-option>
                  </el-select>
                </div>
                <div class="m-select m-select_2">
                  <el-select v-model="value_2" placeholder="Please Select"  popper-class="m-select m-select_2">
                    <el-option
                      v-for="item in options_2"
                      :key="item"
                      :label="item"
                      :value="item">
                    </el-option>
                  </el-select>
                </div>
              </div>

              <div class="submit" @click="Submit">Submit</div>
            </div>
          </div>

          <div class="module">
            <div class="module-title" id="Citation">
              <div class="line"></div>
              <div class="title">{{citaions.module}}</div>
            </div>
            <div class="module-content">
              <div class="ctx-title" v-text="citaions.content.title"></div>
              <ul class="ctx-paragraph">
                <li class="circle" v-for="(item, index) in citaions.content.paragraph" :key="index">
                  <div v-for="(p, i) in item.content" :key="i" v-text="p"></div>
                  <div class="relative-wrap">
                    <span v-if="item.relative.panel" v-text="item.relative.panel"></span>
                    <a v-for="(r, j) in item.relative.hrefs" :key="j" v-text="r.text" :href="r.href"></a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div class="module">
            <div class="module-title" id="Help">
              <div class="line"></div>
              <div class="title">{{help.module}}</div>
            </div>
            <div class="module-content pdlr">
              <div class="help-wrap">
                <table class="help-tab">
                  <tbody>
                    <tr v-for="(item, index) in help.table_list" :key="index">
                      <td>
                        <div class="label">
                          <div class="circle">{{item.label}}</div>
                        </div>
                      </td>
                      <td>
                        <div class="download">
                          <a :href="item.download">Data download</a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div class="contact-wrap">{{help.contact}}</div>
              </div>
            </div>
          </div>

          <div class="module">
            <div class="module-title">
              <div class="line"></div>
              <div class="title">Supported by:</div>
            </div>
            <div class="module-content pdlr">
              <div class="design-wrap">
                <a href="http://www.genomics.cn/" target="_blank">
                  <img src="./images/a1.jpg" alt="">
                </a>
                <a href="http://genoimmune.genomics.cn/" target="_blank">
                  <img src="./images/a2.jpg" alt="">
                </a>
              </div>
            </div>
          </div>

        </div>
        <copyRight></copyRight>
      </div>
    </div>
  </div>
</template>
<script>
import config, { getAlleleMap, peptidesMap } from './config.js';
import TextareaForDropTxt from '@/components/bus-cmpts/textarea-for-drop-txt';
import Vue from 'vue';
import { Select, Option, Button, Message } from 'element-ui';
import {instance, API} from '../../api/api';
import { getUserInfo } from '../../utils/utils';
Vue.use(Select);
Vue.use(Option);
Vue.use(Button);
export default {
  name: 'Main',
  components: {
    TextareaForDropTxt
  },
  data () {
    return {
      showModal: false,
      menu: [
        {
          text: 'EPIC',
          href: '#EPIC'
        },
        {
          text: 'Submission',
          href: './client_submission.html'
        },
        // {
        //   text: 'Result',
        //   href: './client_result.html'
        // },
        {
          text: 'Citation',
          href: '#Citation'
        },
        {
          text: 'Help',
          href: '#Help'
        }
      ],
      onLine: config.onLine,
      citaions: config.citaions,
      help: config.help,
      placeholder_1: 'Input peptides/ upload peptide file (txt format)',
      tips_1: '* the number of peptides should not be more than 1000',
      placeholder_2: 'Input expression values/ upload expression file (txt format)',
      tips_2: '* the expression value should be matched to corresponding peptide.',
      text1: '',
      text2: '',
      options_1: getAlleleMap(),
      options_2: [],
      value_1: '',
      value_2: '',
      userinfo: {}
    };
  },
  created () {
    this.userinfo = getUserInfo();
  },
  mounted () {
    let self = this;
    this.$nextTick(function () {
      document.addEventListener('keyup', function (e) {
        if (e.keyCode == 27) {
          self.closeModal();
        }
      });
    });
  },
  methods: {
    changeText1 (val) {
      this.text1 = val;
    },
    changeText2 (val) {
      this.text2 = val;
    },
    changeAllele (val) {
      this.options_2 = peptidesMap[val.split('-')[1]];
    },
    Submit () {
      if (!this.userinfo.userId) {
        this.$bus.$emit('openLogin');
        return false;
      }
      if (!this.text1.trim()) {
        Message.error(this.placeholder_1);
        return false;
      }
      if (!this.text2.trim()) {
        Message.error(this.placeholder_2);
        return false;
      }
      let text1 = this.text1.replace(/\n/g, '-');
      let text2 = this.text2.replace(/\n/g, '-');
      text1 = text1.replace(/\s/g, '');
      text2 = text2.replace(/\s/g, '');
      var reg = /[a-z]|U|B|J|O|Z|X/g;
      if (reg.test(text1)) {
        Message.error('Input peptides format error, please enter again !');
        return false;
      }
      const text1List = text1.split('-').filter(item => item.length);
      const text2List = text2.split('-').filter(item => item.length);
      if (text1List.length > 1000) {
        Message.error(this.tips_1);
      }
      if (text2List.length > 1000) {
        Message.error(this.tips_2);
      }
      if (text1List.length !== text2List.length) {
        Message.error('Please ensure that the input lengths of peptides and expression are the same.');
        return false;
      }
      if (!this.value_1 || !this.value_2) {
        Message.error('please select allele and length !');
        return false;
      }
      const data = {
        userId: this.userinfo.userId,
        allele: this.value_1,
        length: this.value_2,
        polypeptides: text1List,
        exps: text2List
      };
      const _this = this;
      instance.post(API.addSample, data).then(({data = {}}) => {
        if (data.success === 'true') {
          Message.success('Successful !');
          _this.value_1 = '';
          _this.value_2 = '';
          _this.$bus.$emit('clearInput', {});
          setTimeout(() => {
            window.location.href = './client_submission.html';
          }, 1000);
        } else {
          Message.error(data.msg || 'Failed !');
        }
        _this.showModal = false;
      }).catch(() => {
        Message.error('System error, Please try again later!');
      });
    },
    Submits () {
      if (!this.value_1 || !this.value_2) {
        Message.error('Please Select !');
        return false;
      }
      const text1 = this.text1.replace(/\n/g, '-');
      const text2 = this.text2.replace(/\n/g, '-');
      const text1List = text1.split('-').filter(item => item.length);
      const text2List = text2.split('-').filter(item => item.length);
      const data = {
        userId: this.userinfo.userId,
        allele: this.value_1,
        length: this.value_2,
        polypeptides: text1List,
        exps: text2List
      };
      const _this = this;
      instance.post(API.addSample, data).then(({data = {}}) => {
        if (data.success === 'true') {
          Message.success('Successful!');
          _this.value_1 = '';
          _this.value_2 = '';
          _this.$bus.$emit('clearInput', {});
        } else {
          Message.error(data.msg || 'Failed !');
        }
        _this.showModal = false;
      }).catch(() => {
        Message.error('System error, Please try again later!');
      });
    },
    closeModal () {
      this.value_1 = '';
      this.value_2 = '';
      this.options_2 = [];
      this.showModal = false;
    }
  }
};
</script>
<style lang="scss" type="text/css">
@import './index.scss';
</style>
