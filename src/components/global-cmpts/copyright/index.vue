<template>
  <div class="copyright-wrap">
    <div class="copyright-inner">
      <div class="line"></div>
      <span class="copyright">Copyright &copy All Rights Reserved 2019 BGI Resecrch Guangdong ICP 10059378</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'copyRight'
};
</script>
<style lang="scss" scoped>
.copyright-wrap{
  height: 30px;
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  background: #fff;
  z-index: 11111111;
  padding-bottom: 20px;
  .copyright-inner{
    height: 30px;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
  }
  .line{
    width: 100%;
    height: 1px;
    background: #ddd;
    position: absolute;
    top: 15px;
    left: 0;
    z-index: 0;
  }
  .copyright{
    background: #fff;
    padding: 0 40px;
    margin: auto;
    text-align: center;
    z-index: 10;
  }
}
</style>
