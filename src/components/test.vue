<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <img src="@/assets/img/ss.png"/>
    <img src="../assets/img/ss.png"/>
    <img :src="waterSrc" />
    <div class="test-div"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'test page h',
      waterSrc: './static/image/WechatIMG3.jpg'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  color: red;
}
img {
  width: 100%;
}
</style>
