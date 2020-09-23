<template>
    <div id="app">
        <m-header></m-header>
        <tab></tab>
        <router-view></router-view>
    </div>
</template>

<script>
    import Mheader from "./components/m-header/m-header"
    import tab from "./components/tab/tab";
    export default {
      name: 'App',
      components: {
        "m-header":Mheader,
        tab:tab
      }
    }
</script>

<style lang="stylus" scoped>
  @import "./common/stylus/variable.styl"
  #app
    color:$color-theme
</style>
