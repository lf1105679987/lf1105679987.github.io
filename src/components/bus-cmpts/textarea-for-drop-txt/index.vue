<template>
  <div class="drop-wrap">
    <div class="oDrop" ref=oDrop>
      <textarea v-model="text" @change="outPutVal" refs="outTextarea" :placeholder="placeholder"></textarea>
    </div>
    <div class="tips" v-text="tips"></div>
  </div>
</template>
<script>
import { Message } from 'element-ui';
export default {
  name: 'TextareaForDropTxt',
  props: {
    change: {
      type: Function,
      default: () => {}
    },
    placeholder: {
      type: String,
      default: '输入或拖拽.txt文件至框内'
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
    var _this = this;
    window.onload = function () {
      document.addEventListener('dragover', function (e) {
        e.stopPropagation();
        e.preventDefault();
      }, false);

      document.addEventListener('drop', function (e) {
        e.stopPropagation();
        e.preventDefault();
      }, false);
    };
    _this.$nextTick(function () {
      var oDiv = _this.$refs.oDrop;
      oDiv.addEventListener('dragenter', function (e) {
        e.stopPropagation();
        e.preventDefault();
      }, false);

      oDiv.addEventListener('dragover', function (e) {
        e.stopPropagation();
        e.preventDefault();
      }, false);

      oDiv.addEventListener('drop', function (e) {
        e.stopPropagation();
        e.preventDefault();
        var dt = e.dataTransfer;
        var files = dt.files;
        _this.handle('filelist', files);
      }, false);
    });
  },
  methods: {
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
          };
        } else {
          Message.error('请拖入txt格式文本！');
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
    .tips{
      color: #666;
    }
  }
</style>
