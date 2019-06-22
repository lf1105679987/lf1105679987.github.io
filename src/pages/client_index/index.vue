<template>
  <div class="root">
    <div class="home">
      <div class="main">
        <Header></Header>
        <Menu></Menu>
        <div class="container">
          <div class="module">
            <div class="module-title" id="EPIC">
              <div class="line"></div>
              <div class="title">{{onLine.module}}</div>
            </div>
            <div class="module-content pdlr">
              <div class="online">{{onLine.context}}</div>
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
                <div class="submit" @click="Submit">Submit</div>
              </div>
            </div>
          </div>

          <div class="module">
            <div class="module-title" id="Cltation">
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
                          <a :href="item.download">Download</a>
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
              <div class="title">Design by:</div>
            </div>
            <div class="module-content pdlr">
              <div class="design-wrap">
                <a href="#">
                  <img src="./images/a1.jpg" alt="">
                </a>
                <a href="#">
                  <img src="./images/a2.jpg" alt="">
                </a>
              </div>
            </div>
          </div>

        </div>
        <copyRight></copyRight>
      </div>
    </div>
    <div class="shadow" :class="{show: showModal}" @click.stop="closeModal">
      <div class="modal-wrap" @click.stop="() => {}">
        <div class="modal-inner">
          <div class="modal-title-wrap"></div>
          <div class="modal-content-wrap">
            <div class="select-wrap">
              <div class="select-all-ele">Select Allele</div>
              <div class="m-select m-select_1">
                <el-select v-model="value_1" placeholder="请选择" @change="changeAllele">
                  <el-option
                    v-for="item in options_1"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
              <div class="m-select m-select_2">
                <el-select v-model="value_2" placeholder="请选择"  popper-class="m-select m-select_2">
                  <el-option
                    v-for="item in options_2"
                    :key="item"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </div>
              <div class="submits" @click="Submits">Submit</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import config, { getAlleleMap, peptidesMap } from './config.js';
import TextareaForDropTxt from '@/components/bus-cmpts/textarea-for-drop-txt';
import Vue from 'vue';
import { Select, Option, Button, Message } from 'element-ui';
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
      onLine: config.onLine,
      citaions: config.citaions,
      help: config.help,
      placeholder_1: '输入多肽/拖入多肽.txt文件',
      tips_1: '* 多肽数量应小于1000条',
      placeholder_2: '输入表达量/拖入表达量.txt文件',
      tips_2: '* 表达量应跟多肽数量对应',
      text1: '',
      text2: '',
      options_1: getAlleleMap(),
      options_2: [],
      value_1: '',
      value_2: ''
    };
  },
  created () {
    // const option
  },
  mounted () {
    let self = this;
    this.$nextTick(function () {
      document.addEventListener('keyup', function (e) {
      // 此处填写你的业务逻辑即可
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
      this.options_2 = peptidesMap[val];
    },
    Submit () {
      if (!this.text1.trim() || !this.text2.trim()) {
        Message.error('请输入多肽和表达量！');
        return false;
      }
      this.showModal = true;
    },
    Submits () {
      if (!this.value_1 || !this.value_2) {
        Message.error('请选择！');
        return false;
      }
      const data = {
        value_1: this.value_1,
        value_2: this.value_2,
        text1: this.text1.replace(/\n/g, '-'),
        text2: this.text2.replace(/\n/g, '-')
      };
      console.log('提交的数据', data);
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
