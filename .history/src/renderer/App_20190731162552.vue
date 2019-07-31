<template>
<a-locale-provider :locale="locale">
  <div id="app">
    <header-menu v-if="$route.meta.isHeader"></header-menu>
    <router-view></router-view>
    <footer-menu  v-if="$route.meta.isFooterr"></footer-menu>
  </div>
</a-locale-provider>
</template>
<script>
 import HeaderMenu from '@/components/window/HeaderMenu'
 import FooterMenu from '@/components/window/FooterMenu'
 import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
  export default {
    name: 'my-project',
    components: { HeaderMenu,FooterMenu },
     data () {
      return {
        locale: zhCN
      }
   },
  }
</script>

<style>
  /* CSS */
  #app{
    width: 100%;
    height: 100%;
  }
  #footer-header-box{
     height: 93.5vh;
     overflow: auto;
  }
</style>
