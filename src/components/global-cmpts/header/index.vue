<template>
  <div class="header-wrap">
    <div class="logo"></div>
  </div>
</template>
<script>
export default {
  name: 'Header'
};
</script>
<style lang="scss" scoped>
  .header-wrap{
    width: 100%;
    height: 58px;
    background: #fff;
    .logo{
      height: 58px;
      width: 380px;
      background: url(../../../static/images/logo.jpg) no-repeat center;
      background-size: 380px 58px;
    }
  }
</style>
