<template>
  <div class="root">
    <div class="home">
      <div class="main">
        <Header></Header>
        <Menu></Menu>
        <div class="container">
          <div class="top">
            <span>Result</span>
          </div>
          <div class="table-wrap">
            <el-table
              maxHeight="450"
              :data="tableData"
              border
              style="width: 100%">
              <el-table-column
                align="center"
                prop="ip"
                label="IP">
              </el-table-column>
              <el-table-column
                align="center"
                prop="typeing"
                label="Typeing">
              </el-table-column>
              <el-table-column
                align="center"
                prop="peptid_length"
                label="Peptide length">
              </el-table-column>
              <el-table-column
                align="center"
                prop="detail"
                label="Detail">
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
          ip: '10.5.22.54',
          typeing: 'HLA-A0101(A01)',
          peptid_length: '10 mer peptides',
          detail: 'More'
        },
        {
          ip: '10.5.22.54',
          typeing: 'HLA-A0101(A01)',
          peptid_length: '10 mer peptides',
          detail: 'More'
        },
        {
          ip: '10.5.22.54',
          typeing: 'HLA-A0101(A01)',
          peptid_length: '10 mer peptides',
          detail: 'More'
        },
        {
          ip: '10.5.22.54',
          typeing: 'HLA-A0101(A01)',
          peptid_length: '10 mer peptides',
          detail: 'More'
        },
        {
          ip: '10.5.22.54',
          typeing: 'HLA-A0101(A01)',
          peptid_length: '10 mer peptides',
          detail: 'More'
        },
        {
          ip: '10.5.22.54',
          typeing: 'HLA-A0101(A01)',
          peptid_length: '10 mer peptides',
          detail: 'More'
        },
        {
          ip: '10.5.22.54',
          typeing: 'HLA-A0101(A01)',
          peptid_length: '10 mer peptides',
          detail: 'More'
        },
        {
          ip: '10.5.22.54',
          typeing: 'HLA-A0101(A01)',
          peptid_length: '10 mer peptides',
          detail: 'More'
        },
        {
          ip: '10.5.22.54',
          typeing: 'HLA-A0101(A01)',
          peptid_length: '10 mer peptides',
          detail: 'More'
        },
        {
          ip: '10.5.22.54',
          typeing: 'HLA-A0101(A01)',
          peptid_length: '10 mer peptides',
          detail: 'More'
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
@import './index.scss';
</style>
