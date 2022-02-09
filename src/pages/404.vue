<template>
  <div class="content">
    <div class="text">
      网页走丢了!
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .content{
    height: 100vh;
    width: 100vw;
    color: red;
    font-size: 40px;
    overflow: hidden;
    .text{
      margin-top: 50vh;
      width: 100%;
      text-align: center;
      transform: translate(0, -50%);
    }
  }
</style>