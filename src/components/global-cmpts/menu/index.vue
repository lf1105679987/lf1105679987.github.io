<template>
  <div class="menu-wrap">
    <div v-for="(item, index) in data" :key="index" class="menu-item">
      <a :href="item.href">{{item.text}}</a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Menu',
  props: {
    data: {
      type: Array,
      default () {
        return [
          {
            text: 'EPIP',
            href: '#EPIP'
          },
          {
            text: 'Submission',
            href: '#Submission'
          },
          {
            text: 'Result',
            href: '#Result'
          },
          {
            text: 'Cltation',
            href: '#Cltation'
          },
          {
            text: 'Help',
            href: '#Help'
          }
        ];
      }
    }
  }
};
</script>
<style lang="scss" scoped>
  .menu-wrap{
    height: 36px;
    width: 100%;
    background: $color_1;
    color: #fff;
    font-weight: bold;
    display: flex;
    justify-content: flex-start;
    line-height: 36px;
    padding-left: 20px;
    box-sizing: border-box;
    .menu-item{
      padding: 0 20px;
      a{
        color: #fff;
        text-decoration: none;
      }
    }
  }
</style>
