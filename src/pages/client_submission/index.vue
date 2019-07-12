<template>
  <div class="root">
    <div class="home">
      <div class="main">
        <Header></Header>
        <Menu :data="menu"></Menu>
        <div class="container">
          <div class="top">
            <span>Submission</span>
            <!-- <div class="oprate-wrap"><div class="email">
                <el-input
                  size="mini"
                  placeholder="Enter E-Mail"
                  v-model="email"
                  clearable>
                </el-input>
              </div>
              <span class="oprate-btn" :class="{disabled: email.trim() === ''}" @click="sendEmail">Send</span>
              <span class="oprate-btn" :class="{disabled: email.trim() === ''}" @click="downLoad">Download</span>
            </div> -->
          </div>
          <div class="table-wrap">
            <el-table
              :data="tableData"
              highlight-current-row
              border
              style="width: 100%">
              <el-table-column
                align="center"
                prop="sampleName"
                label="SampleName">
              </el-table-column>
              <el-table-column
                align="center"
                prop="allele"
                label="Allele">
              </el-table-column>
              <el-table-column
                align="center"
                label="Length">
                <template slot-scope="scope">
                  <span>{{scope.row.length}} mer peptides</span>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                label="Status">
                <template slot-scope="scope">
                  <span>{{scope.row.status | filterStatus}}</span>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                 prop="createTime"
                label="Createtime">
              </el-table-column>
              <el-table-column
                align="center"
                width="100"
                label="Detail">
                <template slot-scope="scope">
                  <el-button v-if="scope.row.status === '1'" @click="LookAt(scope.row)" type="text">detail</el-button>
                </template>
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
import Vue from 'vue';
import { Input, Table, TableColumn, Pagination, Message, Button } from 'element-ui';
import { getUserInfo } from '../../utils/utils';
Vue.use(Input);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Pagination);
Vue.use(Button);
export default {
  name: 'Main',
  data () {
    return {
      currentPage: 1,
      menu: [
        {
          text: 'EPIC',
          href: './client_index.html#EPIC'
        },
        {
          text: 'Submission',
          href: 'javascript:;'
        },
        // {
        //   text: 'Result',
        //   href: './client_result.html'
        // },
        {
          text: 'Citation',
          href: './client_index.html#Citation'
        },
        {
          text: 'Help',
          href: './client_index.html#Help'
        }
      ],
      tableData: [],
      total: 0,
      pageSize: 20,
      userinfo: {}
    };
  },
  filters: {
    filterStatus (val) {
      const map = {
        '0': 'processing',
        '1': 'success',
        '-1': 'failed'
      };
      return map[val];
    }
  },
  created () {
    this.userinfo = getUserInfo();
  },
  mounted () {
    this.getData();
  },
  methods: {
    LookAt (row) {
      location.href = `./client_result.html?sampleId=${row.sampleId}`;
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
        userId: this.userinfo.userId,
        page: this.currentPage,
        pageSize: this.pageSize
      };
      instance.post(API.sampleList, params).then(({data = {}}) => {
        if (data.success === 'true') {
          const result = data.data || {};
          _this.total = Number(result.totalRows || 0);
          _this.tableData = result.records || [];
        }
      }).catch(() => {
        Message.error('System error, Please try again later!');
      });
    }
  }
};
</script>
