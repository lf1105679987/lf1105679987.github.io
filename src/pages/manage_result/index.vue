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
              <span class="oprate-btn" :class="{disabled: email.trim() === ''}" @click="downLoad">Download</span>
            </div>
          </div>
          <div class="table-wrap">
            <el-table
              :data="tableData"
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
                prop="present"
                label="Typeing">
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
import {instance, API} from '../../api/api';
import { getUrlParams } from '../../utils/utils';
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
        // {
        //   text: 'EPIC',
        //   href: '#'
        // },
        {
          text: 'Submission',
          href: './manage_submission.html'
        }
        // {
        //   text: 'Result',
        //   href: '#'
        // },
        // {
        //   text: 'Cltation',
        //   href: '#'
        // },
        // {
        //   text: 'Help',
        //   href: '#'
        // }
      ],
      tableData: [],
      total: 0,
      pageSize: 20,
      userinfo: {},
      activeRow: {},
      email: ''
    };
  },
  created () {
    this.userinfo = JSON.parse(localStorage.getItem('userinfo')) || {};
    this.option = getUrlParams();
  },
  mounted () {
    this.getData();
  },
  methods: {
    downLoad () {
      if (this.email.trim() === '') {
        return false;
      }
      if (this.activeRow && this.activeRow.sampleId) {
        Message.error('暂无下载接口！');
      } else {
        Message.error('请选择要下载的结果！');
      }
    },
    sendEmail () {
      if (this.email.trim() === '') {
        return false;
      }
      if (this.activeRow && this.activeRow.sampleId) {
        instance.post(API.sendEmail, {
          email: this.email,
          sampleId: this.activeRow.sampleId
        }).then(({data}) => {
          if (data.success === 'true') {
            Message.success('发送成功！');
          } else {
            Message.error('发送失败！');
          }
        }).catch(() => {
          Message.error('异常错误,请稍后重试！');
        });
      } else {
        Message.error('请选择要发送的结果！');
      }
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
      instance.post(API.trainResult, params).then(({data = {}}) => {
        if (data.success === 'true') {
          const result = data.data || {};
          _this.total = Number(result.totalRows || 0);
          _this.tableData = result.records || [];
        } else {
          Message.error(data.msg || '异常错误，请稍后重试！');
        }
      }).catch(() => {
        Message.error('异常错误，请稍后重试！');
      });
    }
  }
};
</script>
