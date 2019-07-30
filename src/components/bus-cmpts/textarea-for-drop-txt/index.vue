<template>
  <div class="drop-wrap">
    <div class="oDrop" ref=oDrop>
      <textarea v-model="text" @change="outPutVal" refs="outTextarea" :placeholder="placeholder"></textarea>
    </div>
    <div class="box">
      <el-upload
        class="uploadWrap"
        action="/"
        :before-upload="beforUpload"
        :limit="1"
      >
        <el-button size="mini" icon="el-icon-upload2">upload</el-button>
      </el-upload>
      <el-popover
        placement="top-start"
        title=""
        width="200"
        trigger="hover"
        :content="tips">
        <span slot="reference" class="tips">
          <a href="javascript:;">example</a>
          <i class="el-icon-question"></i>
        </span>
      </el-popover>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import { Message, Button, Upload, Popover } from 'element-ui';
Vue.use(Button);
Vue.use(Upload);
Vue.use(Popover);
export default {
  name: 'TextareaForDropTxt',
  props: {
    change: {
      type: Function,
      default: () => {}
    },
    placeholder: {
      type: String,
      default: ''
    },
    tips: {
      type: String,
      default: 'some tips'
    }
  },
  data () {
    return {
      text: ''
    };
  },
  created () {
    this.$bus.$on('clearInput', res => {
      this.text = '';
    });
  },
  mounted () {
    // var _this = this;
    // window.onload = function () {
    //   document.addEventListener('dragover', function (e) {
    //     e.stopPropagation();
    //     e.preventDefault();
    //   }, false);

    //   document.addEventListener('drop', function (e) {
    //     e.stopPropagation();
    //     e.preventDefault();
    //   }, false);
    // };
    // _this.$nextTick(function () {
    //   var oDiv = _this.$refs.oDrop;
    //   oDiv.addEventListener('dragenter', function (e) {
    //     e.stopPropagation();
    //     e.preventDefault();
    //   }, false);

    //   oDiv.addEventListener('dragover', function (e) {
    //     e.stopPropagation();
    //     e.preventDefault();
    //   }, false);

    //   oDiv.addEventListener('drop', function (e) {
    //     e.stopPropagation();
    //     e.preventDefault();
    //     var dt = e.dataTransfer;
    //     var files = dt.files;
    //     _this.handle('filelist', files);
    //   }, false);
    // });
  },
  methods: {
    beforUpload (file) {
      const name = file.name;
      const index1 = name.lastIndexOf('.');
      const index2 = name.length;
      const suffix = name.substring(index1 + 1, index2);
      if (suffix !== 'txt') {
        Message.error('Please upload a txt file');
      } else {
        this.handle('filelist', [file]);
      }
      return false;
    },
    handle (type, data) {
      var _this = this;
      if (data && data.length) {
        const file = data[0];
        const index = file.name.lastIndexOf('.');
        const fileNameLength = file.name.length;
        const suffix = file.name.substring(index + 1, fileNameLength);
        if (suffix === 'txt') {
          var reader = new FileReader();
          reader.readAsText(data[0]);
          reader.onload = function (e) {
            _this.text = e.target.result;
            _this.outPutVal();
          };
        } else {
          Message.error('Please upload a txt file');
        }
      }
    },
    outPutVal () {
      this.change(this.text);
    }
  }
};
</script>
<style lang="scss" scoped>
  .drop-wrap{
    width: 360px;
    height: auto;
    .oDrop{
      width: 360px;
      height: 90px;
      textarea{
        resize: none;
        width: 100%;
        height: 100%;
        border: 1px solid #ddd;
        padding: 5px;
        box-sizing: border-box;
      }
    }

    .box{
      margin-top: 5px;
      display: flex;
      .uploadWrap{
        margin-right: 5px;
      }
    }
    .tips{
      color: #666;
      word-break: break-all;
      word-wrap: break-word;
    }
  }
</style>
