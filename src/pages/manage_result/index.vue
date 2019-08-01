<template>
  <div class="root">
    <div class="home">
      <div class="main">
        <Header></Header>
        <Menu :data="menu"></Menu>
        <div class="container">
          <div class="top">
            <span>Result</span>
            <div class="oprate-wrap"><div class="email">
                <el-input
                  size="mini"
                  placeholder="Enter E-Mail"
                  v-model="email"
                  clearable>
                </el-input>
              </div>
              <span class="oprate-btn" :class="{disabled: email.trim() === ''}" @click="sendEmail">Send</span>
              <div class="oprate-btn">
                <a style="color: #fff;text-decoration: none;" :href="downloadSite">Download</a>
              </div>
            </div>
          </div>
          <div class="table-wrap">
            <el-table
              :data="tableData"
              empty-text="no data"
              @row-click="rowClick"
              highlight-current-row
              border
              style="width: 100%">
              <el-table-column
                align="center"
                prop="peptide"
                label="Polypeptide">
              </el-table-column>
              <el-table-column
                align="center"
                prop="allele"
                label="Allele">
              </el-table-column>
              <el-table-column
                align="center"
                prop="score"
                label="Score">
              </el-table-column>
            </el-table>
            <div class="pagenation-wrap">
              <el-pagination
                background
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[20, 50, 100, 200]"
                :page-size="pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total">
              </el-pagination>
            </div>
          </div>
        </div>
        <copyRight></copyRight>
      </div>
    </div>
  </div>
</template>
<script>
import {post, API} from '../../api/api';
import { getUrlParams, getUserInfo } from '../../utils/utils';
import Vue from 'vue';
import { Input, Table, TableColumn, Pagination, Message } from 'element-ui';

Vue.use(Input);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Pagination);
export default {
  name: 'Main',
  data () {
    return {
      currentPage: 1,
      menu: [
        {
          text: 'Submission',
          href: './manage_submission.html'
        }
      ],
      tableData: [],
      total: 0,
      pageSize: 20,
      userinfo: {},
      activeRow: {},
      email: '',
      downloadSite: 'javascript:;'
    };
  },
  created () {
    this.userinfo = getUserInfo();
    this.option = getUrlParams();
    this.downloadSite = buildUrl(API.downLoadResult, this.option);
  },
  mounted () {
    this.getData();
  },
  methods: {
    downLoad () {
      post(API.downLoadResult, {
        email: this.email,
        sampleId: this.option.sampleId
      }).then(({data = {}}) => {
        const blob = new Blob([data]);
        const fileName = `result${String(Math.random()).split('.')[1]}.csv`;
        if (window.navigator.msSaveOrOpenBlob) {
          window.navigator.msSaveOrOpenBlob(blob, fileName);
        } else if (window.navigator.msSaveBlob) {
          window.navigator.msSaveBlob(blob, fileName);
        } else if ('download' in document.createElement('a')) {
          const elink = document.createElement('a');
          elink.download = fileName;
          elink.style.display = 'none';
          elink.href = URL.createObjectURL(blob);
          document.body.appendChild(elink);
          elink.click();
          URL.revokeObjectURL(elink.href); // 释放URL 对象
          document.body.removeChild(elink);
        }
      });
    },
    sendEmail () {
      if (this.email.trim() === '') {
        return false;
      }
      const reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
      if (!reg.test(this.email.trim())) {
        Message.error('Incorrect email format input');
        return false;
      }
      post(API.sendEmail, {
        email: this.email,
        sampleId: this.option.sampleId
      }).then(({data}) => {
        if (data.success === 'true') {
          Message.success('Successful !');
        } else {
          Message.error('Failed !');
        }
      });
    },
    rowClick (row, event, column) {
      this.activeRow = row;
    },
    handleSizeChange (val) {
      this.pageSize = val;
      this.getData();
    },
    handleCurrentChange (val) {
      this.currentPage = val;
      this.getData();
    },
    getData () {
      const _this = this;
      const params = {
        sampleId: this.option.sampleId,
        page: this.currentPage,
        pageSize: this.pageSize
      };
      post(API.trainResult, params).then(({data = {}}) => {
        if (data.success === 'true') {
          const result = data.data || {};
          _this.total = Number(result.totalRows || 0);
          _this.tableData = result.records || [];
        } else {
          Message.error('System error, Please try again later!');
        }
      });
    }
  }
};
</script>
