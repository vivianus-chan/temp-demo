<template>
  <div id="app">
    <transition name="slide-fade">
      <!-- <router-view v-wechat-title="$route.meta.title" img-set="/static/logo.png"/> -->
      <router-view v-wechat-title="$route.meta.title" img-set="/static/logo.png"/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: _ => ({
  }),
  created () {
    // 初始化登录状态
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
