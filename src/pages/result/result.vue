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
          <div class="table-wrap">
            <el-table
              maxHeight="450"
              :data="tableData"
              border
              style="width: 100%">
              <el-table-column
                align="center"
                prop="polypeptide"
                label="Polypeptide">
              </el-table-column>
              <el-table-column
                align="center"
                prop="typeing"
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
                :page-sizes="[100, 200, 300, 400]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="400">
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
import Vue from 'vue';
import { Input, Table, TableColumn, Pagination } from 'element-ui';
Vue.use(Input);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Pagination);
export default {
  name: 'Main',
  data () {
    return {
      input: '',
      currentPage: 1,
      tableData: [
        {
          polypeptide: 'Polypeptide',
          typeing: 'typeing',
          score: 'Score'
        },
        {
          polypeptide: 'Polypeptide',
          typeing: 'typeing',
          score: 'Score'
        },
        {
          polypeptide: 'Polypeptide',
          typeing: 'typeing',
          score: 'Score'
        },
        {
          polypeptide: 'Polypeptide',
          typeing: 'typeing',
          score: 'Score'
        },
        {
          polypeptide: 'Polypeptide',
          typeing: 'typeing',
          score: 'Score'
        },
        {
          polypeptide: 'Polypeptide',
          typeing: 'typeing',
          score: 'Score'
        },
        {
          polypeptide: 'Polypeptide',
          typeing: 'typeing',
          score: 'Score'
        },
        {
          polypeptide: 'Polypeptide',
          typeing: 'typeing',
          score: 'Score'
        },
        {
          polypeptide: 'Polypeptide',
          typeing: 'typeing',
          score: 'Score'
        },
        {
          polypeptide: 'Polypeptide',
          typeing: 'typeing',
          score: 'Score'
        },
        {
          polypeptide: 'Polypeptide',
          typeing: 'typeing',
          score: 'Score'
        },
        {
          polypeptide: 'Polypeptide',
          typeing: 'typeing',
          score: 'Score'
        },
        {
          polypeptide: 'Polypeptide',
          typeing: 'typeing',
          score: 'Score'
        },
        {
          polypeptide: 'Polypeptide',
          typeing: 'typeing',
          score: 'Score'
        },
        {
          polypeptide: 'Polypeptide',
          typeing: 'typeing',
          score: 'Score'
        }
      ]
    };
  },
  mounted () {

  },
  methods: {
    handleSizeChange () {

    },
    handleCurrentChange () {

    }
  }
};
</script>
<style lang="scss">
@import './result.scss';
</style>
