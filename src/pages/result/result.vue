<template>
  <div class="root">
    <div class="home">
      <div class="main">
        <Header></Header>
        <Menu></Menu>
        <div class="container">
          <div class="top">
            <span>Result</span>
            <div class="oprate-wrap"><div class="email">
                <el-input
                  size="mini"
                  placeholder="Enter E-Mail"
                  v-model="input"
                  clearable>
                </el-input>
              </div>
              <span class="oprate-btn">Send</span>
              <span class="oprate-btn">Download</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import { Input, Table, TableColumn } from 'element-ui';
Vue.use(Input);
Vue.use(Table);
Vue.use(TableColumn);
export default {
  name: 'Main',
  data () {
    return {
      input: ''
    };
  },
  mounted () {

  },
  methods: {

  }
};
</script>
<style lang="scss" scoped>
@import './result.scss';
</style>
