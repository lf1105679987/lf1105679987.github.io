<template>
  <div class="root">
    <div class="home">
      <div class="main">
        <Header></Header>
        <Menu :data="menu"></Menu>
        <div class="container">
          <div class="top">
            <span>User Management</span>
          </div>
          <div class="table-wrap">
            <el-table
              :data="tableData"
              border
              style="width: 100%">
              <el-table-column
                align="center"
                prop="userName"
                label="UserName">
              </el-table-column>
              <el-table-column
                align="center"
                prop="email"
                label="Email">
              </el-table-column>
              <el-table-column
                align="center"
                prop="createTime"
                width="180"
                label="Createtime">
              </el-table-column>
              <el-table-column
                align="center"
                prop="lastLoginTime"
                width="180"
                label="Last Active Time">
              </el-table-column>
              <el-table-column
                align="center"
                prop="ip"
                label="IP">
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
        // {
        //   text: 'EPIC',
        //   href: '#'
        // },
        // {
        //   text: 'Submission',
        //   href: './client_index.html'
        // },
        // {
        //   text: 'Result',
        //   href: './client_result.html'
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
      userinfo: {}
    };
  },
  filters: {
    filterStatus (val) {
      const map = {
        '0': '训练中',
        '1': '成功',
        '-1': '失败'
      };
      return map[val];
    }
  },
  created () {
    this.userinfo = JSON.parse(localStorage.getItem('userinfo')) || {};
  },
  mounted () {
    this.getData();
  },
  methods: {
    LookAt (row) {
      console.log(row);
      location.href = `./manage_result.html?sampleId=${row.sampleId}`;
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
        userName: this.userinfo.userName,
        page: this.currentPage,
        pageSize: this.pageSize
      };
      instance.post(API.getUserList, params).then(({data = {}}) => {
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
