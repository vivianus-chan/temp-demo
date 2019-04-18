<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- 测试别名，编码 -->
    <img src="@/assets/img/ss.png" alt="img1"/>

    <!-- 引入assets动态资源,会转成base64 -->
    <img :src="code3" alt="img2"/>

    <!-- 引入assets静态资源，编码 -->
    <img src="../assets/img/ss.png" alt="img3"/>

    <!-- 引入assets动态资源,编码-->
    <img :src="code2" alt="img4"/>

    <!-- 引入static动态资源,不会自动转成base64,不编码 -->
    <img :src="code1" alt="img5"/>

    <!-- 引入static静态资源,编码 -->
    <img src="../../static/image/gg.jpeg" alt="img7"/>

    <!-- 引入static静态资源，不编码，打包后找不到地址 -->
    <img src="/static/image/gg.jpeg" alt="img8"/>
  </div>
</template>

<script>
import code2 from '@/assets/img/treecode.png'
export default {
  data () {
    return {
      msg: 'test page h',
      code1: './static/image/treecode.png',
      // code2: '../src/assets/img/treecode.png',
      code2,
      code3: require('../assets/img/treecode.png')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1{
  color: red;
}
img {
  width: 100%;
}
</style>
